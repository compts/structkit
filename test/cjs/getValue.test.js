const {getValue} = require("../../src/node.cjs");
const assert = require("assert");

const three =3;
const two =2;
const one =1;

describe('CJS: getValue method', function () {


    it('return value array', function () {

        assert.deepStrictEqual(
            getValue([
                one,
                two,
                three
            ]),
            [
                one,
                two,
                three

            ]
        );

    });

    it('return value 1', function () {

        assert.deepStrictEqual(
            getValue({"ones": one}),
            one
        );

    });

});


