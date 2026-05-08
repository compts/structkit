import {isArray, isBoolean, isDate, isError, isFunction, isNumber, isSet, isMap, isBigInt, isObject, isNull} from "../../dist/esm/node.esm.js";
import assert from 'assert';

describe('ESM: _isDefaultTypeFunc method', function () {

    it('check if isArray is true', function () {

        assert.deepStrictEqual(isArray([]), true);

    });

    it('check if isBoolean is true', function () {

        assert.deepStrictEqual(isBoolean(true), true);

    });

    it('check if isDate is true', function () {

        assert.deepStrictEqual(isDate(new Date()), true);

    });

    it('check if isError is true', function () {

        assert.deepStrictEqual(isError(new Error("Hello world")), true);

    });

    it('check if isFunction is true', function () {

        assert.deepStrictEqual(isFunction(() => null), true);

    });

    it('check if isNull is true', function () {

        assert.deepStrictEqual(isNull(null), true);

    });
    it('check if isNumber is true', function () {

        const zero = 0;

        assert.deepStrictEqual(isNumber(zero), true);

    });

    it('check if isBigint is true', function () {

        const zero = 0;

        assert.deepStrictEqual(isBigInt(BigInt(zero)), true);

    });

    it('check if isSet is true', function () {

        const zero = 0;

        assert.deepStrictEqual(isSet(new Set([
            zero,
            zero
        ])), true);

    });
    it('check if isMap is true', function () {

        assert.deepStrictEqual(isMap(new Map([
            [
                'hello',
                'world'
            ]
        ])), true);

    });

    it('check if isObject is true', function () {


        assert.deepStrictEqual(isObject({"ad": () => null}), true);

    });

});
