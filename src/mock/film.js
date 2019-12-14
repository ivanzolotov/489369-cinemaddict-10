import {getRandomArrayItem} from '../utils.js';

const FILMS_NUMBER = 15;

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

const generateFilm = () => {
  let {original:originalName, translated:translatedName} = getRandomArrayItem(FILM_NAMES);
  translatedName = translatedName ? translatedName : originalName;
  const previewPoster = getRandomArrayItem(POSTERS);
  const fullPoster = previewPoster;
  const rating = (~~(Math.random() * 101) / 10).toFixed(1);

  return {
    name: {
      original: originalName,
      translated: translatedName,
    },
    poster: {
      preview: previewPoster,
      full: fullPoster,
    },
    rating,
  };
};

const generateFilms = (numberOfFilms = FILMS_NUMBER) => {
  const films = [];

  for (let i = 0; i < numberOfFilms; i++) {
    films.push(generateFilm());
  };

  return films;
}

export {generateFilm, generateFilms};
