import { animate } from './helpers';

const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const close = modal.querySelector('.popup-close');

  function showModal() {
    if (window.innerWidth > 768) {
      modal.style.display = 'block';
      modal.style.visibility = 'visible';
      animate({
        duration: 100,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.opacity = progress;
        },
      });
    } else {
      modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    }
  }

  function hideModal() {
    if (window.innerWidth > 768) {
      animate({
        duration: 100,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.opacity = 1 - progress;
          if (progress === 1) {
            modal.style.visibility = 'hidden';
            modal.style.display = 'none';
          }
        },
      });
    } else {
      modal.style.display = 'none';
    }
  }

  buttons.forEach((button) => button.addEventListener('click', showModal));
  modal.addEventListener('click', (e) => {
    if (
      !e.target.closest('.popup-content') ||
      e.target.classList.contains('popup-close')
    ) {
      hideModal();
    }
  });

  modal.style.opacity = '0';
  modal.style.visibility = 'hidden';
  modal.style.display = 'none';
};

export default modal;
