const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const scaleImage = (value = DEFAULT_SCALE) => { //фун-я принимает один параметр value. Этот параметр по умолчанию равен DEFAULT_SCALE, если при вызове функции не передано другое значение.
  //  обновляет масштаб изображения и изменяет значение в соответствующем элементе пользовательского интерфейса.
  image.style.transform = `scale(${value / 100})`; //  изменяет стиль элемента image, применяя CSS-трансформацию scale. Значение value делится на 100, чтобы получить коэффициент масштабирования для функции scale
  scaleInput.value = `${value}%`; // устанавливает значение свойства value элемента scaleInput в строку, представляющую процентное значение
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10); // Получить текущее значение,преобраз строку в число (значение из поля, 10- система счисления)
  let newValue = currentValue - SCALE_STEP; // Вычислить новое значение
  if (newValue < MIN_SCALE) { //если новое значение < мин
    newValue = MIN_SCALE;  // то оно записывается в мин
  }
  scaleImage(newValue); //масштабирование нового значения
}

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10); // Получить текущее значение,преобраз строку в число (значение из поля, 10- система счисления)
  let newValue = currentValue + SCALE_STEP; // Вычислить новое значение
  if (newValue >= MAX_SCALE) { //если новое значение > мин
    newValue = MAX_SCALE;  // то оно записывается в мин
  }
  scaleImage(newValue); //масштабирование нового значения
};
// функциЯ сброса, которую можно будет вызвать при закрытии окна.
const resetScale = () => {
  scaleImage();
};

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

export { resetScale };





