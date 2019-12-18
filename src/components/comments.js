import {makeTwoDigitNumber} from '../utils.js';

const createCommentsTemplate = (comments) => {
  const commentMarkup = (comment) => {
    const {emotion, description, author, date} = comment;

    const day = makeTwoDigitNumber(date.getDate());
    const month = makeTwoDigitNumber(date.getMonth());
    const year = date.getFullYear();
    const hours = makeTwoDigitNumber(date.getHours());
    const minutes = makeTwoDigitNumber(date.getMinutes());

    const formatedDate = `${year}/${month}/${day} ${hours}:${minutes}`;

    return(`
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
  }
  const commentsMarkup = comments.map((comment) => commentMarkup(comment)).join(`\n`);
  return(`
    <ul class="film-details__comments-list">
      ${commentsMarkup}
    </ul>
  `);
}

export {createCommentsTemplate};







{/* <li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji">
      </span>
      <div>
        <p class="film-details__comment-text">Interesting setting and a good cast</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">Tim Macoveev</span>
          <span class="film-details__comment-day">2019/12/31 23:59</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>
    <li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/sleeping.png" width="55" height="55" alt="emoji">
      </span>
      <div>
        <p class="film-details__comment-text">Booooooooooring</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">John Doe</span>
          <span class="film-details__comment-day">2 days ago</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>
    <li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/puke.png" width="55" height="55" alt="emoji">
      </span>
      <div>
        <p class="film-details__comment-text">Very very old. Meh</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">John Doe</span>
          <span class="film-details__comment-day">2 days ago</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>
    <li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/angry.png" width="55" height="55" alt="emoji">
      </span>
      <div>
        <p class="film-details__comment-text">Almost two hours? Seriously?</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">John Doe</span>
          <span class="film-details__comment-day">Today</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li> */}
