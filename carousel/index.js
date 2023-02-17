const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const imgArr = document.querySelectorAll('.carousel-box li')
const indiList = document.querySelector('.indicator-list');
let curIdx = 0;
let preIdx = (curIdx === 0) ? imgArr.length - 1 : curIdx - 1;
let nexIdx = (curIdx === imgArr.length - 1) ? imgArr.length - 1 : curIdx + 1;
let isRight = true;
let isMoving = false;
imgArr[curIdx].classList.add('active');
document.querySelector('.carousel-box').addEventListener('transitionend', transitionEndEventListener);
for (let item of imgArr) {
  const liItem = document.createElement('li');
  if (item.classList.contains('active')) {
    liItem.className = 'active';
  }
  indiList.appendChild(liItem);
}

const indiArr = document.querySelectorAll('.indicator-list li');
btnNext.addEventListener('click', e => { doCarousel(1) });
btnPrev.addEventListener('click', e => { doCarousel(-1) });
// doCarousel(1);

function doCarousel(idx) {
  isRight = (idx > 0);

  if (isRight) {
    if (imgArr[preIdx].classList.contains('prev'))
      imgArr[preIdx].classList.remove('prev');

    imgArr[curIdx].classList.add('left');
    imgArr[nexIdx].classList.add('next');
    imgArr[nexIdx].classList.add('left');
  } else {
    if (imgArr[nexIdx].classList.contains('next'))
      imgArr[nexIdx].classList.remove('next');

    imgArr[curIdx].classList.add('right');
    imgArr[preIdx].classList.add('prev');
    imgArr[preIdx].classList.add('right');
  }
  indiList.childNodes[curIdx + 1].classList.remove('active');
  calcIdx(curIdx + idx, isRight);
}

function transitionEndEventListener(e) {
  if (isRight) {
    imgArr[preIdx].classList.remove('active');
    imgArr[preIdx].classList.remove('left');
    imgArr[curIdx].classList.remove('next');
    imgArr[curIdx].classList.remove('left');
    imgArr[curIdx].classList.add('active');
  } else {
    imgArr[nexIdx].classList.remove('active');
    imgArr[nexIdx].classList.remove('right');
    imgArr[curIdx].classList.remove('prev');
    imgArr[curIdx].classList.remove('right');
    imgArr[curIdx].classList.add('active');
  }
  indiList.childNodes[curIdx + 1].classList.add('active');
}

function calcIdx(idx, bRight) {
  idx = (idx < 0) ? 0 : idx;
  curIdx = (idx === imgArr.length) ? 0 : idx;
  if (bRight) {
    preIdx = (curIdx === 0) ? imgArr.length - 1 : curIdx - 1;
    nexIdx = (curIdx === imgArr.length - 1) ? 0 : curIdx + 1;
  } else {
    nexIdx = (curIdx === 0) ? imgArr.length - 1 : curIdx - 1;
    preIdx = (curIdx === imgArr.length - 1) ? 0 : curIdx + 1;
  }
}