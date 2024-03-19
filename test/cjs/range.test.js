const {range} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const eight=8,
    five=5,
    four=4,
    nine=9,
    one =1,
    seven=7,
    six=6,
    ten=10,
    three=3,
    two =2;

describe('CJS: range method', function () {

    it('check if value exist', function () {


        assert.deepStrictEqual(range(ten, one), [
            one,
            two,
            three,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten
        ]);


    });

    it('check if value exist less 4', function () {

        assert.deepStrictEqual(range(ten, -two, -four), [
            -two,
            two,
            six,
            ten
        ]);

    });

});


