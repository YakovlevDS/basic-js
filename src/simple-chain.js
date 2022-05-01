const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
    chainArr: [],

    getLength() { return this.chainArr.length },

    addLink(v = '') {
        this.chainArr.push(v);
        return this;
    },

    removeLink(ind) {
        if (!(Number.isInteger(ind)) || (ind <= 0) || (ind > this.getLength())) {
            this.chainArr = [];
            throw Error('You can\'t remove incorrect link!');
        }
        this.chainArr.splice(ind - 1, 1);
        return this;
    },
    reverseChain() {
        this.chainArr = this.chainArr.reverse()
        return this;
    },
    finishChain() {
        let l = this.getLength();
        let chain = '';

        while (l > 1) {
            chain += `( ${this.chainArr[0]} )~~`;
            this.chainArr.splice(0, 1);
            l--
        }
        chain += `( ${this.chainArr[0]} )`;
        this.chainArr = []
        return chain
    }
};

module.exports = {
    chainMaker
};