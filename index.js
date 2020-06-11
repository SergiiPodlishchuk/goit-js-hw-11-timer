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
    this.count = setInterval(() => {
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

    if (this.targetDate.getTime() <= Date.now()) {
      clearInterval(this.count);
      alert("вы опоздали");
    }
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const counter = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2020"),
});

counter.interval();
