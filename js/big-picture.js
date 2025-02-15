import './working-with-form.js'

const bigPicture = document.querySelector('.big-picture'); // блок с изображениями
const commentCount = document.querySelector('.social__comment-count'); // комментарии к изображению
const commentList = document.querySelector('.social__comments'); // список комментариев на одном изображении
const commentsLoader = document.querySelector('.comments-loader'); // Кнопка для загрузки новой порции комментариев
const body = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel'); //Кнопка для выхода из полноэкранного просмотра изображения

// Покажите блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, убрав у них класс hidden.

let commentsShown = 0; // Индекс для отслеживания текущего элемента
const COMMENTS_PER_PORTION = 5; // Количество комментариев для отображения за раз
let comments = [];

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
  commentsShown += COMMENTS_PER_PORTION;// Обновляем индекс для следующего отображения

// создаем фрагмент, куда будут помещаться комментарии к изображению и заполняем его случайными комменттариями:
if (commentsShown >= comments.length) {
  commentsLoader.classList.add('hidden');
  commentsShown = comments.length;
} else {
  commentsLoader.classList.remove('hidden');
}

const fragment = document.createDocumentFragment();
for (let i = 0; i < commentsShown; i++) {
  const commentElement = createComment(comments[i]);
  fragment.append(commentElement);
}

commentList.innerHTML = '';
commentList.append(fragment);
commentCount.innerHTML = `${commentsShown} из <span class="comments-count">${comments.length}</span> комментариев`;
};
// закрывает большое окно двумя способами: по нажатию клавиши Esc и по клику по иконке закрытия Х
const hideBigPicture = () => {
  bigPicture.classList.add('hidden');// добавляем класс hidden в bigPicture
  body.classList.remove('modal-open');// удаляем класс modal-open у тега body
  document.removeEventListener('keydown', onEscKeyDown); // удаляем обработчик события нажатия Esc
  commentsShown = 0;
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

const onCommentsLoaderClick = () => renderComments();
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
  comments = data.comments;
  if (comments.length > 0) {
    renderComments();
  }// заполняем список комментариев
};

cancelButton.addEventListener('click', onCancelButtonClick); // закрываем окно кликом по кнопке
commentsLoader.addEventListener('click', onCommentsLoaderClick);

export {showBigPicture};

