// const main = document.getElementById("main")
const textDiv = document.getElementById("textDiv");
const textArea = document.getElementById("textArea");

const handleKey = (e) => {
  if (e.keyCode == 69 && e.ctrlKey == true) {
    textArea.innerText = textDiv.innerText;

    textDiv.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  }

  if (e.keyCode == 83 && e.ctrlKey == true) {
    // e.preventDefault();
    textDiv.innerText = textArea.value;

    textDiv.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  }
};

document.addEventListener("keydown", handleKey);
