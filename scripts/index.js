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

const popup = document.querySelector("#edit-profile-popup");
let popBuClose = document.querySelectorAll(".popup__button_close");
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

function closeEdit() {
  const openPopups = document.querySelectorAll(".popup_opened");
  openPopups.forEach((popup) => {
    popup.classList.remove("popup_opened");
  });
}

mainBuEdit.addEventListener("click", openEdit);
popBuClose.forEach((button) => {
  button.addEventListener("click", closeEdit);
});

function saveChange(e) {
  e.preventDefault();
  mainPaName.textContent = popInName.value;
  mainPaAbout.textContent = popInAbout.value;
  openEdit();

  console.log("Botón encontrado:", addButton);
  console.log("Popup encontrado:", addPlacePopup);
}

popContain.addEventListener("submit", saveChange);

const addPlacePopup = document.querySelector("#add-place-popup");
const addButton = document.querySelector(".main__button_add");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

addButton.addEventListener("click", () => {
  openPopup(addPlacePopup);
});

popContain.addEventListener("submit", saveChange);

function addLikeListener(likeImage) {
  likeImage.addEventListener("click", function () {
    if (likeImage.classList.contains("main__gallery-like_active")) {
      likeImage.src = "./images/Vector.svg";
      likeImage.classList.remove("main__gallery-like_active");
    } else {
      likeImage.src = "./images/Vector-filled.svg";
      likeImage.classList.add("main__gallery-like_active");
    }
  });
}

function createCard(name, link) {
  const cardElement = document.createElement("div");
  cardElement.className = "main__gallery-card";

  const imageElement = document.createElement("img");
  imageElement.src = link;
  imageElement.alt = `paisaje ${name}`;
  imageElement.className = "main__gallery-image";
  cardElement.appendChild(imageElement);

  imageElement.addEventListener("click", function () {
    openImagePopup(link, `paisaje de ${name}`);
  });
  cardElement.appendChild(imageElement);

  const contentElement = document.createElement("div");
  contentElement.className = "main__gallery-content";
  cardElement.appendChild(contentElement);

  const textElement = document.createElement("p");
  textElement.textContent = name;
  textElement.className = "main__gallery-paragraph";
  contentElement.appendChild(textElement);

  const likeButton = document.createElement("button");
  likeButton.className = "main__gallery-like";
  likeButton.type = "button";
  contentElement.appendChild(likeButton);

  likeButton.className = "main__button main__button-like";
  likeButton.tyoe = "button";

  const likeImage = document.createElement("img");
  likeImage.src = "./images/Vector.svg";
  likeImage.alt = "like";
  likeImage.className = "main__gallery-like";
  likeButton.appendChild(likeImage);

  addLikeListener(likeImage);

  contentElement.appendChild(likeButton);

  const deleteButton = document.createElement("button");
  deleteButton.className = "main__delete-button";
  deleteButton.type = "button";

  const trashImage = document.createElement("img");
  trashImage.src = "./images/trash (1).svg";
  trashImage.alt = "trash";
  trashImage.className = "main__gallery-trash";
  deleteButton.appendChild(trashImage);

  contentElement.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    cardElement.remove();
  });

  return cardElement;
}

function openImagePopup(imageSrc, imageAlt) {
  const imagePopup = document.querySelector(".popup_type_image");
  const popupImage = imagePopup.querySelector(".popup__image");
  const popupCaption = imagePopup.querySelector(".popup__caption");

  popupImage.src = imageSrc;
  popupImage.alt = imageAlt;
  popupCaption.textContent = imageAlt;

  imagePopup.classList.add("popup_opened");
}

const imagePopupCloseButton = document.querySelector(
  ".popup_type_image .popup__close-button"
);
imagePopupCloseButton.addEventListener("click", closeEdit);

const addPlaceForm = document.querySelector("#add-place-popup form");
const titleInput = document.querySelector(".popup__input_title");
const imageInput = document.querySelector(".popup__input_imageURL");
const cardsContainer = document.querySelector(".main__gallery");

addPlaceForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const name = titleInput.value;
  const link = imageInput.value;
  const nuevaTarjeta = createCard(name, link);
  cardsContainer.prepend(nuevaTarjeta);

  addPlaceForm.reset();
  closeEdit();
});

const galleryImages = document.querySelectorAll(".main__gallery-image");
galleryImages.forEach(function (image) {
  image.addEventListener("click", function () {
    console.log("Imagen clickeada:", image.src);
    openImagePopup(image.src, image.alt);
  });
});

const likeButton = document.querySelectorAll(".main__gallery-like");
const likeButtons = document.querySelectorAll(".main__gallery-like");

likeButtons.forEach(function (likeButton) {
  likeButton.addEventListener("click", function () {
    if (likeButton.classList.contains("main__gallery-like_active")) {
      likeButton.src = "./images/Vector.svg";
      likeButton.classList.remove("main__gallery-like_active");
    } else {
      likeButton.src = "./images/Vector-filled.svg";
      likeButton.classList.add("main__gallery-like_active");
    }
  });
});

document.querySelectorAll(".main__delete-button").forEach((button) => {
  button.addEventListener("click", function () {
    console.log("boton clickeado");
    console.log(this.parentElement);
    this.parentElement.parentElement.remove();
  });
});
