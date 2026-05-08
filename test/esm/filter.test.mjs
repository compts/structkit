import {filter} from "../../dist/esm/node.esm.mjs";
import assert from 'assert';

describe('ESM: filter method', function () {

    const one =1;

    it('check array if filter', function () {

        assert.deepStrictEqual(filter(function (value) {

            return value.s1 === one;

        }, [
            {"s1": 1},
            {"s1": 2},
            {"s1": 1}
        ]), [
            {"s1": 1},
            {"s1": 1}
        ]);

    });

    it('check array if filter in curry', function () {

        assert.deepStrictEqual(filter(function (value) {

            return value.s1 === one;

        })([
            {"s1": 1},
            {"s1": 2},
            {"s1": 1}
        ]), [
            {"s1": 1},
            {"s1": 1}
        ]);

    });

    it('check array if filter arg is invalid json or array', function () {

        assert.deepStrictEqual(filter(function (value) {

            return value.s1 === one;

        }, one), []);

    });

});
