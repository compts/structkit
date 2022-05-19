const {first} = require("../../node.cjs");
const assert = require("assert");

const three =3;
const two =2;
const one =1;

describe('CJS: first method', function () {


    it('check Array first index', function () {

        assert.deepStrictEqual(
            first([
                one,
                two,
                three
            ]),
            one
        );

    });

});


