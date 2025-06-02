/* eslint-disable no-magic-numbers */

import {isJson} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: isJson method', function () {

    it('check if object is valid json', function () {

        assert.strictEqual(isJson({"a": 1}), true);

    });
    it('check if object is valid json with nested object', function () {

        assert.strictEqual(isJson({"a": {"b": 1}}), true);

    });
    it('check if object is valid json with nested array', function () {

        assert.strictEqual(isJson({"a": [
            1,
            2,
            3
        ]}), true);

    });
    it('check if object is valid json with nested array and object', function () {

        assert.strictEqual(isJson({"a": [
            {"b": 1},
            {"c": 2}
        ]}), true);

    });
    it('check if object is valid json with empty object', function () {

        assert.strictEqual(isJson({}), true);

    });
    it('check if object is valid json with empty array', function () {

        assert.strictEqual(isJson([]), true);

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
    it('check if object is string', function () {

        const str = "string";

        assert.strictEqual(isJson(str), false);

    });
    it('check if object is boolean', function () {

        const bool = true;

        assert.strictEqual(isJson(bool), false);

    });
    it('check if object is null', function () {

        const nul = null;

        assert.strictEqual(isJson(nul), false);

    });


});
