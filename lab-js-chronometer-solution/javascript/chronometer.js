// class Chronometer {
//   constructor() {}
// startClick() {}
// getMinutes() {}
// getSeconds() {}
// twoDigitsNumber() {}
// stopClick() {}
// resetClick() {}
// splitClick() {}
// }

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(cb) {
    console.log('start');
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (cb) cb();
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  // getMilliseconds() {
  //   return this.currentTime % 100;
  // }

  twoDigitsNumber(value) {
    if (value < 10) return `0${value}`;
    return `${value}`;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }

  // splitClick() {
  //   return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(
  //     this.getSeconds()
  //   )}:${this.twoDigitsNumber(this.getMilliseconds())}`;
  // }
}
