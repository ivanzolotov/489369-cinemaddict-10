import {render} from './utils/render.js';

import MenuComponent from './components/menu.js';
import ProfileRatingComponent from './components/profile-rating.js';

import PageController from './controllers/page.js';

import {generateFilms} from './mock/film.js';
import {generateFilters} from './mock/filter.js';

const FILM_COUNT = 30;
const VIEWED_FILMS_NUMBER = 15;

const films = generateFilms(FILM_COUNT);

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
render(siteHeaderElement, new ProfileRatingComponent(VIEWED_FILMS_NUMBER), `beforeend`);
render(siteMainElement, new MenuComponent(generateFilters()), `beforeend`);

const pageController = new PageController(siteMainElement);
pageController.render(films);
