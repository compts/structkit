
import {inc} from "../../dist/esm/node.esm";
import assert from 'assert';

const three =3;
const two =2;
const one =1;

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


});


