var slideIndex = 2;

function whiteClassicTee() {
  document.querySelector(".beige").classList.remove("colorChosen");
  document.querySelector(".lightGray").classList.remove("colorChosen");
  document.querySelector(".black").classList.remove("colorChosen");
  event.target.classList.add("colorChosen");
  document.querySelector("#colorChoice").innerHTML = "White";
  document.querySelector("#colorChoice").style.backgroundColor = "white";
  document.querySelector("#colorChoice").style.border = "1px solid black";
  document.querySelector("#colorChoice").style.color = "black";
  document
    .querySelectorAll("#productImg1")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/white-Tee/adult-quality-tee-white-front-60e814c22d7df.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/white-Tee/adult-quality-tee-white-front-2-60e814c22d433.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/white-Tee/adult-quality-tee-white-front-60e814c22d568.png")
    );
}

function beigeClassicTee() {
  document.querySelector(".white").classList.remove("colorChosen");
  document.querySelector(".lightGray").classList.remove("colorChosen");
  document.querySelector(".black").classList.remove("colorChosen");
  event.target.classList.add("colorChosen");
  document.querySelector("#colorChoice").innerHTML = "Beige";
  document.querySelector("#colorChoice").style.backgroundColor = "beige";
  document.querySelector("#colorChoice").style.border = "1px solid #767660";
  document.querySelector("#colorChoice").style.color = "#767660";
  document
    .querySelectorAll("#productImg1")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/beige-Tee/adult-quality-tee-light-beige-front-60e814c22d169.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/beige-Tee/adult-quality-tee-light-beige-front-2-60e814c22cf48.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/beige-Tee/adult-quality-tee-light-beige-front-60e814c22cfff.png")
    );
}

function lightGrayClassicTee() {
  document.querySelector(".white").classList.remove("colorChosen");
  document.querySelector(".beige").classList.remove("colorChosen");
  document.querySelector(".black").classList.remove("colorChosen");
  event.target.classList.add("colorChosen");
  document.querySelector("#colorChoice").innerHTML = "Light Gray";
  document.querySelector("#colorChoice").style.backgroundColor = "lightgray";
  document.querySelector("#colorChoice").style.border = "1px solid black";
  document.querySelector("#colorChoice").style.color = "black";
  document
    .querySelectorAll("#productImg1")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/lightGray-Tee/adult-quality-tee-light-grey-front-60e8145b31776.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/lightGray-Tee/adult-quality-tee-light-grey-front-2-60e8145b312ed.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/lightGray-Tee/adult-quality-tee-light-grey-front-60e8145b3146b.png")
    );
}

function blackClassicTee() {
  document.querySelector(".white").classList.remove("colorChosen");
  document.querySelector(".beige").classList.remove("colorChosen");
  document.querySelector(".lightGray").classList.remove("colorChosen");
  event.target.classList.add("colorChosen");
  document.querySelector("#colorChoice").innerHTML = "Black";
  document.querySelector("#colorChoice").style.backgroundColor = "black";
  document.querySelector("#colorChoice").style.border = "1px solid white";
  document.querySelector("#colorChoice").style.color = "white";
  document
    .querySelectorAll("#productImg1")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/black-Tee/adult-quality-tee-black-front-60e8145b2fdb6.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/black-Tee/adult-quality-tee-black-front-2-60e8145b2fc6b.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/teeShirt/black-Tee/adult-quality-tee-black-front-60e8145b2fcdf.png")
    );
}
