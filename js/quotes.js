const quoteStr = document.querySelector('.quote__text'); //строка с цитатой
const autorStr = document.querySelector('.quote__author'); //строка с автором

export async function getQuotes(lang) {
    const quotes = './json/data.json'; //адрес запроса
    const res = await fetch(quotes); //фетч запрос
    const data = await res.json(); //массив полученный ответом
    if (lang === 'en') {
        const rndNum = Math.floor(Math.random() * data[0].length); //случайной номер цитаты
        quoteStr.textContent = data[0][rndNum].text; //меняет строку цитат в документе
        autorStr.textContent = data[0][rndNum].author; //меняет строку автора в документе
    }
    if (lang === 'ru') {
        const rndNum = Math.floor(Math.random() * data[1].length); //случайной номер цитаты
        quoteStr.textContent = data[1][rndNum].text; //меняет строку цитат в документе
        autorStr.textContent = data[1][rndNum].author; //меняет строку автора в документе
    }
}
