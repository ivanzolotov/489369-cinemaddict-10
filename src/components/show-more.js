import {createElement} from '../utils.js';

const createShowMoreTemplate = () => {
  return createElement(`
    <button class="films-list__show-more">Show more</button>
  `);
};

export {createShowMoreTemplate};
