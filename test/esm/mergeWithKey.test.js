import {mergeWithKey} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: mergeWithKey method', function () {

    it('check if repetion is correct', function () {

        assert.deepStrictEqual(mergeWithKey({"s": 1}, {"ss": 1}), {"s": 1,
            "ss": 1});

    });

});
