/* eslint-disable id-length */
/* eslint-disable no-undefined */
/* eslint-disable require-jsdoc */
/* eslint-disable no-empty-function */
/* eslint-disable sort-keys */
/* eslint-disable no-undef */
/* eslint-disable no-magic-numbers */
const assert = require('assert');
const {onDelay} = require("../../dist/cjs/structkit-full.cjs");

describe('CJS: onDelay function', function () {

    it('should call callback after the specified delay', function (done) {

        let called = false;

        onDelay(function () {

            called = true;
            assert.strictEqual(called, true);
            done();

        }, 10);

    });

    it('should use default delay when wait is not provided', function (done) {

        onDelay(function () {

            assert.strictEqual(true, true);
            done();

        });

    });

    it('should return an object with cancel method', function () {

        const result = onDelay(function () {}, 10);

        assert.strictEqual(typeof result.cancel, 'function');

    });

    it('should prevent callback execution when canceled', function (done) {

        const result = onDelay(function () {

            done(new Error('Callback should not be called after cancel'));

        }, 10);

        result.cancel();

        setTimeout(function () {

            assert.ok(true);
            done();

        }, 30);

    });

});
