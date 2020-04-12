let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('body .heart'),
    oneHeart = document.querySelector('.heart'), //первый жэлемент с этим классом. только первый!
    wrapper = document.querySelector('.wrapper');


// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart[1]);

// box.style.backgroundColor ='blue';
// btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts){
//     item.style.backgroundColor = 'yellow';
// });

let div = document.createElement('div'),
text = document.createTextNode('Я тут');

div.classList.add('black');
// div.innerHTML = '<h1>Hello World</h1>'; добавить текст на страницу, в том числе и теги
div.textContent = 'Hello World'; // добавляет только текст

// document.body.appendChild(div); // вставить в конец
// wrapper.appendChild(div);
document.body.insertBefore(div, circle[1]); // вставить перед
document.body.removeChild(circle[2]); //удалить элемент
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1]); //заменить элемент второй первым

// console.log(div);