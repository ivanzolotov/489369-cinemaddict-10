import {render} from './utils.js';

import {createFilmsTemplate} from './components/films.js';
import {createFilmTemplate} from './components/film.js';
import {createFilmDetailsTemplate} from './components/film-details.js';
import {createMenuTemplate} from './components/menu.js';
import {createSortTemplate} from './components/sort.js';
import {createShowMoreTemplate} from './components/show-more.js';
import {createProfileRatingTemplate} from './components/profile-rating.js';
import {createCommentFormTemplate} from './components/comment-form.js';
import {createCommentsTemplate} from './components/comments.js';

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
render(siteHeaderElement, createProfileRatingTemplate(VIEWED_FILMS_NUMBER));

const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, createMenuTemplate(generateFilters()));
render(siteMainElement, createSortTemplate());
render(siteMainElement, createFilmsTemplate());

const allFilmsContainerElement = siteMainElement.querySelector(`.films-list`);
render(allFilmsContainerElement, createShowMoreTemplate());

const loadMoreButtonElement = allFilmsContainerElement.querySelector(`.films-list__show-more`);
let visibleFilmsCount = FILMS_COUNT_ON_START;
removePointlessLoadMoreButton(loadMoreButtonElement, visibleFilmsCount, films.length);

const allFilmsElement = allFilmsContainerElement.querySelector(`.films-list__container`);
films.slice(0, FILMS_COUNT_ON_START).forEach((film) => render(allFilmsElement, createFilmTemplate(film)))

loadMoreButtonElement.addEventListener(`click`, () => {
  const currentVisibleFilmsCount = visibleFilmsCount;
  visibleFilmsCount += FILMS_COUNT_BY_BUTTON;

  films.slice(currentVisibleFilmsCount, visibleFilmsCount).forEach((film) => render(allFilmsElement, createFilmTemplate(film)));
  removePointlessLoadMoreButton(loadMoreButtonElement, visibleFilmsCount, films.length);
});

const topRatedFilmsElement = siteMainElement.querySelector(`.films-list--top-rated .films-list__container`);
getTopRatedFilms(films, TOP_RATED_FILMS_COUNT).forEach((film) => render(topRatedFilmsElement, createFilmTemplate(film)));

const mostCommentedFilmsElement = siteMainElement.querySelector(`.films-list--most-commented .films-list__container`);
getMostCommentedFilms(films, MOST_COMMENTED_FILMS_COUNT).forEach((film) => render(mostCommentedFilmsElement, createFilmTemplate(film)));

render(document.body, createFilmDetailsTemplate(generateFilm()));
const filmDetailsCommentsWrapElement = document.querySelector(`.film-details__comments-wrap`);
render(filmDetailsCommentsWrapElement, createCommentsTemplate(comments));
render(filmDetailsCommentsWrapElement, createCommentFormTemplate());
