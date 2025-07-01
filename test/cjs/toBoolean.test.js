/* eslint-disable no-magic-numbers */
/* eslint-disable no-undefined */
const assert = require('assert');
const {toBoolean} = require('../../dist/cjs/structkit-full.cjs');

describe('CJS: toBoolean method', function () {

    it('should return true for string "true", "t", "yes", "y", "on", "1"', function () {

        [
            'true',
            't',
            'yes',
            'y',
            'on',
            '1'
        ].forEach((str) => {

            assert.strictEqual(toBoolean(str), true);

        });

    });

    it('should return false for string "false", "no", "off", "0"', function () {

        [
            'false',
            'no',
            'off',
            '0'
        ].forEach((str) => {

            assert.strictEqual(toBoolean(str), false);

        });

    });

    it('should return true for number 1', function () {

        assert.strictEqual(toBoolean(1), true);

    });

    it('should return false for number 0', function () {

        assert.strictEqual(toBoolean(0), false);

    });

    it('should return true for boolean true', function () {

        assert.strictEqual(toBoolean(true), true);

    });

    it('should return false for boolean false', function () {

        assert.strictEqual(toBoolean(false), false);

    });

    it('should return false for null, undefined, object, array', function () {

        assert.strictEqual(toBoolean(null), false);
        assert.strictEqual(toBoolean(undefined), false);
        assert.strictEqual(toBoolean({}), false);
        assert.strictEqual(toBoolean([]), false);

    });

});
