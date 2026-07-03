console.log("Card.js cargando");

export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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

  _setEventListeners() {
    const likeButton = this._element.querySelector(".main__button-like");
    const deleteButton = this._element.querySelector(".main__delete-button");
    const cardImage = this._element.querySelector(".main__gallery-image");

    likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });

    deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });

    cardImage.addEventListener("click", () => {
      console.log("click imagen");

      this._handleCardClick(this._name, this._link);
    });
  }

  _handleLikeIcon() {
    const likeIcon = this._element.querySelector(".main__like-icon");

    likeIcon.classList.toggle("main__button-like_active");

    if (likeIcon.classList.contains("main__button-like_active")) {
      likeIcon.src = "./images/Vector-filled.svg";
    } else {
      likeIcon.src = "./images/Vector.svg";
    }
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._fillCardData();
    this._setEventListeners();

    return this._element;
  }
}
