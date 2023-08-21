const {toDouble} = require("../../src/node.cjs");
const assert = require("assert");

const ten=10;
const zero=0;

describe('CJS: toDouble method', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(toDouble('10'), ten);


    });
    it('check if value empty', function () {

        assert.deepStrictEqual(toDouble(null), zero);

    });

});
