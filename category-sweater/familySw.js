var slideIndex = 2;

function whiteFamilySw() {
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
          "../Product/sweater/white-sweater/unisex-fleece-sweatshirt-white-front-6117dbba91161.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/white-sweater/unisex-fleece-sweatshirt-white-front-2-6117dbba913f6.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/white-sweater/unisex-fleece-sweatshirt-white-front-2-6117dbba912b4.png")
    );
}

function blackFamilySw() {
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
          "../Product/sweater/black-Sweater/unisex-fleece-sweatshirt-black-front-6117dbba90cc8.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/black-Sweater/unisex-fleece-sweatshirt-black-front-2-6117dbba90f03.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/black-Sweater/unisex-fleece-sweatshirt-black-front-2-6117dbba90dea.png")
    );
}
