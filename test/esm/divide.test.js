import {divide} from "../../dist/esm/node.esm";
import assert from 'assert';

const one =1;

describe('ESM: divide method', function () {

    it('check if divide result', function () {

        assert.deepStrictEqual(divide(one, one), one);

    });
    it('check if divide result using curry', function () {

        assert.deepStrictEqual(divide(one)(one), one);

    });

});
