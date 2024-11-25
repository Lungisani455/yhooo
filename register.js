const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});










const passwordInput = document.querySelector("#signup_password");
const passwordStrengthText = document.querySelector("#password-strength-text");

passwordInput.addEventListener("input", function () {
  const passwordValue = passwordInput.value;
  const strength = checkPasswordStrength(passwordValue);
  
  passwordStrengthText.textContent = `Password Strength: ${strength}`;
  passwordStrengthText.className = ""; // Reset class

  if (strength === "Weak") {
    passwordStrengthText.classList.add("weak");
  } else if (strength === "Medium") {
    passwordStrengthText.classList.add("medium");
  } else if (strength === "Strong") {
    passwordStrengthText.classList.add("strong");
  }
});

function checkPasswordStrength(password) {
  let strength = "Weak";
  if (password.length >= 8) {
    if (/[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
      strength = "Medium";
    }
    if (/[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
      strength = "Strong";
    }
  }
  return strength;
}































