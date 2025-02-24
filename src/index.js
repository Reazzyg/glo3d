import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import smoothScroll from './modules/smoothScroll';
import validation from './modules/validation';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';

timer('15 february 2025 18:12');
menu();
modal();
smoothScroll();
validation();
tabs();
slider({
  sliderBlock: '.portfolio-content',
  slides: '.portfolio-item',
  activeSlide: 'portfolio-item-active',
  dotContainer: '.portfolio-dots',
  activeDot: 'dot-active',
  timerInterval: 2000,
});

calculator(100);
sendForm({
  formId: 'form1',
  someElem: [
    {
      type: 'block',
      id: 'total',
    },
  ],
});
sendForm({
  formId: 'form2',
});
sendForm({
  formId: 'form3',
});
