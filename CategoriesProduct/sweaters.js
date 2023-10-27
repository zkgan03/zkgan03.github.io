/*change the product depends on the color selected*/

/*outline color select for default*/
if (document.getElementById("whiteClassicSweater")) {
  document.getElementById("whiteClassicSweater").classList.add('colorChosen')
}
if (document.getElementById("whiteLogoSweater")) {
  document.getElementById("whiteLogoSweater").classList.add('colorChosen')
}
if (document.getElementById("whiteFamily1Sweater")) {
  document.getElementById("whiteFamily1Sweater").classList.add('colorChosen')
}
if (document.getElementById("navySpecial1Sweater")) {
  document.getElementById("navySpecial1Sweater").classList.add('colorChosen')
}
if (document.getElementById("whiteSpecial2Sweater")) {
  document.getElementById("whiteSpecial2Sweater").classList.add('colorChosen')
}
if (document.getElementById("whiteSpecial3Sweater")) {
  document.getElementById("whiteSpecial3Sweater").classList.add('colorChosen')
}

/*sweater Classic*/

const classicSweater = document.getElementsByClassName("classicSweater");

function blackClassicSweater() {
  document.getElementById("ClassicSweater").src =
    "../Product/sweater/black-Sweater/mens-long-sleeve-shirt-black-front-60e80ed32c055.png";
  document.getElementById("ClassicSweater").onmousemove = function () {
    document.getElementById("ClassicSweater").src =
      "../Product/sweater/black-Sweater/mens-long-sleeve-shirt-black-left-front-60e80ed32c3e0.png";
  };
  document.getElementById("ClassicSweater").onmouseout = function () {
    document.getElementById("ClassicSweater").src =
      "../Product/sweater/black-Sweater/mens-long-sleeve-shirt-black-front-60e80ed32c055.png";
  };

  for (let i = 0; i < classicSweater.length; i++) {
    classicSweater[i].classList.remove('colorChosen')
  }

  document.querySelector("#blackClassicSweater").classList.add('colorChosen') 
}
function whiteClassicSweater() {
  document.getElementById("ClassicSweater").src =
    "../Product/sweater/white-sweater/mens-long-sleeve-shirt-white-front-60e812b79dd0f.png";
  document.getElementById("ClassicSweater").onmousemove = function () {
    document.getElementById("ClassicSweater").src =
      "../Product/sweater/white-sweater/mens-long-sleeve-shirt-white-front-60e812b79e02c.png";
  };
  document.getElementById("ClassicSweater").onmouseout = function () {
    document.getElementById("ClassicSweater").src =
      "../Product/sweater/white-sweater/mens-long-sleeve-shirt-white-front-60e812b79dd0f.png";
  };

  for (let i = 0; i < classicSweater.length; i++) {
    classicSweater[i].classList.remove('colorChosen')
  }

  document.querySelector("#whiteClassicSweater").classList.add('colorChosen')
}
function beigeClassicSweater() {
  document.getElementById("ClassicSweater").src =
    "../Product/sweater/beige-Sweater/mens-long-sleeve-shirt-sand-front-60e812b79d219.png";
  document.getElementById("ClassicSweater").onmousemove = function () {
    document.getElementById("ClassicSweater").src =
      "../Product/sweater/beige-Sweater/mens-long-sleeve-shirt-sand-left-front-60e812b79d746.png";
  };
  document.getElementById("ClassicSweater").onmouseout = function () {
    document.getElementById("ClassicSweater").src =
      "../Product/sweater/beige-Sweater/mens-long-sleeve-shirt-sand-front-60e812b79d219.png";
  };

  for (let i = 0; i < classicSweater.length; i++) {
    classicSweater[i].classList.remove('colorChosen')
  }

  document.querySelector("#beigeClassicSweater").classList.add('colorChosen')
}
function redClassicSweater() {
  document.getElementById("ClassicSweater").src =
    "../Product/sweater/red-Sweater/mens-long-sleeve-shirt-red-front-60e812b79cc39.png";
  document.getElementById("ClassicSweater").onmousemove = function () {
    document.getElementById("ClassicSweater").src =
      "../Product/sweater/red-Sweater/mens-long-sleeve-shirt-red-front-60e812b79caef.png";
  };
  document.getElementById("ClassicSweater").onmouseout = function () {
    document.getElementById("ClassicSweater").src =
      "../Product/sweater/red-Sweater/mens-long-sleeve-shirt-red-front-60e812b79cc39.png";
  };

  for (let i = 0; i < classicSweater.length; i++) {
    classicSweater[i].classList.remove('colorChosen')
  }

  document.querySelector("#redClassicSweater").classList.add('colorChosen')
}
function blueClassicSweater() {
  document.getElementById("ClassicSweater").src =
    "../Product/sweater/blue-Sweater/mens-long-sleeve-shirt-indigo-blue-left-front-60e80ed33176c.png";
  document.getElementById("ClassicSweater").onmousemove = function () {
    document.getElementById("ClassicSweater").src =
      "../Product/sweater/blue-Sweater/mens-long-sleeve-shirt-indigo-blue-front-60e80ed3304df.png";
  };
  document.getElementById("ClassicSweater").onmouseout = function () {
    document.getElementById("ClassicSweater").src =
      "../Product/sweater/blue-Sweater/mens-long-sleeve-shirt-indigo-blue-left-front-60e80ed33176c.png";
  };

  for (let i = 0; i < classicSweater.length; i++) {
    classicSweater[i].classList.remove('colorChosen')
  }

  document.querySelector("#blueClassicSweater").classList.add('colorChosen')
}
function lightBlueClassicSweater() {
  document.getElementById("ClassicSweater").src =
    "../Product/sweater/lightBlue-Sweater/mens-long-sleeve-shirt-light-blue-front-60e80ed332ab0.png";
  document.getElementById("ClassicSweater").onmousemove = function () {
    document.getElementById("ClassicSweater").src =
      "../Product/sweater/lightBlue-Sweater/mens-long-sleeve-shirt-light-blue-front-60e80ed333a1a.png";
  };
  document.getElementById("ClassicSweater").onmouseout = function () {
    document.getElementById("ClassicSweater").src =
      "../Product/sweater/lightBlue-Sweater/mens-long-sleeve-shirt-light-blue-front-60e80ed332ab0.png";
  };

  for (let i = 0; i < classicSweater.length; i++) {
    classicSweater[i].classList.remove('colorChosen')
  }

  document.querySelector("#lightBlueClassicSweater").classList.add('colorChosen')
}
function darkBlueClassicSweater() {
  document.getElementById("ClassicSweater").src =
    "../Product/sweater/darkBlue-Sweater/mens-long-sleeve-shirt-royal-front-60e80ed32e698.png";
  document.getElementById("ClassicSweater").onmousemove = function () {
    document.getElementById("ClassicSweater").src =
      "../Product/sweater/darkBlue-Sweater/mens-long-sleeve-shirt-royal-front-60e80ed32ddeb.png";
  };
  document.getElementById("ClassicSweater").onmouseout = function () {
    document.getElementById("ClassicSweater").src =
      "../Product/sweater/darkBlue-Sweater/mens-long-sleeve-shirt-royal-front-60e80ed32e698.png";
  };

  for (let i = 0; i < classicSweater.length; i++) {
    classicSweater[i].classList.remove('colorChosen')
  }

  document.querySelector("#darkBlueClassicSweater").classList.add('colorChosen')
}
function militaryGreenClassicSweater() {
  document.getElementById("ClassicSweater").src =
    "../Product/sweater/militaryGreen-Sweater/mens-long-sleeve-shirt-military-green-front-60e80ed32ef92.png";
  document.getElementById("ClassicSweater").onmousemove = function () {
    document.getElementById("ClassicSweater").src =
      "../Product/sweater/militaryGreen-Sweater/mens-long-sleeve-shirt-military-green-front-60e80ed32f68d.png";
  };
  document.getElementById("ClassicSweater").onmouseout = function () {
    document.getElementById("ClassicSweater").src =
      "../Product/sweater/militaryGreen-Sweater/mens-long-sleeve-shirt-military-green-front-60e80ed32ef92.png";
  };

  for (let i = 0; i < classicSweater.length; i++) {
    classicSweater[i].classList.remove('colorChosen')
  }

  document.querySelector("#militaryGreenClassicSweater").classList.add('colorChosen')
}
function lightGrayClassicSweater() {
  document.getElementById("ClassicSweater").src =
    "../Product/sweater/lightGray-Sweater/mens-long-sleeve-shirt-sport-grey-left-front-60e812b79d044.png";
  document.getElementById("ClassicSweater").onmousemove = function () {
    document.getElementById("ClassicSweater").src =
      "../Product/sweater/lightGray-Sweater/mens-long-sleeve-shirt-sport-grey-front-60e812b79d12a.png";
  };
  document.getElementById("ClassicSweater").onmouseout = function () {
    document.getElementById("ClassicSweater").src =
      "../Product/sweater/lightGray-Sweater/mens-long-sleeve-shirt-sport-grey-left-front-60e812b79d044.png";
  };

  for (let i = 0; i < classicSweater.length; i++) {
    classicSweater[i].classList.remove('colorChosen')
  }

  document.querySelector("#lightGrayClassicSweater").classList.add('colorChosen')
}
function navyClassicSweater() {
  document.getElementById("ClassicSweater").src =
    "../Product/sweater/navy-Sweater/mens-long-sleeve-shirt-navy-front-60e80ed32ce18.png";
  document.getElementById("ClassicSweater").onmousemove = function () {
    document.getElementById("ClassicSweater").src =
      "../Product/sweater/navy-Sweater/mens-long-sleeve-shirt-navy-front-60e80ed32c8e9.png";
  };
  document.getElementById("ClassicSweater").onmouseout = function () {
    document.getElementById("ClassicSweater").src =
      "../Product/sweater/navy-Sweater/mens-long-sleeve-shirt-navy-front-60e80ed32ce18.png";
  };

  for (let i = 0; i < classicSweater.length; i++) {
    classicSweater[i].classList.remove('colorChosen')
  }

  document.querySelector("#navyClassicSweater").classList.add('colorChosen')
}

/*Sweater with logo*/
function whiteLogoSweater() {
  document.getElementById("LogoSweater").src =
    "../Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-60e80cba6ef27.png";
  document.getElementById("LogoSweater").onmousemove = function () {
    document.getElementById("LogoSweater").src =
      "../Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-60e80cba6f73c.png";
  };
  document.getElementById("LogoSweater").onmouseout = function () {
    document.getElementById("LogoSweater").src =
      "../Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-60e80cba6ef27.png";
  };

  document.querySelector("#whiteLogoSweater").classList.add('colorChosen')
  document.querySelector("#blackLogoSweater").classList.remove('colorChosen')
}
function blackLogoSweater() {
  document.getElementById("LogoSweater").src =
    "../Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-60e80d4dcb3bd.png";
  document.getElementById("LogoSweater").onmousemove = function () {
    document.getElementById("LogoSweater").src =
      "../Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-60e80d4dcd31f.png";
  };
  document.getElementById("LogoSweater").onmouseout = function () {
    document.getElementById("LogoSweater").src =
      "../Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-60e80d4dcb3bd.png";
  };

  document.querySelector("#whiteLogoSweater").classList.remove('colorChosen')
  document.querySelector("#blackLogoSweater").classList.add('colorChosen')
}

/*Sweater Family1*/
function whiteFamily1Sweater() {
  document.getElementById("Family1Sweater").src =
    "../Product/sweater/white-sweater/unisex-fleece-sweatshirt-white-front-2-6117dbba913f6.png";
  document.getElementById("Family1Sweater").onmousemove = function () {
    document.getElementById("Family1Sweater").src =
      "../Product/sweater/white-sweater/unisex-fleece-sweatshirt-white-front-2-6117dbba912b4.png";
  };
  document.getElementById("Family1Sweater").onmouseout = function () {
    document.getElementById("Family1Sweater").src =
      "../Product/sweater/white-sweater/unisex-fleece-sweatshirt-white-front-2-6117dbba913f6.png";
  };

  document.querySelector("#whiteFamily1Sweater").classList.add('colorChosen')
  document.querySelector("#blackFamily1Sweater").classList.remove('colorChosen')
}
function blackFamily1Sweater() {
  document.getElementById("Family1Sweater").src =
    "../Product/sweater/black-Sweater/unisex-fleece-sweatshirt-black-front-6117dbba90cc8.png";
  document.getElementById("Family1Sweater").onmousemove = function () {
    document.getElementById("Family1Sweater").src =
      "../Product/sweater/black-Sweater/unisex-fleece-sweatshirt-black-front-6117dbba90b5f.png";
  };
  document.getElementById("Family1Sweater").onmouseout = function () {
    document.getElementById("Family1Sweater").src =
      "../Product/sweater/black-Sweater/unisex-fleece-sweatshirt-black-front-6117dbba90cc8.png";
  };

  document.querySelector("#whiteFamily1Sweater").classList.remove('colorChosen')
  document.querySelector("#blackFamily1Sweater").classList.add('colorChosen')
}

/*Sweater Special 3*/
function whiteSpecial3Sweater() {
  document.getElementById("Special3Sweater").src =
    "../Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-6117dcd64a513.png";
  document.getElementById("Special3Sweater").onmousemove = function () {
    document.getElementById("Special3Sweater").src =
    "../Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-6117dcd64a8a9.png";
  };
  document.getElementById("Special3Sweater").onmouseout = function () {
    document.getElementById("Special3Sweater").src =
      "../Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-6117dcd64a513.png";
  };

  document.querySelector("#whiteSpecial3Sweater").classList.add('colorChosen')
  document.querySelector("#blackSpecial3Sweater").classList.remove('colorChosen')
}
function blackSpecial3Sweater() {
  document.getElementById("Special3Sweater").src =
    "../Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-6117dcd64a289.png";
  document.getElementById("Special3Sweater").onmousemove = function () {
    document.getElementById("Special3Sweater").src =
      "../Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-6117dcd64a03a.png";
  };
  document.getElementById("Special3Sweater").onmouseout = function () {
    document.getElementById("Special3Sweater").src =
      "../Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-6117dcd64a289.png";
  };
  document.querySelector("#whiteSpecial3Sweater").classList.remove('colorChosen')
  document.querySelector("#blackSpecial3Sweater").classList.add('colorChosen')
}
