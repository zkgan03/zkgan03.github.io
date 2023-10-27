var slideIndex = 2;

function whiteClassicSw() {
  document.querySelector(".beige").classList.remove("colorChosen");
  document.querySelector(".red").classList.remove("colorChosen");
  document.querySelector(".militaryGreen").classList.remove("colorChosen");
  document.querySelector(".lightBlue").classList.remove("colorChosen");
  document.querySelector(".blue").classList.remove("colorChosen");
  document.querySelector(".darkBlue").classList.remove("colorChosen");
  document.querySelector(".navy").classList.remove("colorChosen");
  document.querySelector(".lightGray").classList.remove("colorChosen");
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
          "../Product/sweater/white-sweater/mens-long-sleeve-shirt-white-front-60e812b79c7a6.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/white-sweater/mens-long-sleeve-shirt-white-front-60e812b79d9ea.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/white-sweater/mens-long-sleeve-shirt-white-front-60e812b79dd0f.png")
    );
}

function beigeClassicSw() {
  document.querySelector(".white").classList.remove("colorChosen");
  document.querySelector(".red").classList.remove("colorChosen");
  document.querySelector(".militaryGreen").classList.remove("colorChosen");
  document.querySelector(".lightBlue").classList.remove("colorChosen");
  document.querySelector(".blue").classList.remove("colorChosen");
  document.querySelector(".darkBlue").classList.remove("colorChosen");
  document.querySelector(".navy").classList.remove("colorChosen");
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
          "../Product/sweater/beige-Sweater/mens-long-sleeve-shirt-sand-front-60e812b79d36b.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/beige-Sweater/mens-long-sleeve-shirt-sand-front-60e812b79d219.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/beige-Sweater/mens-long-sleeve-shirt-sand-front-60e812b79d603.png")
    );
}

function redClassicSw() {
  document.querySelector(".white").classList.remove("colorChosen");
  document.querySelector(".beige").classList.remove("colorChosen");
  document.querySelector(".militaryGreen").classList.remove("colorChosen");
  document.querySelector(".lightBlue").classList.remove("colorChosen");
  document.querySelector(".blue").classList.remove("colorChosen");
  document.querySelector(".darkBlue").classList.remove("colorChosen");
  document.querySelector(".navy").classList.remove("colorChosen");
  document.querySelector(".lightGray").classList.remove("colorChosen");
  document.querySelector(".black").classList.remove("colorChosen");
  event.target.classList.add("colorChosen");
  document.querySelector("#colorChoice").innerHTML = "Red";
  document.querySelector("#colorChoice").style.backgroundColor = "red";
  document.querySelector("#colorChoice").style.color = "#360000";
  document.querySelector("#colorChoice").style.border = "1px solid #360000";
  document
    .querySelectorAll("#productImg1")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/red-Sweater/mens-long-sleeve-shirt-red-front-60e812b79ca7e.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/red-Sweater/mens-long-sleeve-shirt-red-front-60e812b79c9f9.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/red-Sweater/mens-long-sleeve-shirt-red-front-60e812b79cb60.png")
    );
}

function militaryGreenClassicSw() {
  document.querySelector(".white").classList.remove("colorChosen");
  document.querySelector(".red").classList.remove("colorChosen");
  document.querySelector(".beige").classList.remove("colorChosen");
  document.querySelector(".lightBlue").classList.remove("colorChosen");
  document.querySelector(".blue").classList.remove("colorChosen");
  document.querySelector(".darkBlue").classList.remove("colorChosen");
  document.querySelector(".navy").classList.remove("colorChosen");
  document.querySelector(".lightGray").classList.remove("colorChosen");
  document.querySelector(".black").classList.remove("colorChosen");
  event.target.classList.add("colorChosen");
  document.querySelector("#colorChoice").innerHTML = "Military Green";
  document.querySelector("#colorChoice").style.backgroundColor =
    "rgb(116, 136, 2)";
  document.querySelector("#colorChoice").style.color = "white";
  document.querySelector("#colorChoice").style.border = "1px solid white";
  document
    .querySelectorAll("#productImg1")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/militaryGreen-Sweater/mens-long-sleeve-shirt-military-green-front-60e80ed32f321.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/militaryGreen-Sweater/mens-long-sleeve-shirt-military-green-front-60e80ed32ef92.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/militaryGreen-Sweater/mens-long-sleeve-shirt-military-green-front-60e80ed32f9fe.png")
    );
}

function lightBlueClassicSw() {
  document.querySelector(".white").classList.remove("colorChosen");
  document.querySelector(".red").classList.remove("colorChosen");
  document.querySelector(".militaryGreen").classList.remove("colorChosen");
  document.querySelector(".beige").classList.remove("colorChosen");
  document.querySelector(".blue").classList.remove("colorChosen");
  document.querySelector(".darkBlue").classList.remove("colorChosen");
  document.querySelector(".navy").classList.remove("colorChosen");
  document.querySelector(".lightGray").classList.remove("colorChosen");
  document.querySelector(".black").classList.remove("colorChosen");
  event.target.classList.add("colorChosen");
  document.querySelector("#colorChoice").innerHTML = "Light Blue";
  document.querySelector("#colorChoice").style.backgroundColor = "lightblue";
  document.querySelector("#colorChoice").style.color = "black";
  document.querySelector("#colorChoice").style.border = "1px solid black";
  document
    .querySelectorAll("#productImg1")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/lightBlue-Sweater/mens-long-sleeve-shirt-light-blue-front-60e80ed3325a3.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/lightBlue-Sweater/mens-long-sleeve-shirt-light-blue-front-60e80ed332092.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/lightBlue-Sweater/mens-long-sleeve-shirt-light-blue-front-60e80ed333007.png")
    );
}

function blueClassicSw() {
  document.querySelector(".white").classList.remove("colorChosen");
  document.querySelector(".red").classList.remove("colorChosen");
  document.querySelector(".militaryGreen").classList.remove("colorChosen");
  document.querySelector(".lightBlue").classList.remove("colorChosen");
  document.querySelector(".beige").classList.remove("colorChosen");
  document.querySelector(".darkBlue").classList.remove("colorChosen");
  document.querySelector(".navy").classList.remove("colorChosen");
  document.querySelector(".lightGray").classList.remove("colorChosen");
  document.querySelector(".black").classList.remove("colorChosen");
  event.target.classList.add("colorChosen");
  document.querySelector("#colorChoice").innerHTML = "Blue";
  document.querySelector("#colorChoice").style.backgroundColor = "blue";
  document.querySelector("#colorChoice").style.color = "white";
  document.querySelector("#colorChoice").style.border = "1px solid white";
  document
    .querySelectorAll("#productImg1")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/blue-Sweater/mens-long-sleeve-shirt-indigo-blue-front-60e80ed330967.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/blue-Sweater/mens-long-sleeve-shirt-indigo-blue-front-60e80ed3304df.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/blue-Sweater/mens-long-sleeve-shirt-indigo-blue-front-60e80ed331278.png")
    );
}

function darkBlueClassicSw() {
  document.querySelector(".white").classList.remove("colorChosen");
  document.querySelector(".red").classList.remove("colorChosen");
  document.querySelector(".militaryGreen").classList.remove("colorChosen");
  document.querySelector(".lightBlue").classList.remove("colorChosen");
  document.querySelector(".blue").classList.remove("colorChosen");
  document.querySelector(".beige").classList.remove("colorChosen");
  document.querySelector(".navy").classList.remove("colorChosen");
  document.querySelector(".lightGray").classList.remove("colorChosen");
  document.querySelector(".black").classList.remove("colorChosen");
  event.target.classList.add("colorChosen");
  document.querySelector("#colorChoice").innerHTML = "Dark Blue";
  document.querySelector("#colorChoice").style.backgroundColor = "#00318b";
  document.querySelector("#colorChoice").style.color = "white";
  document.querySelector("#colorChoice").style.border = "1px solid white";
  document
    .querySelectorAll("#productImg1")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/darkBlue-Sweater/mens-long-sleeve-shirt-royal-front-60e80ed32e0da.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/darkBlue-Sweater/mens-long-sleeve-shirt-royal-front-60e80ed32ddeb.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/darkBlue-Sweater/mens-long-sleeve-shirt-royal-front-60e80ed32e698.png")
    );
}

function navyClassicSw() {
  document.querySelector(".white").classList.remove("colorChosen");
  document.querySelector(".red").classList.remove("colorChosen");
  document.querySelector(".militaryGreen").classList.remove("colorChosen");
  document.querySelector(".lightBlue").classList.remove("colorChosen");
  document.querySelector(".blue").classList.remove("colorChosen");
  document.querySelector(".darkBlue").classList.remove("colorChosen");
  document.querySelector(".beige").classList.remove("colorChosen");
  document.querySelector(".lightGray").classList.remove("colorChosen");
  document.querySelector(".black").classList.remove("colorChosen");
  event.target.classList.add("colorChosen");
  document.querySelector("#colorChoice").innerHTML = "Navy";
  document.querySelector("#colorChoice").style.backgroundColor = "navy";
  document.querySelector("#colorChoice").style.color = "white";
  document.querySelector("#colorChoice").style.border = "1px solid white";
  document
    .querySelectorAll("#productImg1")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/navy-Sweater/mens-long-sleeve-shirt-navy-front-60e80ed32c73e.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/navy-Sweater/mens-long-sleeve-shirt-navy-front-60e80ed32c586.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/navy-Sweater/mens-long-sleeve-shirt-navy-front-60e80ed32caa6.png")
    );
}

function lightGrayClassicSw() {
  document.querySelector(".white").classList.remove("colorChosen");
  document.querySelector(".red").classList.remove("colorChosen");
  document.querySelector(".militaryGreen").classList.remove("colorChosen");
  document.querySelector(".lightBlue").classList.remove("colorChosen");
  document.querySelector(".blue").classList.remove("colorChosen");
  document.querySelector(".darkBlue").classList.remove("colorChosen");
  document.querySelector(".navy").classList.remove("colorChosen");
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
          "../Product/sweater/lightGray-Sweater/mens-long-sleeve-shirt-sport-grey-front-60e812b79cd9e.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/lightGray-Sweater/mens-long-sleeve-shirt-sport-grey-front-60e812b79ccaf.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/lightGray-Sweater/mens-long-sleeve-shirt-sport-grey-front-60e812b79cf5e.png")
    );
}

function blackClassicSw() {
  document.querySelector(".white").classList.remove("colorChosen");
  document.querySelector(".beige").classList.remove("colorChosen");
  document.querySelector(".red").classList.remove("colorChosen");
  document.querySelector(".militaryGreen").classList.remove("colorChosen");
  document.querySelector(".lightBlue").classList.remove("colorChosen");
  document.querySelector(".blue").classList.remove("colorChosen");
  document.querySelector(".darkBlue").classList.remove("colorChosen");
  document.querySelector(".navy").classList.remove("colorChosen");
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
          "../Product/sweater/black-Sweater/mens-long-sleeve-shirt-black-front-60e80ed32c183.png")
    );
  document
    .querySelectorAll("#productImg2")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/black-Sweater/mens-long-sleeve-shirt-black-front-60e80ed32c055.png")
    );
  document
    .querySelectorAll("#productImg3")
    .forEach(
      (img) =>
        (img.src =
          "../Product/sweater/black-Sweater/mens-long-sleeve-shirt-black-front-60e80ed32c317.png")
    );
}
