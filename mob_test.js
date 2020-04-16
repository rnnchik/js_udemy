// touchstart - при косании к элементу (аналог клика) oncluck
// touchmove - провести по экрану
// touchend - когда палец перестаёт сопрекасаться с поверхностью
// touchenter - когда в процессе движения по сенсору заходите на элемент
// touchleave - когда в процессе движения палец покинул элемент
// touchcancel - когда на планшете покидаешь область браузера

window.addEventListener('DOMContentLoaded', function() {
    let box = document.querySelector('#box');

    // box.addEventListener('touchstart', function(e) {
    //     e.preventDefault();
    //     console.log('Red box: touchstart');
    //     console.log(e.target); 
    //     console.log(e.touches);         // регистрация всех пальцнв прикоснувшихся к экрану
    //     console.log(e.touches[0].target); 
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches); // количество пальцев взаимодействующих именно с нащим объектом
    // });

    box.addEventListener('touchmove', function(e) {
        e.preventDefault();
        console.log('Red box: ' + e.touches[0].pageX);
    });

    // box.addEventListener('touchend', function(e) {
    //     e.preventDefault();
    //     console.log('Red box: touchsend');
    // });






    //регулярки

// new RegExp('pattern', 'flags');
// /pattern/


//флаги
// i - забить на ренистр
// g - найти во всем объекте
// m - флаг многострочности 



let ans = prompt('Введите Ваше имя');

let reg = /n/ig;

// console.log(ans.search(reg));
// console.log(ans.match(reg));
// console.log(reg.test(ans));




// let pass = prompt('Введите пароль');

// console.log(pass.replace(/./g, '*'));
// alert('12-43-56'.replace(/-/g, ":"));

});