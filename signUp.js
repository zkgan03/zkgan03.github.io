var state2 = false;
function togglePw2() {
    if(state2) {
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("show_pw2").style.display = "block";
        document.getElementById("hide_pw2").style.display = "none";
        state2 = false;
    }
    else {
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("show_pw2").style.display = "none";
        document.getElementById("hide_pw2").style.display = "block";
        state2 = true;
    }
}

var state3 = false;
function togglePw3() {
    if(state3) {
        document.getElementById("password2").setAttribute("type", "password");
        document.getElementById("show_pw3").style.display = "block";
        document.getElementById("hide_pw3").style.display = "none";
        state3 = false;
    }
    else {
        document.getElementById("password2").setAttribute("type", "text");
        document.getElementById("show_pw3").style.display = "none";
        document.getElementById("hide_pw3").style.display = "block";
        state3 = true;
    }
}

let fullnameCheck = 0;
let usernameCheck = 0;
let emailCheck = 0;
let phonenumCheck = 0;
let passwordCheck = 0;
let password2Check = 0;
const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phonenum = document.getElementById('phonenum');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
	checkInputs2();
	checkInputs3();
	checkInputs4();
	checkInputs5();
	signupMsg();
});

function checkInputs() {
	const fullnameValue = fullname.value.trim();
	
	if(fullnameValue === '') {
		setErrorFor(fullname, 'Full name cannot be blank');
		
	} else {
		setSuccessFor(fullname);
		fullnameCheck = 1;
	}
}

function checkInputs2(){
	const usernameValue = username.value.trim();

	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
		
	} else {
		setSuccessFor(username);
		usernameCheck = 1;
	}
}

function checkInputs3(){
	const emailValue = email.value.trim();

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
		
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');

	} else {
		setSuccessFor(email);
		emailCheck = 1;
	}
}

function checkInputs4(){
	const phonenumValue = phonenum.value.trim();

	var phoneno1 = /^\d{11}$/;
	var phoneno2 = /^\d{10}$/;
  	if(phonenumValue === '') {
		setErrorFor(phonenum, 'Phone number cannot be blank');
		
	} else if (!((phonenumValue.match(phoneno1) || (phonenumValue.match(phoneno2))))) {
		setErrorFor(phonenum, 'Phone number is in invalid format');
		
	} else {
		setSuccessFor(phonenum);
		phonenumCheck = 1;
	}
}

function checkInputs5(){
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
		passwordCheck = 1;
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password cannot be blank');
		
	} else if(password2Value !== passwordValue) {
		setErrorFor(password2, 'Password does not match');
		
	} else{
		setSuccessFor(password2);
		password2Check = 1;
	}
}

function setErrorFor(input, message) {
	const inputBox = input.parentElement;
	const small = inputBox.querySelector('small');
	inputBox.className = 'input-box error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const inputBox = input.parentElement;
	inputBox.className = 'input-box success';
	
}
	
function signupMsg(){
	if (fullnameCheck == 1 && usernameCheck == 1 && emailCheck == 1 && phonenumCheck == 1 && passwordCheck == 1 && password2Check == 1) {
		document.querySelector(".signupMsg-wrapper1").style.display = "block";
  		document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
	}
}


function openPopupReset() {
	document.querySelector(".overlay").style.display = "block";
	document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
	}
  

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


