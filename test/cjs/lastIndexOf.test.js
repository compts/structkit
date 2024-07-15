
const {lastIndexOf}= require("../../dist/cjs/structkit-full.cjs");
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

describe('CJS: LastIndexOf', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(lastIndexOf([
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
        ], one), two);


        assert.deepStrictEqual(lastIndexOf([
            one,
            one,
            two,
            two,
            five,
            six,
            seven,
            eight,
            nine,
            ten
        ], two), three);

    });


});
