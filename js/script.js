// Countdown to the event (index.html)
(function () {
  var box = document.getElementById("countdown");
  if (!box) return;
  var target = new Date("2026-11-20T09:00:00").getTime();

  function tick() {
    var diff = target - Date.now();
    if (diff <= 0) {
      box.textContent = "TechVision 2026 is live!";
      return;
    }
    var d = Math.floor(diff / 86400000);
    var h = Math.floor((diff % 86400000) / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);
    box.textContent = d + " days  " + h + " hrs  " + m + " min  " + s + " sec";
  }
  tick();
  setInterval(tick, 1000);
})();

// Simple registration form check (contact.html)
(function () {
  var form = document.getElementById("regForm");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var msg = document.getElementById("formMsg");
    var okEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

    if (name === "" || !okEmail) {
      msg.textContent = "Please enter your name and a valid email address.";
      msg.className = "form-msg err";
      return;
    }
    msg.textContent = "Thank you, " + name + "! Your registration for TechVision 2026 has been received.";
    msg.className = "form-msg ok";
    form.reset();
  });
})();
