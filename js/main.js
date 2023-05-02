const elems = document.querySelectorAll(".layer");
const layer1 = document.querySelector(".layer-1");
const layer2 = document.querySelector(".layer-2");
const layer3 = document.querySelector(".layer-3");
const layer4 = document.querySelector(".layer-4");
const layer5 = document.querySelector(".layer-5");
const layer6 = document.querySelector(".layer-6");
const body = document.querySelector("body");
//========================================================
setTimeout(function () {
  elems.forEach(function (elem, index) {
    elem.style.animation = "none";
  });
}, 1500);
//========================================================
document.body.addEventListener("mousemove", function (e) {
  if (!e.currentTarget.dataset.move) {
    elems.forEach(function (elem, index) {
      if (elem.getAttribute("style")) {
        elem.style.transition = "all 0.5s";
        elem.style.transform = "none";
      }
    });
  }
  e.currentTarget.dataset.move = true;
  let width = window.innerWidth / 2;
  let mouseMoved2 = (width - e.pageX) / 20;
  let mouseMoved3 = (width - e.pageX) / 20;
  let mouseMoved4 = (width - e.pageX) / 30;
  let mouseMoved5 = (width - e.pageX) / 20;
  let mouseMoved6 = (width - e.pageX) / 20;
  layer2.style.transform = "translateX(" + mouseMoved2 + "px)";
  layer3.style.transform = "translatey(" + mouseMoved3 + "px)";
  layer4.style.transform = "translateX(" + mouseMoved4 + "px)";
  layer5.style.transform = "translateX(" + mouseMoved5 + "px)";
  layer6.style.transform = "translateX(" + mouseMoved6 + "px)";
});
//========================================================
document.body.addEventListener("mouseleave", function (e) {
  elems.forEach(function (elem, index) {
    elem.style.transition = "all 0.5s";
    elem.style.transform = "none";
  });
});
//========================================================
document.body.addEventListener("mouseenter", function (e) {
  elems.forEach(function (elem, index) {
  layer1.style.backgroundColor = "inherit";
  body.style.backgroundColor = "inherit";
    setTimeout(function () {
      elems.forEach(function (elem, index) {
        elem.style.transition = "none";
      });
    }, 500);
  });
});
//========================================================

const color = document.querySelector("div.total-container");
color.addEventListener("mousemove", function (e) {
  const xx = e.clientX;
  const yy = e.clientY;
  const bgcolor = `rgb(${(xx)},${(yy)},100`;
  color.style.backgroundColor = bgcolor;
});
color.addEventListener("mouseleave", function () {
  color.style.backgroundColor = "#e5c5ff";
});
