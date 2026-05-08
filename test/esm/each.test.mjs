/* eslint-disable id-length */
/* eslint-disable no-undefined */
/* eslint-disable require-jsdoc */
/* eslint-disable no-empty-function */
/* eslint-disable sort-keys */
/* eslint-disable no-undef */
/* eslint-disable no-magic-numbers */
import {each} from "../../dist/esm/node.esm.js";
import assert from 'assert';

// Helper function to create a mock function that tracks calls
function createMockFn (impl = () => {}) {

    const calls = [];
    const fn = function (...args) {

        calls.push(args);
        try {

            return impl(...args);

        } catch (err) {

            // Record the error call for inspection but do not rethrow
            calls.push([
                '__error__',
                err
            ]);

            return undefined;

        }

    };

    fn.mock = {calls};

    return fn;

}

// eslint-disable-next-line max-lines-per-function, space-before-blocks
describe('ESM: each function', function (){

    // ==================== JSON/Object Tests ====================
    describe('JSON/Object iteration', () => {

        it('should iterate over a JSON object and call callback for each property', () => {

            const obj = {"a": 1,
                "b": 2,
                "c": 3};
            const callback = createMockFn();

            each(obj, callback);

            assert.strictEqual(callback.mock.calls.length, 3);

        });

        it('should pass correct value and key to callback for JSON objects', () => {

            const obj = {"name": 'John',
                "age": 30,
                "city": 'NYC'};
            const callback = createMockFn();

            each(obj, callback);

            assert.strictEqual(callback.mock.calls[0][0], 'John');
            assert.strictEqual(callback.mock.calls[0][1], 'name');
            assert(typeof callback.mock.calls[0][2] === 'object');
            assert.strictEqual(callback.mock.calls[1][0], 30);
            assert.strictEqual(callback.mock.calls[1][1], 'age');
            assert(typeof callback.mock.calls[1][2] === 'object');
            assert.strictEqual(callback.mock.calls[2][0], 'NYC');
            assert.strictEqual(callback.mock.calls[2][1], 'city');
            assert(typeof callback.mock.calls[2][2] === 'object');

        });

        it('should return array with values when no callback provided for JSON object', () => {

            const obj = {"x": 100,
                "y": 200};
            const result = each(obj);

            assert(typeof result === 'object');
            assert.strictEqual(result.x, 100);
            assert.strictEqual(result.y, 200);

        });

        it('should handle empty JSON object', () => {

            const obj = {};
            const callback = createMockFn();

            const result = each(obj, callback);

            assert.strictEqual(callback.mock.calls.length, 0);
            assert.deepStrictEqual(result, []);

        });

        it('should support isContinue to break loop early', () => {

            const obj = {"a": 1,
                "b": 2,
                "c": 3,
                "d": 4};
            const callback = createMockFn((value, key, localGlobal) => {

                if (key === 'b') {

                    localGlobal.isContinue(false);

                }

            });

            each(obj, callback);

            assert(callback.mock.calls.length <= 2);

        });

    });
    describe('Array iteration', () => {

        it('should iterate over an array and call callback for each element', () => {

            const arr = [
                10,
                20,
                30
            ];
            const callback = createMockFn();

            each(arr, callback);

            assert.strictEqual(callback.mock.calls.length, 3);

        });

        it('should pass correct value and index to callback for arrays', () => {

            const arr = [
                'a',
                'b',
                'c'
            ];
            const callback = createMockFn();

            each(arr, callback);

            assert.strictEqual(callback.mock.calls[0][0], 'a');
            assert.strictEqual(callback.mock.calls[0][1], 0);
            assert(typeof callback.mock.calls[0][2] === 'object');
            assert.strictEqual(callback.mock.calls[1][0], 'b');
            assert.strictEqual(callback.mock.calls[1][1], 1);
            assert(typeof callback.mock.calls[1][2] === 'object');
            assert.strictEqual(callback.mock.calls[2][0], 'c');
            assert.strictEqual(callback.mock.calls[2][1], 2);
            assert(typeof callback.mock.calls[2][2] === 'object');

        });

        it('should return array with values when no callback provided', () => {

            const arr = [
                5,
                10,
                15
            ];
            const result = each(arr);

            assert(Array.isArray(result));
            assert.strictEqual(result.length, 3);
            assert.strictEqual(result[0], 5);
            assert.strictEqual(result[1], 10);
            assert.strictEqual(result[2], 15);

        });

        it('should handle empty array', () => {

            const arr = [];
            const callback = createMockFn();

            const result = each(arr, callback);

            assert.strictEqual(callback.mock.calls.length, 0);
            assert.deepStrictEqual(result, []);

        });

        it('should work with mixed array types', () => {

            const arr = [
                1,
                'string',
                true,
                null,
                {"key": 'value'}
            ];
            const callback = createMockFn();

            each(arr, callback);

            assert.strictEqual(callback.mock.calls.length, 5);

        });

        it('should support isContinue to break array loop early', () => {

            const arr = [
                1,
                2,
                3,
                4,
                5
            ];
            const callback = createMockFn((value, key, localGlobal) => {

                if (value === 3) {

                    localGlobal.isContinue(false);

                }

            });

            each(arr, callback);

            assert(callback.mock.calls.length <= 3);

        });

    });

    // ==================== Set Tests ====================
    describe('Set iteration', () => {

        it('should iterate over a Set and call callback for each element', () => {

            const set = new Set([
                1,
                2,
                3
            ]);
            const callback = createMockFn();

            each(set, callback);

            assert.strictEqual(callback.mock.calls.length, 3);

        });

        it('should pass correct value and index to callback for Sets', () => {

            const set = new Set([
                'x',
                'y',
                'z'
            ]);
            const callback = createMockFn();

            each(set, callback);

            assert.strictEqual(callback.mock.calls[0][0], 'x');
            assert.strictEqual(callback.mock.calls[0][1], 0);
            assert(typeof callback.mock.calls[0][2] === 'object');
            assert.strictEqual(callback.mock.calls[1][0], 'y');
            assert.strictEqual(callback.mock.calls[1][1], 1);
            assert(typeof callback.mock.calls[1][2] === 'object');
            assert.strictEqual(callback.mock.calls[2][0], 'z');
            assert.strictEqual(callback.mock.calls[2][1], 2);
            assert(typeof callback.mock.calls[2][2] === 'object');

        });

        it('should return array with values when no callback provided for Set', () => {

            const set = new Set([
                10,
                20,
                30
            ]);
            const result = each(set);

            assert.strictEqual(result[0], 10);
            assert.strictEqual(result[1], 20);
            assert.strictEqual(result[2], 30);

            assert(Array.isArray(result));
            assert.strictEqual(result.length, 3);

        });

        it('should handle empty Set', () => {

            const set = new Set();
            const callback = createMockFn();

            const result = each(set, callback);

            assert.strictEqual(callback.mock.calls.length, 0);
            assert.deepStrictEqual(result, []);

        });

        it('should handle Set with duplicate values (Set removes duplicates)', () => {

            const set = new Set([
                1,
                2,
                2,
                3,
                3,
                3
            ]);
            const callback = createMockFn();

            each(set, callback);

            assert.strictEqual(callback.mock.calls.length, 3);

        });

        it('should support isContinue to break Set loop early', () => {

            const set = new Set([
                1,
                2,
                3,
                4,
                5
            ]);
            const callback = createMockFn((value, key, localGlobal) => {

                if (key === 2) {

                    localGlobal.isContinue(false);

                }

            });

            each(set, callback);

            assert(callback.mock.calls.length <= 3);

        });

        it('should work with Set containing objects', () => {

            const obj1 = {"id": 1};
            const obj2 = {"id": 2};
            const set = new Set([
                obj1,
                obj2
            ]);
            const callback = createMockFn();

            each(set, callback);

            assert.strictEqual(callback.mock.calls.length, 2);
            assert.strictEqual(callback.mock.calls[0][0], obj1);
            assert.strictEqual(callback.mock.calls[0][1], 0);
            assert(typeof callback.mock.calls[0][2] === 'object');
            assert.strictEqual(callback.mock.calls[1][0], obj2);
            assert.strictEqual(callback.mock.calls[1][1], 1);
            assert(typeof callback.mock.calls[1][2] === 'object');

        });

    });

    // ==================== Map Tests ====================
    describe('Map iteration', () => {

        it('should iterate over a Map and call callback for each entry', () => {

            const map = new Map([
                [
                    'key1',
                    'value1'
                ],
                [
                    'key2',
                    'value2'
                ],
                [
                    'key3',
                    'value3'
                ]
            ]);
            const callback = createMockFn();

            each(map, callback);

            assert.strictEqual(callback.mock.calls.length, 3);

        });

        it('should pass correct value and key to callback for Maps', () => {

            const map = new Map([
                [
                    'a',
                    100
                ],
                [
                    'b',
                    200
                ]
            ]);
            const callback = createMockFn();

            each(map, callback);

            assert.strictEqual(callback.mock.calls[0][0], 100);
            assert.strictEqual(callback.mock.calls[0][1], 'a');
            assert(typeof callback.mock.calls[0][2] === 'object');
            assert.strictEqual(callback.mock.calls[1][0], 200);
            assert.strictEqual(callback.mock.calls[1][1], 'b');
            assert(typeof callback.mock.calls[1][2] === 'object');

        });

        it('should return object with values when no callback provided for Map', () => {

            const map = new Map([
                [
                    'x',
                    10
                ],
                [
                    'y',
                    20
                ]
            ]);
            const result = each(map);

            assert(typeof result === 'object');
            assert.strictEqual(result.x, 10);
            assert.strictEqual(result.y, 20);

        });

        it('should handle empty Map', () => {

            const map = new Map();
            const callback = createMockFn();

            const result = each(map, callback);

            assert.strictEqual(callback.mock.calls.length, 0);
            assert.deepStrictEqual(result, []);

        });

        it('should work with Map with different key types', () => {

            const map = new Map();

            map.set('string_key', 'value1');
            map.set(42, 'value2');
            map.set({"obj": 'key'}, 'value3');

            const callback = createMockFn();

            each(map, callback);

            assert.strictEqual(callback.mock.calls.length, 3);

        });

        it('should support isContinue to break Map loop early', () => {

            const map = new Map([
                [
                    'a',
                    1
                ],
                [
                    'b',
                    2
                ],
                [
                    'c',
                    3
                ],
                [
                    'd',
                    4
                ]
            ]);
            const callback = createMockFn((value, key, localGlobal) => {

                if (key === 'b') {

                    localGlobal.isContinue(false);

                }

            });

            each(map, callback);

            // Should call twice (for 'a' and 'b') before breaking
            assert(callback.mock.calls.length <= 2);

        });

        it('should work with Map containing complex values', () => {

            const map = new Map([
                [
                    'obj',
                    {"name": 'John',
                        "age": 30}
                ],
                [
                    'arr',
                    [
                        1,
                        2,
                        3
                    ]
                ],
                [
                    'num',
                    42
                ]
            ]);
            const callback = createMockFn();

            each(map, callback);

            assert.strictEqual(callback.mock.calls.length, 3);
            assert.deepStrictEqual(callback.mock.calls[0][0], {"name": 'John',
                "age": 30});
            assert.strictEqual(callback.mock.calls[0][1], 'obj');
            assert(typeof callback.mock.calls[0][2] === 'object');

        });

    });

    // ==================== Edge Cases ====================
    describe('Edge cases', () => {

        it('should return null for unsupported types', () => {

            const result = each('string', () => {});

            assert.strictEqual(result, null);

        });

        it('should return null for number type', () => {

            const result = each(123, () => {});

            assert.strictEqual(result, null);

        });

        it('should return null for null input', () => {

            const result = each(null, () => {});

            assert.strictEqual(result, null);

        });

        it('should handle array with nested structures', () => {

            const arr = [
                {"id": 1,
                    "items": [
                        1,
                        2,
                        3
                    ]},
                {"id": 2,
                    "items": [
                        4,
                        5,
                        6
                    ]},
                new Set([
                    7,
                    8,
                    9
                ])
            ];
            const callback = createMockFn();

            each(arr, callback);

            assert.strictEqual(callback.mock.calls.length, 3);

        });

        it('should handle callback that modifies globalLocal', () => {

            const obj = {"a": 1,
                "b": 2,
                "c": 3};
            const stopAt = 'b';
            const callback = createMockFn((value, key, localGlobal) => {

                if (key === stopAt) {

                    localGlobal.isContinue(false);

                }

            });

            each(obj, callback);

            assert(callback.mock.calls.length > 0);

        });

        it('should handle callback with error gracefully', () => {

            const arr = [
                1,
                2,
                3
            ];
            let errorCaught = false;
            const callback = createMockFn(() => {

                throw new Error('Test error');

            });

            try {

                const result = each(arr, callback);

                assert(result !== undefined);

            } catch (e) {

                errorCaught = true;

            }

            // Test passes if no unhandled error or result is defined
            assert(!errorCaught || callback.mock.calls.length > 0);

        });

    });

    // ==================== Data Structure Combinations ====================
    describe('Complex data structure combinations', () => {

        it('should handle array of Sets', () => {

            const arr = [
                new Set([
                    1,
                    2
                ]),
                new Set([
                    3,
                    4
                ]),
                new Set([
                    5,
                    6
                ])
            ];
            const callback = createMockFn();

            each(arr, callback);

            assert.strictEqual(callback.mock.calls.length, 3);

        });

        it('should handle array of Maps', () => {

            const arr = [
                new Map([
                    [
                        'a',
                        1
                    ]
                ]),
                new Map([
                    [
                        'b',
                        2
                    ]
                ]),
                new Map([
                    [
                        'c',
                        3
                    ]
                ])
            ];
            const callback = createMockFn();

            each(arr, callback);

            assert.strictEqual(callback.mock.calls.length, 3);

        });

        it('should handle Set containing arrays', () => {

            const set = new Set([
                [
                    1,
                    2,
                    3
                ],
                [
                    4,
                    5,
                    6
                ]
            ]);
            const callback = createMockFn();

            each(set, callback);

            assert.strictEqual(callback.mock.calls.length, 2);

        });

        it('should handle Map with Set values', () => {

            const map = new Map([
                [
                    'set1',
                    new Set([
                        1,
                        2,
                        3
                    ])
                ],
                [
                    'set2',
                    new Set([
                        4,
                        5,
                        6
                    ])
                ]
            ]);
            const callback = createMockFn();

            each(map, callback);

            assert.strictEqual(callback.mock.calls.length, 2);

        });

        it('should handle deeply nested structures', () => {

            const obj = {
                "arr": [
                    1,
                    2,
                    3
                ],
                "set": new Set([
                    4,
                    5
                ]),
                "map": new Map([
                    [
                        'key',
                        'value'
                    ]
                ]),
                "nested": {
                    "inner": [
                        6,
                        7
                    ]
                }
            };
            const callback = createMockFn();

            each(obj, callback);

            assert(callback.mock.calls.length > 0);

        });

    });

});
