var slideIndex = 1;

function roseHexaChain() {
  document.querySelector(".gold").classList.remove("colorChosen");
  event.target.classList.add("colorChosen");
  document.querySelector("#colorChoice").innerHTML = "Rose";
  document.querySelector("#colorChoice").style.backgroundColor =
    "rgb(255, 188, 143)";
  document.querySelector("#colorChoice").style.color = "black";
  document.querySelector("#colorChoice").style.border = "1px solid black";
  document
    .querySelectorAll("#productImg1")
    .forEach(
      (img) =>
        (img.src =
          "../Product/accessories/engraved-silver-hexagon-chain-necklace-18k-rose-gold-coating-flat-610f5f8ab2483.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/accessories/engraved-silver-hexagon-chain-necklace-18k-rose-gold-coating-womens-2-610f5f8ab2533.png")
    );
}

function goldHexaChain() {
  document.querySelector(".rose").classList.remove("colorChosen");
  event.target.classList.add("colorChosen");
  document.querySelector("#colorChoice").innerHTML = "Gold";
  document.querySelector("#colorChoice").style.backgroundColor = "#ffe8bf";
  document.querySelector("#colorChoice").style.color = "black";
  document.querySelector("#colorChoice").style.border = "1px solid black";
  document
    .querySelectorAll("#productImg1")
    .forEach(
      (img) =>
        (img.src =
          "../Product/accessories/engraved-silver-hexagon-chain-necklace-24k-gold-coating-flat-610f5f2835bb1.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/accessories/engraved-silver-hexagon-chain-necklace-24k-gold-coating-womens-2-610f5f2835c70.png")
    );
}
