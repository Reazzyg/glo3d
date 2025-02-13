const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const close = modal.querySelector('.popup-close');

  function animateOpacity(element, start, end, duration, callback) {
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      let progress = (timestamp - startTime) / duration;
      if (progress > 1) progress = 1;

      element.style.opacity = start + (end - start) * progress;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else if (callback) {
        callback();
      }
    }

    requestAnimationFrame(step);
  }

  function showModal() {
    if (window.innerWidth > 768) {
      modal.style.display = 'block';
      modal.style.visibility = 'visible';
      animateOpacity(modal, 0, 1, 500);
    } else {
      modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    }
  }

  function hideModal() {
    if (window.innerWidth > 768) {
      animateOpacity(modal, 1, 0, 500, () => {
        modal.style.visibility = 'hidden';
        modal.style.display = 'none';
      });
    } else {
      modal.style.display = 'none';
    }
  }

  buttons.forEach((button) => button.addEventListener('click', showModal));
  close.addEventListener('click', hideModal);

  modal.style.opacity = '0';
  modal.style.visibility = 'hidden';
  modal.style.display = 'none';
};

export default modal;
