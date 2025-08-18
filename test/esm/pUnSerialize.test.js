import {pUnSerialize} from "../../dist/esm/node.esm";
import assert from 'assert';

const one =1;

describe('ESM: pUnSerialize method', function () {


    it('return value string', function () {

        assert.deepStrictEqual(pUnSerialize('s:6:"Violet";'), "Violet");

    });

    it('return value `ones`', function () {

        assert.deepStrictEqual(
            pUnSerialize("i:1;"),
            one
        );

    });
    it('return value `array`', function () {

        assert.deepStrictEqual(
            pUnSerialize("a:1:{i:0;s:3:\"22s\";};"),
            ["22s"]
        );

    });

});


