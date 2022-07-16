const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let morseArr = [];
    let stringArr = [];
  
    for (let i = 0; i + 10 <= expr.length; i += 10) {
      arr.push(expr.slice(i, i + 10));
    }
    for (let item of arr) {
      if (item === '**********') {
        morseArr.push(' ');
      }
      else  { let string = '';
  
      for (let i = 0; i + 2 <= item.length; i += 2) {
        let subString = item.slice(i, i + 2);
  
        if (subString === '10') {
          string = `${string}.`;
        }
        else if (subString === '11') {
          string = `${string}-`;
        }
        else {
          string = string;
        }
      }
      morseArr.push(string);
      }
    }
    for (let item of morseArr) {
      if (item === ' ') {
        stringArr.push(' ');
      } else {
        for (let key in MORSE_TABLE) {
          if (key === item) {
            let string = MORSE_TABLE[key];
            stringArr.push(string);
          }
        }
      }
    }
    return stringArr.join('');
}

module.exports = {
    decode
}