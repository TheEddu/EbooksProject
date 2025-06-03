document.addEventListener("DOMContentLoaded", function () {
  fetch("../assets/partials/header.html")
    .then(response => response.text())
    .then(data => {
      const header = document.createElement("div");
      header.innerHTML = data;
      document.body.insertBefore(header, document.body.firstChild);
    });
});
