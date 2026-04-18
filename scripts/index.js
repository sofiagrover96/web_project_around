const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://images.unsplash.com/photo-1668241782930-d051b8decb17?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

let editProfileForm = document.querySelector('form[name="edit-profile"]');

function saveChange(e) {
  e.preventDefault();
  mainPaName.textContent = popInName.value;
  mainPaAbout.textContent = popInAbout.value;
  closeEdit();
}

editProfileForm.addEventListener("submit", saveChange);

const addPlaceForm = document.querySelector("#add-place-form");
const titleInput = document.querySelector(".popup__input_title");
const imageInput = document.querySelector(".popup__input_imageURL");
const cardsContainer = document.querySelector(".main__gallery");

function handleAddPlaceSubmit(e) {
  e.preventDefault();

  const name = titleInput.value;
  const link = imageInput.value;

  const card = new Card({ name, link }, "#card-template");
  const nuevaTarjeta = card.generateCard();

  cardsContainer.prepend(nuevaTarjeta);

  addPlaceForm.reset();
  closeEdit();
}

addPlaceForm.addEventListener("submit", handleAddPlaceSubmit);

initialCards.forEach((card) => {
  const cardInstance = new Card(
    { name: card.name, link: card.link },
    "#card-template"
  );
  const nuevaTarjeta = cardInstance.generateCard();
  cardsContainer.append(nuevaTarjeta);
});

const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

function getCustomErrorMessage(inputElement) {
  if (inputElement.validity.valueMissing) {
    return "Este campo es obligatorio";
  }
  if (inputElement.validity.tooShort) {
    return `Debe tener al menos ${inputElement.minLength} caracteres`;
  }
  if (inputElement.validity.typeMismatch) {
    return "Introduce una URL válida";
  }
  return "Campo inválido";
}

const editFormValidator = new FormValidator(validationConfig, editProfileForm);
const addPlaceFormValidator = new FormValidator(validationConfig, addPlaceForm);

editFormValidator.enableValidation();
addPlaceFormValidator.enableValidation();
