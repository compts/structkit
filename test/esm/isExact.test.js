
import {isExact} from "../../dist/node.es";
import assert from 'assert';

describe('ESM: isExact method', function () {

    it('check if json key exist', function () {

        assert.strictEqual(isExact({"test": 11,
            "test2": 11}, {"test2": 11}, true), true);

    });


});
