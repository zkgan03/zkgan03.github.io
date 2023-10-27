var slideIndex = 1;

function whiteClassicH() {
  document.querySelector(".lightGray").classList.remove("colorChosen");
  document.querySelector(".black").classList.remove("colorChosen");
  event.target.classList.add("colorChosen");
  document.querySelector("#colorChoice").innerHTML = "White";
  document.querySelector("#colorChoice").style.backgroundColor = "white";
  document.querySelector("#colorChoice").style.color = "black";
  document.querySelector("#colorChoice").style.border = "1px solid black";
  document
    .querySelectorAll("#productImg1")
    .forEach(
      (img) =>
        (img.src =
          "../Product/hoodies/white-Hoodie/unisex-premium-hoodie-white-front-61167fab1babf.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/hoodies/white-Hoodie/unisex-premium-hoodie-white-front-61167fab1b96e.png")
    );
}

function lightGrayClassicH() {
  document.querySelector(".white").classList.remove("colorChosen");
  document.querySelector(".black").classList.remove("colorChosen");
  event.target.classList.add("colorChosen");
  document.querySelector("#colorChoice").innerHTML = "Light Gray";
  document.querySelector("#colorChoice").style.backgroundColor = "lightgray";
  document.querySelector("#colorChoice").style.color = "black";
  document.querySelector("#colorChoice").style.border = "1px solid black";
  document
    .querySelectorAll("#productImg1")
    .forEach(
      (img) =>
        (img.src =
          "../Product/hoodies/lightGray-Hoodie/unisex-premium-hoodie-carbon-grey-front-61167fab1b5c3.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/hoodies/lightGray-Hoodie/unisex-premium-hoodie-carbon-grey-front-61167fab1b8ad.png")
    );
}

function blackClassicH() {
  document.querySelector(".white").classList.remove("colorChosen");
  document.querySelector(".lightGray").classList.remove("colorChosen");
  event.target.classList.add("colorChosen");
  document.querySelector("#colorChoice").innerHTML = "Black";
  document.querySelector("#colorChoice").style.backgroundColor = "black";
  document.querySelector("#colorChoice").style.color = "white";
  document.querySelector("#colorChoice").style.border = "1px solid white";
  document
    .querySelectorAll("#productImg1")
    .forEach(
      (img) =>
        (img.src =
          "../Product/hoodies/black-Hoodie/unisex-premium-hoodie-black-front-61167f87b65ea.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/hoodies/black-Hoodie/unisex-premium-hoodie-black-front-61167f87b64ad.png")
    );
}
