const form = document.getElementById("form");

const sendForm = () => {
  const formData = new FormData(form);
  for (let [key, value] of formData) {
    console.log(`${key}:${value}`);
  }
};

form.addEventListener("submit", sendForm);
