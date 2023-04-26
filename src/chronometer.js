class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start(printTimeCallback) {
    if(printTimeCallback){
      setInterval(printTimeCallback, 1000)
    }
      this.intervalId = setInterval((printTimeCallback) => {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    if(this.currentTime === 0) {
      return 0;
    } else 
    return this.currentTime = Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    if(this.currentTime === 0) {
      return 0;
    } else {
      return this.currentTime % 60;
   }
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value;
    } else {
      return value.toString();
    }
    
  }

  stop() {
    clearInterval(this.intervalId); 
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
