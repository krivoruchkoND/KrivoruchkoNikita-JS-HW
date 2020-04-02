// Write function sum Function expects arbitrary number of digit arguments 
// and returns compound value of them. Note: function should use recursion
// Example: 
// sum(1,3,5,7); //should return 16
function sum() {
    for (var len = arguments.length, args = new Array(len), key = 0; key < len; key++) {
        args[key] = arguments[key];
    }
    return args.reduce(function (acc, curr) {
        return acc + curr;
    }, 0);
};
