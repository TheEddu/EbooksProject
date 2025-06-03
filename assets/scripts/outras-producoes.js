document.addEventListener("DOMContentLoaded", function () {
  // Só insere se houver um elemento com id 'outras-producoes'
  const container = document.getElementById('outras-producoes');
  if (!container) return;
  container.innerHTML = `
    <h2 class="text-2xl font-bold mb-4 text-gray-800">Outras Produções</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <a href="https://theeddu.github.io/Portfolio-Labs/" target="_blank" class="bg-white rounded-lg shadow-md p-4 hover:bg-gray-100 transition text-center font-semibold text-blue-700">
        <img src="https://image.lexica.art/full_webp/6957307a-3542-4118-ae89-54a02851ef3d" alt="PortfolioLabs">
        PortfolioLabs
      </a>
      <a href="https://theeddu.github.io/PersonalPortfolioPage/" target="_blank" class="bg-white rounded-lg shadow-md p-4 hover:bg-gray-100 transition text-center font-semibold text-blue-700">
        <img src="../assets/images/logo.png" alt="PersonalPortfolioPage">
        PersonalPortfolioPage
      </a>
      <a href="https://theeddu.github.io/Cyber-Blog/" target="_blank" class="bg-white rounded-lg shadow-md p-4 hover:bg-gray-100 transition text-center font-semibold text-blue-700">
        <img src="https://image.lexica.art/full_webp/03eb65a7-7433-406a-8934-7d8be781271e" alt="Cyber-Blog">
        Cyber-Blog
      </a>
      <a href="https://theeddu.github.io/UpgradingMind/" target="_blank" class="bg-white rounded-lg shadow-md p-4 hover:bg-gray-100 transition text-center font-semibold text-blue-700">
        <img src="https://image.lexica.art/full_webp/56b19b28-e169-4d0c-a8d5-317cd95167ed" alt="UpgradingMind">
        UpgradingMind
      </a>
    </div>
  `;
});
