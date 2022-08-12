let number = document.querySelectorAll(".num");
let started = false;

function count(e) {
  let goul = e.dataset.num;
  let counter = setInterval(() => {
    e.textContent++;
    if (e.textContent == goul) {
      clearInterval(counter);
    }
  }, 2000 / goul);
}

window.onscroll = function () {
  if (window.scrollY >= 900) {
    if (!started) {
      number.forEach((ele) => count(ele));
    }
    started = true;
  }
};
