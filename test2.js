let box = document.getElementById('box'),
    // btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('body .heart'),
    oneHeart = document.querySelector('.heart'), //первый жэлемент с этим классом. только первый!
    wrapper = document.querySelector('.wrapper'),
    btn = document.querySelectorAll('button'),
    block = document.querySelector('block');


    btn[2].style.fontSize = '20px';
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


// btn[0].onclick = function() {
//     alert('Вы кликнкли первую кнопку');
// };
// btn[0].addEventListener('mouseenter', function() {
//     alert('Вы навели на кнопку');
// });

btn[0].addEventListener('click', function(event) {
    event.preventDefault();
    let target = event.target;
    target.style.display = 'none';
    // alert('Вы нажали первую кнопку!');
    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('вышли');
    })
});

