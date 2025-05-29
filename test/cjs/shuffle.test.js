/* eslint-disable no-plusplus */
const {shuffle} = require("../../dist/cjs/structkit-full.cjs");
const assert = require('assert');

// JavaScript

const one = 1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const six = 6;
const seven = 7;
const eight = 8;
const nine = 9;
const ten = 10;
const fourtytwo = 42;

describe('shuffle', function () {

    it('should return an array of the same length', function () {

        const arr = [
            one,
            two,
            three,
            four,
            five
        ];
        const result = shuffle(arr);

        assert.strictEqual(result.length, arr.length);

    });

    it('should return a permutation of the original array', function () {

        const arr = [
            one,
            two,
            three,
            four,
            five
        ];
        const result = shuffle(arr);

        assert.deepStrictEqual([...arr].sort(), [...result].sort());

    });

    it('should not mutate the original array', function () {

        const arr = [
            one,
            two,
            three,
            four,
            five
        ];
        const arrCopy = [...arr];

        shuffle(arr);
        assert.deepStrictEqual(arr, arrCopy);

    });

    it('should return an empty array when input is empty', function () {

        const arr = [];
        const result = shuffle(arr);

        assert.deepStrictEqual(result, []);

    });

    it('should return the same single element for single-element array', function () {

        const arr = [fourtytwo];
        const result = shuffle(arr);

        assert.deepStrictEqual(result, [fourtytwo]);

    });

    it('should produce different orders on repeated shuffles (probabilistic)', function () {

        const arr = [
            one,
            two,
            three,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten
        ];
        let sameOrderCount = 0;

        // eslint-disable-next-line id-length
        for (let i = 0; i < ten; i++) {

            const result = shuffle(arr);

            if (result.join(',') === arr.join(',')) {

                // eslint-disable-next-line no-plusplus
                sameOrderCount++;

            }

        }
        // It's possible but unlikely to always get the same order
        assert.ok(sameOrderCount < ten);

    });

});
