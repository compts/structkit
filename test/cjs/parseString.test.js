const {parseString} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: parseString method', function () {

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
