import {render} from './utils.js';

import FilmsComponent from './components/films.js';
import FilmComponent from './components/film.js';
import FilmDetailsComponent from './components/film-details.js';
import MenuComponent from './components/menu.js';
import SortComponent from './components/sort.js';
import CommentFormComponent from './components/comment-form.js';
import ProfileRatingComponent from './components/profile-rating.js';
import ShowMoreComponent from './components/show-more.js';
import CommentsComponent from './components/comments.js';

import {generateFilm, generateFilms} from './mock/film.js';
import {generateComments} from './mock/comment.js';
import {generateFilters} from './mock/filter.js';

const FILM_COUNT = 30;
const FILMS_COUNT_ON_START = 5;
const FILMS_COUNT_BY_BUTTON = 5;
const TOP_RATED_FILMS_COUNT = 2;
const MOST_COMMENTED_FILMS_COUNT = 2;

const VIEWED_FILMS_NUMBER = 15;

const getTopRatedFilms = (films, quantity) => {
  return films.slice().sort((a, b) => b.rating - a.rating).slice(0, quantity);
};

const getMostCommentedFilms = (films, quantity) => {
  return films.slice().sort((a, b) => b.comments - a.comments).slice(0, quantity);
};

const removePointlessLoadMoreButton = (loadMoreButtonElement, showedFilms, loadedFilms) => {
  if (showedFilms >= loadedFilms) {
    loadMoreButtonElement.remove();
  }
};

const films = generateFilms(FILM_COUNT);
const comments = generateComments();

const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, new ProfileRatingComponent(VIEWED_FILMS_NUMBER).getElement(), `beforeend`);

const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, new MenuComponent(generateFilters()).getElement(), `beforeend`);
render(siteMainElement, new SortComponent().getElement(), `beforeend`);
render(siteMainElement, new FilmsComponent().getElement(), `beforeend`);

const allFilmsContainerElement = siteMainElement.querySelector(`.films-list`);
render(allFilmsContainerElement, new ShowMoreComponent().getElement(), `beforeend`);

const loadMoreButtonElement = allFilmsContainerElement.querySelector(`.films-list__show-more`);
let visibleFilmsCount = FILMS_COUNT_ON_START;
removePointlessLoadMoreButton(loadMoreButtonElement, visibleFilmsCount, films.length);

const renderFilm = (film, context) => {
  const filmComponent = new FilmComponent(film);
  const filmDetailsComponent = new FilmDetailsComponent(film);

  const posterElement = filmComponent.getElement().querySelector(`.film-card__poster`);
  const titleElement = filmComponent.getElement().querySelector(`.film-card__title`);
  const commentsElement = filmComponent.getElement().querySelector(`.film-card__comments`);

  const closeButtonElement = filmDetailsComponent.getElement().querySelector(`.film-details__close-btn`);

  const showFilmDetails = () => {
    render(document.body, filmDetailsComponent.getElement(), `beforeend`);

    const removeFilmDetails = () => {
      closeButtonElement.removeEventListener('click', removeFilmDetails);
      filmDetailsComponent.getElement().parentNode.removeChild(filmDetailsComponent.getElement());
    }
    closeButtonElement.addEventListener('click', removeFilmDetails);
  };

  posterElement.addEventListener('click', showFilmDetails);
  titleElement.addEventListener('click', showFilmDetails);
  commentsElement.addEventListener('click', showFilmDetails);

  render(context, filmComponent.getElement(), `beforeend`);
}

const allFilmsElement = allFilmsContainerElement.querySelector(`.films-list__container`);
films.slice(0, FILMS_COUNT_ON_START).forEach((film) => {
  renderFilm(film, allFilmsElement);
});

loadMoreButtonElement.addEventListener(`click`, () => {
  const currentVisibleFilmsCount = visibleFilmsCount;
  visibleFilmsCount += FILMS_COUNT_BY_BUTTON;

  films.slice(currentVisibleFilmsCount, visibleFilmsCount).forEach((film) => {
    renderFilm(film, allFilmsElement);
  });

  removePointlessLoadMoreButton(loadMoreButtonElement, visibleFilmsCount, films.length);
});

const topRatedFilmsElement = siteMainElement.querySelector(`.films-list--top-rated .films-list__container`);
getTopRatedFilms(films, TOP_RATED_FILMS_COUNT).forEach((film) => {
  renderFilm(film, topRatedFilmsElement);
});

const mostCommentedFilmsElement = siteMainElement.querySelector(`.films-list--most-commented .films-list__container`);
getMostCommentedFilms(films, MOST_COMMENTED_FILMS_COUNT).forEach((film) => {
  renderFilm(film, mostCommentedFilmsElement);
});

// render(document.body, new FilmDetailsComponent(generateFilm()).getElement(), `beforeend`);
// const filmDetailsCommentsWrapElement = document.querySelector(`.film-details__comments-wrap`);
// render(filmDetailsCommentsWrapElement, new CommentsComponent(comments).getElement(), `beforeend`);
// render(filmDetailsCommentsWrapElement, new CommentFormComponent().getElement(), `beforeend`);
