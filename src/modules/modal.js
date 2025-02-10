const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const close = modal.querySelector('.popup-close');

  buttons.forEach((button) => {
    button.addEventListener('click', toggleModal);
  });

  close.addEventListener('click', toggleModal);

  modal.style.opacity = '0';
  modal.style.visibility = 'hidden';
  modal.style.display = 'none';
  modal.style.transition =
    'opacity 0.5s ease-in-out, visibility 0.5s ease-in-out';

  function toggleModal() {
    if (window.innerWidth > 768) {
      if (modal.style.visibility === 'hidden') {
        modal.style.display = 'block';
        setTimeout(() => {
          modal.style.opacity = '1';
          modal.style.visibility = 'visible';
        }, 10);
      } else {
        modal.style.opacity = '0';
        modal.style.visibility = 'hidden';
        setTimeout(() => {
          modal.style.display = 'none';
        }, 500);
      }
    } else {
      modal.style.opacity = '1';
      modal.style.visibility = 'visible';
      if (modal.style.display === 'block') {
        modal.style.display = 'none';
      } else {
        modal.style.display = 'block';
      }
    }
  }
};

export default modal;
