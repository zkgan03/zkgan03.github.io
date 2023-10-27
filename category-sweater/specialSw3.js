var slideIndex = 1;

function whiteSpecialSw3() {
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
          "../Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-6117dcd64a513.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-6117dcd64a8a9.png")
    );
}

function blackSpecialSw3() {
  document.querySelector(".white").classList.remove("colorChosen");
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
          "../Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-6117dcd64a03a.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-6117dcd64a289.png")
    );
}
