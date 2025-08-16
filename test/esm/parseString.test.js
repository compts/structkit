
import {parseString} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: parseString method', function () {

    it('check if repetion is correct', function () {

        assert.strictEqual(parseString({"a": 1}), '{"a":1}');
        assert.strictEqual(parseString({"a": [
            "1",
            "2"
        ]}), '{"a":[1,2]}');

    });

    it('check if repetion is correct single qoute', function () {

        assert.strictEqual(parseString({"a": "11s's"}, {"unscapeEntity": true}), '{"a":"11s\'s"}');

    });


});
