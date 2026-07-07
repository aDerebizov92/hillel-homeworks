function average(arr) {
  let numbers = arr.filter(function(item) {
    return typeof item === "number";
  });

  let sum = numbers.reduce(function(acc, n) {
    return acc + n;
  }, 0);

  return sum / numbers.length;
}

let data = [10, "привіт", 20, true, 30];
console.log(average(data));