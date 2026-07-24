let img = document.createElement("img");
let randomNum = Math.floor(Math.random() * 9) + 1;

img.src = "assets/" + randomNum + ".avif";
document.body.appendChild(img);