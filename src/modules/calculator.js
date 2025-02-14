import { animate } from './helpers';

const calculator = (price = 100) => {
  const total = document.getElementById('total');
  const calcBlock = document.querySelector('.calc-block');
  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');
  const animateTotal = (value) => {
    const start = +total.textContent || 0; // Начальное значение (если пусто — 0)
    const difference = value - start; // Разница между старым и новым значением

    animate({
      duration: 100,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        total.textContent = Math.round(start + difference * progress);
      },
    });
  };
  const coutCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = +calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;
    if (calcCount.value > 1) {
      calcCountValue += calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    }
    animateTotal(totalValue);
  };

  calcBlock.addEventListener('input', (event) => {
    const target = event.target;
    if (target.matches('select') || target.matches('input')) {
      coutCalc();
    }
  });
};

export default calculator;
