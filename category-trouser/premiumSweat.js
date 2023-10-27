var slideIndex = 1;

function whitePremiumSweat() {
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
          "../Product/trousers/white-Trousers/all-over-print-mens-joggers-white-front-611e7ab3dd373.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/trousers/white-Trousers/all-over-print-mens-joggers-white-right-611e7ab3dd480.png")
    );
}

function blackPremiumSweat() {
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
          "../Product/trousers/black-Trousers/all-over-print-mens-joggers-white-front-611e7b4cb3af6.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/trousers/black-Trousers/all-over-print-mens-joggers-white-right-611e7b4cb3c43.png")
    );
}
