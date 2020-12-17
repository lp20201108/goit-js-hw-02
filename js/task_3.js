// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку 
//(в строке будут только слова и пробелы) 
// и возвращает самое длинное слово в этой строке.


const findLongestWord = function (str) {
   
  let strSplit = str.split(' ');

  let longestWord = ''; 

  for (let i = 0; i < strSplit.length; i++) {
  
    if (strSplit[i].length > longestWord.length) {
      
      longestWord = strSplit[i];
    }

  }
    return longestWord;
};
  
  
console.log(findLongestWord('Google do a roll')); 
  
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 

console.log(findLongestWord('May the force be with you'));
 
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));