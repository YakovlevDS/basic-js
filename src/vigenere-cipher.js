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
    constructor(key) {
        this.key = key;
    }

    // (this.bool===false)? directMachine:reverseMachine
    // directMachine() {}
    // reverseMachine() {}

    encrypt(text) {
        let cipher = '';
        text = text.toUpperCase();
        for (let i = 0, k = 0; i < text.length; i++) {
            const tCode = text[i].charCodeAt(0);
            // console.log(tCode);
            if (tCode >= 65 && tCode <= 90) {
                const charCode = ((tCode) + (this.key.charCodeAt(k % this.key.length))) % 26;
                cipher += String.fromCharCode(charCode + 65);
                k++
            } else {
                cipher += text[i];
            }
        }
        return cipher;
    };

    decrypt(cipher) {
        let text = '';
        for (let i = 0, k = 0; i < cipher.length; i++) {
            const tCode = cipher[i].charCodeAt(0);
            // console.log(tCode);
            // console.log(cipher.charCodeAt(i));

            if (tCode >= 65 && tCode <= 90) {
                const charCode = ((((tCode) - (this.key.charCodeAt(k % this.key.length))) % 26 + 26) % 26);
                text += String.fromCharCode(charCode + 65);
                k++
            } else {
                text += cipher[i];
            }

        }
        return text;
    }
}
module.exports = {
    VigenereCipheringMachine
};