var slideIndex = 1;

function whiteClassicSh() {
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
          "../Product/shorts/white-Short/all-over-print-mens-athletic-long-shorts-white-front-611911368fc76.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/shorts/white-Short/all-over-print-mens-athletic-long-shorts-white-front-611910b9e5629.png")
    );
}

function blackClassicSh() {
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
          "../Product/shorts/black-Short/mens-fleece-shorts-black-front-611920673f39b.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/shorts/black-Short/mens-fleece-shorts-black-front-611920673f190.png")
    );
}
