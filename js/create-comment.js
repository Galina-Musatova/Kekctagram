import {getRandomPositiveInteger} from './util.js';
import {createMessage} from './create-message.js';
import {getRandomArrayElement} from './util.js';
import {names} from './data.js';

export {createComment};

// Функция для создания комментария
const createComment = (index) => (
  {
  // Уникальный идентификатор комментария
  id: index,
  // Генерация случайного пути к аватару из 6 доступных изображений
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  // Создание случайного сообщения с использованием отдельной функции
  message: createMessage(),
  // Получение случайного имени из массива имен
  name: getRandomArrayElement(names),
});
