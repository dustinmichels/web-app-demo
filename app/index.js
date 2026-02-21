// Select elements
const button = document.getElementById("myButton");
const heading = document.getElementById("myTitle");

// List of colors
const colors = ["red", "blue", "green", "purple"];

// Add click event listener
button.addEventListener("click", function () {
  heading.style.color = colors[Math.floor(Math.random() * colors.length)];
});
