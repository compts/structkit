import {insert} from "../../dist/esm/node.esm";
import assert from 'assert';

// JavaScript


describe('insert', function () {
    it('should insert properties from one object into another', function () {
        const obj = { a: 1 };
        insert(obj, { b: 2, c: 3 });
        assert.deepStrictEqual(obj, { a: 1, b: 2, c: 3 });
    });

    it('should insert an array into another array as a single element', function () {
        const arr = [1, 2];
        insert(arr, [3, 4]);
        assert.deepStrictEqual(arr, [1, 2, [3, 4]]);
    });

    it('should do nothing if first argument is not an object or array', function () {
        const notObj = 42;
        assert.strictEqual(insert(notObj, { a: 1 }), undefined);
    });

    it('should do nothing if second argument is not an object or array', function () {
        const obj = { a: 1 };
        insert(obj, 42);
        assert.deepStrictEqual(obj, { a: 1 });
    });

    it('should return undefined', function () {
        const obj = {};
        const result = insert(obj, { b: 2 });
        assert.strictEqual(result, undefined);
    });
});
