var slideIndex = 1;

function whiteLogoSh() {
  document.querySelector(".lightGray").classList.remove("colorChosen");
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
          "../Product/shorts/white-Short/mens-fleece-shorts-white-front-611912e5e292e.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/shorts/white-Short/mens-fleece-shorts-white-left-front-611912e5e2796.png")
    );
}

function lightGrayLogoSh() {
  document.querySelector(".white").classList.remove("colorChosen");
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
          "../Product/shorts/lightGray-Short/mens-fleece-shorts-heather-grey-front-611912e5e26c6.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/shorts/lightGray-Short/mens-fleece-shorts-heather-grey-left-front-611912e5e2543.png")
    );
}
