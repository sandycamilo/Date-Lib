const { months, mons, days, dys } = require('./utils') 

class D {
	constructor(...args) {
		this._date = new Date(...args)
	}

  /** 
   * year
   * @returns {Int} '2021' 
   */

  get year() {
    return this._date.getFullYear()
  }

  /** 
   * yr
   * @returns {Int} '21' 
   */

  get yr() {
    return this._date.getFullYear() % 100
  }

  /** 
   * month
   * @returns {String} 'April' 
   */

  get month() {
    return months[this._date.getMonth()]
  }

  /** 
   * mon
   * @returns {String} 'Apr' 
   */

  get mon() {
    return mons[this._date.getMonth()]
  }

  /** 
   * day
   * @returns {String} 'Suday' 
   */

  get day() {
    return days[this._date.getDay()]
  }

  /** 
   * dy
   * @returns {String} 'Sun' 
   */

  get dy() {
    return dys[this._date.getDay()]
  }

  /** 
   * date
   * @returns {Int} '25' 
   */

  get date() {
    return this._date.getDate()
  }

  /** 
   * hour
   * @returns {Int} '18' 
   */

  get hour() {
    return this._date.getHours()
  }

  /** 
   * mins
   * @returns {Int} '14' 
   */

  get mins() {
    return this._date.getMinutes()
  }

  /** 
   * seconds
   * @returns {Int} '45' 
   */

  get seconds() {
    return this._date.getSeconds()
  }

  /** 
   * format
   * @param {String} input string
   * @returns {String} 'date' - displayed specific to the case 
   */

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
        case 'W':
          date += this.day
          break
        case 'w':
          date += this.dy
          break
        default:
          date += letter
      }
    })
    return date
  }

  /** 
   * when
   * @returns {String} - description of when the event will occur
   */

  when() {
    const now = new D()
    const the_year = this.year - now.year
    const the_month = this._date.getMonth() - now._date.getMonth() + the_year * 12
    const the_day = this.date - now.date

    if (the_month > 11) {
      return `${the_year} year${the_year > 1 ? 's' : ''} from now`
    } else if (the_month < -11) {
      return `${Math.abs(the_year)} year${the_year < -1 ? 's' : ''} ago`
    } else if (the_month > 0) {
      return `${the_month} month${the_month > 1 ? 's' : ''} from now`
    } else if (the_month < 0) {
      return `${Math.abs(the_month)} month${the_month < -1 ? 's' : ''} ago`
    } else if (the_day > 0) {
      return `${the_day} days ago`
    } else if (the_day < 0) {
      return `${the_day} days from now`
    } else {
      return 'today'
    } 
  }
}

module.exports = D

// const d = new D() 
// Externally year looks like a property! - No parantheses
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


// const d = new D(2017, 0, 2, 3, 4, 5)
// console.log(d.format()) // 2017 January 02
// console.log(d.format('y/m/d')) // 17/Jan/2
// console.log(d.format('H:I:S')) // 03:04:05
// console.log(d.format('h:i:s')) // 3:4:5
// console.log(d.format('Y-M-D h:I:S')) // 2017-January-02 3:04:05
// console.log(d.format('W:w')) 

// const d = new D(2019, 0, 2, 3, 4, 5)
// console.log(d.when()) // 6 months ago
// const d = new D(2019, 9, 2, 3, 4, 5)
// console.log(d.when()) // 3 months from now
// const d = new D(2024, 9, 2, 3, 4, 5)
// console.log(d.when()) // 5 years from now
// const d = new D(2019, 6, 30, 3, 4, 5)
// console.log(d.when()) // 3 days from now
// const d = new D()
// console.log(d.when()) // today

