// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX. Количество дней может состоять из более чем двух цифр.

// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.
const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = new Date(targetDate);
    this.start();
  }

  start() {
    this.getInterval();
  }

  getInterval() {
    setInterval(() => {
      const startTimer = Date.now();
      const deltaTime = this.targetDate - startTimer;
      const timePart = this.getTime(deltaTime);
      this.setClockface(timePart);
    }, 1000);
  }

  getTime(time) {
    const days = this.formatTime(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.formatTime(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.formatTime(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    const secs = this.formatTime(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  formatTime(value) {
    return String(value).padStart(2, '0'); // мотод который добавит '0' впереди.
  }

  setClockface({ days, hours, mins, secs }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: 'Jan 01, 2021',
});
