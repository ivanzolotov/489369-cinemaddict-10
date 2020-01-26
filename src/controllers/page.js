import {render, remove} from '../utils/render.js';

import FilmsComponent from '../components/films.js';
import NoFilmsComponent from '../components/no-films.js';
import FilmComponent from '../components/film.js';
import FilmDetailsComponent from '../components/film-details.js';
import CommentFormComponent from '../components/comment-form.js';
import ShowMoreComponent from '../components/show-more.js';
import CommentsComponent from '../components/comments.js';

import {generateComments} from '../mock/comment.js';

const FILMS_COUNT_ON_START = 5;
const FILMS_COUNT_BY_BUTTON = 5;
const TOP_RATED_FILMS_COUNT = 2;
const MOST_COMMENTED_FILMS_COUNT = 2;

const comments = generateComments();

const renderFilm = (film, context) => {
  const filmComponent = new FilmComponent(film);
  const filmDetailsComponent = new FilmDetailsComponent(film);

  const showFilmDetails = () => {
    render(document.body, filmDetailsComponent, `beforeend`);
    const filmDetailsCommentsWrapElement = filmDetailsComponent.getElement().querySelector(`.film-details__comments-wrap`);
    render(filmDetailsCommentsWrapElement, new CommentsComponent(comments), `beforeend`);
    render(filmDetailsCommentsWrapElement, new CommentFormComponent(), `beforeend`);

    const removeFilmDetails = () => {
      remove(filmDetailsComponent);
    }

    const onCloseDetailsClick = () => {
      removeFilmDetails();
      document.removeEventListener('keydown', onEscKeyDown);
    }

    const onEscKeyDown = (event) => {
      if (event.keyCode === 27) {
        removeFilmDetails();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    filmDetailsComponent.setCloseButtonClickHandler(onCloseDetailsClick);

    document.addEventListener('keydown', onEscKeyDown);
  };

  filmComponent.setClickHandler(showFilmDetails);

  render(context, filmComponent, `beforeend`);
};

export default class PageController {
  constructor(element) {
    this._element = element;
    this._filmsComponent = new FilmsComponent();
    this._noFilmsComponent = new NoFilmsComponent();
    this._showMoreComponent = new ShowMoreComponent()
  }

  render(films) {
    // Рендеринг доски-обёртки
    if (films.length > 0) {
      render(this._element, this._filmsComponent, `beforeend`);
    } else {
      render(this._element, this._noFilmsComponent, `beforeend`);
    }
    const container = this._filmsComponent.getElement();

    // Рендеринг фильмов в основной раздел
    const allFilmsContainerElement = container.querySelector(`.films-list`);
    const allFilmsElement = allFilmsContainerElement.querySelector(`.films-list__container`);
    films.slice(0, FILMS_COUNT_ON_START).forEach((film) => {
      renderFilm(film, allFilmsElement);
    });

    // Рендеринг «Load More» в основной раздел
    render(allFilmsContainerElement, this._showMoreComponent, `beforeend`);
    let visibleFilmsCount = FILMS_COUNT_ON_START;
    this._showMoreComponent.removeIfUnnesessary(visibleFilmsCount, films.length);
    this._showMoreComponent.setClickHandler(() => {
      const currentVisibleFilmsCount = visibleFilmsCount;
      visibleFilmsCount += FILMS_COUNT_BY_BUTTON;
      films.slice(currentVisibleFilmsCount, visibleFilmsCount).forEach((film) => {
        renderFilm(film, allFilmsElement);
      });
      this._showMoreComponent.removeIfUnnesessary(visibleFilmsCount, films.length);
    });

    // Рендеринг фильмов во второй раздел
    const topRatedFilmsElement = container.querySelector(`.films-list--top-rated .films-list__container`);
    const getTopRatedFilms = (films, quantity) => {
      return films.slice().sort((a, b) => b.rating - a.rating).slice(0, quantity);
    };
    getTopRatedFilms(films, TOP_RATED_FILMS_COUNT).forEach((film) => {
      renderFilm(film, topRatedFilmsElement);
    });

    // Рендеринг фильмов в третий раздел
    const mostCommentedFilmsElement = container.querySelector(`.films-list--most-commented .films-list__container`);
    const getMostCommentedFilms = (films, quantity) => {
      return films.slice().sort((a, b) => b.comments - a.comments).slice(0, quantity);
    };
    getMostCommentedFilms(films, MOST_COMMENTED_FILMS_COUNT).forEach((film) => {
      renderFilm(film, mostCommentedFilmsElement);
    });
  }
}
