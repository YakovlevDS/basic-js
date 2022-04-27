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
    encrypt(str, key) {
        let cipher_text = "";

        for (let i = 0; i < str.length; i++) {
            let x = (str[i].charCodeAt(0) + key[i].charCodeAt(0)) % 26;
            x += 'A'.charCodeAt(0);
            cipher_text += String.fromCharCode(x);
        }
        return cipher_text.toUpperCase();
    }

    decrypt(cipher_text, key) {
        let orig_text = "";

        for (let i = 0; i < cipher_text.length; i++) {
            let x = (cipher_text[i].charCodeAt(0) -
                key[i].charCodeAt(0) + 26) % 26;
            x += 'A'.charCodeAt(0);
            orig_text += String.fromCharCode(x);
        }
        return orig_text.toUpperCase();

    }
}

module.exports = {
    VigenereCipheringMachine
};