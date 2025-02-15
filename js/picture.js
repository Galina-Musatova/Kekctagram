// picture.js - это модуль, который отвечает за отрисовку миниатюр.

import {showBigPicture} from './big-picture.js';
import './working-with-form.js';
import {getData} from './api.js';



// найдем шаблон изображения
const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
// найдем контейнер для изображений
const container = document.querySelector('.pictures');

// создаем клон шаблона и заполняем его  данными
const createPicture = (data) => {
  const { comments, description, likes, url } = data;
   // создаем клон шаблона
  const picture = pictureTemplate.cloneNode(true);
// заполняем его  данными
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;
// обработчик по клику
  picture.addEventListener('click', () => {
    showBigPicture(data);
  });
// возвращаем изображение
  return picture;
};


// главная функция, получает массив и все делает
const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment(); // добавляем фрагмент
  pictures.forEach((picture) => { // проходимся по массиву pictures
    const pictureElement = createPicture(picture); // записываем в переменную заполненные шаблоны
    fragment.append(pictureElement); // добавляем их во фрагмент
  });

  container.append(fragment); // добавляем фрагмент в контейнер
};

export {renderPictures};




// откуда взялось следущее?
const onLoadSuccess = (data) => {
  renderPictures(data);
}

const onLoadError = (error) => {
  // показать ошибку
  console.error(error)
}

getData(onLoadSuccess, onLoadError);
