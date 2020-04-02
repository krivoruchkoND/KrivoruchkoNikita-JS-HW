// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized.
// Example:
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
export default toCamelCase = (str) => {
    const words = str.split(/-|_/gm);
    const head = words[0];
    const tail = words
      .filter((word, i) => i > 0)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    return `${head}${tail}`;
}