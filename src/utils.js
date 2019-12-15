const getRandomBoolean = () => Math.random() < 0.5;

const getRandomArrayItem = (array) => array[~~(Math.random() * array.length)];

const getRandomArrayItems = (array, n) => {
  return array
    .filter(() => getRandomBoolean())
    .slice(0, n);
};

export {
  getRandomBoolean,
  getRandomArrayItem,
  getRandomArrayItems,
};
