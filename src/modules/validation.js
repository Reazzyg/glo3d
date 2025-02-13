const validation = () => {
  const calcItems = document.querySelectorAll('.calc-item');
  const textArea = document.querySelector(
    'input[placeholder="Ваше сообщение"]',
  );
  const emailInputs = document.querySelectorAll('input[type="email"]');
  const telInputs = document.querySelectorAll('input[type="tel"]');
  const textInputs = document.querySelectorAll(
    'input[type="text"]:not(.calc-item)',
  );

  calcItems.forEach((item) => {
    item.addEventListener('input', (e) => {
      if (
        e.target.matches('.calc-square') ||
        e.target.matches('.calc-count') ||
        e.target.matches('.calc-day')
      ) {
        e.target.value = e.target.value.replace(/\D/g, '');
      }
    });
  });

  textArea.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^а-яё\s-]/gi, '');
  });

  emailInputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^\w@\-.!~*']/gi, '');
    });

    input.addEventListener('blur', (e) => {
      e.target.value = e.target.value.trim();
    });
  });

  telInputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^+0-9()\-\s]/g, '');
    });

    input.addEventListener('blur', (e) => {
      e.target.value = e.target.value.trim();
    });
  });

  textInputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s-]/g, '');
    });

    input.addEventListener('blur', (e) => {
      let value = e.target.value.trim();

      value = value.replace(/[\s-]+/g, ' ');

      value = value.replace(/\b\w/g, (char) => char.toUpperCase());
      value = value.replace(/\B\w/g, (char) => char.toLowerCase());

      e.target.value = value;
    });
  });
};

export default validation;
