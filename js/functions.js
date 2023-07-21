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

