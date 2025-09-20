/* eslint-disable sort-keys */
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

});
