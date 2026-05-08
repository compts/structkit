import {defaultTo} from "../../dist/esm/node.esm.js";
import assert from 'assert';

describe('ESM: defaultTo method', function () {

    it('check if defaultTo value is "1"', function () {

        assert.strictEqual(defaultTo("as", "1"), "1");

    });

    it('check if defaultTo default value is "as" if null', function () {

        const _defaultTo = defaultTo("as");

        assert.strictEqual(_defaultTo(null), "as");

    });

    it('check if defaultTo default value is "as" if NaN', function () {

        const _defaultTo = defaultTo("as");

        assert.strictEqual(_defaultTo(NaN), "as");

    });

});
