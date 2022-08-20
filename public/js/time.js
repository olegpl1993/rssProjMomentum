import { state } from "./option.js";
const time = document.querySelector(".center__time"); //строка времени
const strDate = document.querySelector(".center__date"); //строка даты
const hi = document.querySelector(".center__hi"); //строка приветствия

//обновляет время ------------------------------------------------------------------------------
export function showTime() {
    const date = new Date(); //обьект текущего времени и даты
    const currentTime = date.toLocaleTimeString(); //текущее время
    time.textContent = currentTime; //меняет время в документе
    showDate(); //обновляет дату
    showGreeting(); //обновляет приветствие
    setTimeout(showTime, 1000); //рекурсивный вызов с задержкой в 1 секунду
}

// обновляет дату -----------------------------------------------------------------------------
export function showDate() {
    const date = new Date(); //обьект текущего времени и даты
    const options = { weekday: 'long', month: 'long', day: 'numeric' }; //настройки вывода даты
    let currentDate;
    if (state.language === 'en') {
        currentDate = date.toLocaleDateString('en-US', options); //текущая дата
    }
    if (state.language === 'ru') {
        currentDate = date.toLocaleDateString('ru-US', options); //текущая дата
    }
    strDate.textContent = currentDate; //меняет дату в документе
}
//----------------------------------------------------------------------------------------------

// обновляет привествие ------------------------------------------------------------------------
export function showGreeting() {
    const date = new Date(); //обьект текущего времени и даты
    const hours = date.getHours(); //текущее время в часах
    const timeOfDay = getTimeOfDay(hours); //текущее время суток
    let greetingText = `Good ${timeOfDay}`; //приветствие
    if (state.language === 'ru') {
        if (greetingText === 'Good night'){
            greetingText = 'Доброй ночи';
        } 
        if (greetingText === 'Good morning') {
            greetingText = 'Доброго утра';
        }
        if (greetingText === 'Good afternoon') {
            greetingText = 'Хорошего дня';
        }
        if (greetingText === 'Good evening') {
            greetingText = 'Хорошего вечера';
        }
    }
    hi.textContent = greetingText; //меняет приветствие в документе
}

//время в часах => время суток
export function getTimeOfDay(hours) {
    if (hours >= 0 && hours < 6) {
        return "night";
    } else if (hours >= 6 && hours < 12) {
        return "morning";
    } else if (hours >= 12 && hours < 18) {
        return "afternoon";
    } else if (hours >= 18 && hours <= 23) {
        return "evening";
    }
}

//-------------------------------------------------------------------------------------------------
