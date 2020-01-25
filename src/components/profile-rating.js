import {createElement} from '../utils.js';

const createProfileRatingTemplate = (viewedFilmsNumber = 0) => {
  let rating;

  if (viewedFilmsNumber > 0) {
    rating = `Novice`;
  }

  if (viewedFilmsNumber > 10) {
    rating = `Fan`;
  }

  if (viewedFilmsNumber > 20) {
    rating = `Movie Buff`;
  }

  const ratingMarkup = rating ? `<p class="profile__rating">${rating}</p>` : ``;

  return (`
    <section class="header__profile profile">
      ${ratingMarkup}
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>
  `);
};

export default class ProfileRating {
  constructor(viewedFilmsNumber) {
    this._element = null;
    this._viewedFilmsNumber = viewedFilmsNumber;
  }

  getTemplate() {
    return createProfileRatingTemplate(this._viewedFilmsNumber);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
