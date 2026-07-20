import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithForms from "../components/PopupWithForms.js";
import PopupWithImage from "../components/PopupWithImage.js";

// ======================
// SELECTORES
// ======================

const editProfileForm = document.querySelector('form[name="edit-profile"]');

const addPlaceForm = document.querySelector("#add-place-form");

const editButton = document.querySelector(".profile__edit-button");

const addButton = document.querySelector(".profile__add-button");

const nameInput = document.querySelector(".popup__input_name");

const aboutInput = document.querySelector(".popup__input_about");

const titleInput = document.querySelector(".popup__input_title");

const imageInput = document.querySelector(".popup__input_imageURL");

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

// ======================
// CONFIG VALIDATION
// ======================

const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

// ======================
// POPUP IMAGEN
// ======================

const imagePopup = new PopupWithImage("#image-popup");

imagePopup.setEventListeners();

// ======================
// USER INFO
// ======================

const userInfo = new UserInfo({
  nameSelector: ".main__paragraph-title",
  aboutSelector: ".main__paragraph-subtitle",
});

// ======================
// SECTION + CARDS
// ======================

function createCard(item) {
  const card = new Card(item, "#card-template", (name, link) => {
    imagePopup.open(name, link);
  });

  return card.generateCard();
}

const cardSection = new Section(
  {
    items: initialCards,

    renderer: createCard,
  },

  ".main__gallery"
);
cardSection.renderItems();

// ======================
// POPUP EDIT PROFILE
// ======================

const profilePopup = new PopupWithForms(
  "#edit-profile-popup",

  (formData) => {
    userInfo.setUserInfo({
      name: formData.name,
      about: formData.about,
    });

    profilePopup.close();
  }
);

profilePopup.setEventListeners();

// ======================
// POPUP ADD PLACE
// ======================

const addPlacePopup = new PopupWithForms(
  "#add-place-popup",

  (formData) => {
    const newCard = createCard({
      name: formData.title,
      link: formData.imageURL,
    });

    cardSection.addItem(newCard);

    addPlacePopup.close();
  }
);

addPlacePopup.setEventListeners();

// ======================
// VALIDADORES
// ======================

const editFormValidator = new FormValidator(validationConfig, editProfileForm);

const addPlaceFormValidator = new FormValidator(validationConfig, addPlaceForm);

editFormValidator.enableValidation();

addPlaceFormValidator.enableValidation();

// ======================
// EVENT LISTENERS
// ======================

editButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo();

  nameInput.value = data.name;

  aboutInput.value = data.about;

  profilePopup.open();
});

addButton.addEventListener("click", () => {
  addPlacePopup.open();
});
