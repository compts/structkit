const {pSerialize} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1;

describe('CJS: pSerialize method', function () {


    it('return value string', function () {

        assert.deepStrictEqual(pSerialize("Violet"), 's:6:"Violet";');

    });

    it('return value `ones`', function () {

        assert.deepStrictEqual(
            pSerialize(one),
            "i:1;"
        );

    });
    it('return value `array`', function () {

        assert.deepStrictEqual(
            pSerialize(["22s"]),
            "a:1:{i:0;s:3:\"22s\";};"
        );

    });

});


