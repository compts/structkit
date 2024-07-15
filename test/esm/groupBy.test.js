import {groupBy} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: groupBy method', function () {


    it('Group your data', function () {

        assert.deepStrictEqual(groupBy([
            {"s1": 1},
            {"s1": 2},
            {"s1": 1}
        ], function (value) {

            return value.s1;

        }), {"1": [
            {"s1": 1},
            {"s1": 1}
        ],

        // eslint-disable-next-line indent-legacy
        "2": [{"s1": 2}]});

    });


});
