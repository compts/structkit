import {add} from "../../dist/esm/node.esm";
import assert from 'assert';

const one =1;
const two = 2;

describe('ESM: add method', function () {

    it('check if add result', function () {

        assert.deepStrictEqual(add(one, one), two);

    });
    it('check if add result using curry', function () {

        assert.deepStrictEqual(add(one)(one), two);

    });

});
