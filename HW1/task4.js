// Write a function that takes a sentence (string) and reverses each word in the sentence.
// Example: 
// " A fun little challenge! " => " A nuf elttil !egnellahc "
export default (str) => {
    return str
        .split(' ')
        .map((word) => word.split('').reverse().join(''))
        .join(' ');
}