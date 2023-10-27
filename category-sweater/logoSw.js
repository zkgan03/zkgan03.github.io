var slideIndex = 2;

function whiteLogoSw() {
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
          "../Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-60e80cba6f9d1.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-60e80cba6fb89.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/white-sweater/unisex-crew-neck-sweatshirt-white-front-60e80cba6ef27.png")
    );
}

function blackLogoSw() {
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
          "../Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-60e80d4dcd4c9.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-60e80d4dcd834.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/black-Sweater/unisex-crew-neck-sweatshirt-black-front-60e80d4dcbe3b.png")
    );
}
