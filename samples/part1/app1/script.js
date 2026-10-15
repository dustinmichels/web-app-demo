const button = document.getElementById("myButton");
const header = document.querySelector("h1");

let colors = [];
let counter = 0;

fetch("data/colors.json")
  .then((response) => response.json())
  .then((data) => {
    colors = data.colors.map((c) => c.hex);
    header.style.color = colors[counter];
  });

button.addEventListener("click", () => {
  if (!colors.length) return;
  counter = (counter + 1) % colors.length;
  header.style.color = colors[counter];
});
