const {arraySum} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1,
    three=3,
    three_dec="3.00",
    two =2;


describe('CJS: arraySum method', function () {

    it('check arraySum array sum', function () {

        assert.deepStrictEqual(arraySum([
            one,
            two
        ]), three);

    });

    it('check arraySum array sum with delimeter', function () {

        assert.deepStrictEqual(arraySum([
            one,
            two
        ], two), three_dec);

    });


});
