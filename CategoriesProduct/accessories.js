/*change the product depends on the color selected*/

/*outline color select for default if occur*/
let blackMask1 = document.querySelector("#blackMask")
if(blackMask1){
  blackMask.classList.add('colorChosen');
}

let whiteTote1 = document.querySelector("#whiteTote")
if(whiteTote1){
  whiteTote1.classList.add('colorChosen');
}

let blackLogoHat1 = document.querySelector("#blackLogoHat")
if(blackLogoHat1){
  blackLogoHat1.classList.add('colorChosen');
}

let blackHat1 = document.querySelector("#blackHat")
if(blackHat1){
  blackHat1.classList.add('colorChosen');
}

let lightGrayBackpack1 = document.querySelector("#lightGrayBackpack")
if(lightGrayBackpack1){
  lightGrayBackpack1.classList.add('colorChosen');
}

let roseBarChain1 = document.querySelector("#roseBarChain")
if(roseBarChain1){
  roseBarChain1.classList.add('colorChosen');
}

let roseHexagonChain1 = document.querySelector("#roseHexagonChain")
if(roseHexagonChain1){
  roseHexagonChain1.classList.add('colorChosen');
}

/*Tote Bag*/
function whiteTote() {
  document.getElementById("tote").src =
    "../Product/accessories/all-over-print-tote-black-15x15-mockup-610f582cde695.png";
  document.getElementById("tote").onmousemove = function () {
    document.getElementById("tote").src =
      "../Product/accessories/all-over-print-tote-black-15x15-mockup-610f582cde72f.png";
  };
  document.getElementById("tote").onmouseout = function () {
    document.getElementById("tote").src =
      "../Product/accessories/all-over-print-tote-black-15x15-mockup-610f582cde695.png";
  };

  document.querySelector("#whiteTote").classList.add('colorChosen');
  document.querySelector("#blackTote").classList.remove('colorChosen');
}
function blackTote() {
  document.getElementById("tote").src =
    "../Product/accessories/all-over-print-tote-black-15x15-mockup-610f574e11d24.png";
  document.getElementById("tote").onmousemove = function () {
    document.getElementById("tote").src =
      "../Product/accessories/all-over-print-tote-black-15x15-mockup-610f574e11f58.png";
  };
  document.getElementById("tote").onmouseout = function () {
    document.getElementById("tote").src =
      "../Product/accessories/all-over-print-tote-black-15x15-mockup-610f574e11d24.png";
  };

  document.querySelector("#blackTote").classList.add('colorChosen');
  document.querySelector("#whiteTote").classList.remove('colorChosen');
}

/*backpack*/
function lightGrayBackpack() {
  document.getElementById("backpack").src =
    "../Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-grey-marl-front-610bfcc3352d5.png";
  document.getElementById("backpack").onmousemove = function () {
    document.getElementById("backpack").src =
      "../Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-grey-marl-back-610bfcc33553b.png";
  };
  document.getElementById("backpack").onmouseout = function () {
    document.getElementById("backpack").src =
      "../Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-grey-marl-front-610bfcc3352d5.png";
  };

  document.querySelector("#lightGrayBackpack").style.outline =
    "2px solid black";
  document.querySelector("#blackBackpack").classList.remove('colorChosen');
}
function blackBackpack() {
  document.getElementById("backpack").src =
    "../Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-anthracite-front-610bfcc3353b4.png";
  document.getElementById("backpack").onmousemove = function () {
    document.getElementById("backpack").src =
      "../Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-anthracite-back-610bfcc335420.png";
  };
  document.getElementById("backpack").onmouseout = function () {
    document.getElementById("backpack").src =
      "../Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-anthracite-front-610bfcc3353b4.png";
  };

  document.querySelector("#lightGrayBackpack").classList.remove('colorChosen');
  document.querySelector("#blackBackpack").classList.add('colorChosen');
}

/* bar chain*/
function roseBarChain() {
  document.getElementById("barChain").src =
    "../Product/accessories/engraved-silver-bar-chain-necklace-18k-rose-gold-coating-flat-610f5aba51f38.png";
  document.getElementById("barChain").onmousemove = function () {
    document.getElementById("barChain").src =
      "../Product/accessories/engraved-silver-bar-chain-necklace-18k-rose-gold-coating-women-610f5aba52014.png";
  };
  document.getElementById("barChain").onmouseout = function () {
    document.getElementById("barChain").src =
      "../Product/accessories/engraved-silver-bar-chain-necklace-18k-rose-gold-coating-flat-610f5aba51f38.png";
  };

  document.querySelector("#roseBarChain").classList.add('colorChosen');
  document.querySelector("#goldBarChain").classList.remove('colorChosen');
}
function goldBarChain() {
  document.getElementById("barChain").src =
    "../Product/accessories/engraved-silver-bar-chain-necklace-24k-gold-coating-flat-610f5b6bb66bf.png";
  document.getElementById("barChain").onmousemove = function () {
    document.getElementById("barChain").src =
      "../Product/accessories/engraved-silver-bar-chain-necklace-24k-gold-coating-women-610f5b6bb6900.png";
  };
  document.getElementById("barChain").onmouseout = function () {
    document.getElementById("barChain").src =
      "../Product/accessories/engraved-silver-bar-chain-necklace-24k-gold-coating-flat-610f5b6bb66bf.png";
  };

  document.querySelector("#goldBarChain").classList.add('colorChosen');
  document.querySelector("#roseBarChain").classList.remove('colorChosen');
}

/* hexagon chain*/
function roseHexagonChain() {
  document.getElementById("HexagonChain").src =
    "../Product/accessories/engraved-silver-hexagon-chain-necklace-18k-rose-gold-coating-flat-610f5f8ab2483.png";
  document.getElementById("HexagonChain").onmousemove = function () {
    document.getElementById("HexagonChain").src =
      "../Product/accessories/engraved-silver-hexagon-chain-necklace-18k-rose-gold-coating-womens-2-610f5f8ab2533.png";
  };
  document.getElementById("HexagonChain").onmouseout = function () {
    document.getElementById("HexagonChain").src =
      "../Product/accessories/engraved-silver-hexagon-chain-necklace-18k-rose-gold-coating-flat-610f5f8ab2483.png";
  };

  document.querySelector("#roseHexagonChain").classList.add('colorChosen');
  document.querySelector("#goldHexagonChain").classList.remove('colorChosen');
}
function goldHexagonChain() {
  document.getElementById("HexagonChain").src =
    "../Product/accessories/engraved-silver-hexagon-chain-necklace-24k-gold-coating-flat-610f5f2835bb1.png";
  document.getElementById("HexagonChain").onmousemove = function () {
    document.getElementById("HexagonChain").src =
      "../Product/accessories/engraved-silver-hexagon-chain-necklace-18k-rose-gold-coating-womens-2-610f5f8ab2533.png";
  };
  document.getElementById("HexagonChain").onmouseout = function () {
    document.getElementById("HexagonChain").src =
      "../Product/accessories/engraved-silver-hexagon-chain-necklace-24k-gold-coating-flat-610f5f2835bb1.png";
  };

  document.querySelector("#goldHexagonChain").classList.add('colorChosen');
  document.querySelector("#roseHexagonChain").classList.remove('colorChosen');
}
