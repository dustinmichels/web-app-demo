#!/usr/bin/env bash
# Creates the files produced by the Part 1 tutorial (part1_the_web.md)

set -e

mkdir -p part1/app1/data

# ── index.html ────────────────────────────────────────────────────────────────
cat > part1/app1/index.html << 'EOF'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My App</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is my first website</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <div class="box">This is stuff inside a div</div>
    <button id="myButton">Change header color</button>
    <script src="script.js"></script>
  </body>
</html>
EOF

# ── style.css ─────────────────────────────────────────────────────────────────
cat > part1/app1/style.css << 'EOF'
body {
  font-family: Arial, sans-serif;
}

.box {
  border: 1px solid black;
  padding: 10px;
}
EOF

# ── script.js ─────────────────────────────────────────────────────────────────
cat > part1/app1/script.js << 'EOF'
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
EOF

# ── data/colors.json ──────────────────────────────────────────────────────────
cat > part1/app1/data/colors.json << 'EOF'
{
  "colors": [
    { "name": "red", "hex": "#ff0000" },
    { "name": "blue", "hex": "#0000ff" },
    { "name": "green", "hex": "#00ff00" },
    { "name": "orange", "hex": "#ffa500" },
    { "name": "purple", "hex": "#800080" }
  ]
}
EOF

echo "Created:"
echo "  part1/app1/index.html"
echo "  part1/app1/style.css"
echo "  part1/app1/script.js"
echo "  part1/app1/data/colors.json"
echo ""
echo "To serve locally: cd part1/app1 && npx serve ."
