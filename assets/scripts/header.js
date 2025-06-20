document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
  <header class="bg-gradient-to-r from-rose-700 via-red-600 to-pink-500 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <a href="../index.html" class="flex items-center gap-3">
        <img src="../assets/images/logo.png" alt="Logo" class="w-10 h-10 drop-shadow-lg">
        <span class="text-2xl font-bold text-white tracking-wide">Ebooks</span>
      </a>
      <nav class="hidden md:flex gap-8">
        <a href="../index.html" class="text-white font-semibold hover:text-yellow-200 transition">Home</a>
        <a href="#contato" class="text-white font-semibold hover:text-yellow-200 transition">Contato</a>
      </nav>
      <button class="md:hidden text-white focus:outline-none" id="menu-toggle">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
    <div class="md:hidden px-4 pb-4 hidden" id="mobile-menu">
      <nav class="flex flex-col gap-2">
        <a href="../index.html" class="text-white font-semibold hover:text-yellow-200 transition">Home</a>
        <a href="#contato" class="text-white font-semibold hover:text-yellow-200 transition">Contato</a>
      </nav>
    </div>
  </header>
  `;
  const header = document.createElement("div");
  header.innerHTML = headerHTML;
  document.body.insertBefore(header, document.body.firstChild);
});
