import { createFilmsTemplate } from './components/films.js';
import { createFilmTemplate } from './components/film.js';
import { createFilmDetailsTemplate } from './components/film-details.js';
import { createMenuTemplate } from './components/menu.js';
import { createSortTemplate } from './components/sort.js';
import { createShowMoreTemplate } from './components/show-more.js';
import { createProfileRatingTemplate } from './components/profile-rating.js';

import {generateFilm, generateFilms} from './mock/film.js';

const ALL_FILMS_COUNT = 5;
const TOP_RATED_FILMS_COUNT = 2;
const MOST_COMMENTED_FILMS_COUNT = 2;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const films = generateFilms();

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderElement, createProfileRatingTemplate());
render(siteMainElement, createMenuTemplate());
render(siteMainElement, createSortTemplate());
render(siteMainElement, createFilmsTemplate());

const allFilmsContainerElement = siteMainElement.querySelector(`.films-list`);
const allFilmsElement = allFilmsContainerElement.querySelector(`.films-list__container`);

render(allFilmsContainerElement, createShowMoreTemplate());

films.slice(0, ALL_FILMS_COUNT).forEach((film) => render(allFilmsElement, createFilmTemplate(film)))

const topRatedFilmsElement = siteMainElement.querySelector(`.films-list--top-rated .films-list__container`);
films.slice(0, TOP_RATED_FILMS_COUNT).forEach((film) => render(topRatedFilmsElement, createFilmTemplate(film)))

const mostCommentedFilmsElement = siteMainElement.querySelector(`.films-list--most-commented .films-list__container`);
films.slice(0, MOST_COMMENTED_FILMS_COUNT).forEach((film) => render(mostCommentedFilmsElement, createFilmTemplate(film)))

render(document.body, createFilmDetailsTemplate(generateFilm()));
