import {getKey} from "../../dist/esm/node.esm.mjs";
import assert from 'assert';

const three =3;
const two =2;
const one =1;
const zero =0;

describe('ESM: getKey method', function () {


    it('return value `0`', function () {

        assert.deepStrictEqual(
            getKey([
                one,
                two,
                three
            ]),
            [
                zero,
                one,
                two

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


