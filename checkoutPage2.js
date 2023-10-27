// Bring local storage's subtotal
const allProduct = JSON.parse(localStorage.getItem("items"));

var subtotal = document.querySelector("#subtotal");
var deliveryFee = document.querySelector("#deliveryFee");
var discount = document.querySelector("#discount");
var total = document.querySelector("#total");
var deliveryFeeValue = 0;
var discountValue = 0;
var subtotalValue = 0;

for (product in allProduct) {
  subtotalValue +=
    parseInt(allProduct[product].cartNumbers) *
    parseFloat(allProduct[product].price);
}
if (subtotalValue < 100) deliveryFeeValue = 10;
display();

// Promo code for discount
const promoCodes = [
  {
    code: "1xQFk5A5",
    value: 0.05,
  },
  {
    code: "h146LZ0G",
    value: 0.1,
  },
  {
    code: "1GJ1Nkdw",
    value: 0.15,
  },
  {
    code: "SSNI322",
    value: 0.2,
  },
  {
    code: "NYKD54",
    value: 0.5,
  },
];

function applyDiscount() {
  for (i in promoCodes) {
    if (document.querySelector(".promo-input").value === promoCodes[i].code) {
      discountValue = subtotalValue * promoCodes[i].value;
      document.querySelector(
        "#promo-success"
      ).innerHTML = `Successfully Applied Code '${
        promoCodes[i].code
      }'!<br>Discount ${promoCodes[i].value * 100}% Given.
      `;
      document.querySelector("#promo-error").style.display = "none";
      document.querySelector("#promo-success").style.display = "block";
      console.log("suc");
      break;
    } else {
      discountValue = 0;
      document.querySelector("#promo-error").style.display = "block";
      document.querySelector("#promo-success").style.display = "none";
      console.log("err");
    }
  }
  display();
}

// Display subtotal, delivery fee, discount and total
function display() {
  subtotal.innerText = "RM" + subtotalValue.toFixed(2);
  deliveryFee.innerText = "RM" + deliveryFeeValue.toFixed(2);
  discount.innerText = "RM" + discountValue.toFixed(2);
  total.innerText =
    "RM" + (subtotalValue + deliveryFeeValue - discountValue).toFixed(2);
}

// Validation
const paymentForm = document.getElementById("paymentForm");
const cardNum = document.getElementById("cardNum");
const cardName = document.getElementById("cardName");
const exDate = document.getElementById("exDate");
const securityCode = document.getElementById("securityCode");

radiobtn = document.getElementById("cardChoice");

paymentForm.addEventListener("submit", (e) => {
  if (radiobtn.checked === true) {
    e.preventDefault();
    checkout2Validation();
    checkout2Validation2();
    checkout2Validation3();
    checkout2Validation4();
    if (creditCardCheckout() === 0) {
      window.location.href = "account/Purchase.html";
    }
  }
  localStorage.clear();
});

function checkout2Validation() {
  const cardNumValue = cardNum.value.trim();

  var cardNumslen = /^\d{16}$/;
  if (cardNumValue === "") {
    setErrorFor(cardNum);
  } else if (!cardNumValue.match(cardNumslen)) {
    setErrorFor(cardNum);
  } else {
    setSuccessFor(cardNum);
  }
}

function checkout2Validation2() {
  const cardNameValue = cardName.value.trim();

  if (cardNameValue === "") {
    setErrorFor(cardName);
  } else {
    setSuccessFor(cardName);
  }
}

function checkout2Validation3() {
  const exDateValue = exDate.value.trim();

  if (exDateValue === "") {
    setErrorFor(exDate);
  } else {
    setSuccessFor(exDate);
  }
}

function checkout2Validation4() {
  const securityCodeValue = securityCode.value.trim();

  var securityCodelen = /^\d{3}$/;
  if (securityCodeValue === "") {
    setErrorFor(securityCode);
  } else if (!securityCodeValue.match(securityCodelen)) {
    setErrorFor(securityCode);
  } else {
    setSuccessFor(securityCode);
  }
}

function setErrorFor(input) {
  input.classList.remove("success");
  input.classList.remove("error");
  input.classList.add("error");
}

function setSuccessFor(input) {
  input.classList.remove("error");
  input.classList.remove("success");
  input.classList.add("success");
}

function creditCardCheckout() {
  var allInput = document.getElementsByTagName("input");
  var invalid = 0;

  for (let i = 0; i < allInput.length; i++) {
    if (allInput[i].classList.contains("error")) {
      invalid = 1;
    }
  }

  return invalid;
}
