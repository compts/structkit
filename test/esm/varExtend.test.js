
import {varExtend} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: varExtend method', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(varExtend({"s1": 1}, {"s1": 2}), {"s1": 2});

    });


});
