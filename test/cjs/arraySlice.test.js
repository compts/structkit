const {arraySlice} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const three =3;
const two =2;
const one =1;

describe('CJS: arraySlice method', function () {


    it('check Array arraySlice has no minimum', function () {

        assert.deepStrictEqual(arraySlice([
            one,
            two,
            three
        ]), [
            one,
            two,
            three
        ]);

    });

    it('check Array arraySlice has minimum 1', function () {

        assert.deepStrictEqual(arraySlice([
            one,
            two,
            three
        ], one), [
            two,
            three
        ]);

    });

});


