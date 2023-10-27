/*change the product depends on the color selected*/

/*outline color select for default*/
if (document.querySelector("#lightGrayHoodiesZip")) {
  document.querySelector("#lightGrayHoodiesZip").classList.add('colorChosen')
}
if (document.querySelector("#whiteHoodiesLogo")) {
  document.querySelector("#whiteHoodiesLogo").classList.add('colorChosen')
}
if (document.querySelector("#whiteHoodiesTxt")) {
  document.querySelector("#whiteHoodiesTxt").classList.add('colorChosen')
}
if (document.querySelector("#blackHoodiesChamp")) {
  document.querySelector("#blackHoodiesChamp").classList.add('colorChosen')
}
if (document.querySelector("#whiteHoodiesSpecial")) {
  document.querySelector("#whiteHoodiesSpecial").classList.add('colorChosen')
}
if (document.querySelector("#beigeHoodiesPremium")) {
  document.querySelector("#beigeHoodiesPremium").classList.add('colorChosen')
}

/*Hoodies with Logo*/
function blackHoodiesLogo() {
  document.getElementById("HoodiesLogo").src =
    "../Product/hoodies/black-Hoodie/unisex-heavy-blend-hoodie-black-front-60e815eedbe26.png";
  document.getElementById("HoodiesLogo").onmousemove = function () {
    document.getElementById("HoodiesLogo").src =
      "../Product/hoodies/black-Hoodie/unisex-heavy-blend-hoodie-black-front-60e815eedbffd.png";
  };
  document.getElementById("HoodiesLogo").onmouseout = function () {
    document.getElementById("HoodiesLogo").src =
      "../Product/hoodies/black-Hoodie/unisex-heavy-blend-hoodie-black-front-60e815eedbe26.png";
  };

  document.querySelector("#blackHoodiesLogo").classList.add('colorChosen')
  document.querySelector("#whiteHoodiesLogo").classList.remove('colorChosen')
}
function whiteHoodiesLogo() {
  document.getElementById("HoodiesLogo").src =
    "../Product/hoodies/white-Hoodie/unisex-essential-eco-hoodie-white-front-2-60e7150a8377c.png";
  document.getElementById("HoodiesLogo").onmousemove = function () {
    document.getElementById("HoodiesLogo").src =
      "../Product/hoodies/white-Hoodie/unisex-essential-eco-hoodie-white-front-60e7150a8364f.png";
  };
  document.getElementById("HoodiesLogo").onmouseout = function () {
    document.getElementById("HoodiesLogo").src =
      "../Product/hoodies/white-Hoodie/unisex-essential-eco-hoodie-white-front-2-60e7150a8377c.png";
  };

  document.querySelector("#whiteHoodiesLogo").classList.add('colorChosen')
  document.querySelector("#blackHoodiesLogo").classList.remove('colorChosen')
}

/*Hoodies with big Text*/
function blackHoodiesTxt() {
  document.getElementById("HoodiesTxt").src =
    "../Product/hoodies/black-Hoodie/unisex-premium-hoodie-black-front-61167f87b65ea.png";
  document.getElementById("HoodiesTxt").onmousemove = function () {
    document.getElementById("HoodiesTxt").src =
      "../Product/hoodies/black-Hoodie/unisex-premium-hoodie-black-front-61167f87b64ad.png";
  };
  document.getElementById("HoodiesTxt").onmouseout = function () {
    document.getElementById("HoodiesTxt").src =
      "../Product/hoodies/black-Hoodie/unisex-premium-hoodie-black-front-61167f87b65ea.png";
  };

  document.querySelector("#blackHoodiesTxt").classList.add('colorChosen')
  document.querySelector("#whiteHoodiesTxt").classList.remove('colorChosen')
  document.querySelector("#lightGrayHoodiesTxt").classList.remove('colorChosen')
}
function whiteHoodiesTxt() {
  document.getElementById("HoodiesTxt").src =
    "../Product/hoodies/white-Hoodie/unisex-premium-hoodie-white-front-61167fab1babf.png";
  document.getElementById("HoodiesTxt").onmousemove = function () {
    document.getElementById("HoodiesTxt").src =
      "../Product/hoodies/white-Hoodie/unisex-premium-hoodie-white-front-61167fab1b96e.png";
  };
  document.getElementById("HoodiesTxt").onmouseout = function () {
    document.getElementById("HoodiesTxt").src =
      "../Product/hoodies/white-Hoodie/unisex-premium-hoodie-white-front-61167fab1babf.png";
  };

  document.querySelector("#whiteHoodiesTxt").classList.add('colorChosen')
  document.querySelector("#blackHoodiesTxt").classList.remove('colorChosen')
  document.querySelector("#lightGrayHoodiesTxt").classList.remove('colorChosen')
}
function lightGrayHoodiesTxt() {
  document.getElementById("HoodiesTxt").src =
    "../Product/hoodies/lightGray-Hoodie/unisex-premium-hoodie-carbon-grey-front-61167fab1b8ad.png";
  document.getElementById("HoodiesTxt").onmousemove = function () {
    document.getElementById("HoodiesTxt").src =
      "../Product/hoodies/lightGray-Hoodie/unisex-premium-hoodie-carbon-grey-front-61167fab1b5c3.png";
  };
  document.getElementById("HoodiesTxt").onmouseout = function () {
    document.getElementById("HoodiesTxt").src =
      "../Product/hoodies/lightGray-Hoodie/unisex-premium-hoodie-carbon-grey-front-61167fab1b8ad.png";
  };

  document.querySelector("#whiteHoodiesTxt").classList.remove('colorChosen')
  document.querySelector("#blackHoodiesTxt").classList.remove('colorChosen')
  document.querySelector("#lightGrayHoodiesTxt").classList.add('colorChosen')
}

/*Hoodies with zip*/
function blackHoodiesZip() {
  document.getElementById("HoodiesZip").src =
    "../Product/hoodies/black-Hoodie/unisex-lightweight-zip-hoodie-solid-black-triblend-front-611680cef32df.png";
  document.getElementById("HoodiesZip").onmousemove = function () {
    document.getElementById("HoodiesZip").src =
      "../Product/hoodies/black-Hoodie/unisex-lightweight-zip-hoodie-solid-black-triblend-front-611680cef3410.png";
  };
  document.getElementById("HoodiesZip").onmouseout = function () {
    document.getElementById("HoodiesZip").src =
      "../Product/hoodies/black-Hoodie/unisex-lightweight-zip-hoodie-solid-black-triblend-front-611680cef32df.png";
  };

  document.querySelector("#blackHoodiesZip").classList.add('colorChosen')
  document.querySelector("#lightGrayHoodiesZip").classList.remove('colorChosen')
}
function lightGrayHoodiesZip() {
  document.getElementById("HoodiesZip").src =
    "../Product/hoodies/lightGray-Hoodie/unisex-lightweight-zip-hoodie-grey-triblend-front-611680ccb23ba.png";
  document.getElementById("HoodiesZip").onmousemove = function () {
    document.getElementById("HoodiesZip").src =
      "../Product/hoodies/lightGray-Hoodie/unisex-lightweight-zip-hoodie-grey-triblend-front-611680ccb2299.png";
  };
  document.getElementById("HoodiesZip").onmouseout = function () {
    document.getElementById("HoodiesZip").src =
      "../Product/hoodies/lightGray-Hoodie/unisex-lightweight-zip-hoodie-grey-triblend-front-611680ccb23ba.png";
  };

  document.querySelector("#blackHoodiesZip").classList.remove('colorChosen')
  document.querySelector("#lightGrayHoodiesZip").classList.add('colorChosen')
}

/*Hoodies Premium*/
function blackHoodiesPremium() {
  document.getElementById("HoodiesPremium").src =
    "../Product/hoodies/black-Hoodie/unisex-sueded-fleece-hoodie-black-heather-front-61167da80db23.png";
  document.getElementById("HoodiesPremium").onmousemove = function () {
    document.getElementById("HoodiesPremium").src =
      "../Product/hoodies/black-Hoodie/unisex-sueded-fleece-hoodie-black-heather-front-61167da80dd0a.png";
  };
  document.getElementById("HoodiesPremium").onmouseout = function () {
    document.getElementById("HoodiesPremium").src =
      "../Product/hoodies/black-Hoodie/unisex-sueded-fleece-hoodie-black-heather-front-61167da80db23.png";
  };

  document.querySelector("#blackHoodiesPremium").classList.add('colorChosen')
  document.querySelector("#beigeHoodiesPremium").classList.remove('colorChosen')
  document.querySelector("#lightGrayHoodiesPremium").classList.remove('colorChosen')
}
function beigeHoodiesPremium() {
  document.getElementById("HoodiesPremium").src =
    "../Product/hoodies/beige-Hoodie/unisex-sueded-fleece-hoodie-heather-oat-front-61167de6441b1.png";
  document.getElementById("HoodiesPremium").onmousemove = function () {
    document.getElementById("HoodiesPremium").src =
      "../Product/hoodies/beige-Hoodie/unisex-sueded-fleece-hoodie-heather-oat-front-61167de644282.png";
  };
  document.getElementById("HoodiesPremium").onmouseout = function () {
    document.getElementById("HoodiesPremium").src =
      "../Product/hoodies/beige-Hoodie/unisex-sueded-fleece-hoodie-heather-oat-front-61167de6441b1.png";
  };

  document.querySelector("#beigeHoodiesPremium").classList.add('colorChosen')
  document.querySelector("#blackHoodiesPremium").classList.remove('colorChosen')
  document.querySelector("#lightGrayHoodiesPremium").classList.remove('colorChosen')
}
function lightGrayHoodiesPremium() {
  document.getElementById("HoodiesPremium").src =
    "../Product/hoodies/lightGray-Hoodie/unisex-sueded-fleece-hoodie-athletic-heather-front-61167de643d1e.png";
  document.getElementById("HoodiesPremium").onmousemove = function () {
    document.getElementById("HoodiesPremium").src =
      "../Product/hoodies/lightGray-Hoodie/unisex-sueded-fleece-hoodie-athletic-heather-front-61167de643f36.png";
  };
  document.getElementById("HoodiesPremium").onmouseout = function () {
    document.getElementById("HoodiesPremium").src =
      "../Product/hoodies/lightGray-Hoodie/unisex-sueded-fleece-hoodie-athletic-heather-front-61167de643d1e.png";
  };

  document.querySelector("#beigeHoodiesPremium").classList.remove('colorChosen')
  document.querySelector("#blackHoodiesPremium").classList.remove('colorChosen')
  document.querySelector("#lightGrayHoodiesPremium").classList.add('colorChosen')
}

/*Hoodies Special*/
function blackHoodiesSpecial() {
  document.getElementById("HoodiesSpecial").src =
    "../Product/hoodies/black-Hoodie/all-over-print-unisex-hoodie-white-left-611679bab84f3.png";
  document.getElementById("HoodiesSpecial").onmousemove = function () {
    document.getElementById("HoodiesSpecial").src =
      "../Product/hoodies/black-Hoodie/all-over-print-unisex-hoodie-white-front-611679bab7dfd.png";
  };
  document.getElementById("HoodiesSpecial").onmouseout = function () {
    document.getElementById("HoodiesSpecial").src =
      "../Product/hoodies/black-Hoodie/all-over-print-unisex-hoodie-white-left-611679bab84f3.png";
  };

  document.querySelector("#blackHoodiesSpecial").classList.add('colorChosen')
  document.querySelector("#whiteHoodiesSpecial").classList.remove('colorChosen')
}
function whiteHoodiesSpecial() {
  document.getElementById("HoodiesSpecial").src =
    "../Product/hoodies/white-Hoodie/all-over-print-unisex-hoodie-white-left-61167c6b9a97e.png";
  document.getElementById("HoodiesSpecial").onmousemove = function () {
    document.getElementById("HoodiesSpecial").src =
      "../Product/hoodies/white-Hoodie/all-over-print-unisex-hoodie-white-left-61167c6b9aa8a.png";
  };
  document.getElementById("HoodiesSpecial").onmouseout = function () {
    document.getElementById("HoodiesSpecial").src =
      "../Product/hoodies/white-Hoodie/all-over-print-unisex-hoodie-white-left-61167c6b9a97e.png";
  };

  document.querySelector("#blackHoodiesSpecial").classList.remove('colorChosen')
  document.querySelector("#whiteHoodiesSpecial").classList.add('colorChosen')
}
