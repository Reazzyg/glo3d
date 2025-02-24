const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div');
  const loader = document.createElement('div');
  loader.classList.add('loader');

  const errorText = 'Error...';
  const successText = 'Data has been sent';

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formData = new FormData(form);
    const formBody = {};
    const formElements = form.querySelectorAll('input');

    statusBlock.innerHTML = '';
    statusBlock.append(loader);

    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((el) => {
      const element = document.getElementById(el.id);
      if (element) {
        formBody[el.id] =
          el.type === 'block' ? element.textContent : element.value;
      }
    });

    sendData(formBody)
      .then((data) => {
        loader.remove();
        statusBlock.textContent = successText;
        formElements.forEach((el) => (el.value = ''));
        console.log(data);
      })
      .catch((e) => {
        loader.remove();
        statusBlock.textContent = errorText;
        console.error(e);
      });
  };

  try {
    if (!form) {
      throw new Error('No form found');
    }
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (e) {
    console.error(e.message);
  }
};

export default sendForm;
