import {getRandomArrayItem, getRandomArrayItems, getRandomDateInPast} from '../utils/common.js';

const DEFAULT_FILMS_NUMBER = 15;
const DURATION_MAXIMUM = 200;
const COMMENTS_MAXIMUM = 10;

const FILM_NAMES = [
  {original: `Das Leben der Anderen`, translated: `The Lives of Others`},
  {original: `Intouchables`, translated: `The Intouchables`},
  {original: `The Death of Stalin`},
  {original: `Whiplash`},
  {original: `The Others`},
  {original: `Monsters, Inc.`},
  {original: `Willy Wonka & the Chocolate Factory`},
  {original: `How the Ghosts Stole Christmas`},
  {original: `The Elephant Man`},
  {original: `Being John Malkovich`},
  {original: `Изображая жертву`, translated: `Playing the Victim`},
  {original: `Design for living`},
  {original: `Murder on the Orient Express`},
  {original: `Shutter Island`},
  {original: `Aladdin 2: The Return of Jafar`},
];

const POSTERS = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`,
];

const COUNTRIES = [
  `USA`,
  `Russia`,
  `Germany`,
];

const AGES = [0, 6, 12, 18];
const STAFF = [`Anne Wigton`, `Heinz Herald`, `Richard Weil`, `Erich von Stroheim`, `Mary Beth Hughes`, `Dan Duryea`, `Anthony Mann`];
const DESCRIPTIONS = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
const GENRES = [`Drama`, `Mystery`, `Comedy`, `Film-Noir`, `Horor`];

const generateFilm = () => {
  const previewPoster = getRandomArrayItem(POSTERS);
  const fullPoster = previewPoster;
  const description = getRandomArrayItems(DESCRIPTIONS.split(`. `), ~~(Math.random() * 2) + 1).join(`. `) + `.`;
  let {original: originalName, translated: translatedName} = getRandomArrayItem(FILM_NAMES);
  translatedName = translatedName ? translatedName : originalName;

  return {
    name: {
      original: originalName,
      translated: translatedName,
    },
    poster: {
      preview: previewPoster,
      full: fullPoster,
    },
    rating: (~~(Math.random() * 101) / 10).toFixed(1),
    age: getRandomArrayItem(AGES),
    staff: {
      directors: getRandomArrayItems(STAFF, 1),
      writers: getRandomArrayItems(STAFF, 3),
      actors: getRandomArrayItems(STAFF, 3),
    },
    date: getRandomDateInPast(),
    duration: ~~(Math.random() * (DURATION_MAXIMUM + 1)),
    country: getRandomArrayItem(COUNTRIES),
    genres: getRandomArrayItems(GENRES, 3),
    description: {
      short: description,
      full: description,
    },
    comments: ~~(Math.random() * (COMMENTS_MAXIMUM + 1)),
  };
};

const generateFilms = (numberOfFilms = DEFAULT_FILMS_NUMBER) => {
  const films = [];

  for (let i = 0; i < numberOfFilms; i++) {
    films.push(generateFilm());
  }

  return films;
};

export {generateFilm, generateFilms};
