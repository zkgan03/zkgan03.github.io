var slideIndex = 2;

function whiteSpecialH() {
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
          "../Product/hoodies/white-Hoodie/all-over-print-unisex-hoodie-white-left-61167c6b9aa8a.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/hoodies/white-Hoodie/all-over-print-unisex-hoodie-white-front-61167c6b9a64c.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/hoodies/white-Hoodie/all-over-print-unisex-hoodie-white-front-61167c6b9a48f.png")
    );
}

function blackSpecialH() {
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
          "../Product/hoodies/black-Hoodie/all-over-print-unisex-hoodie-white-left-611679bab841c.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/hoodies/black-Hoodie/all-over-print-unisex-hoodie-white-front-611679bab7dfd.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/hoodies/black-Hoodie/all-over-print-unisex-hoodie-white-front-611679bab7f9b.png")
    );
}
