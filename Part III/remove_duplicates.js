const removeDuplicates = (arr) => {
  const newArr = [...new Set(arr)];
  return newArr;
};

const arr = [1, 1, 2, 3, 4, 4, 4, 4, 5];
const arrName = ["Ralph", "Ralph", "Gerard", "Magat", "Magat"];

console.log(removeDuplicates(arr));
console.log(removeDuplicates(arrName));
