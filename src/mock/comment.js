import {getRandomArrayItem, getRandomArrayItems, getRandomDateInPast} from '../utils.js';

const COMMENTS_NUMBER = 10;

const EMOTIONS = [
  `smile`,
  `sleeping`,
  `puke`,
  `angry`,
];

const USERS = [
  `Kimi Raikkonen`,
  `Fernando Alonso`,
  `Michael Schumacher`,
  `Robert Kubica`,
  `Max Verstappen`,
];

const DESCRIPTIONS = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const generateComment = () => {

  return {
    emotion: getRandomArrayItem(EMOTIONS),
    description: getRandomArrayItems(DESCRIPTIONS.split(`. `), ~~(Math.random() * 2) + 1).join(`. `) + `.`,
    author: getRandomArrayItem(USERS),
    date: getRandomDateInPast(5),
  };
};

const generateComments = (numberOfComments = COMMENTS_NUMBER) => {
  const comments = [];

  for (let i = 0; i < numberOfComments; i++) {
    comments.push(generateComment());
  };

  return comments;
}

export {generateComment, generateComments};
