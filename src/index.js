var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var _a = require('./utils'), months = _a.months, mons = _a.mons, days = _a.days, dys = _a.dys;
var D = /** @class */ (function () {
    function D() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._date = new (Date.bind.apply(Date, __spreadArray([void 0], args)))();
    }
    Object.defineProperty(D.prototype, "year", {
        /**
         * year
         * @returns {Int} '2021'
         */
        get: function () {
            return this._date.getFullYear();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "yr", {
        /**
         * yr
         * @returns {Int} '21'
         */
        get: function () {
            return this._date.getFullYear() % 100;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "month", {
        /**
         * month
         * @returns {String} 'April'
         */
        get: function () {
            return months[this._date.getMonth()];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "mon", {
        /**
         * mon
         * @returns {String} 'Apr'
         */
        get: function () {
            return mons[this._date.getMonth()];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "day", {
        /**
         * day
         * @returns {String} 'Suday'
         */
        get: function () {
            return days[this._date.getDay()];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "dy", {
        /**
         * dy
         * @returns {String} 'Sun'
         */
        get: function () {
            return dys[this._date.getDay()];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "date", {
        /**
         * date
         * @returns {Int} '25'
         */
        get: function () {
            return this._date.getDate();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "hour", {
        /**
         * hour
         * @returns {Int} '18'
         */
        get: function () {
            return this._date.getHours();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "mins", {
        /**
         * mins
         * @returns {Int} '14'
         */
        get: function () {
            return this._date.getMinutes();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(D.prototype, "seconds", {
        /**
         * seconds
         * @returns {Int} '45'
         */
        get: function () {
            return this._date.getSeconds();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * format
     * @param {String} input string
     * @returns {String} 'date' - displayed specific to the case
     */
    D.prototype.format = function (mask) {
        var _this = this;
        if (mask === void 0) { mask = 'Y M D'; }
        var arr = mask.split('');
        var date = '';
        function pad(number) {
            var str = '' + number;
            if (number < 10) {
                str = '0' + str;
            }
            return str;
        }
        arr.forEach(function (letter) {
            switch (letter) {
                case 'Y':
                    date += _this.year;
                    break;
                case 'M':
                    date += _this.month;
                    break;
                case 'D':
                    date += pad(_this._date.getDay());
                    break;
                case 'y':
                    date += _this.yr;
                    break;
                case 'm':
                    date += _this.mon;
                    break;
                case 'd':
                    date += _this.date;
                    break;
                case 'H':
                    date += pad(_this._date.getHours());
                    break;
                case 'I':
                    date += pad(_this._date.getMinutes());
                    break;
                case 'S':
                    date += pad(_this._date.getSeconds());
                    break;
                case 'h':
                    date += _this.hour;
                    break;
                case 'i':
                    date += _this.mins;
                    break;
                case 's':
                    date += _this.seconds;
                    break;
                case 'W':
                    date += _this.day;
                    break;
                case 'w':
                    date += _this.dy;
                    break;
                default:
                    date += letter;
            }
        });
        return date;
    };
    /**
     * when
     * @returns {String} - description of when the event will occur
     */
    D.prototype.when = function () {
        var now = new D();
        var the_year = this.year - now.year;
        var the_month = this._date.getMonth() - now._date.getMonth() + the_year * 12;
        var the_day = this.date - now.date;
        if (the_month > 11) {
            return the_year + " year" + (the_year > 1 ? 's' : '') + " from now";
        }
        else if (the_month < -11) {
            return Math.abs(the_year) + " year" + (the_year < -1 ? 's' : '') + " ago";
        }
        else if (the_month > 0) {
            return the_month + " month" + (the_month > 1 ? 's' : '') + " from now";
        }
        else if (the_month < 0) {
            return Math.abs(the_month) + " month" + (the_month < -1 ? 's' : '') + " ago";
        }
        else if (the_day > 0) {
            return the_day + " days ago";
        }
        else if (the_day < 0) {
            return the_day + " days from now";
        }
        else {
            return 'today';
        }
    };
    return D;
}());
module.exports = D;
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
