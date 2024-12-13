import {createPicture} from '';


// import {} from '';

export {getPictures}

// функция отвечает за генерацию массива объектов

const getPictures = () =>
  Array.from({ length: 25 }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );
/* Или так:
function getPictures() {
  const arr = []; // создает пустой массив
  for (let i = 0; i < 25; i++) {
    const picture = createPicture(); // создает один объект с N-фотографиями
      arr.push(picture); //добавляет каждую фото в конец массива
  }
  return arr; // возвращает массив
}
*/

checkStringLength('', 140);
getPictures();
