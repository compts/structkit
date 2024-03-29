
import {whereNot} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: whereNot method', function () {

    it('check if value exist', function () {


        assert.deepStrictEqual(
            whereNot({"s1": 1,
                "s2": 1}, {"s1": 2}),
            {"s1": 1,
                "s2": 1}
        );

        assert.deepStrictEqual(whereNot([
            {"s1": 1,
                "s2": 1},
            {"s1": 2,
                "s2": 2}
        ], {"s1": 2}), [
            {"s1": 1,
                "s2": 1}
        ]);

    });

});
