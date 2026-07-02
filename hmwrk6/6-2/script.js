let numbers = [45, 200, 80, 150];
let result = numbers.filter(function(n) {
  return n % 2 === 0;
});
console.log(result);