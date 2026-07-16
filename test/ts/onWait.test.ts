/* eslint-disable id-length */
/* eslint-disable no-undefined */
/* eslint-disable require-jsdoc */
/* eslint-disable no-empty-function */
/* eslint-disable sort-keys */
/* eslint-disable no-undef */
/* eslint-disable no-magic-numbers */
import {onWait} from "../../dist/esm/node.esm.mjs";
import assert from 'assert';

describe('TS: onWait function', function () {

    it('should return an object and schedule the callback', function (done) {

        const result = onWait(function () {

            assert.strictEqual(typeof result, 'object');
            done();

        }, 10);

        assert.deepStrictEqual(result, {});

    });

    it('should execute callback with default delay when wait is omitted', function (done) {

        onWait(function () {

            assert.strictEqual(true, true);
            done();

        });

    });

});
