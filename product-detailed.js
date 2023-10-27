// Next and Previous Image
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var dots = document.getElementsByClassName("demo");
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" opacity-off", "");
    dots[i].style.border = "2px solid rgb(138, 138, 138)";
  }
  dots[slideIndex - 1].style.border = "2px solid #000";
  dots[slideIndex - 1].className += " opacity-off";
  slides[slideIndex - 1].style.display = "flex";
}

// The three images at bottom
function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" opacity-off", "");
    dots[i].style.border = "2px solid rgb(138, 138, 138)";
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " opacity-off";
  dots[slideIndex - 1].style.border = "2px solid #000";
}

// Image Modal (some have 3 images, some 2 images)
var modal = document.getElementById("myModal");
if (document.getElementById("productImg3") !== null) {
  var imgs = [
    document.getElementById("productImg1"),
    document.getElementById("productImg2"),
    document.getElementById("productImg3"),
  ];
} else {
  var imgs = [
    document.getElementById("productImg1"),
    document.getElementById("productImg2"),
  ];
}

var modalImg = document.getElementById("modal-img");
imgs.forEach(
  (img) =>
    (img.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    })
);

// Close Image Modal
var span = document.getElementsByClassName("close-modal")[0];
span.onclick = function () {
  modal.style.display = "none";
};

// Quantity Step Down
function stepDown() {
  document.getElementById("product-quantity").stepDown();
}

// Quantity Step Up
function stepUp() {
  document.getElementById("product-quantity").stepUp();
}

/*add click function to the local storage, to be used in product detailed page*/
let items = [];

let btn = document.getElementById("add-to-cart");
btn.addEventListener("click", function () {
  let selection = document.getElementById("item-size");
  let selected = selection.options[selection.selectedIndex].innerText;

  if (selected === "-- Please Select --") {
    alert("Please choose a size!");
  } else {
    setItems();
    cartNumbersProduct();
  }
});

function buyNow() {
  let selection = document.getElementById("item-size");
  let selected = selection.options[selection.selectedIndex].innerText;

  if (selected === "-- Please Select --") {
    alert("Please choose a size!");
  } else {
    setItems();
    cartNumbersProduct();
    window.location.href = "../cart.html";
  }
}

// adding data to shopping cart
function cartNumbersProduct() {
  let productNumbers = localStorage.getItem("cartNumbers");
  let cartItemQuantity = document.querySelectorAll(".cartItemQuantity");
  let quantityItem = document.getElementById("product-quantity").value;

  productNumbers = parseInt(productNumbers);
  quantityItem = parseInt(quantityItem);

  for (i = 0; i < cartItemQuantity.length; i++) {
    if (productNumbers) {
      localStorage.setItem("cartNumbers", productNumbers + quantityItem);
      cartItemQuantity[i].textContent = productNumbers + quantityItem;
    } else {
      localStorage.setItem("cartNumbers", quantityItem);
      cartItemQuantity[i].textContent = quantityItem;
    }
  }
}

function setItems() {
  if (typeof Storage !== "undefined") {
    let item = {
      color: document.getElementsByClassName("colorChosen")[0].title,
      name: document
        .getElementsByClassName("product-info1")[0]
        .getElementsByTagName("p")[0].textContent,
      price: document
        .getElementsByClassName("product-title-info")[0]
        .getElementsByTagName("p")[0].textContent,
      imgSrc: document.getElementById("productImg2").src,
      cartNumbers: document.getElementById("product-quantity").value,
      size: document.getElementById("item-size").options[
        document.getElementById("item-size").selectedIndex
      ].innerHTML,
    };

    if (JSON.parse(localStorage.getItem("items")) === null) {
      let itemPrice = item.price;
      itemPrice = itemPrice.replace("RM", "");
      itemPrice = parseFloat(itemPrice);
      item.price = itemPrice;
      items.push(item);
      localStorage.setItem("items", JSON.stringify(items));
      window.location.reload();
    } else {
      const localItems = JSON.parse(localStorage.getItem("items"));
      let itemPrice = item.price;
      itemPrice = itemPrice.replace("RM", "");
      itemPrice = parseFloat(itemPrice);
      item.price = itemPrice;

      localItems.map((data) => {
        if (item.imgSrc == data.imgSrc && item.size == data.size) {
          data.cartNumbers = parseInt(data.cartNumbers);
          item.cartNumbers = parseInt(item.cartNumbers);
          item.cartNumbers = data.cartNumbers + item.cartNumbers;
        } else {
          items.push(data);
        }
      });
      items.push(item);
      localStorage.setItem("items", JSON.stringify(items));
      window.location.reload();
    }
  } else {
    alert("local storage is not working on your browser");
  }
}

var latestBtn = document.getElementById("latestBtn");
var topRatedBtn = document.getElementById("topRatedBtn");

function setLatestBtn() {
  latestBtn.style.backgroundColor = "transparent";
  latestBtn.style.color = "black";
  latestBtn.setAttribute(
    "onmouseenter",
    "this.style.color = 'whitesmoke'; this.style.backgroundColor = 'black'"
  );
  latestBtn.setAttribute(
    "onmouseleave",
    "this.style.color = 'black'; this.style.backgroundColor = 'whitesmoke'"
  );
}

function setTopRatedBtn() {
  topRatedBtn.style.backgroundColor = "transparent";
  topRatedBtn.style.color = "black";
  topRatedBtn.setAttribute(
    "onmouseenter",
    "this.style.color = 'whitesmoke'; this.style.backgroundColor = 'black'"
  );
  topRatedBtn.setAttribute(
    "onmouseleave",
    "this.style.color = 'black'; this.style.backgroundColor = 'whitesmoke'"
  );
}

// Sort Reviews From Latest
function sortFromLatest() {
  latestBtn.style.backgroundColor = "black";
  latestBtn.style.color = "whitesmoke";
  latestBtn.setAttribute("onmouseenter", "");
  latestBtn.setAttribute("onmouseleave", "");
  setTopRatedBtn();
}

// Sort Reviews From Top Rated
function sortFromTopRated() {
  topRatedBtn.style.backgroundColor = "black";
  topRatedBtn.style.color = "whitesmoke";
  topRatedBtn.setAttribute("onmouseenter", "");
  topRatedBtn.setAttribute("onmouseleave", "");
  setLatestBtn();
}

// Review Images Modal
function popUpImg(e) {
  let modal = document.querySelector("#review-img-modal");
  let img = document.querySelector("#review-img-modal-img");
  modal.style.display = "grid";
  img.src = e.src;
}

// See All Reviews
function expandReview() {
  let reviews = document.querySelectorAll(".customer-review");
  let toggler = document.querySelector("#expand-review-btn");

  if (reviews[3].style.height === "0px") {
    for (let i = 3; i < reviews.length; i++) {
      reviews[i].style.overflow = "visible";
      reviews[i].style.height = "auto";
      reviews[i].style.padding = "1rem 0";
    }
    toggler.innerText = "Collapse Reviews";
  } else {
    for (let i = reviews.length - 1; i >= 3; i--) {
      reviews[i].style.overflow = "hidden";
      reviews[i].style.height = "0px";
      reviews[i].style.padding = "0";
    }
    toggler.innerText = "See All Reviews";
  }
}
