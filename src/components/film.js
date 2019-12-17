import {formatDuration} from '../utils.js';

export const createFilmTemplate = (film) => {
  const {rating, date, duration, description: {short: description}} = film;
  const translatedName = film.name.translated;
  const previewPoster = film.poster.preview;
  const year = date.getFullYear();
  const formatedDuration = formatDuration(duration);

  return (`
    <article class="film-card">
      <h3 class="film-card__title">${translatedName}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${formatedDuration}</span>
        <span class="film-card__genre">Cartoon</span>
      </p>
      <img src="/images/posters/${previewPoster}" alt="" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <a class="film-card__comments">0 comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched film-card__controls-item--active">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active">Mark as favorite</button>
      </form>
    </article>
  `);
};
