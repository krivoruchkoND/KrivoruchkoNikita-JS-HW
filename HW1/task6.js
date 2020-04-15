// Write largest and smallest functions that returns the largest and smallest number passed like a argument.
// Example:
// largest(2, 0.1, -5, 100, 3) // 100
// smallest(2, 0.1, -5, 100, 3) // -5
function largest() {
    var args = Array.prototype.slice.call(arguments);
    var max = args[0];
    args.forEach(function (value) {
        if (value > max) {
          max = value;
        }
    });
    return max;
};
  
function smallest() {
    var args = Array.prototype.slice.call(arguments);
    var min = args[0];
    args.forEach(function (value) {
        if (value < min) {
          min = value;
        }
    });
    return min;
};
