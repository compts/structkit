import {pSerialize} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const one =1;

describe('TS: pSerialize method', function () {


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

    it('check expected type', function () {

        expectType<string>(pSerialize(["22s"]));

    });

});


