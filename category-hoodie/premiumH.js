var slideIndex = 2;

function beigePremiumH() {
  document.querySelector(".lightGray").classList.remove("colorChosen");
  document.querySelector(".black").classList.remove("colorChosen");
  event.target.classList.add("colorChosen");
  document.querySelector("#colorChoice").innerHTML = "Beige";
  document.querySelector("#colorChoice").style.backgroundColor = "beige";
  document.querySelector("#colorChoice").style.color = "#767660";
  document.querySelector("#colorChoice").style.border = "1px solid #767660";
  document
    .querySelectorAll("#productImg1")
    .forEach(
      (img) =>
        (img.src =
          "../Product/hoodies/beige-Hoodie/unisex-sueded-fleece-hoodie-heather-oat-zoomed-in-61167de6440a2.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/hoodies/beige-Hoodie/unisex-sueded-fleece-hoodie-heather-oat-front-61167de6441b1.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/hoodies/beige-Hoodie/unisex-sueded-fleece-hoodie-heather-oat-front-61167de644282.png")
    );
}

function lightGrayPremiumH() {
  document.querySelector(".beige").classList.remove("colorChosen");
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
          "../Product/hoodies/lightGray-Hoodie/unisex-sueded-fleece-hoodie-athletic-heather-zoomed-in-61167de643e71.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/hoodies/lightGray-Hoodie/unisex-sueded-fleece-hoodie-athletic-heather-front-61167de643f36.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/hoodies/lightGray-Hoodie/unisex-sueded-fleece-hoodie-athletic-heather-front-61167de643d1e.png")
    );
}

function blackPremiumH() {
  document.querySelector(".beige").classList.remove("colorChosen");
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
          "../Product/hoodies/black-Hoodie/unisex-sueded-fleece-hoodie-black-heather-zoomed-in-61167da80dc61.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/hoodies/black-Hoodie/unisex-sueded-fleece-hoodie-black-heather-front-61167da80dd0a.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/hoodies/black-Hoodie/unisex-sueded-fleece-hoodie-black-heather-front-61167da80db23.png")
    );
}
