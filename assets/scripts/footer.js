document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `
  <footer class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-200 mt-10">
    <div class="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <img src="../assets/images/logo.png" alt="Logo" class="w-8 h-8">
        <span class="font-bold text-lg">Ebooks</span>
      </div>
      <div class="flex gap-6" id="contato">
        <a class="text-blue-700" target="_blank" href="https://github.com/TheEddu">GitHub</a>
        <a class="text-blue-700" target="_blank" href="https://www.linkedin.com/in/eduardo-s-b39896205/">Linkedin</a>
        <a class="text-blue-700" target="_blank" href="https://tryhackme.com/p/TheEddu">TryHackMe</a>
      </div>
      <div class="text-sm text-gray-400 mt-2 md:mt-0">
        &copy; 2025 Ebooks.
      </div>
    </div>
  </footer>
  `;
  const footer = document.createElement("div");
  footer.innerHTML = footerHTML;
  document.body.appendChild(footer);
});
