const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Обработчик события прокрутки
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) { // Показывать кнопку после пролистывания на 300px
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// tarifs block script

const arr = [
  'ids',
  'ids1',
  'ids2',
  'loadingBlock'
]
function showBlock(id) {
    document.getElementById('loadingBlock').style.display = 'block';
    arr.forEach(e => {
      if (e !== arr[3]) {
        document.getElementById(e).style.display = 'none';
      }
    })
    setTimeout(() => {
      arr.forEach(e => {
        if (arr.indexOf(e) === id) {
          document.getElementById(e).style.display = 'block';
        } else {
          document.getElementById(e).style.display = 'none';
        }
      })
    },2000)
}
