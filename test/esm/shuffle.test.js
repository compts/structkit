import {shuffle} from "../../dist/esm/node.esm";
import assert from 'assert';

// JavaScript


describe('shuffle', function () {

    it('should return an array of the same length', function () {

        const arr = [
            1,
            2,
            3,
            4,
            5
        ];
        const result = shuffle(arr);

        assert.strictEqual(result.length, arr.length);

    });

    it('should return a permutation of the original array', function () {

        const arr = [
            1,
            2,
            3,
            4,
            5
        ];
        const result = shuffle(arr);

        assert.deepStrictEqual([...arr].sort(), [...result].sort());

    });

    it('should not mutate the original array', function () {

        const arr = [
            1,
            2,
            3,
            4,
            5
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

        const arr = [42];
        const result = shuffle(arr);

        assert.deepStrictEqual(result, [42]);

    });

    it('should produce different orders on repeated shuffles (probabilistic)', function () {

        const arr = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10
        ];
        let sameOrderCount = 0;

        for (let i = 0; i < 10; i++) {

            const result = shuffle(arr);

            if (result.join(',') === arr.join(',')) {

                // eslint-disable-next-line no-plusplus
                sameOrderCount++;

            }

        }
        // It's possible but unlikely to always get the same order
        assert.ok(sameOrderCount < 10);

    });

});
