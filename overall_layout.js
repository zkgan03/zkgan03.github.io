// Website Preloader
window.addEventListener("load", () => {
  document.querySelector(".loading-wrapper").style.display = "none";
});

// Back to top button
function backToTop() {
  window.scrollTo(0, 0);
}

// Cart Numbers
function OnLoadCartNumbersProduct() {
  let productNumbers = localStorage.getItem("cartNumbers");
  let cartItemQuantity = document.querySelectorAll(".cartItemQuantity");

  for (i = 0; i < cartItemQuantity.length; i++) {
    if (productNumbers) {
      cartItemQuantity[i].textContent = productNumbers;
    } else {
      cartItemQuantity[i].textContent = 0;
    }
  }
}

OnLoadCartNumbersProduct();

// open & close mobile nav bar
function openNav() {
  document.getElementById("ul2_div").style.width = "70%";
  document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
  document.querySelector("#sidebar-modal").style.display = "block";
}

function closeNav() {
  var xyz = document.querySelector(".mobile_c_1");
  document.getElementById("ul2_div").style.width = "0";
  document.getElementsByTagName("BODY")[0].style.overflow = "auto";
  document.querySelector("#sidebar-modal").style.display = "none";
  closeCategories();
  closeAccounts();
}

// close mobile nav bar and open popup login Form & close popup login form
function closeNavSignIn() {
  closeNav();
  document.querySelector(".pop-up-login-wrapper").style.display = "block";
  document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
}

function closePopUpLogin() {
  document.querySelector(".pop-up-login-wrapper").style.display = "none";
  document.getElementsByTagName("BODY")[0].style.overflow = "auto";
}

// Show & hide password
var state = false;
function togglePw() {
  if (state) {
    document.querySelector(".password-input").setAttribute("type", "password");
    document.getElementById("show_pw").style.display = "block";
    document.getElementById("hide_pw").style.display = "none";
    state = false;
  } else {
    document.querySelector(".password-input").setAttribute("type", "text");
    document.getElementById("show_pw").style.display = "none";
    document.getElementById("hide_pw").style.display = "block";
    state = true;
  }
}

// open & close mobile categories
function openCategories() {
  var xyz = document.querySelector(".mobile_c_1");
  xyz.style.display = "flex";
  xyz.style.flexDirection = "column";
  xyz.style.alignItems = "flex-start";
  document.getElementById("close").style.display = "block";
  document.getElementById("open").style.display = "none";
  document
    .getElementById("categories_anchor")
    .setAttribute("OnClick", "javascript: closeCategories()");
}

function closeCategories() {
  var xyz = document.querySelector(".mobile_c_1");
  xyz.style.display = "none";
  document.getElementById("close").style.display = "none";
  document.getElementById("open").style.display = "block";
  document
    .getElementById("categories_anchor")
    .setAttribute("OnClick", "javascript: openCategories()");
}

// open & close mobile accounts
function openAccounts() {
  const xyz = document.querySelectorAll(".mobile_a_1");
  xyz.forEach((xyz) => (xyz.style.display = "flex"));
  xyz.forEach((xyz) => (xyz.style.flexDirection = "column"));
  xyz.forEach((xyz) => (xyz.style.alignItems = "flex-start"));
  document.getElementById("close2").style.display = "block";
  document.getElementById("open2").style.display = "none";
  document
    .getElementById("account_anchor")
    .setAttribute("OnClick", "javascript: closeAccounts()");
}

function closeAccounts() {
  const xyz = document.querySelectorAll(".mobile_a_1");
  xyz.forEach((xyz) => (xyz.style.display = "none"));
  document.getElementById("close2").style.display = "none";
  document.getElementById("open2").style.display = "block";
  document
    .getElementById("account_anchor")
    .setAttribute("OnClick", "javascript: openAccounts()");
}

// open & close mobile search
function openMobileSearch() {
  document.getElementById("mobile_search_bar").style.display = "flex";
  document.getElementById("ul0").style.height = "70px";
  document.getElementById("navbar").style.height = "70px";
  document.getElementById("logo0").style.width = "90px";
  document.getElementById("mobile-search-input").focus();
}

function closeMobileSearch() {
  document.getElementById("mobile_search_bar").style.display = "none";
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("ul0").style.height = "70px";
    document.getElementById("navbar").style.height = "70px";
  } else {
    document.getElementById("ul0").style.height = "100px";
    document.getElementById("navbar").style.height = "100px";
    document.getElementById("logo0").style.width = "125px";
  }
  document.getElementById("mobile-search-form").reset();
}

// open & close non-mobile search
function displaySearch() {
  document.getElementById("search_popup").style.display = "flex";
}

function closeSearch() {
  document.getElementById("search_popup").style.display = "none";
  document.getElementById("search_form").reset();
}

// When the user scrolls down 35px from the top of the document, shrink the navigation bar
if (window.pageYOffset > 35) scrollFunction();
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    document.getElementById("navbar").style.height = "70px";
    document.querySelector(".scroll-top").style.display = "block";
    document.getElementById("navbar").style.padding = "0px 70px";
    document.getElementById("navbar").style.boxShadow =
      "0 5px 10px rgba(128, 128, 128, 0.15)";
    document.getElementById("logo").style.width = "90px";
    document.getElementById("logo0").style.width = "90px";
    document.getElementById("ul0").style.height = "70px";
    document.getElementById("ul0_div1_icon1").style.fontSize = "1.5rem";
    document.getElementById("ul0_div2_icon1").style.fontSize = "1.5rem";
    document.getElementById("ul0_div2_icon2").style.fontSize = "1.5rem";
    var ul1_anchor = document.querySelectorAll(".ul1_anchor");
    ul1_anchor.forEach((ul1_anchor) => (ul1_anchor.style.padding = "23px 0px"));
  } else {
    document.getElementById("navbar").style.height = "100px";
    document.querySelector(".scroll-top").style.display = "none";
    document.getElementById("navbar").style.padding = "0px 13%";
    document.getElementById("navbar").style.boxShadow =
      "0 5px 10px rgba(128, 128, 128, 0.1)";
    document.getElementById("logo").style.width = "125px";
    document.getElementById("logo0").style.width = "125px";
    document.getElementById("ul0").style.height = "100px";
    document.getElementById("ul0_div1_icon1").style.fontSize = "1.75rem";
    document.getElementById("ul0_div2_icon1").style.fontSize = "1.75rem";
    document.getElementById("ul0_div2_icon2").style.fontSize = "1.75rem";
    var ul1_anchor = document.querySelectorAll(".ul1_anchor");
    ul1_anchor.forEach((ul1_anchor) => (ul1_anchor.style.padding = "38px 0px"));
  }
}
