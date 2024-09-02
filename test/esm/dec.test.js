import {dec} from "../../dist/esm/node.esm";
import assert from 'assert';
const two =2;
const one =1;
const zero =0;

describe('ESM: dec method', function () {


    it('return two', function () {

        assert.strictEqual(
            dec(one),
            zero
        );

    });
    it('return three', function () {

        assert.strictEqual(
            dec(one, two),
            -one
        );

    });


});


