// Close Review Us Pop Up
function closeReview() {
  let reviewUs = document.querySelector(".review-us");
  reviewUs.style.transform = "translate(-100%, 0)";
  reviewUs.style.opacity = "0";
}

// Testimonials
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

// That 3 tabs
function openSection(evt, cityName) {
  var i, x, tab;
  x = document.getElementsByClassName("sections");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tab = document.getElementsByClassName("tabs");
  for (i = 0; i < x.length; i++) {
    tab[i].className = tab[i].className.replace(" selected-tab", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " selected-tab";
}

/* Tote Bag */
function whiteTote() {
  let image = document.getElementById("tote");
  document.getElementById("whiteTote").classList.add("colorChosen");
  document.getElementById("blackTote").classList.remove("colorChosen");
  image.src =
    "Product/accessories/all-over-print-tote-black-15x15-mockup-610f582cde695.png";
  image.onmousemove = function () {
    image.src =
      "Product/accessories/all-over-print-tote-black-15x15-mockup-610f582cde72f.png";
  };
  image.onmouseout = function () {
    image.src =
      "Product/accessories/all-over-print-tote-black-15x15-mockup-610f582cde695.png";
  };
}
function blackTote() {
  let image = document.getElementById("tote");
  document.getElementById("blackTote").classList.add("colorChosen");
  document.getElementById("whiteTote").classList.remove("colorChosen");
  document.query;
  image.src =
    "Product/accessories/all-over-print-tote-black-15x15-mockup-610f574e11d24.png";
  image.onmousemove = function () {
    image.src =
      "Product/accessories/all-over-print-tote-black-15x15-mockup-610f574e11f58.png";
  };
  image.onmouseout = function () {
    image.src =
      "Product/accessories/all-over-print-tote-black-15x15-mockup-610f574e11d24.png";
  };
}

/*Hoodies Premium*/
function beigeHoodiesPremium() {
  let image = document.getElementById("HoodiesPremium");
  document.getElementById("beigeHoodiesPremium").classList.add("colorChosen");
  document
    .getElementById("lightGrayHoodiesPremium")
    .classList.remove("colorChosen");
  document
    .getElementById("blackHoodiesPremium")
    .classList.remove("colorChosen");
  image.src =
    "Product/hoodies/beige-Hoodie/unisex-sueded-fleece-hoodie-heather-oat-front-61167de6441b1.png";
  image.onmousemove = function () {
    image.src =
      "Product/hoodies/beige-Hoodie/unisex-sueded-fleece-hoodie-heather-oat-front-61167de644282.png";
  };
  image.onmouseout = function () {
    image.src =
      "Product/hoodies/beige-Hoodie/unisex-sueded-fleece-hoodie-heather-oat-front-61167de6441b1.png";
  };
}
function lightGrayHoodiesPremium() {
  let image = document.getElementById("HoodiesPremium");
  document
    .getElementById("lightGrayHoodiesPremium")
    .classList.add("colorChosen");
  document
    .getElementById("beigeHoodiesPremium")
    .classList.remove("colorChosen");
  document
    .getElementById("blackHoodiesPremium")
    .classList.remove("colorChosen");
  image.src =
    "Product/hoodies/lightGray-Hoodie/unisex-sueded-fleece-hoodie-athletic-heather-front-61167de643d1e.png";
  image.onmousemove = function () {
    image.src =
      "Product/hoodies/lightGray-Hoodie/unisex-sueded-fleece-hoodie-athletic-heather-front-61167de643f36.png";
  };
  image.onmouseout = function () {
    image.src =
      "Product/hoodies/lightGray-Hoodie/unisex-sueded-fleece-hoodie-athletic-heather-front-61167de643d1e.png";
  };
}
function blackHoodiesPremium() {
  let image = document.getElementById("HoodiesPremium");
  document.getElementById("blackHoodiesPremium").classList.add("colorChosen");
  document
    .getElementById("beigeHoodiesPremium")
    .classList.remove("colorChosen");
  document
    .getElementById("lightGrayHoodiesPremium")
    .classList.remove("colorChosen");
  image.src =
    "Product/hoodies/black-Hoodie/unisex-sueded-fleece-hoodie-black-heather-front-61167da80db23.png";
  image.onmousemove = function () {
    image.src =
      "Product/hoodies/black-Hoodie/unisex-sueded-fleece-hoodie-black-heather-front-61167da80dd0a.png";
  };
  image.onmouseout = function () {
    image.src =
      "Product/hoodies/black-Hoodie/unisex-sueded-fleece-hoodie-black-heather-front-61167da80db23.png";
  };
}

/* Backpack */
function lightGrayBackpack() {
  let image = document.getElementById("backpack");
  document.getElementById("lightGrayBackpack").classList.add("colorChosen");
  document.getElementById("blackBackpack").classList.remove("colorChosen");
  image.src =
    "Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-grey-marl-front-610bfcc3352d5.png";
  image.onmousemove = function () {
    image.src =
      "Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-grey-marl-back-610bfcc33553b.png";
  };
  image.onmouseout = function () {
    image.src =
      "Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-grey-marl-front-610bfcc3352d5.png";
  };
}
function blackBackpack() {
  let image = document.getElementById("backpack");
  document.getElementById("blackBackpack").classList.add("colorChosen");
  document.getElementById("lightGrayBackpack").classList.remove("colorChosen");
  image.src =
    "Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-anthracite-front-610bfcc3353b4.png";
  image.onmousemove = function () {
    image.src =
      "Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-anthracite-back-610bfcc335420.png";
  };
  image.onmouseout = function () {
    image.src =
      "Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-anthracite-front-610bfcc3353b4.png";
  };
}

/* classic shirt */
function whiteShirtTxt() {
  let image = document.getElementById("shirtTxt");
  document.getElementById("whiteTxt").classList.add("colorChosen");
  document.getElementById("beigeTxt").classList.remove("colorChosen");
  document.getElementById("lightGrayTxt").classList.remove("colorChosen");
  document.getElementById("blackTxt").classList.remove("colorChosen");
  image.src =
    "Product/teeShirt/white-Tee/adult-quality-tee-white-front-60e814c22d2f0.png";
  image.onmousemove = function () {
    image.src =
      "Product/teeShirt/white-Tee/adult-quality-tee-white-front-60e814c22d568.png";
  };
  image.onmouseout = function () {
    image.src =
      "Product/teeShirt/white-Tee/adult-quality-tee-white-front-60e814c22d2f0.png";
  };
}
function blackShirtTxt() {
  let image = document.getElementById("shirtTxt");
  document.getElementById("blackTxt").classList.add("colorChosen");
  document.getElementById("whiteTxt").classList.remove("colorChosen");
  document.getElementById("beigeTxt").classList.remove("colorChosen");
  document.getElementById("lightGrayTxt").classList.remove("colorChosen");
  image.src =
    "Product/teeShirt/black-Tee/adult-quality-tee-black-front-2-60e8145b2fc6b.png";
  image.onmousemove = function () {
    image.src =
      "Product/teeShirt/black-Tee/adult-quality-tee-black-front-60e8145b2fcdf.png";
  };
  image.onmouseout = function () {
    image.src =
      "Product/teeShirt/black-Tee/adult-quality-tee-black-front-2-60e8145b2fc6b.png";
  };
}
function beigeShirtTxt() {
  let image = document.getElementById("shirtTxt");
  document.getElementById("beigeTxt").classList.add("colorChosen");
  document.getElementById("whiteTxt").classList.remove("colorChosen");
  document.getElementById("lightGrayTxt").classList.remove("colorChosen");
  document.getElementById("blackTxt").classList.remove("colorChosen");
  image.src =
    "Product/teeShirt/beige-Tee/adult-quality-tee-light-beige-front-60e814c22cfff.png";
  image.onmousemove = function () {
    image.src =
      "Product/teeShirt/beige-Tee/adult-quality-tee-light-beige-front-60e814c22ce03.png";
  };
  image.onmouseout = function () {
    image.src =
      "Product/teeShirt/beige-Tee/adult-quality-tee-light-beige-front-60e814c22cfff.png";
  };
}
function lightGrayShirtTxt() {
  let image = document.getElementById("shirtTxt");
  document.getElementById("lightGrayTxt").classList.add("colorChosen");
  document.getElementById("whiteTxt").classList.remove("colorChosen");
  document.getElementById("beigeTxt").classList.remove("colorChosen");
  document.getElementById("blackTxt").classList.remove("colorChosen");
  image.src =
    "Product/teeShirt/lightGray-Tee/adult-quality-tee-light-grey-front-2-60e8145b312ed.png";
  image.onmousemove = function () {
    image.src =
      "Product/teeShirt/lightGray-Tee/adult-quality-tee-light-grey-front-60e8145b3146b.png";
  };
  image.onmouseout = function () {
    image.src =
      "Product/teeShirt/lightGray-Tee/adult-quality-tee-light-grey-front-2-60e8145b312ed.png";
  };
}

/*Sweater with logo*/
function whiteLogoSweater() {
  let image = document.getElementById("LogoSweater");
  document.getElementById("whiteLogoSweater").classList.add("colorChosen");
  document.getElementById("blackLogoSweater").classList.remove("colorChosen");
  image.src =
    "Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-60e80cba6ef27.png";
  image.onmousemove = function () {
    image.src =
      "Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-60e80cba6f73c.png";
  };
  image.onmouseout = function () {
    image.src =
      "Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-60e80cba6ef27.png";
  };
}
function blackLogoSweater() {
  let image = document.getElementById("LogoSweater");
  document.getElementById("blackLogoSweater").classList.add("colorChosen");
  document.getElementById("whiteLogoSweater").classList.remove("colorChosen");
  image.src =
    "Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-60e80d4dcb3bd.png";
  image.onmousemove = function () {
    image.src =
      "Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-60e80d4dcd31f.png";
  };
  image.onmouseout = function () {
    image.src =
      "Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-60e80d4dcb3bd.png";
  };
}

/* Classic Shorts */
function blackClassicShorts() {
  let image = document.getElementById("ClassicShorts");
  document.getElementById("blackClassicShorts").classList.add("colorChosen");
  document.getElementById("whiteClassicShorts").classList.remove("colorChosen");
  image.src =
    "Product/shorts/black-Short/mens-fleece-shorts-black-front-611920673f39b.png";
  image.onmousemove = function () {
    image.src =
      "Product/shorts/black-Short/mens-fleece-shorts-black-front-611920673f190.png";
  };
  image.onmouseout = function () {
    image.src =
      "Product/shorts/black-Short/mens-fleece-shorts-black-front-611920673f39b.png";
  };
}
function whiteClassicShorts() {
  let image = document.getElementById("ClassicShorts");
  document.getElementById("whiteClassicShorts").classList.add("colorChosen");
  document.getElementById("blackClassicShorts").classList.remove("colorChosen");
  image.src =
    "Product/shorts/white-Short/all-over-print-mens-athletic-long-shorts-white-front-611911368fc76.png";
  image.onmousemove = function () {
    image.src =
      "Product/shorts/white-Short/all-over-print-mens-athletic-long-shorts-white-left-611910b9e56fc.png";
  };
  image.onmouseout = function () {
    image.src =
      "Product/shorts/white-Short/all-over-print-mens-athletic-long-shorts-white-front-611911368fc76.png";
  };
}

/* Special Hoodies */
function blackHoodiesSpecial() {
  let image = document.getElementById("HoodiesSpecial");
  document.getElementById("blackHoodiesSpecial").classList.add("colorChosen");
  document
    .getElementById("whiteHoodiesSpecial")
    .classList.remove("colorChosen");
  image.src =
    "Product/hoodies/black-Hoodie/all-over-print-unisex-hoodie-white-left-611679bab84f3.png";
  image.onmousemove = function () {
    image.src =
      "Product/hoodies/black-Hoodie/all-over-print-unisex-hoodie-white-front-611679bab7dfd.png";
  };
  image.onmouseout = function () {
    image.src =
      "Product/hoodies/black-Hoodie/all-over-print-unisex-hoodie-white-left-611679bab84f3.png";
  };
}
function whiteHoodiesSpecial() {
  let image = document.getElementById("HoodiesSpecial");
  document.getElementById("whiteHoodiesSpecial").classList.add("colorChosen");
  document
    .getElementById("blackHoodiesSpecial")
    .classList.remove("colorChosen");
  image.src =
    "Product/hoodies/white-Hoodie/all-over-print-unisex-hoodie-white-left-61167c6b9a97e.png";
  image.onmousemove = function () {
    image.src =
      "Product/hoodies/white-Hoodie/all-over-print-unisex-hoodie-white-left-61167c6b9aa8a.png";
  };
  image.onmouseout = function () {
    image.src =
      "Product/hoodies/white-Hoodie/all-over-print-unisex-hoodie-white-left-61167c6b9a97e.png";
  };
}

/* Video Introduction */
var myVideo = document.getElementById("intro-vid");
var play = document.getElementById("play-icon");
var pause = document.getElementById("pause-icon");

// Initialize video volume to 0.4 ;) save your ears
myVideo.volume = 0.4;

// click to play/pause
myVideo.addEventListener("click", function (e) {
  e.preventDefault();
  if (this.paused) {
    this.play();
    pause.classList.remove("show");
    play.classList.remove("show");
    // this force-restarts the CSS animation
    play.classList.add("show");
  } else {
    this.pause();
    pause.classList.remove("show");
    play.classList.remove("show");
    // this force-restarts the CSS animation
    pause.classList.add("show");
  }
});

// double click to fullscreen/exit fullscreen
myVideo.addEventListener("dblclick", function (f) {
  f.preventDefault();
  if (!document.webkitFullscreenElement) {
    if (this.requestFullScreen) {
      this.requestFullScreen();
    } else if (this.webkitRequestFullScreen) {
      this.webkitRequestFullScreen();
    } else if (this.mozRequestFullScreen) {
      this.mozRequestFullScreen();
    }
  } else {
    document.webkitExitFullscreen();
  }
});
