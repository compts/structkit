
import {where ,lt} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';
const one = 1;

describe('TS: where method', function () {

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

    it('check if value is less', function () {

        assert.deepStrictEqual(where(
            [
                {"d": 1},
                {"d": 2}
            ],
            {"d": lt(one)}
        ), [
            {
                "d": 2
            }
        ]);

    });

    it('check expected type', async function () {
       
        expectType<any>(where([
            {"s1": 1,
                "s2": 1},
            {"s1": 2,
                "s2": 2}
        ], {"s1": 1}));
  
    });

});
