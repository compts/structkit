const {getEmptyVariable} = require("../../src/node.cjs");
const assert = require("assert");

const three =3;
const two =2;
const one =1;

describe('CJS: getEmptyVariable method', function () {


    it('return empty array', function () {

        assert.deepStrictEqual(
            getEmptyVariable([
                one,
                two,
                three
            ]),
            []
        );

    });

    it('return empty json', function () {

        assert.deepStrictEqual(
            getEmptyVariable({"ones": one}),
            {}
        );

    });

});


