import './working-with-form.js'

const bigPicture = document.querySelector('.big-picture'); // блок с изображениями
const commentCount = document.querySelector('.social__comment-count'); // комментарии к изображению
const commentList = document.querySelector('.social__comments'); // список комментариев на одном изображении
const commentsLoader = document.querySelector('.comments-loader'); // Кнопка для загрузки новой порции комментариев
const body = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel'); //Кнопка для выхода из полноэкранного просмотра изображения
const loadMoreButton = document.querySelector('.social__comments-loader') // кнопка Загрузить еще
// Покажите блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, убрав у них класс hidden.

commentCount.classList.remove('hidden')
commentsLoader.classList.remove('hidden')
// блок выше надо доработать

let currentIndex = 0; // Индекс для отслеживания текущего элемента
const itemsPerPage = 5; // Количество комментариев для отображения за раз


// заполняем картинку данными аватара и сообщениями
const createComment = ({ avatar, name, message }) => {
  const comment = document.createElement('li'); // ищем элемент списка комментариев
  comment.innerHTML =
    '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>'; // меняем содержимое
  comment.classList.add('social__comment'); //добавляем класс
 // заполняем данными (аватар, имя, текст комментария)
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

// очищаем список комментариев на изображении
const renderComments = (comments) => {
  commentList.innerHTML = '';

// создаем фрагмент, куда будут помещаться комментарии к изображению и заполняем его случайными комменттариями:
  const fragment = document.createDocumentFragment();
  const slice = comments.slice(currentIndex, currentIndex + itemsPerPage); // Берем часть комментариев
  slice.forEach((comment) => { // проходим по массиву комментариев
    const commentElement = createComment(comment); // генерируем случайный комментарий
    fragment.append(commentElement); // добавляем комментарий во фрагмент
  });

  commentList.append(fragment); // вставляем фрагмент вместо удаленных комментариев
currentIndex += itemsPerPage; // Обновляем индекс для следующего отображения
if (currentIndex >= comments.length) {
  loadMoreButton.style.display = 'none'; // Скрываем кнопку, если комментариев больше нет
}
};

// Обработчик для кнопки "Загрузить ещё"
loadMoreButton.addEventListener('click', () => renderComments(data.comments));

// Изначально отображаем первые 5 комментариев
//***renderComments(data.comments);


// закрывает большое окно двумя способами: по нажатию клавиши Esc и по клику по иконке закрытия Х
const hideBigPicture = () => {
  bigPicture.classList.add('hidden');// добавляем класс hidden в bigPicture
  body.classList.remove('modal-open');// удаляем класс modal-open у тега body
  document.removeEventListener('keydown', onEscKeyDown); // удаляем обработчик события нажатия Esc
};

// закрытие большого окна при нажатии Esc
function onEscKeyDown(evt) {
  if (evt.key === 'Escape') {
   evt.preventDefault();
    hideBigPicture();
  }
}

// закрытие окна с помощью клика на кнопку
const onCancelButtonClick = () => {
  hideBigPicture();
};

//заполнять окно данными из объекта, визуализация деталей изображения
const renderPictureDetails = ({ url, likes, description }) => {
  bigPicture.querySelector('.big-picture__img img').src = url;// data.url подставляем в src изображения внутри блока .big-picture__img
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;    // data.lik    // data.description вставляем строкой в блок .social__caption.es подставляем как текстовое содержание элемента .likes-count
  bigPicture.querySelector('.social__caption').textContent = description;
};

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');// скрыть большое окно, удалить класс hidden у большого изображения bigPicture
  body.classList.add('modal-open');// добавить класс modal-open тегу body
  commentsLoader.classList.add('hidden'); // скрыть кнопку добавления комментариев
  commentCount.classList.add('hidden'); // скрыть комментарии к изображению
  document.addEventListener('keydown', onEscKeyDown); // добавить обработчик события нажатия Esc

  renderPictureDetails(data); // заполнить окно данными изображения
  renderComments(data.comments); // заполняем список комментариев
};

cancelButton.addEventListener('click', onCancelButtonClick); // закрываем окно кликом по кнопке


export {showBigPicture};
export {onEscKeyDown}

// В модуле, который отвечает за отрисовку окна с полноразмерным изображением,
// доработайте код по выводу списка комментариев таким образом, чтобы список показывался не полностью,
// а по 5 элементов, и следующие 5 элементов добавлялись бы по нажатию на кнопку «Загрузить ещё».
// Не забудьте реализовать обновление числа показанных комментариев в блоке .social__comment-count.
// это не сделано!
