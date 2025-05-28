document.addEventListener("DOMContentLoaded", function () {
  fetch("/assets/partials/footer.html")
    .then(response => response.text())
    .then(data => {
      const footer = document.createElement("div");
      footer.innerHTML = data;
      document.body.appendChild(footer);
    });
});
