/* DOGS ID embed — drop on any DOGS site to gate it behind the age check.
   Usage:
     <script src="https://id.wearedogs.net/embed.js" data-age="21"></script>
   Flow: first visit -> fullscreen gate (id.wearedogs.net) -> verified ->
   redirected back with #dogs-verified=21 -> remembered on this device. */
(function () {
  var s = document.currentScript;
  var age = (s && s.getAttribute("data-age")) || "21";
  var key = "dogs-id-verified-" + age;

  function flagged() {
    try { return localStorage.getItem(key) === "1"; } catch (e) { return false; }
  }
  function flag() {
    try { localStorage.setItem(key, "1"); } catch (e) {}
  }

  // Coming back from the gate? The gate appends #dogs-verified=<age>.
  if (/(^|&)dogs-verified=/.test(location.hash)) {
    flag();
    history.replaceState(null, "", location.pathname + location.search);
    return;
  }
  if (flagged()) return;

  var f = document.createElement("iframe");
  var back = location.href.split("#")[0];
  f.src = "https://id.wearedogs.net/?age=" + encodeURIComponent(age) +
          "&redirect=" + encodeURIComponent(back) +
          "&for=" + encodeURIComponent(document.title || "this site");
  f.setAttribute("title", "Age verification");
  f.style.cssText = "position:fixed;inset:0;width:100%;height:100%;border:0;" +
                    "z-index:2147483647;background:#0a0a0b;";
  document.documentElement.appendChild(f);
})();
