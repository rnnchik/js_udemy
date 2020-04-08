// 1
// alert("Hello world");     модалка в браузере

// 2
// let answer = confirm("Are you here?"); модалка с 2 вариантпми ответа
// console.log(answer); получаем булевое значение;

// 3
// let answer = prompt("Есть ли Вам 18?", "Да"); модалка с полем ввода для ответа
// console.log(answer); получаем введенные данные в виде строки


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

// друнрй формат записи функции
// let summ = (a,b) => a + b ;
// console.log(summ(5,6));

// массивы


// let options = {
//         width: 1024,
//         height: 2014,
//         name: "test" 
// };

// options.bool = false;
// options.colors ={
//         border: "black",
//         bg: "red"
// };

// удалять элемент из массива
// delete options.bool;  

// for (let key in options) {
//         console.log("Свойство " + key + " имеет значение " + options[key]);
// }

// console.log(Object.keys(options).length);




// массивы

// let arr = [1, "two", 3, "four", 5];

// arr.pop(); //удаление последнего элемента
// arr.push("5"); // добавить элетент в канец массива
// arr.shift(); //удаление первого элемента
// arr.unshift("1");  // добавить элетент в нчало массива

// for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass) {
//         console.log(i + ": " + item + " (массив: " + mass + ")");
// });

// let mass = [1, "two", 3, "four", 5, 6];

// выводит ключи массива
// for (let key in mass) {
//         console.log(key);
// }

// выводит значения массива
// for (let key of mass) {
//         console.log(key);
// }



// /******************************************* */

// let ans = prompt("", ""),
//     arrMass = [];

// arrMass = ans.split(",");
// console.log(arrMass);


let arr = [1,15,4],
i = arr.sort(compareNum);

function compareNum(a,b) {
        return a-b;
}

console.log(arr);