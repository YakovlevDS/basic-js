const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    chain: '',
    getLength() {
        return this.chain.split('~~').length - 1
    },
    addLink(value) {
        if (typeof value == 'object' && value !== null) { value = '[object Object]' }

        this.chain += `( ${value} )~~`
        return this

    },
    removeLink(position) {

        if (typeof position !== 'number' || position < 1 || position >= this.chain.split('~~').length - 1) { throw new Error('You can\'t remove incorrect link!') }

        this.chain = this.chain.split('~~').slice(0, position - 1).concat(this.chain.split('~~').slice(position, this.chain.split('~~').length - 1)).join('~~') + '~~'
        return this;
    },
    reverseChain() {
        if (this.chain.split('~~').length - 1 < 2) { return this }
        this.chain = this.chain.slice(0, this.chain.length - 2).
        split('~~').reverse().join('~~') + '~~'
            // console.log(this.chain);
        return this;
    },
    finishChain() {
        this.chain = this.chain.slice(0, this.chain.length - 2)
        return this.chain
    }
};

module.exports = {
    chainMaker
};