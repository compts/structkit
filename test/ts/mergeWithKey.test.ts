import {mergeWithKey} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: mergeWithKey method', function () {

    it('check if repetion is correct', function () {

        assert.deepStrictEqual(mergeWithKey({"s": 1}, {"ss": 1}), {"s": 1,
            "ss": 1});

    });
    it('check expected type', function () {
       
        expectType<any>(mergeWithKey({"s": 1}, {"ss": 1}));
    });

});
