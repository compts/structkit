import {toPairs} from "../../dist/esm/node.esm";
import assert from 'assert';
// FromPairs test
const five = 5;
const six = 6;

describe('ESM: toPairs method', function () {

    it('check if toPairs n basic format', function () {

        assert.deepStrictEqual(toPairs({
            "s1": five,
            "s2": six
        }), [
            [
                "s1",
                five
            ],
            [
                "s2",
                six
            ]
        ]);

    });

});


describe('ESM: toPairs method with empty array', function () {

    it('check if toPairs with empty array returns empty object', function () {

        assert.deepStrictEqual(toPairs({}), []);

    });

});
// ToPairs test with single pair
describe('ESM: toPairs method with single pair', function () {

    it('check if toPairs with single pair returns object with one key-value pair', function () {

        assert.deepStrictEqual(toPairs({"key": "value"}), [
            [
                "key",
                "value"
            ]
        ]);

    });

});
// FromPairs test with non-array input
describe('ESM: toPairs method with non-array input', function () {

    it('check if toPairs with non-array input throws an error', function () {

        assert.throws(() => {

            toPairs("not an json");

        }, {
            "message": 'Value must be an json',
            "name": 'Error'
        });

    });

});
// FromPairs test with mixed types
describe('ESM: toPairs method with mixed types', function () {

    it('check if fromPairs with mixed types returns object with mixed key-value pairs', function () {

        assert.deepStrictEqual(toPairs({
            "null": {"undefined": five},
            "six": true,
            "stringKey": "stringValue"

        }), [
            [
                "null",
                "undefined",
                five
            ],
            [
                "six",
                true
            ],
            [
                "stringKey",
                "stringValue"
            ]
        ]);

    });

});
