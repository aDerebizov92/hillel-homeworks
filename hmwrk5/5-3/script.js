const number = Number(prompt("Введи число"));
for (let i = 1; i <= 100; i++) {
    if ((i * i) <= number) {
        console.log(i);
    }
}