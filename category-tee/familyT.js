var slideIndex = 1;

function whiteFamilyTee() {
  document.querySelector(".white2").classList.remove("colorChosen");
  document.querySelector(".black").classList.remove("colorChosen");
  document.querySelector(".black2").classList.remove("colorChosen");
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
          "../Product/teeShirt/white-Tee/mens-classic-t-shirt-white-front-610d449edb1ab.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/white-Tee/mens-classic-t-shirt-white-front-610d449edb74c.png")
    );
}

function white2FamilyTee() {
  document.querySelector(".white").classList.remove("colorChosen");
  document.querySelector(".black").classList.remove("colorChosen");
  document.querySelector(".black2").classList.remove("colorChosen");
  event.target.classList.add("colorChosen");
  document.querySelector("#colorChoice").innerHTML = "White 2";
  document.querySelector("#colorChoice").style.backgroundColor = "white";
  document.querySelector("#colorChoice").style.color = "black";
  document.querySelector("#colorChoice").style.border = "1px solid black";
  document
    .querySelectorAll("#productImg1")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/white-Tee/unisex-staple-t-shirt-white-front-610d46213ad3f.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/white-Tee/unisex-staple-t-shirt-white-right-front-610d46213b378.png")
    );
}

function blackFamilyTee() {
  document.querySelector(".white").classList.remove("colorChosen");
  document.querySelector(".white2").classList.remove("colorChosen");
  document.querySelector(".black2").classList.remove("colorChosen");
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
          "../Product/teeShirt/black-Tee/mens-classic-t-shirt-black-front-610d449edb63d.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/black-Tee/mens-classic-t-shirt-black-front-610d449edb4e8.png")
    );
}

function black2FamilyTee() {
  document.querySelector(".white").classList.remove("colorChosen");
  document.querySelector(".white2").classList.remove("colorChosen");
  document.querySelector(".black").classList.remove("colorChosen");
  event.target.classList.add("colorChosen");
  document.querySelector("#colorChoice").innerHTML = "Black 2";
  document.querySelector("#colorChoice").style.backgroundColor = "black";
  document.querySelector("#colorChoice").style.color = "white";
  document.querySelector("#colorChoice").style.border = "1px solid white";
  document
    .querySelectorAll("#productImg1")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/black-Tee/unisex-staple-t-shirt-black-heather-front-610d46213aade.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/black-Tee/unisex-staple-t-shirt-black-heather-right-front-610d46213abd8.png")
    );
}
