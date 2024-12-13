import {getRandomPositiveInteger} from './util.js';
import {getRandomArrayElement} from './util.js';
import {commentLines} from './data.js';

export {createMessage}


// Функция для генерации случайного сообщения
const createMessage = () =>
  // Создаем массив длиной от 1 до 2
  Array.from({ length: getRandomPositiveInteger(1, 2) }, () =>
    // Для каждого элемента массива выбираем случайный элемент из массива commentLines
    getRandomArrayElement(commentLines)
  ).join(' '); // Собираем элементы в строку через пробел
