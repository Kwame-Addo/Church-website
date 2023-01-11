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



// select the achievement-block divs
const block1 = document.getElementById("block1");
const block2 = document.getElementById("block2");
const block3 = document.getElementById("block3");

// check if the elements are in view when the page is scrolled
function isInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

// check if the element is in view, if so slide it in from the left
window.addEventListener("scroll", function () {
    if (isInView(block1)) {
        block1.style.transform = "translateX(0)";
    }

    if (isInView(block2)) {
        block2.style.transform = "translateX(0)";
    }

    if (isInView(block3)) {
        block3.style.transform = "translateX(0)";
    }
});

// select the achievement-block divs
const block4 = document.getElementById("block4");
const block5 = document.getElementById("block5");
const block6 = document.getElementById("block6");

// check if the elements are in view when the page is scrolled
function isInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

// check if the element is in view, if so slide it in from the left
window.addEventListener("scroll", function () {
    if (isInView(block4)) {
        block4.style.transform = "translateX(0)";
    }

    if (isInView(block5)) {
        block5.style.transform = "translateX(0)";
    }

    if (isInView(block6)) {
        block6.style.transform = "translateX(0)";
    }
});
