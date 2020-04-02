// Write function sum Function expects arbitrary number of digit arguments 
// and returns compound value of them. Note: function should use recursion
// Example: 
// sum(1,3,5,7); //should return 16
export default sum = (...args) => {
    return args.reduce((acc, curr) => acc + curr, 0);
}