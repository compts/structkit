const {fromPairs} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");
// FromPairs test
const five = 5;
const six = 6;

describe('CJS: flatten method', function () {

    it('check if flatten n basic format', function () {

        assert.deepStrictEqual(fromPairs([
            [
                "s1",
                five
            ],
            [
                "s2",
                six
            ]
        ]), {
            "s1": five,
            "s2": six
        });

    });

});
describe('CJS: flatten method with empty array', function () {

    it('check if fromPairs with empty array returns empty object', function () {

        assert.deepStrictEqual(fromPairs([]), {});

    });

});
// FromPairs test with single pair
describe('CJS: flatten method with single pair', function () {

    it('check if fromPairs with single pair returns object with one key-value pair', function () {

        assert.deepStrictEqual(fromPairs([
            [
                "key",
                "value"
            ]
        ]), {"key": "value"});

    });

});
// FromPairs test with non-array input
describe('CJS: flatten method with non-array input', function () {

    it('check if fromPairs with non-array input throws an error', function () {

        assert.throws(() => {

            fromPairs("not an array");

        }, {
            "message": 'Value must be an array',
            "name": 'Error'
        });

    });

});
// FromPairs test with mixed types
describe('CJS: flatten method with mixed types', function () {

    it('check if fromPairs with mixed types returns object with mixed key-value pairs', function () {

        assert.deepStrictEqual(fromPairs([
            [
                "stringKey",
                "stringValue"
            ],
            [
                "six",
                true
            ],
            [
                "null",
                "undefined",
                five
            ]
        ]), {
            "null": {"undefined": five},
            "six": true,
            "stringKey": "stringValue"

        });

    });

});
