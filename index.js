;
(function(name, definition) {
    // 检测上下文环境是否为AMD或CMD
    var hasDefine = typeof define === 'function',
        // 检查上下文环境是否为Node
        hasExports = typeof module !== 'undefined' && module.exports;

    if (hasDefine) {
        // AMD环境或CMD环境
        define(definition);
    } else if (hasExports) {
        // 定义为普通Node模块
        module.exports = definition();
    } else {
        // 将模块的执行结果挂在window变量中，在浏览器中this指向window对象
        this[name] = definition();
    }
})('mimoz', function() {

        function mimoz(date) {

            this._isDate = function(input) {
                return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
            }

            this._addPreZero = function(num) {
                return ('0' + num).slice(-2);
            }

            this._getObj = function() {
                let date = this.date;
                return {
                    year: date.getFullYear(),
                    month: this._addPreZero(date.getMonth() + 1),
                    day: this._addPreZero(date.getDate()),
                    hour: this._addPreZero(date.getHours()),
                    minute: this._addPreZero(date.getMinutes()),
                    second: this._addPreZero(date.getSeconds())
                }
            }

            this._getTplObj = function() {
                let date = this.date;
                return {
                    YYYY: date.getFullYear(),
                    MM: this._addPreZero(date.getMonth() + 1),
                    DD: this._addPreZero(date.getDate()),
                    hh: this._addPreZero(date.getHours()),
                    mm: this._addPreZero(date.getMinutes()),
                    ss: this._addPreZero(date.getSeconds())
                }
            }

            if (!this._isDate(date)) {
                throw new Error('please use Date object')
            }
            this.date = date;
        }
        mimoz.prototype.formatAll = function(split) {
            if (!split) {
                split = '-'
            }
            return this._getObj().year + split + this._getObj().month + split + this._getObj().day + ' ' + this._getObj().hour + split + this._getObj().minute + split + this._getObj().second
        }
        mimoz.prototype.formatDate = function(split) {
            if (!split) {
                split = '-'
            }
            return this._getObj().year + split + this._getObj().month + split + this._getObj().day
        }
        mimoz.prototype.formatTime = function(split) {
            if (!split) {
                split = '-'
            }
            return this._getObj().hour + split + this._getObj().minute + split + this._getObj().second
        }
        mimoz.prototype.format = function(dateTemplate) {
            if (!dateTemplate) {
                return this.formatAll();
            }
            return dateTemplate.replace(/((YYYY)|(MM)|(DD)|(hh)|(mm)|(ss))/g, ($1, $2, $3, $4, $5, $6, $7, $8, $9) => {
                return this._getTplObj()[$1];
            })
        }
        return mimoz;

    }
)