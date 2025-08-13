import {reverse} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';
const zero = 0;
const two =2;


describe('TS: reverse method', function () {

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

    it('check expected type', function () {
           
        expectType<any>(reverse("as"));
    });


});
