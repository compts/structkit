
import {where} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: where method', function () {

    it('check if value exist', function () {


        assert.deepStrictEqual(
            where({"s1": 1,
                "s2": 1}, {"s1": 1}),
            {"s1": 1,
                "s2": 1}
        );

        assert.deepStrictEqual(where([
            {"s1": 1,
                "s2": 1},
            {"s1": 2,
                "s2": 2}
        ], {"s1": 1}), [
            {"s1": 1,
                "s2": 1}
        ]);


    });


});
