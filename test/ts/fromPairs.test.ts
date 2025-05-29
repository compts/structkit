import {fromPairs} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';
// FromPairs test
const five = 5;
const six = 6;

describe('TS: flatten method', function () {

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
// FromPairs test with empty array
describe('TS: flatten method with empty array', function () {

    it('check if fromPairs with empty array returns empty object', function () {

        assert.deepStrictEqual(fromPairs([]), {});

    });

});
// FromPairs test with single pair
describe('TS: flatten method with single pair', function () {

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
describe('TS: flatten method with non-array input', function () {

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
describe('TS: flatten method with mixed types', function () {

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
// FromPairs test with nested arrays
describe('TS: flatten method with nested arrays', function () {
    it('check if fromPairs with nested arrays returns object with nested structure', function () {

        assert.deepStrictEqual(fromPairs([
            [
                "nested",
                [
                    "key1",
                    "value1"
                ]
            ],
            [
                "nested2",
                {
                    "key2": "value2"
                }
            ]
        ]), {
            "nested": ["key1", "value1"],
            "nested2": {"key2": "value2"}
        });

    });

}
);
// FromPairs test with duplicate keys
describe('TS: flatten method with duplicate keys', function () {
    it('check if fromPairs with duplicate keys returns last value for duplicate keys', function () {

        assert.deepStrictEqual(fromPairs([
            [
                "duplicate",
                "first"
            ],
            [
                "duplicate",
                "second"
            ]
        ]), {
            "duplicate": "second"
        });

    });

}
);
// FromPairs test with complex objects
describe('TS: flatten method with complex objects', function () {
    it('check if fromPairs with complex objects returns object with complex structure', function () {

        assert.deepStrictEqual(fromPairs([
            [
                "complex",
                {
                    "key": "value",
                    "array": [1, 2, 3]
                }
            ],
            [
                "anotherComplex",
                {
                    "nested": {
                        "key": "nestedValue"
                    }
                }
            ]
        ]), {
            "anotherComplex": {"nested": {"key": "nestedValue"}},
            "complex": {"array": [1, 2, 3], "key": "value"}
        });

    });

}
);

describe('TS: flatten method', function () {
    
    it('check expected type', function () {

        expectType<Record<string, any>>(fromPairs([
            [
                "s1",
                five
            ],
            [
                "s2",
                six
            ]
        ]));

    });

});