const { months, mons, days, dys } = require('./utils') 

class D {
	constructor(...args) {
		this._date = new Date(...args)
	}

  get year() {
    return this._date.getFullYear()
  }

  // getter method - only returns a value - internally they are methods
  get yr() {
    return this._date.getFullYear() % 100
  }

  get month() {
    return months[this._date.getMonth()]
  }

  get mon() {
    return mons[this._date.getMonth()]
  }

  get day() {
    return days[this._date.getDay()]
  }

  get dy() {
    return dys[this._date.getDay()]
  }

  get date() {
    return this._date.getDate()
  }

  get hour() {
    return this._date.getHours()
  }

  get mins() {
    return this._date.getMinutes()
  }

  get seconds() {
    return this._date.getSeconds()
  }

  format(mask = 'Y M D') {
    const arr = mask.split('')
    let date = ''
    function pad(number) {
      let str = '' + number
      if (number < 10) {
        str = '0' + str
      }
      return str
    }
    arr.forEach((letter) => {
      switch (letter) {
        case 'Y':
          date += this.year
          break
        case 'M':
          date += this.month
          break
        case 'D': 
          date += pad(this._date.getDay())
          break
        case 'y':
          date += this.yr
          break
        case 'm':
          date += this.mon
          break
        case 'd':
          date += this.date
          break
        case 'H':
          date += pad(this._date.getHours())
          break
        case 'I':
          date += pad(this._date.getMinutes())
          break
        case 'S':
          date += pad(this._date.getSeconds())
          break
        case 'h':
          date += this.hour
          break
        case 'i':
          date += this.mins
          break
        case 's':
          date += this.seconds
          break
        default:
          date += letter
      }
    })
    return date
  }
}



const d = new D(2017, 0, 2, 3, 4, 5)
console.log(d.format()) // 2017 January 02
console.log(d.format('y/m/d')) // 17/Jan/2
console.log(d.format('H:I:S')) // 03:04:05
console.log(d.format('h:i:s')) // 3:4:5
console.log(d.format('Y-M-D h:I:S')) // 2017-January-02 3:04:05 

module.exports = D

// const d = new D() 
// // Externally year looks like a property! - No parantheses
// console.log( d.year )  // 2021 - Full year
// console.log( d.yr )    // 21   - Short year
// console.log( d.month ) // July - Full month
// console.log( d.mon )   // Jul  - Short month
// console.log( d.day )   // Tuesday - Full day
// console.log( d.dy )    // Tue  - Short day
// console.log( d.date )  // 27   - Date
// console.log( d.hour ) // 18   - Hour
// console.log( d.mins )  // 6    - Minutes
// console.log( d.seconds, '<- seconds')  // 5    - Seconds