const {toInteger} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const ten=10;
const zero=0;

describe('CJS: toInteger method', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(toInteger('10'), ten);


    });
    it('check if value empty', function () {

        assert.deepStrictEqual(toInteger(null), zero);

    });

});
