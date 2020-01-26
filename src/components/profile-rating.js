import AbstractComponent from './abstract-component.js';

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

export default class ProfileRating extends AbstractComponent {
  constructor(viewedFilmsNumber) {
    super();

    this._viewedFilmsNumber = viewedFilmsNumber;
  }

  getTemplate() {
    return createProfileRatingTemplate(this._viewedFilmsNumber);
  }
}
