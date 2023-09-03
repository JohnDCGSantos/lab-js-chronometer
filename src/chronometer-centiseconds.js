class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      if (typeof printTimeCallback === 'function') {
        printTimeCallback(this.currentTime)
      }
    }, 10)
  }

  getMinutes() {
    //100centisec=1sec==>xcentisec=60secc(1min)==>x=6000
    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60)
  }

  getCentiseconds() {
    return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
    return ('0' + value).slice(-2)
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    let centiSeconds = this.computeTwoDigitNumber(this.getCentiseconds())
    return `${minutes}:${seconds}.${centiSeconds}`
  }
}
