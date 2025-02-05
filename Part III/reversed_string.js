const reversedString = (string) => {
  let words = string.split(" ");
  let reversedWord = words.map((word) => {
    return word.split("").reverse().join("");
  });

  return reversedWord.join(" ");
};

const string = "Hello World";
console.log(reversedString(string));
