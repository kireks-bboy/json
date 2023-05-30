import { dataProducts } from './data.js';

const data = JSON.parse (dataProducts);
console.log(data)

const content = document.querySelector('.content');

data.forEach(({id, name, price, url}) => {
  
const div = document.createElement('div');
div.classList.add('card')

const img = document.createElement('img');
img.classList.add('card-img')
img.src = url;

const cardBody = document.createElement('div');
cardBody.classList.add('card-body')

const title = document.createElement('h5');
title.classList.add('card-title')
title.textContent = name;
title.style.fontSize = '40px';
title.style.textTransform = 'uppercase';
title.style.color = 'blue'

const subtitle = document.createElement('h6');
subtitle.classList.add('card-subtitle')
subtitle.textContent = price;
subtitle.style.fontSize = '30px'
subtitle.style.color = 'red'


const idPara = document.createElement('p');
idPara.classList.add('card-text')
idPara.textContent = `ID ${id}`;
idPara.style.color = 'pink'

content.style.padding = '0px'
content.style.display = 'flex'
content.style.gap = '100px'
content.style.justifyContent = 'space-between'


cardBody.appendChild(title)
cardBody.appendChild(subtitle)
cardBody.appendChild(idPara)

div.appendChild(img)
div.appendChild(cardBody)
content.appendChild(div);

});