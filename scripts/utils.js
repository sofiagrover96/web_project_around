const editPopup = document.querySelector("#edit-profile-popup");
const addPlacePopup = document.querySelector("#add-place-popup");
const addButton = document.querySelector(".main__button_add");
const imagePopupCloseButton = document.querySelector(
  ".popup_type_image .popup__close-button"
);

let popBuClose = document.querySelectorAll(".popup__button_close");
let popInName = document.querySelector(".popup__input_name");
let popInAbout = document.querySelector(".popup__input_about");
let mainBuEdit = document.querySelector(".main__button_edit");
let mainPaName = document.querySelector(".main__paragraph-title");
let mainPaAbout = document.querySelector(".main__paragraph-subtitle");

const imagePopup = document.querySelector(".popup_type_image");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");

function openEdit() {
  popInName.value = mainPaName.textContent;
  popInAbout.value = mainPaAbout.textContent;

  openPopup(editPopup);
}

function closeEdit() {
  const openPopups = document.querySelectorAll(".popup_opened");
  openPopups.forEach((popup) => {
    popup.classList.remove("popup_opened");
  });
  document.removeEventListener("keydown", handleEscClose);
}
function addCloseOnOverlay(popup, closeFunction) {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target === popup) {
      closeFunction();
    }
  });
}
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscClose);
}
function openImagePopup(imageSrc, imageAlt) {
  popupImage.src = imageSrc;
  popupImage.alt = imageAlt;
  popupCaption.textContent = imageAlt;

  imagePopup.classList.add("popup_opened");
}

mainBuEdit.addEventListener("click", openEdit);
popBuClose.forEach((button) => {
  button.addEventListener("click", closeEdit);
});

addButton.addEventListener("click", () => {
  openPopup(addPlacePopup);
});

imagePopupCloseButton.addEventListener("click", closeEdit);

addCloseOnOverlay(editPopup, closeEdit);
addCloseOnOverlay(addPlacePopup, closeEdit);

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    if (openedPopup) {
      closeEdit();
    }
  }
}
