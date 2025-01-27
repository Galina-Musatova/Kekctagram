const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const MAX_HASHTAG_COUNT = 5; // макс кол-во хэштегов
const MIN_HASHTAG_LENGTH = 2; // мин кол-во символов в хэштеге
const MAX_HASHTAG_LENGTH = 20; // макс
const UNVALID_SYMBOLS = /[^a-zA-Z0-9а-яА-ЯёЁ]/g; // недопустимые символы

// используем библиотеку Pristine. Сначала необходимо создать её экземпляр, передав в конструктор элемент формы, на котором необходимо производить валидацию

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__element', // элемент, на кот будут добавляться классы
  errorTextParent: 'img-upload__element', // Элемент, куда будет выводиться текст с ошибкой
  errorTextClass: 'img-upload__error', // Класс для элемента с текстом ошибки
});

// открываем поле для загрузки изображения. поле для формы редактирования изображения
const showModal = () => {
  // удаляем класс hidden у элемента .img-upload__overlay
imgUploadOverlay.classList.remove('hidden')
  // тегу body задаем класс modal-open
body.classList.add('modal-open')
  // добавляем обработчик отслеживания нажатия клавиши Esc
  document.addEventListener('keydown', onEscKeyDown);
};

// Кнопка для закрытия формы редактирования изображения

const hideModal = () => {
  // сбросим значение поля #upload-file, для этого, можно сбросить всю форму .img-upload__form с помощью метода .reset()
  imgUploadForm.reset();
  pristine.reset();
  // добавляем класс hidden у элемента .img-upload__overlay
imgUploadOverlay.classList.add('hidden')
  // у тега body удаляем класс modal-open
body.classList.removed('modal-open')
  // удаляем обработчик отслеживания нажатия клавиши Esc
  document.removeEventListener('keydown', onEscKeyDown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

//закрытие поля загрузки при нажатии Esc
function onEscKeyDown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  showModal();
};

///// 1

const startsWithHash = (string) => string[0] === '#';

const hasValidLength = (string) =>
  string.length >= MIN_HASHTAG_LENGTH && string.length <= MAX_HASHTAG_LENGTH;

const hasValidSymbols = (string) => !UNVALID_SYMBOLS.test(string.slice(1));

const isValidTag = (tag) =>
  startsWithHash(tag) && hasValidLength(tag) && hasValidSymbols(tag);

const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};
/// 2

//Валидация формы



const validateTags = (value) => {
  // проверка значения поля на соответствие требований ТЗ
  // // функция должна вернуть true либо false

  const tags = value
  .trim()
  .split(' ')
  .filter((tag) => tag.trim().length);
return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};


pristine.addValidator(
  hashtagField,
  validateTags,
  'Неправильно заполнены хэштеги'
);


const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
imgUploadForm.addEventListener('submit', onFormSubmit);


