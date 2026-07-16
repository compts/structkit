/* eslint-disable id-length */
/* eslint-disable no-undefined */
/* eslint-disable require-jsdoc */
/* eslint-disable no-empty-function */
/* eslint-disable sort-keys */
/* eslint-disable no-undef */
/* eslint-disable no-magic-numbers */
import {onSequence} from "../../dist/esm/node.esm.mjs";
import assert from 'assert';

describe('CJS: onSequence function', function () {

    it('should call callback repeatedly until canceled', function (done) {

        let count = 0;
        const sequence = onSequence(function () {

            count += 1;
            if (count === 2) {

                sequence.cancel();
                setTimeout(function () {

                    assert.strictEqual(count, 2);
                    done();

                }, 20);

            }

        }, 10);

    });

    it('should stop after limitCounterClear is reached', function (done) {

        let count = 0;

        const sequence = onSequence(function () {

            count += 1;

        }, 10, {"limitCounterClear": 2});

        setTimeout(function () {

            sequence.cancel();
            assert.strictEqual(count, 2);
            done();

        }, 40);

    });

    it('should return an object with cancel method', function () {

        const result = onSequence(function () {}, 10);

        assert.strictEqual(typeof result.cancel, 'function');
        result.cancel();

    });

});
