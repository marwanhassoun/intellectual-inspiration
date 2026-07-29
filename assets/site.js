
const button = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
if (button && nav) {
  button.addEventListener('click', () => nav.classList.toggle('open'));
}
document.getElementById('year').textContent = new Date().getFullYear();
