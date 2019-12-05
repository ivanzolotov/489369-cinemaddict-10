'use strict';

const ALL_FILMS_COUNT = 5;
const TOP_RATED_FILMS_COUNT = 2;
const MOST_COMMENTED_FILMS_COUNT = 2;

// Вам потребуются функции для получения разметки следующих компонент:

// + Карточка фильма;
// + Кнопка «Show more»;
// + Попап(расширенная информация о фильме);

import {createFilmsTemplate} from './components/films.js';
import {createFilmTemplate} from './components/film.js';
import {createFilmDetailsTemplate} from './components/film-details.js';
import {createMenuTemplate} from './components/menu.js';
import {createSortTemplate} from './components/sort.js';
import {createShowMoreTemplate} from './components/show-more.js';
import {createProfileRatingTemplate} from './components/profile-rating.js';

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

// «Попап» отрисовываются 1 раз.

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderElement, createProfileRatingTemplate());
render(siteMainElement, createMenuTemplate());
render(siteMainElement, createSortTemplate());
render(siteMainElement, createFilmsTemplate());

const allFilmsContainerElement = siteMainElement.querySelector(`.films-list`);
const allFilmsElement = allFilmsContainerElement.querySelector(`.films-list__container`);

render(allFilmsContainerElement, createShowMoreTemplate());

for (let i = 0; i < ALL_FILMS_COUNT; i++) {
  render(allFilmsElement, createFilmTemplate());
}

const topRatedFilmsElement = siteMainElement.querySelector(`.films-list--top-rated .films-list__container`);
for (let i = 0; i < TOP_RATED_FILMS_COUNT; i++) {
  render(topRatedFilmsElement, createFilmTemplate());
}

const mostCommentedFilmsElement = siteMainElement.querySelector(`.films-list--most-commented .films-list__container`);
for (let i = 0; i < MOST_COMMENTED_FILMS_COUNT; i++) {
  render(mostCommentedFilmsElement, createFilmTemplate());
}

render(document.body, createFilmDetailsTemplate());
