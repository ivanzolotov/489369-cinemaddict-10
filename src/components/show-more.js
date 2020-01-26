import AbstractComponent from './abstract-component.js';
import {remove} from '../utils/render.js';

const createShowMoreTemplate = () => {
  return (`
    <button class="films-list__show-more">Show more</button>
  `);
};

export default class ShowMore extends AbstractComponent {

  getTemplate() {
    return createShowMoreTemplate();
  }

  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }

  removeIfUnnesessary(showedFilms, loadedFilms) {
    if (showedFilms >= loadedFilms) {
      remove(this);
    }
  }

}
