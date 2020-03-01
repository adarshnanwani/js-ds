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

// Custom stack

const Stack = function() {
  this.count = 0;
  this.storage = {};

  this.push = val => {
    this.storage[this.count] = val;
    this.count++;
  };

  this.pop = () => {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    const res = this.storage[this.count];
    delete this.storage[this.count];
    return res;
  };

  this.peek = () => {
    if (this.count === 0) {
      return undefined;
    }

    return this.storage[this.count - 1];
  };

  this.size = () => {
    return this.count;
  };
};

const myStack = new Stack();
myStack.push('yes');
console.log(myStack.peek());
console.log(myStack.size());
myStack.push('2');
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
