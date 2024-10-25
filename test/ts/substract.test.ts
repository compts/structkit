import {subtract} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const one =1;
const zero = 0;

describe('ESM: subtract method', function () {

    it('check if subtract result', function () {

        assert.deepStrictEqual(subtract(one, one), zero);

    });
    it('check if subtract result using curry', function () {

        assert.deepStrictEqual(subtract(one)(one), zero);

    });
    it('check expected type', function () {

        expectType<number>(subtract(one, one));

    });

});