var slideIndex = 1;

function roseBarChain() {
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
          "../Product/accessories/engraved-silver-bar-chain-necklace-18k-rose-gold-coating-flat-610f5aba51f38.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/accessories/engraved-silver-bar-chain-necklace-18k-rose-gold-coating-women-610f5aba52014.png")
    );
}

function goldBarChain() {
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
          "../Product/accessories/engraved-silver-bar-chain-necklace-24k-gold-coating-flat-610f5b6bb66bf.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/accessories/engraved-silver-bar-chain-necklace-24k-gold-coating-women-610f5b6bb6900.png")
    );
}
