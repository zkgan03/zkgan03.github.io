const checkoutForm = document.getElementById("checkoutForm");
const checkoutEmail = document.getElementById("checkoutEmail");
const checkoutName = document.getElementById("checkoutName");
const add1 = document.getElementById("add1");
const add2 = document.getElementById("add2");
const postcode = document.getElementById("postcode");
const city = document.getElementById("city");
const state = document.getElementById("state");
const checkoutPhoneNum = document.getElementById("checkoutPhoneNum");

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();

  checkout1Validation();
  checkout1Validation2();
  checkout1Validation3();
  checkout1Validation4();
  checkout1Validation5();
  checkout1Validation6();
  checkout1Validation7();
  checkout1Validation8();

  if (checkoutPage2() === 0) {
    window.location.href = "checkoutPage2.html";
  }
});

function checkout1Validation() {
  const checkoutEmailValue = checkoutEmail.value.trim();

  if (checkoutEmailValue === "") {
    setErrorFor(checkoutEmail);
  } else if (!isEmail(checkoutEmailValue)) {
    setErrorFor(checkoutEmail);
  } else {
    setSuccessFor(checkoutEmail);
  }
}

function checkout1Validation2() {
  const checkoutNameValue = checkoutName.value.trim();

  if (checkoutNameValue === "") {
    setErrorFor(checkoutName);
  } else {
    setSuccessFor(checkoutName);
  }
}

function checkout1Validation3() {
  const add1Value = add1.value.trim();

  if (add1Value === "") {
    setErrorFor(add1);
  } else {
    setSuccessFor(add1);
  }
}

function checkout1Validation4() {
  const add2Value = add2.value.trim();

  if (add2Value === "") {
    setErrorFor(add2);
  } else {
    setSuccessFor(add2);
  }
}
function checkout1Validation5() {
  const postcodeValue = postcode.value.trim();

  var postcodelen = /^\d{5}$/;
  if (postcodeValue === "") {
    setErrorFor(postcode);
  } else if (!postcodeValue.match(postcodelen)) {
    setErrorFor(postcode);
  } else {
    setSuccessFor(postcode);
  }
}
function checkout1Validation6() {
  const cityValue = city.value.trim();

  if (cityValue === "") {
    setErrorFor(city);
  } else {
    setSuccessFor(city);
  }
}

function checkout1Validation7() {
  const stateValue = state.value.trim();

  if (stateValue === "") {
    setErrorFor(state);
  } else {
    setSuccessFor(state);
  }
}

function checkout1Validation8() {
  const checkoutPhoneNumValue = checkoutPhoneNum.value.trim();

  var phonenum1 = /^\d{11}$/;
  var phonenum2 = /^\d{10}$/;
  if (checkoutPhoneNumValue === "") {
    setErrorFor(checkoutPhoneNum);
  } else if (
    !(
      checkoutPhoneNumValue.match(phonenum1) ||
      checkoutPhoneNumValue.match(phonenum2)
    )
  ) {
    setErrorFor(checkoutPhoneNum);
  } else {
    setSuccessFor(checkoutPhoneNum);
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

function isEmail(checkoutEmail) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    checkoutEmail
  );
}

function checkoutPage2() {
  var allInput = document.getElementsByTagName("input");
  var invalid = 0;

  for (let i = 0; i < allInput.length; i++) {
    if (allInput[i].classList.contains("error")) {
      invalid = 1;
    }
  }

  return invalid;
}
