// step-: add click event handler with the submit button

document.getElementById("btn-submit").addEventListener("click", function () {
  // step-: get the email address inside the email input field
  // always remeber to use .value to get text from an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //   setp-3 : get password
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  console.log(email, password);
  if (email === "sontan@baap.com" && password === "secret") {
    window.location.href = "bank.html";
  } else {
    alert(" Tui password vule gesos. Toke ami tejjo sontan gosona korlam.");
  }
});
