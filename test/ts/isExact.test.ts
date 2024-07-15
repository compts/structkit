
import {isExact} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: isExact method', function () {

    it('check if json key exist', function () {

        assert.strictEqual(isExact({"test2": 11}, {"test": 11,
            "test2": 11}, true), true);

    });

    it('check expected type', function () {
       
        expectType<boolean>(isExact({"test2": 11}, {"test": 11,
        "test2": 11}, true));
    });


    it('check if repetion is correct', function () {

        assert.strictEqual(isExact({"a:b": "b1"}, {"a": {"b": "b1"}}), true);

    });
});
