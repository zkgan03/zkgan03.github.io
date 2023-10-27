var slideIndex = 2;

function whiteSweatpants() {
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
          "../Product/trousers/white-Trousers/unisex-fleece-sweatpants-white-left-front-61192bd480654.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/trousers/white-Trousers/unisex-fleece-sweatpants-white-front-61192bd4804e9.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/trousers/white-Trousers/unisex-fleece-sweatpants-white-left-front-61192bd480361.png")
    );
}

function lightGraySweatpants() {
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
          "../Product/trousers/lightGray-Trousers/unisex-fleece-sweatpants-carbon-grey-left-front-61192bd48010e.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/trousers/lightGray-Trousers/unisex-fleece-sweatpants-carbon-grey-front-61192bd480050.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/trousers/lightGray-Trousers/unisex-fleece-sweatpants-carbon-grey-left-front-61192bd47ff99.png")
    );
}

function blackSweatpants() {
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
          "../Product/trousers/black-Trousers/unisex-fleece-sweatpants-black-left-front-61192bc970a2d.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/trousers/black-Trousers/unisex-fleece-sweatpants-black-front-61192bc970963.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/trousers/black-Trousers/unisex-fleece-sweatpants-black-left-front-61192bc97088c.png")
    );
}
