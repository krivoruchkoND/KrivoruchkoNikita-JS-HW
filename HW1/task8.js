// Write function sum Function expects arbitrary number of digit arguments 
// and returns compound value of them. Note: function should use recursion
// Example: 
// sum(1,3,5,7); //should return 16
function sum() {
    var args = Array.prototype.slice.call(arguments);
    return (function iteration(arr) {
        if (arr.length === 0) {
            return 0;
        }
        return arr.pop() + iteration(arr);
    })(args);
};
