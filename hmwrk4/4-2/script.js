// Запитуємо в користувача тризначне число
const input = prompt("Введи тризначне число:");
const number = Number(input); // перетворюємо рядок на число

// Дістаємо кожну цифру окремо.
const hundreds = Math.floor(number / 100); // сотні: 736 -> 7
const tens = Math.floor(number / 10) % 10; // десятки: 736 -> 3
const units = number % 10; // одиниці: 736 -> 6

// 1) Чи всі три цифри однакові?
const allSame = hundreds === tens && tens === units;

// 2) Чи є серед цифр хоча б дві однакові?
const anySame = hundreds === tens || tens === units || hundreds === units;

console.log(`Число: ${number}`);
console.log(`Усі цифри однакові? ${allSame}`);
console.log(`Є однакові цифри? ${anySame}`);