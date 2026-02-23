// get the button and header elements
const button = document.getElementById("myButton");
const header = document.querySelector("h1");
// make a list of colors
const colors = ["red", "blue", "green", "orange", "purple"];
// create a counter and set it to 0
// set header to the first item in the list
let counter = 0;
header.style.color = colors[counter];
// add a click event listener to the button
button.addEventListener("click", () => {
  // increment the counter
  counter = (counter + 1) % colors.length;
  // change the color of the header
  header.style.color = colors[counter];
});
