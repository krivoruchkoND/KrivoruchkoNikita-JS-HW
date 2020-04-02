// Write largest and smallest functions that returns the largest and smallest number passed like a argument.
// Example:
// largest(2, 0.1, -5, 100, 3) // 100
// smallest(2, 0.1, -5, 100, 3) // -5
function largest() {
    for (var len = arguments.length, args = new Array(len), key = 0; key < len; key++) {
        args[key] = arguments[key];
    }
    var max = args[0];
    args.forEach(function (value) {
        return value > max ? max = value : null;
    });
    return max;
};
  
function smallest() {
    for (var len = arguments.length, args = new Array(len), key = 0; key < len; key++) {
        args[key] = arguments[key];
    }

    var min = args[0];
    args.forEach(function (value) {
        return value < min ? min = value : null;
    });
    return min;
};
