let popup = document.querySelector(".popup");
let popBuClose = document.querySelector(".popup__button_close");
let popContain = document.querySelector(".popup__container");
let popInName = document.querySelector(".popup__input_name");
let popInAbout = document.querySelector(".popup__input_about");
let mainBuEdit = document.querySelector(".main__button_edit");
let mainPaName = document.querySelector(".main__paragraph-title");
let mainPaAbout = document.querySelector(".main__paragraph-subtitle");

function openEdit() {
  popInName.value = mainPaName.textContent;
  popInAbout.value = mainPaAbout.textContent;
  popup.classList.toggle("popup_opened");
  console.log("popup_opened");
}

mainBuEdit.addEventListener("click", openEdit);
popBuClose.addEventListener("click", openEdit);

function saveChange(e) {
  e.preventDefault();
  mainPaName.textContent = popInName.value;
  mainPaAbout.textContent = popInAbout.value;
  openEdit();
}

popContain.addEventListener("submit", saveChange);
