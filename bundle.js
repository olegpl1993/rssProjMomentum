(()=>{"use strict";const e=document.querySelector(".quote__text"),t=document.querySelector(".quote__author");async function n(n){const o=await fetch("./json/data.json"),c=await o.json();if("en"===n){const n=Math.floor(Math.random()*c[0].length);e.textContent=c[0][n].text,t.textContent=c[0][n].author}if("ru"===n){const n=Math.floor(Math.random()*c[1].length);e.textContent=c[1][n].text,t.textContent=c[1][n].author}}async function o(e){const t=document.querySelector(".wether__city"),n=document.querySelector(".wether__icon"),o=document.querySelector(".wether__temperature"),c=document.querySelector(".wether__description"),r=document.querySelector(".wether__wind"),a=document.querySelector(".wether__wet"),l=`https://api.openweathermap.org/data/2.5/weather?q=${t.value}&lang=${e}&appid=08f2a575dda978b9c539199e54df03b0&units=metric`,s=await fetch(l),i=await s.json();n.className="wether__icon owf",200===i.cod?(n.classList.add(`owf-${i.weather[0].id}`),c.textContent=i.weather[0].description,o.textContent=`${Math.round(i.main.temp)}°C`,"en"===e&&(r.textContent=`${Math.round(i.wind.speed)} mps`),"ru"===e&&(r.textContent=`${Math.round(i.wind.speed)} м/с`),a.textContent=`${i.main.humidity} %`):("en"===e&&(c.textContent="City not found",o.textContent="Error"),"ru"===e&&(c.textContent="Город не найден",o.textContent="Ошибка"),r.textContent="",a.textContent="")}const c=document.querySelector(".optionBTN"),r=document.querySelector(".todoBTN"),a=document.querySelector(".strTodolist"),l=document.querySelector(".strEnglish"),s=document.querySelector(".strRussian"),i=document.querySelector(".optionBox__searchBTN"),u=document.querySelector(".strTime"),d=document.querySelector(".strDate"),g=document.querySelector(".strGreeting"),m=document.querySelector(".strQuote"),h=document.querySelector(".strWeather"),y=document.querySelector(".strAudio"),p=document.querySelector(".wether__city"),S=document.querySelector(".center__name"),_=document.querySelector(".optionBox__searchBG"),k=document.querySelector(".todoBox__inputTodo");function L(e){n(e),R(),F(),o(e),f(e)}function f(e){"en"===e&&("Минск"===p.value&&(p.value="Minsk"),k.placeholder="new todo",_.placeholder="search image",S.placeholder="your name",c.textContent="Options",r.textContent="Todo list",a.textContent="Todo list",l.textContent="English",s.textContent="Russian",i.textContent="Search",u.textContent="Time",d.textContent="Date",g.textContent="Greeting",m.textContent="Quote",h.textContent="Weather",y.textContent="Player"),"ru"===e&&("Minsk"===p.value&&(p.value="Минск"),k.placeholder="добавить дело",_.placeholder="поиск картинок",S.placeholder="ваше имя",c.textContent="Настройки",r.textContent="Список дел",a.textContent="Список дел",l.textContent="Английский",s.textContent="Русский",i.textContent="Найти",u.textContent="Часы",d.textContent="Дата",g.textContent="Приветствие",m.textContent="Цитата",h.textContent="Погода",y.textContent="Плеер")}const q=document.getElementById("time"),w=document.getElementById("date"),v=document.getElementById("greeting"),b=document.getElementById("quote"),I=document.getElementById("weather"),x=document.getElementById("audio"),E=document.getElementById("todolist"),C=document.getElementById("bgSwitchG"),B=document.getElementById("bgSwitchU"),T=document.getElementById("bgSwitchF"),$=document.getElementById("langSwitchE"),P=document.getElementById("langSwitchR"),N={language:"en",photoSource:"github",blocks:["time","date","greeting","quote","weather","audio","todolist"]};function G(){document.querySelector(".optionBox").classList.toggle("activ")}function M(){C.checked&&(N.photoSource="github"),B.checked&&(N.photoSource="unsplash"),T.checked&&(N.photoSource="flickr")}function A(){$.checked&&(N.language="en",L(N.language)),P.checked&&(N.language="ru",L(N.language))}q.addEventListener("change",(()=>{document.querySelector(".center__time").classList.toggle("hide"),document.querySelector(".center__time").classList.contains("hide")?N.blocks=N.blocks.filter((e=>"time"!==e)):N.blocks.push("time")})),w.addEventListener("change",(()=>{document.querySelector(".center__date").classList.toggle("hide"),document.querySelector(".center__date").classList.contains("hide")?N.blocks=N.blocks.filter((e=>"date"!==e)):N.blocks.push("date")})),v.addEventListener("change",(()=>{document.querySelector(".center__row").classList.toggle("hide"),document.querySelector(".center__row").classList.contains("hide")?N.blocks=N.blocks.filter((e=>"greeting"!==e)):N.blocks.push("greeting")})),b.addEventListener("change",(()=>{document.querySelector(".quote").classList.toggle("hide"),document.querySelector(".quote").classList.contains("hide")?N.blocks=N.blocks.filter((e=>"quote"!==e)):N.blocks.push("quote")})),I.addEventListener("change",(()=>{document.querySelector(".wether").classList.toggle("hide"),document.querySelector(".wether").classList.contains("hide")?N.blocks=N.blocks.filter((e=>"weather"!==e)):N.blocks.push("weather")})),x.addEventListener("change",(()=>{document.querySelector(".player").classList.toggle("hide"),document.querySelector(".player").classList.contains("hide")?N.blocks=N.blocks.filter((e=>"audio"!==e)):N.blocks.push("audio")})),E.addEventListener("change",(()=>{document.querySelector(".todoBTN").classList.toggle("hide"),document.querySelector(".todoBTN").classList.contains("hide")?N.blocks=N.blocks.filter((e=>"todolist"!==e)):N.blocks.push("todolist")})),C.addEventListener("change",M),B.addEventListener("change",M),T.addEventListener("change",M),$.addEventListener("change",A),P.addEventListener("change",A);const j=document.querySelector(".center__time"),D=document.querySelector(".center__date"),H=document.querySelector(".center__hi");function R(){const e=new Date,t={weekday:"long",month:"long",day:"numeric"};let n;"en"===N.language&&(n=e.toLocaleDateString("en-US",t)),"ru"===N.language&&(n=e.toLocaleDateString("ru-US",t)),D.textContent=n}function F(){let e=`Good ${W((new Date).getHours())}`;"ru"===N.language&&("Good night"===e&&(e="Доброй ночи"),"Good morning"===e&&(e="Доброго утра"),"Good afternoon"===e&&(e="Хорошего дня"),"Good evening"===e&&(e="Хорошего вечера")),H.textContent=e}function W(e){return e>=0&&e<6?"night":e>=6&&e<12?"morning":e>=12&&e<18?"afternoon":e>=18&&e<=23?"evening":void 0}const O=document.querySelector(".wrapper"),U=document.getElementById("bgSwitchG"),J=document.getElementById("bgSwitchU"),V=document.getElementById("bgSwitchF");function X(){U.checked&&Y(),J.checked&&z(),V.checked&&K()}let Q=function(e){const t=Math.floor(20*Math.random()+1);return String(t).padStart(2,"0")}();function Y(){const e=W((new Date).getHours()),t=new Image;t.src=`https://github.com/olegpl1993/stage1-tasks/blob/assets/images/${e}/${Q}.jpg?raw=true`,t.onload=()=>{O.style.backgroundImage=`url('https://github.com/olegpl1993/stage1-tasks/blob/assets/images/${e}/${Q}.jpg?raw=true')`}}async function z(){const e=W((new Date).getHours()),t=document.querySelector(".optionBox__searchBG");let n;n=""===t.value?`https://api.unsplash.com/photos/random?query=${e}&client_id=tL4_DcciuVi6p7Ry8B1ppyemTWjiC1LG0fLVLFR7t-I&count=30`:`https://api.unsplash.com/photos/random?query=${t.value}&client_id=tL4_DcciuVi6p7Ry8B1ppyemTWjiC1LG0fLVLFR7t-I&count=30`;const o=await fetch(n),c=await o.json(),r=new Image,a=Math.floor(29*Math.random()+1);c[a].urls.regular?(r.src=c[a].urls.regular,r.onload=()=>{O.style.backgroundImage=`url('${r.src}')`}):z()}async function K(){const e=W((new Date).getHours()),t=document.querySelector(".optionBox__searchBG");let n;n=""===t.value?`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=cdab90d80d88e1e2836283478170c1ff&tags=${e}&extras=url_l&format=json&nojsoncallback=1`:`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=cdab90d80d88e1e2836283478170c1ff&tags=${t.value}&extras=url_l&format=json&nojsoncallback=1`;const o=await fetch(n),c=await o.json(),r=new Image,a=Math.floor(99*Math.random()+1);c.photos.photo[a].url_l?(r.src=c.photos.photo[a].url_l,r.onload=()=>{O.style.backgroundImage=`url('${r.src}')`}):K()}const Z=document.querySelector(".todoBox__addBTN"),ee=document.querySelector(".todoBox__inputTodo"),te=document.querySelector(".todoBox__list");let ne=[],oe=[];function ce(){te.innerHTML="";for(let e=0;e<ne.length;e++)oe.includes(String(e))?te.innerHTML+=`<li class="rower">\n            <p class='checked' id='todoString${e}'>${ne[e]}</p>\n            <button class="delBTN" id=delID${e}>X</button>\n            </li>`:te.innerHTML+=`<li class="rower">\n            <p class='todo' id='todoString${e}'>${ne[e]}</p>\n            <button class="delBTN" id=delID${e}>X</button>\n            </li>`}function re(){ne.push(ee.value),ee.value="",ce()}ee.addEventListener("keypress",(e=>{"Enter"===e.key&&re()})),Z.addEventListener("click",re),te.addEventListener("click",(e=>{if(!e.target.classList.contains("delBTN"))return;const t=e.target.id.split("").splice(5).join(""),n=document.getElementById(`todoString${t}`).textContent;ne=ne.filter((e=>e!==n)),oe=oe.filter((e=>e!==t)),ce()})),te.addEventListener("click",(e=>{if(!e.target.classList.contains("todo")&&!e.target.classList.contains("checked"))return;const t=e.target.id.split("").splice(10).join("");oe.includes(t)?oe=oe.filter((e=>e!==t)):oe.push(t),ce()}));const ae=document.querySelector(".center__name"),le=document.querySelector(".wether__city"),se=document.querySelector(".optionBox__searchBG"),ie=[{title:"Aqua Caelestis",src:"./sounds/Aqua Caelestis.mp3",duration:"00:39"},{title:"Ennio Morricone",src:"./sounds/Ennio Morricone.mp3",duration:"01:37"},{title:"River Flows In You",src:"./sounds/River Flows In You.mp3",duration:"1:37"},{title:"Summer Wind",src:"./sounds/Summer Wind.mp3",duration:"01:50"}],ue=new Audio;let de=0,ge=0;const me=document.querySelector(".player__list"),he=document.querySelector(".player__play"),ye=document.querySelector(".player__progress"),pe=document.querySelector(".player__progressTime"),Se=document.querySelector(".player__volume"),_e=document.querySelector(".player__volumeChange");function ke(){ue.src=ie[de].src,ue.currentTime=ge,ue.play()}function Le(){ge=ue.currentTime,ue.pause()}function fe(){he.classList.toggle("activ"),he.classList.contains("activ")?ke():Le(),we()}function qe(){Le(),ge=0,ue.currentTime=0,de===ie.length-1?de=0:de+=1,he.classList.contains("activ")&&ke(),we()}function we(){me.innerHTML="";for(let e=0;e<ie.length;e++)e===de&&he.classList.contains("activ")?me.innerHTML+=`<li class="trackNum${e} curent">${ie[e].title}</li>`:me.innerHTML+=`<li class="trackNum${e}">${ie[e].title}</li>`}function ve(e){if(isNaN(e))return"0:00";let t=parseInt(e),n=parseInt(t/60);t-=60*n;const o=parseInt(n/60);return n-=60*o,0===o?`${n}:${String(t%60).padStart(2,0)}`:`${String(o).padStart(2,0)}:${n}:${String(t%60).padStart(2,0)}`}ue.addEventListener("ended",(()=>{qe()})),window.addEventListener("beforeunload",(function(){localStorage.setItem("city",le.value),localStorage.setItem("name",ae.value),localStorage.setItem("searchBG",se.value),localStorage.setItem("language",N.language),localStorage.setItem("photoSource",N.photoSource),localStorage.setItem("blocks",N.blocks);const e=ne.join("*%");localStorage.setItem("todoList",e);const t=oe.join("*%");localStorage.setItem("chackedList",t)})),window.addEventListener("load",(function(){if(localStorage.getItem("name")&&(ae.value=localStorage.getItem("name")),localStorage.getItem("city")&&(le.value=localStorage.getItem("city")),localStorage.getItem("searchBG")&&(se.value=localStorage.getItem("searchBG")),localStorage.getItem("language")&&(N.language=localStorage.getItem("language")),localStorage.getItem("photoSource")&&(N.photoSource=localStorage.getItem("photoSource")),localStorage.getItem("blocks")&&(N.blocks=localStorage.getItem("blocks").split(",")),localStorage.getItem("todoList")){const e=localStorage.getItem("todoList").split("*%");for(let t=0;t<e.length;t++)ne.push(e[t])}if(localStorage.getItem("chackedList")){const e=localStorage.getItem("chackedList").split("*%");for(let t=0;t<e.length;t++)oe.push(e[t])}ce(),N.language.includes("en")&&($.checked=!0),N.language.includes("ru")&&(P.checked=!0),N.photoSource.includes("github")&&(C.checked=!0),N.photoSource.includes("unsplash")&&(B.checked=!0),N.photoSource.includes("flickr")&&(T.checked=!0),N.blocks.includes("time")?q.checked=!0:document.querySelector(".center__time").classList.add("hide"),N.blocks.includes("date")?w.checked=!0:document.querySelector(".center__date").classList.add("hide"),N.blocks.includes("greeting")?v.checked=!0:document.querySelector(".center__row").classList.add("hide"),N.blocks.includes("quote")?b.checked=!0:document.querySelector(".quote").classList.add("hide"),N.blocks.includes("weather")?I.checked=!0:document.querySelector(".wether").classList.add("hide"),N.blocks.includes("audio")?x.checked=!0:document.querySelector(".player").classList.add("hide"),N.blocks.includes("todolist")?E.checked=!0:document.querySelector(".todoBTN").classList.add("hide")})),window.addEventListener("load",(()=>{f(N.language)})),window.addEventListener("load",(function e(){const t=(new Date).toLocaleTimeString();j.textContent=t,R(),F(),setTimeout(e,1e3)})),document.querySelector(".optionBTN").addEventListener("click",G),window.addEventListener("load",X),document.querySelector(".leftArrow").addEventListener("click",(function(){if(U.checked){let e=Number(Q);e>1?e-=1:e=20,Q=String(e).padStart(2,"0"),Y()}J.checked&&z(),V.checked&&K()})),document.querySelector(".rightArrow").addEventListener("click",(function(){if(U.checked){let e=Number(Q);e<20?e+=1:e=1,Q=String(e).padStart(2,"0"),Y()}J.checked&&z(),V.checked&&K()})),document.querySelector(".optionBox__searchBTN").addEventListener("click",(()=>{X(),G()})),document.querySelector(".optionBox__searchBG").addEventListener("keypress",(e=>{"Enter"===e.key&&(X(),G())})),window.addEventListener("load",(()=>{o(N.language)})),document.querySelector(".wether__city").addEventListener("change",(()=>{o(N.language)})),window.addEventListener("load",(()=>{n(N.language)})),document.querySelector(".quote__update").addEventListener("click",(()=>{n(N.language)})),window.addEventListener("load",(function(){setInterval((()=>{we(),document.querySelector(".player__trackName").textContent=ie[de].title,ye.style.width=ue.currentTime/ue.duration*100+"%",pe.textContent=`${ve(ue.currentTime)} / ${ve(ue.duration)}`}),500)}));const be=document.querySelector(".player__play-prev"),Ie=document.querySelector(".player__play"),xe=document.querySelector(".player__play-next");Ie.addEventListener("click",fe),be.addEventListener("click",(function(){Le(),ge=0,ue.currentTime=0,0===de?de=ie.length-1:de-=1,he.classList.contains("activ")&&ke(),we()})),xe.addEventListener("click",qe),document.querySelector(".player__list").addEventListener("click",(e=>{!function(e){de===parseInt(e.target.classList.value.split("").slice(8))?fe():e.target.classList.contains("curent")||e.target.classList.contains("player__list")||(de=Number(e.target.classList.value.split("").splice(8).join("")),ge=0,ue.currentTime=0,he.classList.contains("activ")?ke():fe()),we()}(e)})),document.querySelector(".player__duration").addEventListener("click",(e=>{!function(e){const t=e.offsetX/150*ue.duration;ue.currentTime=t}(e)})),document.querySelector(".player__volume").addEventListener("click",(function(){Se.classList.toggle("off"),Se.classList.contains("off")?(ue.volume=0,_e.style.width=100*ue.volume+"%"):(ue.volume=1,_e.style.width=100*ue.volume+"%")})),document.querySelector(".player__volumeLevel").addEventListener("click",(e=>{!function(e){const t=e.offsetX/100;ue.volume=t,_e.style.width=100*ue.volume+"%"}(e)})),document.querySelector(".todoBTN").addEventListener("click",(function(){document.querySelector(".todoBox").classList.toggle("activ")})),console.log('1. Часы и календарь +15\nвремя выводится в 24-часовом формате, например: 21:01:00 +5\nвремя обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается) +5\nвыводится день недели, число, месяц, например: "Воскресенье, 16 мая" / "Sunday, May 16" / "Нядзеля, 16 траўня" +5\nЯзык и формат вывода даты определяется языком приложения.\nпри изменении дня недели, даты, месяца эти данные меняются в приложении (в ходе кросс-чека этот пункт не проверяется)\n\n2. Приветствие +10\nтекст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь) +5\nс 6:00 до 11:59 - Good morning / Доброе утро / Добрай раніцы\nс 12:00 до 17:59 - Good afternoon / Добрый день / Добры дзень\nс 18:00 до 23:59 - Good evening / Добрый вечер / Добры вечар\nс 00:00 до 5:59 - Good night / Доброй/Спокойной ночи / Дабранач\nпри изменении времени суток, если в это время приложение открыто, меняется текст приветствия (в ходе кросс-чека этот пункт не проверяется)\nпользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется, данные о нём хранятся в local storage +5\n\n3. Смена фонового изображения +20\nПри загрузке или перезагрузке приложения фоновое изображение выбирается из расположенной на GitHub коллекции изображений.\nРепозиторий с изображениями необходимо форкнуть, и использовать изображения форкнутого репозитория, а не школьного.\nСами изображения желательно оптимизировать, например, конвертировать в формат WebP с целью уменьшения веса и увеличения скорости загрузки.\nТакже можно использовать свою собственную коллекцию изображений.\nСкачать картинки на компьютер и использовать локальные файлы нельзя.\nссылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения (от 01 до 20) +5\nПример ссылки на фоновое изображение: https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg, здесь\nevening - время суток, другие значения afternoon, morning, night\n18 - рандомный (случайный) номер изображения, от 01 до 20.\nизображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана.\nизображения перелистываются последовательно - после 18 изображения идёт 19 (клик по правой стрелке), перед 18 изображением идёт 17 (клик по левой стрелке) +5\nизображения перелистываются по кругу: после двадцатого изображения идёт первое (клик по правой стрелке), перед 1 изображением идёт 20 (клик по левой стрелке) +5\nпри смене слайдов важно обеспечить плавную смену фоновых изображений. Не должно быть состояний, когда пользователь видит частично загрузившееся изображение или страницу без фонового изображения. Плавную смену фоновых изображений не проверяем: 1) при загрузке и перезагрузке страницы 2) при открытой консоли браузера 3) при слишком частых кликах по стрелкам для смены изображения +5\n\n4. Виджет погоды +15\nгород по умолчанию - Минск, пока пользователь не ввёл другой город\nпри перезагрузке страницы приложения указанный пользователем город сохраняется, данные о нём хранятся в local storage +5\nдля указанного пользователем населённого пункта выводятся данные о погоде, если их возвращает API\nданные о погоде включают в себя: иконку погоды, описание погоды, температуру в °C, скорость ветра в м/с, относительную влажность воздуха в %. Числовые параметры погоды округляются до целых чисел +5\nвыводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов) +5\n\n5. Виджет цитата дня +10\nпри загрузке страницы приложения отображается рандомная цитата и её автор +5\nВ качестве источника цитаты можно использовать как API, так и созданный вами или найденный в интернете JSON-файл с цитатами и их авторами. API с цитатами не отличаются надёжностью и долговечностью, используемый в качестве источника цитат собственный JSON-файл гарантирует работоспособность вашего приложения. Запросы к JSON также осуществляются асинхронно, таким образом необходимые знания о работе с асинхронными запросами вы получите\nпри перезагрузке страницы цитата обновляется (заменяется на другую). Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +5\n\n6. Аудиоплеер +15\nпри клике по кнопке Play/Pause проигрывается первый трек из блока play-list, иконка кнопки меняется на Pause +3\nпри клике по кнопке Play/Pause во время проигрывания трека, останавливается проигрывание трека, иконка кнопки меняется на Play +3\nтреки можно пролистывать кнопками Play-next и Play-prev\nтреки пролистываются по кругу - после последнего идёт первый (клик по кнопке Play-next), перед первым - последний (клик по кнопке Play-prev) +3\nтрек, который в данный момент проигрывается, в блоке Play-list выделяется стилем +3\nпосле окончания проигрывания первого трека, автоматически запускается проигрывание следующего. Треки проигрываются по кругу: после последнего снова проигрывается первый. +3\nДля удобства проверки треки возьмите небольшой продолжительности. Обрезать треки можно здесь: https://mp3cut.net/ru/\nплейлист генерируется средствами JavaScript (в ходе кросс-чека этот пункт не проверяется)\n\n7. Продвинутый аудиоплеер (реализуется без использования библиотек) +20\nпримерные внешний вид и функциональность плеера https://howlerplayer.github.io/\nдобавлен прогресс-бар в котором отображается прогресс проигрывания +3\nпри перемещении ползунка прогресс-бара меняется текущее время воспроизведения трека +3\nнад прогресс-баром отображается название трека +3\nотображается текущее и общее время воспроизведения трека +3\nесть кнопка звука при клике по которой можно включить/отключить звук +2\nдобавлен регулятор громкости, при перемещении ползунка регулятора громкости меняется громкость проигрывания звука +3\nможно запустить и остановить проигрывания трека кликом по кнопке Play/Pause рядом с ним в плейлисте +3\n\n8. Перевод приложения на два языка (en/ru или en/be) +15\nДля перевода приложения может использоваться библиотека, например, i18n или аналогичная.\nпереводится язык и меняется формат отображения даты +3\nпереводится приветствие и placeholder +3\nпереводится прогноз погоды в т.ч описание погоды (OpenWeatherMap API предоставляет такую возможность) и город по умолчанию +3\nпереводится цитата дня (используйте подходящий для этой цели API, возвращающий цитаты на нужном языке или создайте с этой целью JSON-файл с цитатами на двух языках) +3\nпереводятся настройки приложения. При переключении языка приложения в настройках, язык настроек тоже меняется +3\nне переводятся данные, которые вводит пользователь: имя, город, тег для получения фонового изображения от API\n\n9. Получение фонового изображения от API +10 Пункт считается выполненным, если фоновые изображения, полученные от API, отвечают требованиям к фоновым изображениям, указанным в пункте 3: их можно перелистывать кликами по стрелкам, обеспечивается плавная смена фоновых изображений, ссылка на фоновое изображение формируется с учётом времени суток, если пользователь не указал другие теги для их получения. Не проверяем и не реализуем последовательное перелистывание изображений и перелистывание изображений по кругу.\nв качестве источника изображений может использоваться Unsplash API +5\nв качестве источника изображений может использоваться Flickr API +5\n\n10. Настройки приложения +20\nв настройках приложения можно указать язык приложения (en/ru или en/be) +3\nв настройках приложения можно указать источник получения фото для фонового изображения: коллекция изображений GitHub, Unsplash API, Flickr API +3\nесли источником получения фото указан API, в настройках приложения можно указать тег/теги, для которых API будет присылает фото +3\nНапример, nature - фото про природу\nв настройках приложения можно скрыть/отобразить любой из блоков, которые находятся на странице: время, дата, приветствие, цитата дня, прогноз погоды, аудиоплеер, список дел/список ссылок/ваш собственный дополнительный функционал +3\nскрытие и отображение блоков происходит плавно, не влияя на другие элементы, которые находятся на странице, или плавно смещая их +3\nнастройки приложения сохраняются при перезагрузке страницы +5\n\n11. Дополнительный функционал на выбор +10\nДостаточно выполнить только один из предложенных пунктов на ваш выбор.\nToDo List - список дел (как в оригинальном приложении) +10')})();