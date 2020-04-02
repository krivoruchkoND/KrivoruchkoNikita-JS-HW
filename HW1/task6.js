// Write largest and smallest functions that returns the largest and smallest number passed like a argument.
// Example:
// largest(2, 0.1, -5, 100, 3) // 100
// smallest(2, 0.1, -5, 100, 3) // -5
const largest = (...args) => {
    let max = args[0];
    args.forEach((value) => value > max ? max = value : null);
    return max;
}
const smallest = (...args) => {
    let min = args[0];
    args.forEach((value) => value < min ? min = value : null);
    return min;
}
export { largest, smallest }