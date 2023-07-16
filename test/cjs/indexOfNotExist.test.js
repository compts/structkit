const {indexOfNotExist}= require("../../src/node.cjs");

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
    two =2,
    zero=0;

describe('ESM: indexOfNotExist', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(indexOfNotExist([
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
        ], one), false);


        assert.deepStrictEqual(indexOfNotExist([
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
        ], seven), false);

    });

    it('check if value not exist', function () {

        assert.deepStrictEqual(indexOfNotExist([
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
        ], zero), true);


    });


});
