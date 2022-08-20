import { getTimeOfDay } from './time.js'; //модуль времени

const wrapper = document.querySelector(".wrapper"); //обертка с фоном
const bgSwitchG = document.getElementById('bgSwitchG'); //радио кнопка GitHub
const bgSwitchU = document.getElementById('bgSwitchU'); //радио кнопка Unsplash API
const bgSwitchF = document.getElementById('bgSwitchF'); //радио кнопка Flickr API

//после обновленния страницы
export function seachImg() { //проверка какой выбран поиск картинок для фона
    if (bgSwitchG.checked) { setBg(); } //загрузка фона с github
    if (bgSwitchU.checked) { getLinkToImageU(); } //получение картинки Unsplash API
    if (bgSwitchF.checked) { getLinkToImageF(); } //получение картинки Flickr API
}

//работа с фоном ---------------------------------------------------------------------------------------------------------------
function getRandomNum(n) { //строка из случайного числа от 01 до n
    const num = Math.floor(Math.random() * (n) + 1); //случайное число от 1 до n
    const str = String(num); //число в строку
    const dublStr = str.padStart(2, "0"); //добавляет 0 к строке с одним сивмолом
    return dublStr;
}
let bgNum = getRandomNum(20); //строка из случайного числа от 01 до 20

//загрузка фона с github
export function setBg() {
    const date = new Date(); //обьект текущего времени и даты
    const hours = date.getHours(); //текущее время в часах
    const timeOfDay = getTimeOfDay(hours); //текущее время суток
    const img = new Image();
    img.src = `https://github.com/olegpl1993/stage1-tasks/blob/assets/images/${timeOfDay}/${bgNum}.jpg?raw=true`;
    img.onload = () => {
        wrapper.style.backgroundImage = `url('https://github.com/olegpl1993/stage1-tasks/blob/assets/images/${timeOfDay}/${bgNum}.jpg?raw=true')`;
    };
}

//получение картинки Unsplash API
export async function getLinkToImageU() {
    const date = new Date(); //обьект текущего времени и даты
    const hours = date.getHours(); //текущее время в часах
    const timeOfDay = getTimeOfDay(hours); //текущее время суток
    const searchBG = document.querySelector('.optionBox__searchBG'); //инпут поиска картинки
    let url;
    if (searchBG.value === '') {
        url = `https://api.unsplash.com/photos/random?query=${timeOfDay}&client_id=tL4_DcciuVi6p7Ry8B1ppyemTWjiC1LG0fLVLFR7t-I&count=30`;
    } else {
        url = `https://api.unsplash.com/photos/random?query=${searchBG.value}&client_id=tL4_DcciuVi6p7Ry8B1ppyemTWjiC1LG0fLVLFR7t-I&count=30`;
    }
    const res = await fetch(url);
    const data = await res.json();
    const img = new Image();
    const num = Math.floor(Math.random() * (29) + 1); //случайное число от 1 до 29
    if(!(data[num].urls.regular)){ //если url адрес отстуствует
        getLinkToImageU();
        return;
    }
    img.src = data[num].urls.regular;
    img.onload = () => { //после загрузки картинки
        wrapper.style.backgroundImage = `url('${img.src}')`;
    };
}

//получение картинки Flickr API
export async function getLinkToImageF() {
    const date = new Date(); //обьект текущего времени и даты
    const hours = date.getHours(); //текущее время в часах
    const timeOfDay = getTimeOfDay(hours); //текущее время суток
    const searchBG = document.querySelector('.optionBox__searchBG'); //инпут поиска картинки
    let url;
    if (searchBG.value === '') {
        url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=cdab90d80d88e1e2836283478170c1ff&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`;
    } else {
        url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=cdab90d80d88e1e2836283478170c1ff&tags=${searchBG.value}&extras=url_l&format=json&nojsoncallback=1`;
    }
    const res = await fetch(url);
    const data = await res.json();
    const img = new Image();
    const num = Math.floor(Math.random() * (100 - 1) + 1); //случайное число от 0 до 100
    if(!(data.photos.photo[num].url_l)){ //если url адрес отстуствует
        getLinkToImageF();
        return;
    }
    img.src = data.photos.photo[num].url_l;
    img.onload = () => { //после загрузки картинки
        wrapper.style.backgroundImage = `url('${img.src}')`;
    };
}

//слайдер картинок фона --------------------------------------------------------------------------------------------------------------
export function getSlidePrev() {
    if (bgSwitchG.checked) {
        let cnum = Number(bgNum); //строку в число
        if (cnum > 1) {
            cnum -= 1;
        } else {
            cnum = 20;
        }
        bgNum = String(cnum).padStart(2, "0"); // число в строку и добавляет 0 к строке с одним сивмолом
        setBg(); //изменение фона
    }
    if (bgSwitchU.checked) {
        getLinkToImageU(); //получение картинки Unsplash API
    }
    if (bgSwitchF.checked) {
        getLinkToImageF(); //получение картинки Flickr API
    }
}

export function getSlideNext() {
    if (bgSwitchG.checked) {
        let cnum = Number(bgNum); //строку в число
        if (cnum < 20) {
            cnum += 1;
        } else {
            cnum = 1;
        }
        bgNum = String(cnum).padStart(2, "0"); // число в строку и добавляет 0 к строке с одним сивмолом
        setBg(); //изменение фона
    }
    if (bgSwitchU.checked) {
        getLinkToImageU();//получение картинки Unsplash API
    }
    if (bgSwitchF.checked) {
        getLinkToImageF();//получение картинки Flickr API
    }
}
//-------------------------------------------------------------------------------------------------------------------------------------