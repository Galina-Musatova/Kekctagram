
export {getRandomPositiveInteger}
export {checkStringLength}
export {getRandomArrayElement}
export {onEscKeyDown, showAlert}


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

// закрытие большого окна при нажатии Esc
function onEscKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
}
const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};

export {
  getRandomPositiveInteger,
  checkStringLength,
  getRandomArrayElement,
  showAlert,
};
