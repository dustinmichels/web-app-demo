// Docsify plugin: nest each heading's sub-list inside its own <li>.
//
// Docsify renders the sidebar as  <li>App1</li><ul>…children…</ul>  (siblings),
// so CSS can't treat "App1 and its children" as one box. Moving the <ul> into
// the <li> makes every section a single element that custom.css can outline.
(function () {
  function sidebarGroups(hook) {
    hook.doneEach(() => {
      for (const ul of document.querySelectorAll(".sidebar-nav ul > ul")) {
        const li = ul.previousElementSibling;
        if (!li || li.tagName !== "LI") continue;
        // Docsify toggles .collapse on a link's <li> when the link is directly
        // followed by .app-sub-sidebar; rename so headings don't become collapsible.
        ul.classList.replace("app-sub-sidebar", "sidebar-children");
        li.appendChild(ul);
      }
    });
  }

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = [sidebarGroups].concat(window.$docsify.plugins || []);
})();
