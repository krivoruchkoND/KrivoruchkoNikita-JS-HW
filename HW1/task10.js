// Write a polyfill for a .bind() function and save it in Function.prototype.myBind(). 
// myBind() should work in an exact same way as the usual bind() - take context as a first 
// parameter and the list of arguments separated by comma.
// Hint: play with the function in Function.prototype and see what this points to inside it. 
// Your code should look like:
// Function.prototype.myBind = function () {
// // your code here
// }
// Example:
// function addPropToNumber(number) { return this.prop + number; }
// var bound = addPropToNumber.myBind({ prop: 9 });
// bound(1) // 10
Function.prototype.myBind = function(prop) {
    var f = this;
    return function() {
        var args = Array.prototype.slice.call(arguments);
        return f.call(prop, args)
    }
};

function addPropToNumbers(numbers) { return this.prop + numbers.reduce((a, b) => a + b, 0); }
var bound = addPropToNumbers.myBind({ prop: 9 });
console.log(bound())        // 9
console.log(bound(1))       // 10
console.log(bound(1, 2, 3)) // 15