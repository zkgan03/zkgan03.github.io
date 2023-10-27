var slideIndex = 2;

function lightGrayBag() {
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
          "../Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-grey-marl-right-front-610bfcc3355ed.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-grey-marl-front-610bfcc3352d5.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-grey-marl-back-610bfcc33553b.png")
    );
}

function blackBag() {
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
          "../Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-anthracite-right-front-610bfcc3354d9.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-anthracite-front-610bfcc3353b4.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/accessories/embroidered-simple-backpack-i-bagbase-bg126-anthracite-back-610bfcc335420.png")
    );
}
