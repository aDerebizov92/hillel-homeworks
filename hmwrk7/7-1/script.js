function removeChars(str, chars) {
  return str.split("").filter(function(char) {
    return !chars.includes(char);
  }).join("");
}

let userStr = prompt("Введи рядок:");
let userChars = prompt("Введи літери:").split("");

console.log(removeChars(userStr, userChars))