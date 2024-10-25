
import {inc} from "../../dist/esm/node.esm";
import assert from 'assert';

const three =3;
const two =2;
const one =1;
const zero = 0;

describe('ESM: inc method', function () {


    it('return two', function () {

        assert.strictEqual(
            inc(one),
            two
        );

    });
    it('return three', function () {

        assert.strictEqual(
            inc(one, two),
            three
        );

    });

    it('if argument is string type return zero', function () {

        assert.strictEqual(
            inc("1"),
            zero
        );

    });

});

