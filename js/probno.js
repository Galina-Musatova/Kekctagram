import './working-with-form.js'

const bigPicture = document.querySelector('.big-picture');
const commentCount = document.querySelector('.social__comment-count');
const commentList = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');

let currentCommentIndex = 0;
const commentsPerPage = 5;

// Функция для отображения комментариев по странице
const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  const totalComments = comments.length;

  // Вычисляем количество показываемых комментариев
  const commentsToShow = comments.slice(currentCommentIndex, currentCommentIndex + commentsPerPage);
  commentsToShow.forEach((comment) => {
    fragment.append(createComment(comment));
  });

  commentList.append(fragment);
  currentCommentIndex += commentsPerPage;

  // Обновляем счетчик комментариев
  commentCount.textContent = `${Math.min(currentCommentIndex, totalComments)} из ${totalComments} комментариев`;

  // Если больше нет комментариев, скрываем кнопку загрузки
  if (currentCommentIndex >= totalComments) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

// Событие для загрузки следующих комментариев
commentsLoader.addEventListener('click', () => {
  renderComments(comments); // Передаем массив комментариев
});
