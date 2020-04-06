// Write a function ``` stringExpansion ```
// Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string: 
// The numeric values represent the occurance of each letter preceding that numeric value. 
// There should be no numeric characters in the final string. Empty strings should return an empty string.
// The first occurance of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears.
// stringExpansion('3D2a5d2f') === 'DDDaadddddff'
// If there are two consecutive numeric characters the first one is ignored.
// stringExpansion('3d332f2a') === 'dddffaa'
// If there are two consecutive alphabetic characters then the first character has no effect on the one after it.
// stringExpansion('abcde') === 'abcde'
// Your code should be able to work for both lower and capital case letters.
function stringExpansion(str) {
    var removedExtraDigits = str.replace(/\d(?=\d)/gm, '');
    var normalized = removedExtraDigits.replace(/(?<=\D)(\D)|^\D{1}/gm, '1$&');
    var pairs = normalized.match(/../gm);
    return pairs.reduce(function (acc, curr) {
        return ''.concat(acc).concat(curr.charAt(1).repeat(curr.charAt(0)));
    }, '');
};
