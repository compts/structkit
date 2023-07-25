
import {has} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('TS: has method', function () {

    it('check if json key does exist', function () {

        assert.strictEqual(has({"as": 1}, "as"), true);

    });


});
