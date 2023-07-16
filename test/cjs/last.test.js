
const {last}= require("../../src/node.cjs");
const assert = require("assert");

const eight=8,
    five=5,
    four=4,
    nine=9,
    one =1,
    seven=7,
    six=6,
    ten=10;

describe('CJS: Last', function () {

    it('check if value is last', function () {

        assert.deepStrictEqual(last([
            one,
            one,
            one,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten
        ]), ten);


    });


});
