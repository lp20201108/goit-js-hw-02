// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale.Если нашли зарещенное слово то функция 
// возвращает true, если запрещенных слов нет функция возвращает false.Слова в строке могут быть в произвольном регистре.



const checkForSpam = function (message) {

  let lowerMessage = message.toLowerCase();
  console.log(lowerMessage);

  return lowerMessage.includes("spam") || lowerMessage.includes("sale");

};


// var 2 ---- using indexOf

// const checkForSpam = function (message) {
//   let lowerMessage = message.toLowerCase();
//   const arr = ['spam', 'sale'];

//   for (let word of arr) {
//     if (lowerMessage.indexOf(word))  > -1) {

//       return true;
//     }
//   } return false;
//   }



console.log(checkForSpam('Latest technology news')); 

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!')); 

console.log(checkForSpam('[SPAM] How to earn fast money?')); 

