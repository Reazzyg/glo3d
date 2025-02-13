const slider = (
  classes = {
    sliderBlock: '',
    slides: '',
    activeSlide: 'slide-active',
    dotContainer: '',
    activeDot: 'dot-active',
    timerInterval: 0,
  },
) => {
  const sliderBlock = document.querySelector(`${classes.sliderBlock}`);
  const slides = sliderBlock.querySelectorAll(`${classes.slides}`);
  const dotContainer = document.querySelector(`${classes.dotContainer}`);
  let timerInterval = classes.timerInterval;
  let dots;
  let interval;
  let currentSlide = 0;

  if (!sliderBlock || !slides || !dotContainer) {
    return;
  }

  const createDots = () => {
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dotContainer.append(dot);
    }
    dots = dotContainer.querySelectorAll('.dot');
    dots[0].classList.add(`${classes.activeDot}`);
  };

  const prevSlide = (elems, i, strClass) => {
    elems[i].classList.remove(strClass);
  };
  const nextSlide = (elems, i, strClass) => {
    elems[i].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, `${classes.activeSlide}`);
    prevSlide(dots, currentSlide, `${classes.activeDot}`);

    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, `${classes.activeSlide}`);
    nextSlide(dots, currentSlide, `${classes.activeDot}`);
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };
  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches('.portfolio-btn, .dot')) {
      return;
    }

    prevSlide(slides, currentSlide, `${classes.activeSlide}`);
    prevSlide(dots, currentSlide, `${classes.activeDot}`);
    if (e.target.matches('#arrow-right')) {
      currentSlide++;
    } else if (e.target.matches('#arrow-left')) {
      currentSlide--;
    } else if (e.target.matches('.dot')) {
      dots.forEach((dot, i) => {
        if (dot === e.target) {
          currentSlide = i;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, `${classes.activeSlide}`);
    nextSlide(dots, currentSlide, `${classes.activeDot}`);
  });

  sliderBlock.addEventListener(
    'mouseenter',
    (e) => {
      if (e.target.matches('.portfolio-btn, .dot')) {
        stopSlide();
      }
    },
    true,
  );
  sliderBlock.addEventListener(
    'mouseleave',
    (e) => {
      if (e.target.matches('.portfolio-btn, .dot')) {
        startSlide(timerInterval);
      }
    },
    true,
  );

  createDots();
  startSlide(timerInterval);
};

export default slider;
