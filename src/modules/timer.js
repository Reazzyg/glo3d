export default function timer(deadline) {
  const timerHours = document.querySelector('#timer-hours');
  const timerMinutes = document.querySelector('#timer-minutes');
  const timerSeconds = document.querySelector('#timer-seconds');
  let idInterval;

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 3600);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);
    return {
      timeRemaining,
      hours,
      minutes,
      seconds,
    };
  };

  const addZero = (value) => {
    return value < 10 ? '0' + value : value;
  };

  const updateCLock = () => {
    let getTime = getTimeRemaining();

    if (getTime.timeRemaining < 0) {
      clearInterval(idInterval);
      getTime.hours = '0';
      getTime.minutes = '0';
      getTime.seconds = '0';
    }
    timerHours.textContent = addZero(getTime.hours);
    timerMinutes.textContent = addZero(getTime.minutes);
    timerSeconds.textContent = addZero(getTime.seconds);
  };
  idInterval = setInterval(updateCLock, 1000);
  updateCLock();
}
