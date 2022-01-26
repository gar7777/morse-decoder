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
    const arr = [];
    for (let i = 0; i < expr.length; i += 10) {
        let subString = expr.substring(i, i+10);
      subString = subString.replace(/10/g, '.');
      subString = subString.replace(/11/g, '-');
      subString = subString.replace(/0/g, '');
      subString = subString.replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ');
      if (subString !== ' ') {
          subString = subString.replace(subString, MORSE_TABLE[subString])
      }
      arr.push(subString);
    }
    return arr.join('')
  }

module.exports = {
    decode
}