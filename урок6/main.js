

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
