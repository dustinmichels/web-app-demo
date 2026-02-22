// Select elements
const button = document.getElementById("myButton");
const heading = document.getElementById("myTitle");

// Load colors from JSON and attach click handler
fetch("colors.json")
  .then((res) => res.json())
  .then((data) => {
    button.addEventListener("click", function () {
      const random =
        data.colors[Math.floor(Math.random() * data.colors.length)];
      heading.style.color = random.code;
    });
  });
