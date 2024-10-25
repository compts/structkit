import {multiply} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const one =1;

describe('ESM: multiply method', function () {

    it('check if multiply result', function () {

        assert.deepStrictEqual(multiply(one, one), one);

    });
    it('check if multiply result using curry', function () {

        assert.deepStrictEqual(multiply(one)(one), one);

    });
    it('check expected type', function () {

        expectType<number>(multiply(one, one));

    });

});
