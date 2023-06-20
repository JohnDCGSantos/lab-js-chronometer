class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
    // ... your code goes here
  

    start(printTimeCallback) {
        let counter = 0;
        this.intervalId = setInterval(() => {
          counter++;
          this.currentTime = counter;
          if (this.currentTime === 3) {
            clearInterval(this.intervalId);
          }
          if (typeof printTimeCallback === 'function') {
            printTimeCallback(this.currentTime);
          }
        }, 1000);
      }

    

  
    // ... your code goes here
  

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
    // ... your code goes here


  getSeconds() {
    return this.currentTime % 60;
  }
    // ... your code goes here
  

  computeTwoDigitNumber(value) {

    return ('0' + value).slice(-2);

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
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
    // ... your code goes here
  }
