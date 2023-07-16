const {getKey} = require("../../src/node.cjs");
const assert = require("assert");

const three =3;
const two =2;
const one =1;

describe('CJS: getKey method', function () {


    it('return value `0`', function () {

        assert.deepStrictEqual(
            getKey([
                one,
                two,
                three
            ]),
            [
                "0",
                "1",
                "2"

            ]
        );

    });

    it('return value `ones`', function () {

        assert.deepStrictEqual(
            getKey({"ones": one}),
            "ones"
        );

    });

});


