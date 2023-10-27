var slideIndex = 1;

function lightGrayZipH() {
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
          "../Product/hoodies/lightGray-Hoodie/unisex-lightweight-zip-hoodie-grey-triblend-front-611680ccb2299.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/hoodies/lightGray-Hoodie/unisex-lightweight-zip-hoodie-grey-triblend-front-611680ccb23ba.png")
    );
}

function blackZipH() {
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
          "../Product/hoodies/black-Hoodie/unisex-lightweight-zip-hoodie-solid-black-triblend-front-611680cef32df.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/hoodies/black-Hoodie/unisex-lightweight-zip-hoodie-solid-black-triblend-front-611680cef3410.png")
    );
}
