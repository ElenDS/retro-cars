import { cars } from './data.js'

export function renderContent(car){
    const article = document.querySelector('article');
    article.innerHTML='';
    const lang = document.querySelector('select').value;
    const title = document.createElement('h1');
    title.innerHTML = cars[lang][car].title;
    article.appendChild(title);

    const features = document.createElement('div');
    features.classList.add('features');

    if(lang==='en'){
    features.innerHTML = `
        <h2>Overview</h2>
        <p><span>Manufacturer:</span> ${cars[lang][car].manufacturer}</p>
        <p><span>Production:</span> ${cars[lang][car].production}</p>
        <p><span>Engine:</span> ${cars[lang][car].engine}</p>
        <p><span>Top Speed:</span> ${cars[lang][car].topSpeed}</p>
        <p>${cars[lang][car].txt}</p>
    `;} else {
        features.innerHTML = `
        <h2>Огляд</h2>
        <p><span>Виробник:</span> ${cars[lang][car].manufacturer}</p>
        <p><span>Роки випуску:</span> ${cars[lang][car].production}</p>
        <p><span>Двигун:</span> ${cars[lang][car].engine}</p>
        <p><span>Найбільша швидкість:</span> ${cars[lang][car].topSpeed}</p>
        <p>${cars[lang][car].txt}</p>
    `;
    }
    article.appendChild(features);

    const carImg = document.createElement('img');
    carImg.setAttribute('src', cars[lang][car].image);
    article.appendChild(carImg);

}