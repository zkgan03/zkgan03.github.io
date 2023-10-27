var slideIndex = 2;

function whiteLogoTee() {
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
          "../Product/teeShirt/white-Tee/mens-classic-t-shirt-white-front-6107e5efd1661.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/white-Tee/mens-classic-t-shirt-white-front-6107e5efd17ce.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/white-Tee/mens-classic-t-shirt-white-front-6107e5efd18c9.png")
    );
}

function blackLogoTee() {
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
          "../Product/teeShirt/black-Tee/unisex-staple-t-shirt-black-heather-front-610c171abfbd4.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/black-Tee/unisex-staple-t-shirt-black-heather-front-610c171abfdfb.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/black-Tee/unisex-staple-t-shirt-black-heather-front-610c171abff28.png")
    );
}
