const ruBtn = document.getElementById('ruBtn');
const uzBtn = document.getElementById('uzBtn');

ruBtn.addEventListener('click', () => {
  ruBtn.classList.add('active');
  uzBtn.classList.remove('active');
  toggleLang('ru');
});

uzBtn.addEventListener('click', () => {
  uzBtn.classList.add('active');
  ruBtn.classList.remove('active');
  toggleLang('uz');
});

function toggleLang(lang) {
  const elementsRu = document.querySelectorAll('[data-lang$="-ru"]');
  const elementsUz = document.querySelectorAll('[data-lang$="-uz"]');

  if (lang === 'ru') {
    elementsRu.forEach(el => el.classList.remove('hidden'));
    elementsUz.forEach(el => el.classList.add('hidden'));
  } else {
    elementsRu.forEach(el => el.classList.add('hidden'));
    elementsUz.forEach(el => el.classList.remove('hidden'));
  }
}
