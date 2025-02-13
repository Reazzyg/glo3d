const smoothScroll = () => {
  const links = document.querySelectorAll('a[href^="#"]:not(.close-btn)');

  links.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const id = this.getAttribute('href').substring(1);

      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
};

export default smoothScroll;
