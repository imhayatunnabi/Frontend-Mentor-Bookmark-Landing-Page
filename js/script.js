const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); // closest is use for span element
  // console.log(clicked);
  // Guard clause
  if (!clicked) return; //more modern way. if the clicked valu is null then the function will be imidiatly finished

  //Remove active classes
  tabs.forEach((t) => t.classList.remove('operations__tab--active'));
  tabsContent.forEach((c) => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

const textBtn = document.querySelectorAll('.text');
const hiddenBox = document.querySelectorAll('.hidden-box');

textBtn.forEach((el, i) => {
  el.addEventListener('click', function () {
    hiddenBox[i].classList.toggle('open');
    textBtn[i].classList.toggle('rotate');
  });
});

const navigationBtn = document.querySelector('.btn-mobile-nav');

navigationBtn.addEventListener('click', function (e) {
  document.querySelector('.header').classList.toggle('nav-open');
});
