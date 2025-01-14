// picture.js - это модуль, который отвечает за отрисовку миниатюр.

// найдем шаблон изображения
const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
// найдем контейнер для изображений
const container = document.querySelector('.pictures');

// создаем клон шаблона и заполняем его  данными
const createPicture = ({ comments, description, likes, url }) => {
  // создаем клон шаблона
  const picture = pictureTemplate.cloneNode(true);
// заполняем его  данными
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;
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

export { renderPictures };
