import {divide} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';
const one =1;

describe('TS: divide method', function () {

    it('check if divide result', function () {

        assert.deepStrictEqual(divide(one, one), one);

    });
    it('check if divide result using curry', function () {

        assert.deepStrictEqual(divide(one)(one), one);

    });

    it('check expected type', function () {

        expectType<number>(divide(one, one));

    });
});
