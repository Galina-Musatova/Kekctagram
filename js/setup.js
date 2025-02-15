import {createPicture} from './create-picture.js';
import { renderPictures } from './picture.js';
import { showAlert } from './util.js';
import { setOnFormSubmit, hideModal } from './working-with-form.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
// функция отвечает за генерацию массива объектов

const getPictures = () =>
  Array.from({ length: 25 }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

export {getPictures}




const onSendDataSuccess = () => {
  //закрыть окно формы, показать сообщение c успешной отправкой
  hideModal();
  showSuccessMessage();
};

const onSendDataError = () => {
  // показать сообщение с ошибкой
  showErrorMessage();
};

setOnFormSubmit(async (data) => {
  await sendData(onSendDataSuccess, onSendDataError, data);
});

getData(renderPictures, showAlert);
