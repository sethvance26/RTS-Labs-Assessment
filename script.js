
// Print the number of integers in an array that are above the given input and
// the number that are below, e.g. for the array [1, 5, 2, 1, 10] with input 6,
// print “above: 1, below: 4”

const array = [1, 5, 2, 1, 10];
let input = 6;

const IntRange = function (input, array) {
  let above = 0;
  let below = 0;

  for (var i = 0; i < array.length; i++) {
    let currentElement = array[i];
    if (currentElement > input) {
      above++;
    } else if (currentElement < input) {
      below++;
    }
  }
  console.log(`above: ${above} below: ${below}`);
};

IntRange(input, array);

// Rotate the characters in a string by a given input and have the overflow appear
// at the beginning, e.g. “MyString” rotated by 2 is “ngMyStri”.

const stringRotation = function (text, input) {
  return (
    text.substring(text.length - input, text.length) +
    text.substring(0, text.length - input)
  );
};

console.log(stringRotation("MyString", 1));
console.log(stringRotation("MyString", 2));
console.log(stringRotation("MyString", -2));

// Using the scripting language of your choice, write a script that does the following:

// Take a path to a text file as an argument (e.g. hello.sh path/to/file.txt)

// Add “Hello World” to a new line at the beginning of the file

// Add “Goodbye” to a new line at the end of the file


let fs = require("fs");

fs.writeFile("./hello.txt", "Hello world!", (err) => {
  // If an error occurred, show it and return
  if (err) return console.error(err);
  // Successfully wrote to the file!
});

fs.appendFile("./hello.txt", "\nGoodbye", (err) => {
  // If an error occurred, show it and return
  if (err) return console.error(err);
  // Successfully wrote to the file!
});
