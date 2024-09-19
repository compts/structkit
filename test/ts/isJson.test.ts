
import {isJson} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: isJson method', function () {

    it('check if object is valid json', function () {

        assert.strictEqual(isJson({"a": 1}), true);

    });

    it('check if array is valid json', function () {

        assert.strictEqual(isJson([]), true);

    });

    it('check if object has function', function () {

        assert.strictEqual(isJson({"a": () => {
            //

        }}), false);

    });

    it('check if object has string in number format', function () {

        assert.strictEqual(isJson("0"), false);

    });

    it('check if object is number', function () {

        const zero = 0;

        assert.strictEqual(isJson(zero), false);

    });

    it('check expected type', function () {
       
        expectType<boolean>(isJson({"test": 11,
        "test2": 11}));
    });
});
