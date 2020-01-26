import AbstractComponent from './abstract-component.js';
import {makeTwoDigitNumber} from '../utils/common.js';

const commentMarkup = (comment) => {
  const {emotion, description, author, date} = comment;

  const day = makeTwoDigitNumber(date.getDate());
  const month = makeTwoDigitNumber(date.getMonth());
  const year = date.getFullYear();
  const hours = makeTwoDigitNumber(date.getHours());
  const minutes = makeTwoDigitNumber(date.getMinutes());

  const formatedDate = `${year}/${month}/${day} ${hours}:${minutes}`;

  return (`
    <li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji">
      </span>
      <div>
        <p class="film-details__comment-text">${description}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${author}</span>
          <span class="film-details__comment-day">${formatedDate}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>
  `);
};

const createCommentsTemplate = (comments) => {
  const commentsMarkup = comments.map((comment) => commentMarkup(comment)).join(`\n`);
  return (`
    <ul class="film-details__comments-list">
      ${commentsMarkup}
    </ul>
  `);
};

export default class Comments extends AbstractComponent {
  constructor(comments) {
    super();

    this._comments = comments;
  }

  getTemplate() {
    return createCommentsTemplate(this._comments);
  }
}
