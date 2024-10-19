import {isArray, isBoolean, isDate, isError, isFunction, isNumber, isObject, isNull} from "../../dist/esm/node.esm";
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

    it('check if isObject is true', function () {


        assert.deepStrictEqual(isObject({"ad": () => null}), true);

    });

});
