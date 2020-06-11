const daysT = document.querySelector("span[data-value = 'days']");
const hoursT = document.querySelector("span[data-value = 'hours']");
const minsT = document.querySelector("span[data-value = 'mins']");
const secsT = document.querySelector("span[data-value = 'secs']");

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  interval() {
    this.counter = setInterval(() => {
      const date = Date.now();
      const time = this.targetDate.getTime() - date;
      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = this.pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const mins = this.pad(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
      );
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

      daysT.textContent = days;
      hoursT.textContent = hours;
      minsT.textContent = mins;
      secsT.textContent = secs;
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const counter = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2050"),
});

counter.interval();

// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
