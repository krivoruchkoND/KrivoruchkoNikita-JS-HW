// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized.
// Example:
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
function toCamelCase(str) {
    var words = str.split(/-|_/gm);
    return words.map(function (word, index) {
        return index === 0 ? 
            word : 
            word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
};
