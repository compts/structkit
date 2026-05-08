import {once, filter, map, where} from "../../dist/esm/node.esm.js";
import assert from 'assert';


const one =1;
const zero = 0;
const two =2;

describe('ESM: once method', function () {

    it('check if once passing value is not function', function () {

        assert.deepStrictEqual(once(one)(one), one);

    });

    it('check if once passing value in callback function', function () {

        const callback1 = once(function (val) {

            return val+ one;

        });

        assert.deepStrictEqual(callback1(zero), one);
        assert.deepStrictEqual(callback1(one), one);

    });

    it('check if once passing value in map function', function () {

        const callback1 = map(once(function (value) {

            return value.s1;

        }), [
            {"s1": zero},
            {"s1": two},
            {"s1": one}
        ]);

        const output = [zero];

        assert.deepStrictEqual(callback1, output);


    });

    it('check if once passing value in map function in curry', function () {

        const callback1 = map(once(function (value) {

            return value.s1;

        }))([
            {"s1": zero},
            {"s1": two},
            {"s1": one}
        ]);

        const output = [zero];

        assert.deepStrictEqual(callback1, output);


    });

    it('check if once passing value in filter function', function () {

        const callback1 = filter(once(function (value) {

            return value.s1===two;

        }), [
            {"s1": zero},
            {"s1": two},
            {"s1": one}
        ]);

        const output = [{"s1": two}];

        assert.deepStrictEqual(callback1, output);


    });

    it('check if once passing value in filter function in curry', function () {

        const callback1 = filter(once(function (value) {

            return value.s1===two;

        }))([
            {"s1": zero},
            {"s1": two},
            {"s1": one}
        ]);

        const output = [{"s1": two}];

        assert.deepStrictEqual(callback1, output);


    });

    it('check if once passing value in where function', function () {

        const callback1 = where(once({"s1": two}), [
            {"s1": zero},
            {"s1": two},
            {"s1": one}
        ]);

        const output = [{"s1": two}];

        assert.deepStrictEqual(callback1, output);


    });

    it('check if once passing value in where function in curry', function () {

        const callback1 = where(once({"s1": two}))([
            {"s1": zero},
            {"s1": two},
            {"s1": one}
        ]);

        const output = [{"s1": two}];

        assert.deepStrictEqual(callback1, output);


    });

});
