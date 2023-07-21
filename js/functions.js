function getStingLength(string, maxlength) {
  if (string.length <= maxlength) {
    return true;
  }
  return false;
}

function isPalindrom (string) {
  string = string.toLowerCase().replaceAll(' ','');
  for (let i = 0; i < string.length; i++) {
    if (string[0] === string[string.length - 1]) {
      return true;
    }
    return false;
  }
}

function getNumber (message) {
  const string = message.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if(!Number.isNaN(parseInt(string[i], 10))) {
      result += string[i];
    }
  }
  return parseInt(result, 10);
}

getStingLength('проверяемая строка', 20);
getStingLength('проверяемая строка', 18);
getStingLength('проверяемая строка', 10);
isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('Лёша на полке клопа нашёл');
getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир, 0.5 батона');
getNumber('а я томат');
