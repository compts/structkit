const {toDouble} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const ten=10;
const tenOne=10.1;
const zero=0;

describe('CJS: toDouble method', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(toDouble('10'), ten);


    });
    it('check if value empty', function () {

        assert.deepStrictEqual(toDouble(null), zero);

    });

    it('check if value exist 10.1 is valid', function () {

        assert.deepStrictEqual(toDouble('10.1'), tenOne);


    });

    it('check if value exist 10,1 is valid with decSeparator ,', function () {

        assert.deepStrictEqual(toDouble('10,1', {"decSeparator": ","}), tenOne);


    });

});
