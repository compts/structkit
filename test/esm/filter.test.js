import {filter} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: filter method', function () {

    const one =1;

    it('check array if filter', function () {

        assert.deepStrictEqual(filter([
            {"s1": 1},
            {"s1": 2},
            {"s1": 1}
        ], function (key, value) {

            return value.s1 === one;

        }), [
            {"s1": 1},
            {"s1": 1}
        ]);

    });

    it('check array if filter arg is invalid json or array', function () {

        assert.deepStrictEqual(filter(one, function (key, value) {

            return value.s1 === one;

        }), []);

    });

});
