const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const firstnameVal = firstname.value.trim();
  const lastnameVal = lastname.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  if (firstnameVal === "") {
    setErrorFor(firstname, "First Name cannot be empty");
  } else return;

  if (lastnameVal === "") {
    setErrorFor(lastname, "Last Name cannot be empty");
  } else return;

  if (emailVal === "") {
    setErrorFor(email, "Email cannot be empty");
  } else if (!isEmail(emailVal)) {
    setErrorFor(email, "Looks like this is not an email");
  }

  if (passwordVal === "") {
    setErrorFor(password, "Password cannot be empty");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector("small");

  //Adding the error message inside the small tag
  small.innerText = message;

  //Adding error class
  formControl.classList.add("error");
}

function isEmail(email) {
  return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);
}
