var slideIndex = 2;

function whitePocketTee() {
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
          "../Product/teeShirt/white-Tee/unisex-pocket-t-shirt-white-front-610c034560867.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/white-Tee/unisex-pocket-t-shirt-white-front-610c034560b3f.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/white-Tee/unisex-pocket-t-shirt-white-front-610c034560c0f.png")
    );
}

function blackPocketTee() {
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
          "../Product/teeShirt/black-Tee/unisex-pocket-t-shirt-black-front-610d2fbde7983.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/black-Tee/unisex-pocket-t-shirt-black-front-610d2fbde7d1d.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/black-Tee/unisex-pocket-t-shirt-black-front-610d2fbde7d7b.png")
    );
}
