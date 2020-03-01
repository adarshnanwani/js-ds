/*  STACKS */

// functions: push, pop, peek, length

//  -- Stack using array
// Check if a word is a palindrome

const letters = []; // This is our stack

const word = 'racecar';

let rword = '';

// Push data into the stack from word
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// Pop data off the stack into rword
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

// Compare
if (word == rword) {
  console.log(`The string ${word} is a palindrome.`);
} else {
  console.log(`The string ${word} is not a palindrome.`);
}
