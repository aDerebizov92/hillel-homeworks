function removeElement(array, item) {
  let index = array.indexOf(item);
  if (index >= 0) {
    array.splice(index, 1);
  }
};

const array = [1, 3, 4, 6, 2, 5, 7];
removeElement(array, 4);
console.log(array);