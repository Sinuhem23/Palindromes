// Palindrome with a function///////////
var prompt = require('prompt-sync')();

function checkPalindrome() {
  var lowerStr = string.toLowerCase();
  var reverseStr = lowerStr
    .split('')
    .reverse()
    .join('');
  if (reverseStr == lowerStr) {
    return 'Palindrome';
  } else {
    return 'Not a palindrome';
  }
}

// take input
const string = prompt('Enter a word to check if it is a palindrome: ');

// call the function
const result = checkPalindrome(string);

console.log(result);
