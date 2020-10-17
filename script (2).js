class Array1
{
    constructor(array, num)
    {
        this.array = array;
        this.num = num;
    }
     _chunk = () => {
         if(this.num >= this.array.length || this.array.length == 0)
            return this.array;
         
        let output = [];
        let numerator = Math.floor(this.array.length / this.num);
        let deno = this.array.length % this.num;
        let startIndex = 0;

        for(let i = 0 ; i < numerator; i++)
        {
            output.push(this.array.slice(startIndex, startIndex+this.num));
            startIndex = startIndex + this.num;
        }
        if(deno != 0)
            output.push(this.array.slice(this.num*numerator));

        return output; 
    }

    _find = (element) => {
        for(let i = 0; i < this.array.length; i++)
        {
            if(this.array[i] == element)
                return element;
        }

        return null;
    }

    _reduce = (func) => {
        let sum = this.array[0];
        for(let i = 0; i < this.array.length; i++)
        {
           sum = func(sum, this.array[i])
        }

        return sum;
    }

    _sum = () => {
        let sum;
        for(let  i = 0; i < this.array.length; i++)
        {
            sum = sum + this.array[i];
        }

        return sum;
    }

    _filter = (func) => {
        let output = [];

        for(let i = 0; i < this.array.length; i++)
        {
           func(this.array[i], i, this.array) ? output.push(this.array[i]) : null;
        }

        return output;
    }
}

var a = new Array1([1, 2,3, 4, 5, -1, 56, 34, 09], 6)
console.log(a._filter(function(value)
{
    return value > 3
}))