
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let countrySelect = document.getElementById("country");


if (window.sessionStorage.getItem("input-name")) {
  nameInput.value = window.sessionStorage.getItem("input-name");
}
if (window.sessionStorage.getItem("input-email")) {
  emailInput.value = window.sessionStorage.getItem("input-email");
}
if (window.sessionStorage.getItem("input-password")) {
  passwordInput.value = window.sessionStorage.getItem("input-password");
}
if (window.sessionStorage.getItem("select-country")) {
  countrySelect.value = window.sessionStorage.getItem("select-country");
}

nameInput.oninput = function () {
  window.sessionStorage.setItem("input-name", nameInput.value);
};

emailInput.oninput = function () {
  window.sessionStorage.setItem("input-email", emailInput.value);
};

passwordInput.oninput = function () {
  window.sessionStorage.setItem("input-password", passwordInput.value);
};

countrySelect.onchange = function () {
  window.sessionStorage.setItem("select-country", countrySelect.value);
};