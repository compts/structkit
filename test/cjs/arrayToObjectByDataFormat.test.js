
const {arrayToObjectByDataFormat} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");


const one =1;


describe('CJS: arrayToObjectByDataFormat method', function () {

    it('check arrayToObjectByDataFormat array', function () {

        assert.deepStrictEqual(arrayToObjectByDataFormat([{"Asd": one}], "Asd"), [one]);

    });

});
