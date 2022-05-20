
import {has} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: has method', function () {

    it('check if json key does exist', function () {

        assert.strictEqual(has({"as": 1}, "as"), true);

    });


});
