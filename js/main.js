

import {getPictures} from './setup.js';

getPictures() // генерирует массив изображений

import {renderPictures} from './picture.js';

renderPictures(getPictures()); //создает DOM-элементы на основе массива изображений и складывает их в нужное место в DOM-дереве страницы
