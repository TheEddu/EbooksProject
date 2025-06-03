function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.s-cards-carousel');
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -72 * (Number(selectedItem) - 1);
  if (rotateY) {
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
    carousel.style.transform = newTransform;
  } else {
    carousel.style.transform = `translateZ(-40vw) rotateY(${rotateYDeg}deg)`;
  }
  const activeButtonElement = document.querySelector('.carousel-section .s-controller__button--active');
  if (activeButtonElement) activeButtonElement.classList.remove('s-controller__button--active');
  selectedButtonElement.classList.add('s-controller__button--active');
}

function selectCarouselItem2(selectedButtonElement) {
  const selectedItem = Number(selectedButtonElement.id) - 6 + 1;
  const carousel = document.querySelector('.s-cards-carousel-2');
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -72 * (selectedItem - 1);
  if (rotateY) {
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
    carousel.style.transform = newTransform;
  } else {
    carousel.style.transform = `translateZ(-40vw) rotateY(${rotateYDeg}deg)`;
  }
  // Remove apenas do segundo carrossel
  const section = selectedButtonElement.closest('.carousel-section');
  const activeButtonElement = section.querySelector('.s-controller__button--active');
  if (activeButtonElement) activeButtonElement.classList.remove('s-controller__button--active');
  selectedButtonElement.classList.add('s-controller__button--active');
}

// Hover effect para ambos carrosseis
function handleMouseEnter() {
  this.classList.add('s-card--hovered');
  document.body.id = `${this.id}-hovered`;
}
function handleMouseLeave() {
  this.classList.remove('s-card--hovered');
  document.body.id = '';
}
function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card');
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}
document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);
