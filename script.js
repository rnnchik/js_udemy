// 1
// alert("Hello world");     модалка в браузере

// 2
// let answer = confirm("Are you here?"); модалка с 2 вариантпми ответа
// console.log(answer); получаем булевое значение;

// 3
// let answer = prompt("Есть ли Вам 18?", "Да"); модалка с полем ввода для ответа
// console.log(answer); получаем введенные данные в виде строки


// console.log('куку');

// let num = 50;

// if (num <49) {
//     console.log("Неверно!");
// } else if (num > 100){
//     console.log('Много!');
// } else {
//     console.log('Верно');
// }

// switch (num) {
//     case num < 49:
//         console.log("Неверно!");
//         break;
//     case num > 100:
//         console.log("Много!");
//         break;
//     case num > 80:
//         console.log("Все еще много!");
//         break;
//     case 50:
//         console.log("Верно!");
//         break;
//     default:
//         console.log("Что то не так!");
//         break;
// }
        // циклы
// do {
//     console.log(num);
//     num++;
// } while (num < 55);



// for (let i =1; i < 8; i++) {
//     if (i == 5) {
//         continue; //пропустить шаг цикла
//     }
//     console.log(i);
// }


        // Функции
// function showRirstMessage (text) {  // фанкшин дэкорешен функция в потоке кода (создаются до начала кода, можно использовать до их объявления)
//     console.log(text);
// }

// showRirstMessage('Вася');

// let calc = function(a, b) { // фанкшин экспрешен функция создаётся только когда до нее доходит код
//     return (a + b); 
// }

// let calc = (a,c) => {a+c};
// console.log(calc(5,5));