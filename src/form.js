const urlAPI = "https://jsonplaceholder.typicode.com/posts";

const form = document.querySelector(".form");
const nameError = document.querySelector(".form__name-error");
const emailError = document.querySelector(".form__email-error");
const msgError = document.querySelector(".form__msg-error");

const toggleError = (inputErrorName, className) => {
  inputErrorName.classList.toggle(`form__${className}-error_hidden`);
  inputErrorName.classList.toggle(`form__${className}-error_visible`);
  inputErrorName.parentElement
    .querySelector(".form__input")
    .classList.toggle(`form__input_error`);
};

const cleanError = (inputErrorName, className) => {
  inputErrorName.classList.add(`form__${className}-error_hidden`);
  inputErrorName.classList.remove(`form__${className}-error_visible`);
  inputErrorName.parentElement
    .querySelector(".form__input")
    .classList.remove(`form__input_error`);
};

const cleanErrors = () => {
  cleanError(nameError, "name");
  cleanError(emailError, "email");
  cleanError(msgError, "msg");
};

const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  cleanErrors();
  let formError = false;

  const nameInput = form.elements["name"];
  const nameValue = nameInput.value.trim();

  const emailInput = form.elements["email"];
  const emailValue = emailInput.value.trim();

  const messageInput = form.elements["msg"];
  const messageValue = messageInput.value.trim();

  const checkbox = form.elements["checkbox"];
  const isChecked = checkbox.checked;

  console.log(nameValue, emailValue, messageValue, isChecked);

  if (!nameValue || nameValue.length < 2) {
    toggleError(nameError, "name");
    nameInput.focus();
    formError = true;
  }
  if (!emailIsValid(emailValue)) {
    toggleError(emailError, "email");
    emailInput.focus();
    formError = true;
  }
  if (!messageValue || messageValue.length < 6) {
    toggleError(msgError, "msg");
    messageInput.focus();
    formError = true;
  }
  if (!isChecked) {
    formError = true;
  }
  if (formError) {
    return;
  }

  const payload = {
    name: nameValue,
    email: emailValue,
    message: messageValue,
    consentToPrivacyPolicy: isChecked,
  };

  // If validation passes, submit the form

  async function submitForm(payload) {
    let response = await fetch(urlAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // testing
        console.log(
          `response.ok: ${response.ok} , response.status: ${response.status}`
        );
        alert("Form submitted successfully");

        return response;
      })
      .catch((err) => {
        // testing
        console.error(err);
        alert("Please try again");
      });

    return response.json();
  }

  const res = await submitForm(payload);
  // testing
  console.log(res);

  form.reset();
  cleanErrors();
});
