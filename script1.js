var Sample = /** @class */ (function () {
    function Sample(array, num) {
        var _this = this;
        this.array = [];
        this._chunk = function () {
            if (_this.num >= _this.array.length || _this.array.length == 0)
                return _this.array;
            var output = [];
            var numerator = Math.floor(_this.array.length / _this.num);
            var deno = _this.array.length % _this.num;
            var startIndex = 0;
            for (var i = 0; i < numerator; i++) {
                output.push(_this.array.slice(startIndex, startIndex + _this.num));
                startIndex = startIndex + _this.num;
            }
            if (deno != 0)
                output.push(_this.array.slice(_this.num * numerator));
            return output;
        };
        this._find = function (element) {
            for (var i = 0; i < _this.array.length; i++) {
                if (_this.array[i] == element)
                    return element;
            }
            return null;
        };
        this._reduce = function (func) {
            var sum = _this.array[0];
            for (var i = 0; i < _this.array.length; i++) {
                sum = func(sum, _this.array[i]);
            }
            return sum;
        };
        this._sum = function () {
            var sum;
            for (var i = 0; i < _this.array.length; i++) {
                sum = sum + _this.array[i];
            }
            return sum;
        };
        this._filter = function (func) {
            var output = [];
            for (var i = 0; i < _this.array.length; i++) {
                func(_this.array[i], i, _this.array) ? output.push(_this.array[i]) : null;
            }
            return output;
        };
        this.array = array;
        this.num = num;
    }
    return Sample;
}());
var sample = new Sample([1, 2, 3, 4, 5, -1, 56, 34, 09], 6);

console.log(sample._filter(function (value) {
    return value > 3;
}));

var f1 = (function()
{
    return f1;
}());

console.log(f1);
