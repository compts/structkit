/* eslint-disable no-magic-numbers */
/* eslint-disable no-undefined */
const {parseJson} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: parseJson method', function () {

    it('check if repetion is correct', function () {


        assert.deepStrictEqual(parseJson("{'a': 1}"), {
            "a": 1
        });

        assert.deepStrictEqual(parseJson("{`a`: 1}"), {
            "a": 1
        });

        assert.deepStrictEqual(parseJson("{`a`: `1`}"), {
            "a": 1
        });

    });


    it('check if key has no qoute', function () {


        assert.deepStrictEqual(parseJson("[{ss:1},{a: 1}]"), [
            {"ss": 1},
            {"a": 1}
        ]);


    });

    it('check if key has qoute inside', function () {


        assert.deepStrictEqual(
            parseJson('{a:"s"sas"}'),
            {"a": 's"sas'}
        );


    });
    it('check if repetion is correct with dict and array', function () {

        assert.deepStrictEqual(parseJson('{"a": ["1","2" ]}'), {"a": [
            "1",
            "2"
        ]});

    });

    it('check if repetion is correct with html entity', function () {

        assert.deepStrictEqual(parseJson(`{"name":"arrayRepeat","example":"arrayRepeat(&quot;s&quot;,2 )=>['s','s']/","comment":"Repeat value in array","return":"Return in string or number.","arguments":[{"comment":"String you want to duplicate","name":"value","type":"any"},{"comment":"how many times you want to repeate","name":"valueRepetion","type":"number"}]}`), {
            "arguments": [
                {"comment": "String you want to duplicate",
                    "name": "value",
                    "type": "any"},
                {"comment": "how many times you want to repeate",
                    "name": "valueRepetion",
                    "type": "number"}
            ],
            "comment": "Repeat value in array",
            "example": "arrayRepeat(\"s\",2 )=>['s','s']/",
            "name": "arrayRepeat",
            "return": "Return in string or number."
        });

    });

    it('check if empty str argument', function () {

        assert.deepStrictEqual(parseJson(''), null);

    });
    it('check if null argument', function () {

        assert.deepStrictEqual(parseJson(null), null);

    });
    it('check if undefined argument', function () {

        assert.deepStrictEqual(parseJson(undefined), null);

    });
    it('check if number argument', function () {

        assert.deepStrictEqual(parseJson(11), null);

    });

});
