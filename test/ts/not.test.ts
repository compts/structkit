
import {where, not} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: not method', function () {

    it('check if value exist', function () {


        assert.deepStrictEqual(
            where(not({"s1": 2}), {"s1": 1,
                "s2": 1}),
            {"s1": 1,
                "s2": 1}
        );

        assert.deepStrictEqual(where(not({"s1": 2}), [
            {"s1": 1,
                "s2": 1},
            {"s1": 2,
                "s2": 2}
        ]), [
            {"s1": 1,
                "s2": 1}
        ]);

    });
    it('check expected type', async function () {
       
        expectType<any>(where(not({"s1": 1}), [
            {"s1": 1,
                "s2": 1},
            {"s1": 2,
                "s2": 2}
        ]));
  
    });
});
