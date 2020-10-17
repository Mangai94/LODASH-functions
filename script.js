var Array1 = /** @class */ (function () {
    function Array1(array, num) {
        var _this = this;
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
            console.log(func.arguments);
        };
        this.array = array;
        this.num = num;
    }
    return Array1;
}());
var a = new Array1([1, 2, 3, 4, 5], 6);
//console.log(a._chunk());
//console.log(a._find(7));
console.log(a._reduce(function (sum, n) {
    return sum + n;
}));
