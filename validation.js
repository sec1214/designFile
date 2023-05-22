const email = document.getElementById("email");

email.addEventListener("input", (e) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

function checkPasswordMatch(form) {
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  if (password != confirmPassword) {
    alert("Passwords do not match!");
    return false;
  } else {
    return true;
  }
}

function formatPhoneNumber(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 9)}`;
}

function phoneNumberFormatter() {
  const title = document.querySelector("input.title");
  const inputField = document.getElementById("phone-number");
  const formattedInputValue = formatPhoneNumber(inputField.value);
  inputField.value = formattedInputValue;
  if (inputField.value.length < 9) {
    title = "please enter valid phone number";
  }
}
