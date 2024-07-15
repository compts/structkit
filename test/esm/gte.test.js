import {gte} from "../../dist/esm/node.esm";
import assert from 'assert';

const one =1;
const two =2;

describe('ESM: greater than equal method', function () {

    it('check if greater than equal value is true', function () {

        assert.strictEqual(gte(two, one), true);

    });

    it('check if not greater than equal value is false', function () {

        assert.strictEqual(gte(one, two), false);

    });

    it('check if equal value is true', function () {

        assert.strictEqual(gte(two, two), true);

    });

});
