// Write function transform that will transform array of numbers to array of functions that will return value from a base array. 
// Example:
// const baseArray = [10, 20, 30, 40, 50];
// const newArray = transform(baseArray);
// newArray3; // should return 40
// newArray4; // should return 50
function transform(arr) {
    return arr.map(function (value) {
        return function () {
            return value;
        };
    });
};