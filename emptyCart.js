let emptyCart = document.getElementsByClassName("emptyCart")[0];
if (emptyCart) {
  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs((slideIndex += n));
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slider-product");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length - 3;
    }
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove('shown');
    }
    for (i = -1; i <= 2; i++) {
      x[slideIndex + i].classList.add('shown');
    }
  }
}
