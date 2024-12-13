import {} from '';

export {getRandomPositiveInteger}
export {checkStringLength}
export {getRandomArrayElement}



// Функция getRandomPositiveInteger, возвращающая случайное целое число из переданного диапазона включительно:

function getRandomPositiveInteger (a, b) {

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
// Функция checkStringLength проверяет, соответствует ли длина строки заданному значению. Вот подробное объяснение кода:
const checkStringLength = (string, length) => string.length <= length;

// функция, возвращает случайный элемент из массива (со случайным целым числом, сгенерированным
// с помощью функции getRandomPositiveInteger (a, b):
const getRandomArrayElement = (array) =>
  array[getRandomPositiveInteger(0, array.length - 1)];


checkStringLength('', 140);
