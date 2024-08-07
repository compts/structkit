import {lte} from "../../dist/esm/node.esm";
import assert from 'assert';

const one =1;
const two =2;

describe('ESM: less than equal method', function () {

    it('check if less than equal value is true', function () {

        assert.strictEqual(lte(one, two), true);

    });

    it('check if not less than equal value is false', function () {

        assert.strictEqual(lte(two, one), false);

    });

    it('check if equal value is true', function () {

        assert.strictEqual(lte(two, two), true);

    });

});
