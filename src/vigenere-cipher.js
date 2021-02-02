const CustomError = require("../extensions/custom-error");



class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.encryptTable = this._createTable();
    this.decryptTable = this._createTable(false);
  }

  encrypt(message, key) {
    const encrypt = true;
    return this._encryptOrDecrypt(message, key, encrypt);
  }    

  decrypt(message, key) {
    const encrypt = false;
    return this._encryptOrDecrypt(message, key, encrypt);
  }

  _encryptOrDecrypt(message, key, encrypt) {
    if (message === undefined || key === undefined) {
      throw new Error('No arguments');
    }
    const getNextKeyChar = this._infiniteKeyGenerator(key);
    const table = encrypt ? this.encryptTable : this.decryptTable;
    message = message.toUpperCase();
    const transformed = message.split('')
      .map(el => (table[el] && table[el][getNextKeyChar()]) || el);
    if (!this.direct) {
      transformed.reverse();
    }

    return transformed.join('');
  }

  _createTable(encrypt = true) {
    const ALPHABET_LENGTH = 26;
    const CODE_OF_A = 65;
    const alphabetArray = Array(ALPHABET_LENGTH)
      .fill('')
      .map((_, index) => index + CODE_OF_A);
    const {fromCharCode: toChar} = String;
    const table = {};
    const setResultChar = encrypt
      ? (row, column) => (row + column + ALPHABET_LENGTH) % ALPHABET_LENGTH + CODE_OF_A
      : (row, column) => (row - column + ALPHABET_LENGTH) % ALPHABET_LENGTH + CODE_OF_A;

    for (const num of alphabetArray) {
      table[toChar(num)] = {};
      for (const innerNum of alphabetArray) {
        table[toChar(num)][toChar(innerNum)] = toChar(setResultChar(num, innerNum));
      }
    }
    
    return table;
  }

  _infiniteKeyGenerator(key) {
    key = key.toUpperCase();
    const {length} = key;
    let count = 0;
    return () => {
      while (true) {
        return key[count++ % length];
      }
    }
  }
}

module.exports = VigenereCipheringMachine;
