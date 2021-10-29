class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(callback) {
    const Id = setInterval(function() {
     this.currentTime += 1;
     console.log(this);
      }, 1000);
    }
        // ... your code goes here

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes; 
    // ... your code goes here
  }

  getSeconds() {
    let seconds = (this.currentTime % 60);
    return seconds;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2);
        // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId);
        // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    let splitMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let splitSeconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${splitMinutes}:${splitSeconds}`;
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
