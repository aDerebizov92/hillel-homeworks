function checkNumber() {
  let input;
  for (let i = 0; i < 10; i++) {
    input = prompt("Введи число більше 100:");
    if (isNaN(input)) {
      break;
    }
    if (Number(input) > 100) {
      break;
    }
  }
  console.log(input);
}

checkNumber();