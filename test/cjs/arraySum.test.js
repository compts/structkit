const {arraySum} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1,
    three=3.000,
    two =2;


describe('CJS: arraySum method', function () {

    it('check arraySum array sum', function () {

        assert.deepStrictEqual(arraySum([
            one,
            two
        ]), three.toFixed(three));

    });


});
