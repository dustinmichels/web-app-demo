// When the docsify-copy-code button is clicked on a ```diff block, copy
// paste-ready code instead of the raw diff: "+" lines become plain code and
// "-" lines are commented out.
//
// docsify-copy-code copies via document.execCommand("copy"), which fires a
// synchronous "copy" event; we swap the clipboard payload there.
(function () {
  let pendingDiff = null;

  // Comment syntax is guessed from the block's content:
  // HTML tags -> <!-- -->, JS (has "=") -> //, otherwise CSS -> /* */.
  function commentStyle(lines) {
    if (lines.some((l) => l.trimStart().startsWith("<"))) return ["<!-- ", " -->"];
    if (lines.some((l) => l.includes("="))) return ["// ", ""];
    return ["/* ", " */"];
  }

  function diffToCode(diff) {
    // Each diff line is: marker column ("+", "-" or " "), a space, then code.
    const lines = diff.replace(/\n$/, "").split("\n");
    const [open, close] = commentStyle(lines.map((l) => l.slice(2)));
    const out = [];
    for (const line of lines) {
      const code = line.slice(2);
      if (line[0] !== "-") {
        out.push(code);
      } else if (code.trim()) {
        const indent = code.match(/^\s*/)[0];
        out.push(indent + open + code.trimStart() + close);
      }
      // Removed blank lines are dropped.
    }
    return out.join("\n") + "\n";
  }

  // Capture phase: runs before the copy-code plugin's bubble-phase handler.
  document.addEventListener(
    "click",
    (evt) => {
      const button = evt.target.closest(".docsify-copy-code-button");
      const pre = button && button.closest('pre[data-lang="diff"]');
      if (!pre) return;
      pendingDiff = pre.querySelector("code");
      setTimeout(() => (pendingDiff = null)); // in case no copy event fires
    },
    true,
  );

  document.addEventListener("copy", (evt) => {
    if (!pendingDiff) return;
    evt.clipboardData.setData("text/plain", diffToCode(pendingDiff.textContent));
    evt.preventDefault();
    pendingDiff = null;
  });
})();
