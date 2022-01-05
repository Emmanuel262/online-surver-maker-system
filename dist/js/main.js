const modal = document.querySelector(".modal");
const loginBtn = document.querySelector("#loginBtn");
const signBtn = document.querySelectorAll(".signupBtn");
const closeBtn = document.querySelector(".closeBtn");
const authLoginType = document.querySelector(".auth-types-login");
const authSignupType = document.querySelector(".auth-types-signup");
const authLoginForm = document.querySelector(".auth-login-form");
const authSignupForm = document.querySelector(".auth-signup-form");

signBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.add("active");
  });
});
loginBtn.addEventListener("click", () => {
  modal.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

authLoginType.addEventListener("click", () => {
  authLoginType.classList.add("active");
  authSignupType.classList.remove("active");
  authLoginForm.classList.remove("deactive");
  authSignupForm.classList.remove("active");
});

authSignupType.addEventListener("click", () => {
  authLoginType.classList.remove("active");
  authSignupType.classList.add("active");
  authLoginForm.classList.add("deactive");
  authSignupForm.classList.add("active");
});
