// Write a function that takes a sentence (string) and reverses each word in the sentence.
// Example: 
// " A fun little challenge! " => " A nuf elttil !egnellahc "
function reverser(str) {
    return str.split(' ').map(function (word) {
        return word.split('').reverse().join('');
    }).join(' ');
};
