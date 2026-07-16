
import {parseString} from "../../dist/esm/node.esm.mjs";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: parseString method', function () {

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


    it('check if repetion is correct double qoute', function () {

        assert.strictEqual(parseString({"a": '11s"s'}, {"unscapeEntity": true}), '{"a":"11s"s"}');

    });
    it('check if repetion is correct with html entity', function () {

        assert.strictEqual(parseString({"name": "arrayRepeat",
            "example": "arrayRepeat(&quot;s&quot;,2 )=>['s','s']/",
            "comment": "Repeat value in array",
            "return": "Return in string or number.",
            "arguments": [
                {"comment": "String you want to duplicate",
                    "name": "value",
                    "type": "any"},
                {"comment": "how many times you want to repeate",
                    "name": "valueRepetion",
                    "type": "number"}
            ]}, {"unscapeEntity": true}), `{"name":"arrayRepeat","example":"arrayRepeat("s",2 )=>['s','s']/","comment":"Repeat value in array","return":"Return in string or number.","arguments":[{"comment":"String you want to duplicate","name":"value","type":"any"},{"comment":"how many times you want to repeate","name":"valueRepetion","type":"number"}]}`);

    });
    it('check if empty str argument', function () {

        assert.strictEqual(parseString(''), '');

    });

    it('check if null argument', function () {

        assert.strictEqual(parseString(null), '');

    });

    it('handles NaN and Infinity', function () {

        assert.strictEqual(parseString({"a": NaN}), '{"a":"NaN"}');
        assert.strictEqual(parseString({"a": Infinity}), '{"a":"Infinity"}');

    });

    it('handles undefined and regexp', function () {

        assert.strictEqual(parseString({"a": undefined}), '{"a":"undefined"}');
        assert.strictEqual(parseString({"a": /ab/g}), '{"a":"new RegExp(ab,g)"}');

    });

    it('handles function with default ignoreFunction', function () {

        // eslint-disable-next-line no-empty-function
        assert.strictEqual(parseString({"a" () {}}), '{"a":null}');

    });

    it('handles Set and Map', function () {

        const s = new Set([
            1,
            2
        ]);
        const m = new Map([
            [
                "x",
                10
            ],
            [
                "y",
                20
            ]
        ]);

        assert.strictEqual(parseString({s}), '{"s":[1,2]}');
        assert.strictEqual(parseString({m}), '{"m":{"x":10,"y":20}}');

    });

    it('check expected type', function () {
       
        expectType<string>(parseString({"a": [
            "1",
            "2"
        ]}));
    });

});
