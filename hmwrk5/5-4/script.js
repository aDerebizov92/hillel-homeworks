const number = Number(prompt("Введи число"));
let isPrime = true;
if (number <= 1) {
  isPrime = false;
}
for (let i = 2; i <= number - 1; i++) {
  if (number % i === 0) {
    isPrime = false;
  }
}
if (isPrime) {
  console.log(`${number} — просте число`);
} else {
  console.log(`${number} — не просте число`);
}