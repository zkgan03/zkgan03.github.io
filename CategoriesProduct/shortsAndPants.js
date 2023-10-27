/*change the product depends on the color selected*/

/*border color select for default*/
if (document.getElementById("whiteClassicShorts"))
  document.getElementById("whiteClassicShorts").classList.add('colorChosen')

if (document.getElementById("whiteBikerShorts"))
  document.getElementById("whiteBikerShorts").classList.add('colorChosen')

if (document.getElementById("whiteYogaShorts"))
  document.getElementById("whiteYogaShorts").classList.add('colorChosen')

if (document.getElementById("whiteLogoShorts"))
  document.getElementById("whiteLogoShorts").classList.add('colorChosen')

if (document.getElementById("navySpecial1Shorts"))
  document.getElementById("navySpecial1Shorts").classList.add('colorChosen')

if (document.getElementById("whiteSpecial2Shorts"))
  document.getElementById("whiteSpecial2Shorts").classList.add('colorChosen')

/*shorts Classic*/
function blackClassicShorts() {
  document.getElementById("ClassicShorts").src =
    "../Product/shorts/black-Short/mens-fleece-shorts-black-front-611920673f39b.png";
  document.getElementById("ClassicShorts").onmousemove = function () {
    document.getElementById("ClassicShorts").src =
      "../Product/shorts/black-Short/mens-fleece-shorts-black-front-611920673f190.png";
  };
  document.getElementById("ClassicShorts").onmouseout = function () {
    document.getElementById("ClassicShorts").src =
      "../Product/shorts/black-Short/mens-fleece-shorts-black-front-611920673f39b.png";
  };

  document.querySelector("#whiteClassicShorts").classList.remove('colorChosen')
  document.querySelector("#blackClassicShorts").classList.add('colorChosen')
}
function whiteClassicShorts() {
  document.getElementById("ClassicShorts").src =
    "../Product/shorts/white-Short/all-over-print-mens-athletic-long-shorts-white-front-611911368fc76.png";
  document.getElementById("ClassicShorts").onmousemove = function () {
    document.getElementById("ClassicShorts").src =
      "../Product/shorts/white-Short/all-over-print-mens-athletic-long-shorts-white-left-611910b9e56fc.png";
  };
  document.getElementById("ClassicShorts").onmouseout = function () {
    document.getElementById("ClassicShorts").src =
      "../Product/shorts/white-Short/all-over-print-mens-athletic-long-shorts-white-front-611911368fc76.png";
  };

  document.querySelector("#whiteClassicShorts").classList.add('colorChosen')
  document.querySelector("#blackClassicShorts").classList.remove('colorChosen')
}

/*Shorts with Logo */
function lightGrayLogoShorts() {
  document.getElementById("LogoShorts").src =
    "../Product/shorts/lightGray-Short/mens-fleece-shorts-heather-grey-front-611912e5e26c6.png";
  document.getElementById("LogoShorts").onmousemove = function () {
    document.getElementById("LogoShorts").src =
      "../Product/shorts/lightGray-Short/mens-fleece-shorts-heather-grey-left-front-611912e5e2543.png";
  };
  document.getElementById("LogoShorts").onmouseout = function () {
    document.getElementById("LogoShorts").src =
      "../Product/shorts/lightGray-Short/mens-fleece-shorts-heather-grey-front-611912e5e26c6.png";
  };

  document.querySelector("#whiteLogoShorts").classList.remove('colorChosen')
  document.querySelector("#lightGrayLogoShorts").classList.add('colorChosen')
}
function whiteLogoShorts() {
  document.getElementById("LogoShorts").src =
    "../Product/shorts/white-Short/mens-fleece-shorts-white-front-611912e5e292e.png";
  document.getElementById("LogoShorts").onmousemove = function () {
    document.getElementById("LogoShorts").src =
      "../Product/shorts/white-Short/mens-fleece-shorts-white-left-front-611912e5e2796.png";
  };
  document.getElementById("LogoShorts").onmouseout = function () {
    document.getElementById("LogoShorts").src =
      "../Product/shorts/white-Short/mens-fleece-shorts-white-front-611912e5e292e.png";
  };

  document.querySelector("#whiteLogoShorts").classList.add('colorChosen')
  document.querySelector("#lightGrayLogoShorts").classList.remove('colorChosen')

}
