import {groupBy} from "../../dist/esm/node.esm.mjs";
import assert from 'assert';

describe('ESM: groupBy method', function () {


    it('Group your data', function () {

        assert.deepStrictEqual(groupBy(function (value) {

            return value.s1;

        }, [
            {"s1": 1},
            {"s1": 2},
            {"s1": 1}
        ]), {"1": [
            {"s1": 1},
            {"s1": 1}
        ],

        // eslint-disable-next-line indent-legacy
        "2": [{"s1": 2}]});

    });


});
