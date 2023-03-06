// Функция для проверки длины строки
function checkStringLength(someWord, maxSymbol) {
  return (someWord.length <= maxSymbol) ? true : false;
}

checkStringLength('что-то проверяем', 16);


// Функция для проверки, является ли строка палиндромом
function isPalindrome(word){
  word = word.toString().toLowerCase().replaceAll(' ','');
  return word === word.split('').reverse().join('') ? true : false
}

isPalindrome('Лёша на полке клопа нашёл');


//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде
//целого положительного числа.
const extractNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))){
      result += string.at(i);
    }
  }
  return parseInt (result, 10);
};

extractNumber('а я томат');


//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами —
//и возвращает исходную строку, дополненную указанными символами до заданной длины.
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }

  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};
myPadStart('qwerty', 4, '0');
