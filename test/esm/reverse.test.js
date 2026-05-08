import {reverse} from "../../dist/esm/node.esm.js";
import assert from 'assert';

const zero = 0;
const two =2;


describe('ESM: reverse method', function () {

    it('check reverse string', function () {

        assert.deepStrictEqual(reverse("foo"), "oof");

    });

    it('check reverse list', function () {

        assert.deepStrictEqual(reverse([
            zero,
            two
        ]), [
            two,
            zero
        ]);

    });


});
