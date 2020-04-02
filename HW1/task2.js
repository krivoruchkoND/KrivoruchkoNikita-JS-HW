// Write a function convert
// Convert a hash into an array. Nothing more, Nothing less.
// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into
// [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
export default convert = (hash) => {
    const keys = Object.keys(hash);
    return keys.map((key) => [key, hash[key]]);
}