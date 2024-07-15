import {gt} from "../../dist/esm/node.esm";
import assert from 'assert';

const one =1;
const two =2;

describe('ESM: greater than method', function () {

    it('check if greater than value is true', function () {

        assert.strictEqual(gt(two, one), true);

    });

    it('check if not greater than value is false', function () {

        assert.strictEqual(gt(one, two), false);

    });

});
