// Write a function convert
// Convert a hash into an array. Nothing more, Nothing less.
// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into
// [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
function convert(hash) {
    var keys = Object.keys(hash);
    return keys.map(function (key) {
        return [key, hash[key]];
    });
};
