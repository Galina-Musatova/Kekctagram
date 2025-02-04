//// Масштабирование изображения
const image = document.querySelector('.img-upload__preview img'); // загружнное изображение
const form = document.querySelector('.img-upload__form'); // форма для загрузки нового изображения на сайт
const sliderElement = document.querySelector('.effect-level__slider');// див для слайдера для изменения глубины эффекта, накладываемого на изображение
const effectLevel = document.querySelector('.effect-level__value');

// массив для хранения пар-ров эффектов
const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const DEFAULT_EFFECT = EFFECTS[0];

let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => chosenEffect === DEFAULT_EFFECT;

// Осталось обновить слайдер, и конечно, для этого лучше создать отдельную функцию.
const updateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  if (isDefault()) {
    sliderElement.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();// дальше обновляем слайдер
};

// Для отслеживания момента изменения параметров слайдера, необходимо добавить функцию обработчик для события update.
//с функция динамически обновляет изображение в зависимости от положения слайдера, применяя выбранный эффект.

const onSliderUpdate = () => {
  image.style.filter = 'none'; // убирает фильтры
  image.className = ''; // очищает классы
  effectLevel.value = ''; // очищает значение эффекта
  if (isDefault()) { // если эффект по умолчанию
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get(); // возвращает текущее значение слайдера sliderElement
  image.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`; //Устанавливает стиль изображения в соответствии с выбранным эффектом, основанным на значении слайдера:
  image.classList.add(`effects__preview--${chosenEffect.name}`); // Добавляет соответствующий класс к изображению
  effectLevel.value = sliderValue; // Устанавливает значение уровня эффекта в значение слайдера:
};

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

// можно создать уже сам слайдер. В самом начале, достаточно будет параметров для эффекта none (Оригинал)
noUiSlider.create(sliderElement, { // создаем слайдер на элемент sliderElement с помощью noUiSlider и настройками
  range: { // ползунок
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});
updateSlider();

form.addEventListener('change', onFormChange);
sliderElement.noUiSlider.on('update', onSliderUpdate); // функция вызывается всякий раз, когда значение слайдера обновляется:

export { resetEffects };

