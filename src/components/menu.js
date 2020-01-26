import AbstractComponent from './abstract-component.js';
import {capitalizeFirstLetter} from '../utils/common.js';

const createFilterMarkup = (filter, index) => {
  const hash = `#${filter.name.split(` `)[0]}`;
  const title = capitalizeFirstLetter(filter.name);
  const activeClass = (index === 0) ? `main-navigation__item--active` : ``;
  const countMarkup = (index === 0) ? `` : `<span class="main-navigation__item-count">${filter.count}</span>`;

  return (`
    <a href="${hash}" class="main-navigation__item ${activeClass}">
      ${title}
      ${countMarkup}
    </a>
  `);
};

const createMenuTemplate = (filters) => {
  const filtersMarkup = filters
    .map((filter, i) => createFilterMarkup(filter, i))
    .join(`\n`);

  return (`
    <nav class="main-navigation">
      ${filtersMarkup}
    </nav>
  `);
};

export default class Menu extends AbstractComponent {
  constructor(filters) {
    super();

    this._filters = filters;
  }

  getTemplate() {
    return createMenuTemplate(this._filters);
  }
}
