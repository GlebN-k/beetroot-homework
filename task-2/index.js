function btnModalWindow() {
  let modalWindow = document.querySelector(".modal-window");
  let btn = document.querySelector(".btn");

  modalWindow.style.display === "block"
    ? (modalWindow.style.display = "none")
    : (modalWindow.style.display = "block");

  btn.innerHTML === "ВІДКРИТИ"
    ? (btn.innerHTML = "ЗАЧИНИТИ")
    : (btn.innerHTML = "ВІДКРИТИ");
}
