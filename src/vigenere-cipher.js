const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(bool = true) {
        this.bool = bool;
    }
    isUpperCase(item) {
        let c = item.charCodeAt();
        if (c >= 65 && c <= 90) {
            return true;
        } else {
            return false;
        }
    }

    isLowerCase(item) {
        let c = item.charCodeAt();
        if (c >= 97 && c <= 122) {
            return true;
        } else {
            return false;
        }
    }
    encrypt(str, key) {
        if (str == undefined) throw new Error('Incorrect arguments!')
        if (key == undefined) throw new Error('Incorrect arguments!')
        if (arguments.length === 0) throw new Error('Incorrect arguments!')

        let up, low, l, f,
            crypt = "",
            k = 0
        for (let i = 0; i < str.length; i++) {
            l = str[i];
            let lCode = l.charCodeAt()
            let kCode = key[k % key.length]

            if (this.isUpperCase(l)) {
                f = 65
                kCode = kCode.toUpperCase().charCodeAt()
                up = (lCode + kCode - 2 * f) % 26;
                crypt += String.fromCharCode(up + f);
                k++;
            } else if (this.isLowerCase(l)) {
                f = 97
                kCode = kCode.toLowerCase().charCodeAt()
                low = (lCode + kCode - 2 * f) % 26;
                crypt += String.fromCharCode(low + f);
                k++;
            } else {
                crypt += l;
            }
        }
        return this.bool ? crypt.toUpperCase() : crypt.split('').reverse().join('').toUpperCase();
    };

    decrypt(crypt, key) {
        if (crypt == undefined) throw new Error('Incorrect arguments!')
        if (key == undefined) throw new Error('Incorrect arguments!')
        if (arguments.length === 0) throw new Error('Incorrect arguments!')

        let up, low, l, f,
            str = "",
            k = 0
        for (let i = 0; i < crypt.length; i++) {
            l = crypt[i];
            let lCode = l.charCodeAt()
            let kCode = key[k % key.length]
            if (this.isUpperCase(l)) {
                f = 65
                kCode = kCode.toUpperCase().charCodeAt()
                up = (((lCode - kCode) % 26 + 26) % 26);
                str += String.fromCharCode(up + f);
                k++;
            } else if (this.isLowerCase(l)) {

                f = 97
                kCode = kCode.toLowerCase().charCodeAt()
                low = (((lCode - kCode) % 26 + 26) % 26);
                str += String.fromCharCode(low + f);
                k++;
            } else {
                str += l;
            }
        }
        return this.bool ? str.toUpperCase() : str.split('').reverse().join('').toUpperCase();
    }
}

module.exports = {
    VigenereCipheringMachine
};