"use strict";

let enterButton = document.querySelector(".header-menu-right-button"); // Кнопка входа
let authPopup = document.querySelector(".authorization"); // Форма
let closeButton = document.querySelector(".authorization-form-close"); // Закрытие формы
let submitButton = document.querySelector(".authorization-form-submit"); // Отправка данных с формы

let error = document.querySelector(".authorization-form-input-error"); // Ошибка

const inputData = {
    email: document.querySelector("#email"),
    password: document.querySelector("#password"),
    global: document.querySelector(".authorization-form-input-field")
}

//Сообщение об ошибке
const INVALID_DATA = "Некорректный ввод данных, повторите попытку";

//Кнопка входа
enterButton.onclick = () => {
    authPopup.style.display = "flex";
}

//Закрытие формы
closeButton.onclick = () => {
    authPopup.style.display = "none";
}

//Поля заполненные некорректно
let getInvalidFields = () => {
    let data = [];

    for (let key in inputData) {
        let inp = inputData[key];

        if (!inp.validity.valid) {
            data.push(inp);
        }
    }

    return data;
}

//Отображение полей с некорректными данными
let displayErrors = (data) => {
    error.innerHTML = INVALID_DATA;

    for (let key in data) {
        data[key].style.border = "1px solid red";
    }
}

//Отправка с формы
submitButton.onclick = () => {
    let invFields = getInvalidFields();

    if (invFields.length > 0) {
        displayErrors(invFields);
    } else {
        document.location.href = "../html/add.html";
        inputData.global.style.border = "1px solid #23415E";
        error.innerHTML = "";
    }
}