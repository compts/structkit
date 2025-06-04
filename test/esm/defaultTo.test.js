import {defaultTo} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: defaultTo method', function () {

    it('check if defaultTo value is "1"', function () {

        assert.strictEqual(defaultTo("as", "1"), "1");

    });

    it('check if defaultTo default value is "as"', function () {

        const _defaultTo = defaultTo("as");

        assert.strictEqual(_defaultTo(null), "as");

    });

});
