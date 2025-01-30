// Массивы - используются для хранения любых данных
// Length - позволяет получить ТОЛЬКО длину массива и строк

// const arrray = ['Hello world',0,true,77] // Базовый масиив
// console.log(arrray.length);

// let text = 'Hello'

// console.log(text.length);

// let numbers = [5,10,45,52,7,2]

// let sum = 0
// for(let item of numbers) {
//     sum += item
// }

// // for(let i = 0; i < numbers.length; i++) {
// //     sum += numbers[i]
// // }
// console.log(sum);

// let array = ['apple', 'samsung','google','xiaomi']

// for( let i = 0; i < array.length; i++) {
//     // splice(x,y) - метод который вырезает с масива, x - указывает с какой ячеййки, у - сколько элементов
//     array[i] == 'samsung' ? array.splice(i,1) : ''
// }
// console.log(array);

// array.push('iPhone') //push() - метод который добавяет в конец массива
// array.unshift('GGPixel') //unshift() - метод который добавяет в начал массива
// array.pop() // pop() - метод который удаляет последний элемент в массиве
// array.shift() // shift() - метод который удаляет первый элемент в массиве
// console.log(array); 



// let test = []

// for(let i = 0; i < Infinity; i++) {
//     let text = prompt('Введите команду')
//     if(text === 'stop' || text === "стоп") {
//         break
//     } else if(text.length > 2) {
//         test.push(text)
//     } else {
//         alert('Вы ввели меньше 3-х символов')
//     }
//     console.log(test);
// }

// let str = "html-css-js"
// let array = str.split('-') // split() - метод позволяющий превратить любую строку в массив

// console.log(array);


// Задание B

// let array = [1,2,3,4,5,6,7,8,9,10,11]
// 
// let odd = []
// let even = []
// 
// for(let i = 0; i <= 11;i++){
    // if(i %2 ==0) {
        // even.push(i)
    // } else {
        // odd.push(i)
    // }
// }
// 
// console.log('Чётные числа в массиве: ' + even);
// console.log('Нечётные числа в массиве: ' + odd);


// Задание A
let arr = [];

while (true) {
    let command = prompt("Введите команду (add, del, stop):");

    if (command) {
        const splitCommand = command.split(","); 
        const cmd = splitCommand[0];
        const arg = splitCommand[1];

        if (cmd === "add" && arg) {
            arr.push(arg);
            console.log(`Добавлено: ${arg}`);
        } else if (cmd === "del" && arg) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === arg) {
                    arr.splice(i, 1);
                    console.log(`Удалено: ${arg}`);
                    break;
                }
            }
            console.log(`Элемент ${arg} не найден в массиве.`);
        } else if (cmd === "stop") {
            console.log("Остановка...");
            console.log("Конечный результат:", arr);
            break;
        } else {
            console.log("Неизвестная команда.");
        }
    }
}
