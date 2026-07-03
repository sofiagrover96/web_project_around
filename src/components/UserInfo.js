console.log("UserInfo.js cargando");

export default class UserInfo {
  constructor(selectores) {
    this._nameElement = document.querySelector(selectores.nameSelector);
    this._aboutElement = document.querySelector(selectores.aboutSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent,
    };
  }

  setUserInfo(data) {
    this._nameElement.textContent = data.name;
    this._aboutElement.textContent = data.about;
  }
}
