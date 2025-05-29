const {flatten} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const six = 6;

describe('CJS: flatten method', function () {

    it('check if flatten n basic format', function () {

        assert.deepStrictEqual(flatten([
            one,
            two,
            three,
            [
                four,
                five
            ],
            [six]
        ]), [
            one,
            two,
            three,
            four,
            five,
            six
        ]);

    });

});
