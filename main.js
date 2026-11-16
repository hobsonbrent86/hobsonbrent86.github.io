(function () {
  var agents = window.AGENTS || [];
  var areas = ["All", "Inbound", "Outbound", "Lifecycle", "Operations", "Brand"];
  var pageSize = 8;
  var active = "All";
  var query = "";
  var page = 0;

  var list = document.getElementById("agent-list");
  var chips = document.getElementById("agent-chips");
  var count = document.getElementById("agent-count");
  var empty = document.getElementById("agent-empty");
  var search = document.getElementById("agent-search");
  var pager = document.getElementById("agent-pager");
  var prev = document.getElementById("agent-prev");
  var next = document.getElementById("agent-next");
  var pageLabel = document.getElementById("agent-page");
  var header = document.querySelector(".site-header");

  function matches(agent) {
    if (active !== "All" && agent.area !== active) return false;
    if (!query) return true;
    var hay = (agent.area + " " + agent.name + " " + agent.what).toLowerCase();
    return hay.indexOf(query) !== -1;
  }

  function render() {
    var shown = agents.filter(matches);
    var pages = Math.max(1, Math.ceil(shown.length / pageSize));
    if (page > pages - 1) page = 0;
    var start = page * pageSize;
    var slice = shown.slice(start, start + pageSize);
    list.replaceChildren();
    slice.forEach(function (agent) {
      var row = document.createElement("article");
      row.className = "agent";
      var area = document.createElement("p");
      area.className = "agent-area";
      area.textContent = agent.area;
      var name = document.createElement("h3");
      name.textContent = agent.name;
      var what = document.createElement("p");
      what.textContent = agent.what;
      row.append(area, name, what);
      list.append(row);
    });
    if (!shown.length) count.textContent = "0 of " + agents.length;
    else if (shown.length <= pageSize) count.textContent = shown.length + " of " + agents.length;
    else count.textContent = (start + 1) + "-" + (start + slice.length) + " of " + shown.length;
    empty.hidden = shown.length !== 0;
    pager.hidden = shown.length <= pageSize;
    prev.disabled = page === 0;
    next.disabled = page >= pages - 1;
    pageLabel.textContent = "Page " + (page + 1) + " of " + pages;
  }

  function goTo(nextPage) {
    page = nextPage;
    render();
    var top = list.getBoundingClientRect().top;
    if (top < header.offsetHeight + 12) {
      var y = window.scrollY + top - header.offsetHeight - 16;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  areas.forEach(function (area) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "chip";
    button.textContent = area === "All" ? "All" : area;
    button.setAttribute("aria-pressed", area === active ? "true" : "false");
    button.addEventListener("click", function () {
      active = area;
      page = 0;
      chips.querySelectorAll(".chip").forEach(function (chip) {
        chip.setAttribute("aria-pressed", chip === button ? "true" : "false");
      });
      render();
    });
    chips.append(button);
  });

  search.addEventListener("input", function () {
    query = search.value.trim().toLowerCase();
    page = 0;
    render();
  });

  prev.addEventListener("click", function () { if (page > 0) goTo(page - 1); });
  next.addEventListener("click", function () { goTo(page + 1); });

  render();

  var player = document.getElementById("player");
  var frame = document.getElementById("player-frame");
  var title = document.getElementById("player-title");
  var lastFocus = null;

  function closePlayer() {
    frame.replaceChildren();
    if (player.open) player.close();
    if (lastFocus) lastFocus.focus();
  }

  function openPlayer(id, label) {
    lastFocus = document.activeElement;
    title.textContent = label;
    frame.replaceChildren();
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1";
    iframe.title = label;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    frame.append(iframe);
    player.showModal();
  }

  document.querySelectorAll("[data-video]").forEach(function (node) {
    node.addEventListener("click", function () {
      openPlayer(node.getAttribute("data-video"), node.getAttribute("data-title"));
    });
  });

  document.getElementById("player-close").addEventListener("click", closePlayer);
  player.addEventListener("click", function (event) {
    if (event.target === player) closePlayer();
  });
  player.addEventListener("close", function () {
    frame.replaceChildren();
  });

  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var toggle = document.getElementById("theme-toggle");
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    var light = theme === "light";
    if (light) document.documentElement.setAttribute("data-theme", "light");
    else document.documentElement.removeAttribute("data-theme");
    toggle.setAttribute("aria-pressed", light ? "true" : "false");
    toggle.textContent = light ? "Dark mode" : "Light mode";
    themeMeta.setAttribute("content", light ? "#f6f3ec" : "#0c0b09");
  }

  applyTheme(document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark");
  toggle.addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    try { localStorage.setItem("theme", next); } catch (e) {}
    applyTheme(next);
  });
})();
