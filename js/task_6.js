

let input;
const numbers = [];
let total = 0;


while (input !== null) {
    let input = prompt('Введите число');
         

    if (input === null) {
        console.log('Отменено пользователем!'); 
        break;
    }

    input = Number(input);
    numbers.push(input);
};

for (let number of numbers) {
    total += number;
}

console.log(`Общая сумма чисел равна ${total}`);
