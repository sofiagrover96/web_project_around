class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".main__gallery-card")
      .cloneNode(true);

    return cardElement;
  }

  _fillCardData() {
    const cardImage = this._element.querySelector(".main__gallery-image");
    const cardText = this._element.querySelector(".main__gallery-paragraph");

    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardText.textContent = this._name;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._fillCardData();
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    const likeButton = this._element.querySelector(".main__button-like");
    const deleteButton = this._element.querySelector(".main__delete-button");
    const cardImage = this._element.querySelector(".main__gallery-image");

    // Event listener para el botón like
    likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });

    // Event listener para el botón delete
    deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });

    // Event listener para abrir imagen
    cardImage.addEventListener("click", () => {
      this._handlePreviewPicture();
    });
  }

  _handleLikeIcon() {
    const likeIcon = this._element.querySelector(".main__like-icon");
    likeIcon.classList.toggle("main__button-like_active");
    if (likeIcon.classList.contains("main__button-like_active")) {
      likeIcon.src = "./images/Vector-filled.svg";
    } else {
      likeIcon.src = "./images/Vector..svg";
    }
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _handlePreviewPicture() {
    const popup = document.querySelector(".popup_type_image");
    const popupImage = popup.querySelector(".popup__image");
    const popupCaption = popup.querySelector(".popup__caption");

    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupCaption.textContent = this._name;

    popup.classList.add("popup_opened");
  }
}
