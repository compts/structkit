import {insert} from "../../dist/esm/node.esm";
import assert from 'assert';

// JavaScript
const one = 1;
const two = 2;
const three = 3;
const four = 4;
const fourtytwo = 42;

describe('insert', function () {

    it('should insert properties from one object into another', function () {

        const obj = {"a": 1};

        insert(obj, {"b": 2,
            "c": 3});
        assert.deepStrictEqual(obj, {"a": 1,
            "b": 2,
            "c": 3});

    });

    it('should insert an array into another array as a single element', function () {

        const arr = [
            one,
            two
        ];

        insert(arr, [
            three,
            four
        ]);
        assert.deepStrictEqual(arr, [
            one,
            two,
            [
                three,
                four
            ]
        ]);

    });

    it('should do nothing if first argument is not an object or array', function () {

        const notObj = 42;

        // eslint-disable-next-line no-undefined
        assert.strictEqual(insert(notObj, {"a": 1}), undefined);

    });

    it('should do nothing if second argument is not an object or array', function () {

        const obj = {"a": 1};

        insert(obj, fourtytwo);
        assert.deepStrictEqual(obj, {"a": 1});

    });

    it('should return undefined', function () {

        const obj = {};
        const result = insert(obj, {"b": 2});

        // eslint-disable-next-line no-undefined
        assert.strictEqual(result, undefined);

    });

});
