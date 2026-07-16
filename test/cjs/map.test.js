
const {map}= require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: map method', function () {

    const one =1;
    const two =2;

    it('get array if map', function () {

        assert.deepStrictEqual(map(function (value) {

            return value.s1;

        }, [
            {"s1": 1},
            {"s1": 2},
            {"s1": 1}
        ]), [
            one,
            two,
            one
        ]);

    });

    it('get array if map in curry', function () {

        assert.deepStrictEqual(map(function (value) {

            return value.s1;

        })([
            {"s1": 1},
            {"s1": 2},
            {"s1": 1}
        ]), [
            one,
            two,
            one
        ]);

    });

});
