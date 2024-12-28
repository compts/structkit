const {take} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1;
const three =3;

describe('CJS: take method', function () {

    it('check if one', function () {

        assert.deepStrictEqual(take(one, [
            one,
            three
        ]), one);

    });

});
