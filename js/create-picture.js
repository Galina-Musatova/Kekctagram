import {getRandomArrayElement} from './util.js';
import {getRandomPositiveInteger} from './util.js';
import {createComment} from './create-comment.js';

export {createPicture};


// функция создает один объект с N-фотографиями
const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomPositiveInteger(15, 200),
  comments: Array.from(
    { length: getRandomPositiveInteger(0, 6) },
    (_, commentIndex) => createComment(commentIndex + 1)
  ),
});
