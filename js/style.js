const topContainer = document.querySelector('.top-container');
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > topContainer.offsetHeight) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
$('.back-to-top').on('click', function(event) {
  event.preventDefault();
  $('html, body').animate({scrollTop: 0}, 500);
});