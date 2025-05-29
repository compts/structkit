const {union} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const six = 6;

describe('CJS: union method', function () {

    it('check if union n merge all group array', function () {

        assert.deepStrictEqual(union(
            [
                one,
                two,
                three
            ],
            [
                four,
                five
            ],
            [six]
        ), [
            one,
            two,
            three,
            four,
            five,
            six
        ]);

    });

});
