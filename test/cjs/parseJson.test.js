/* eslint-disable no-magic-numbers */
/* eslint-disable no-undefined */
const {parseJson} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: parseJson method', function () {

    it('check if key and value has type conversion', function () {


        assert.deepStrictEqual(parseJson("{'a': 1}"), {
            "a": 1
        });

        assert.deepStrictEqual(parseJson("{`a`: 1}"), {
            "a": 1
        });

        assert.deepStrictEqual(parseJson("{`a`: `1`}"), {
            "a": "1"
        });

        assert.deepStrictEqual(parseJson("{a: `1`}"), {
            "a": "1"
        });

    });


    it('check if key has no qoute', function () {


        assert.deepStrictEqual(parseJson("[{ss:1},{a: 1}]"), [
            {"ss": 1},
            {"a": 1}
        ]);

        assert.deepStrictEqual(
            parseJson("[asd,asd ]"),
            [
                "asd",
                "asd"
            ]
        );

        assert.deepStrictEqual(
            parseJson("[1,2,3,4]"),
            [
                1,
                2,
                3,
                4
            ]
        );


    });

    it('check if key has qoute inside', function () {


        assert.deepStrictEqual(
            parseJson('{a:"s"sas"}'),
            {"a": 's"sas'}
        );

        assert.deepStrictEqual(
            parseJson('{a:"s\\"sas"}'),
            {"a": 's"sas'}
        );

        assert.deepStrictEqual(
            parseJson('{a:"s\\\\sas"}'),
            {"a": 's as'}
        );

        assert.deepStrictEqual(
            parseJson('{a:"s\\\\nas"}'),
            {"a": 's\nas'}
        );

        assert.deepStrictEqual(
            parseJson('{a:"s\nas"}'),
            {"a": 's\nas'}
        );
        assert.deepStrictEqual(
            parseJson('{a:"s\tas"}'),
            {"a": 's\tas'}
        );
        assert.deepStrictEqual(
            parseJson('{"value":"hello\\qworld"}'),
            {"value": 'helloqworld'}
        ); 
        assert.deepStrictEqual(
            parseJson('{"example":"[1\\,1]"}'),
            {"example": "[1,1]"}
        );

        assert.deepStrictEqual(
            parseJson('{"data":{"getProjectList":[{"name":"add","example":"add(1\\, 1)\\/\\/ => 2\\/"}]}}'),
            {
                "data": {
                    "getProjectList": [
                        {
                            "name": "add",
                            "example": "add(1, 1)// => 2/"
                        }
                    ]
                }
            }
        );

        assert.deepStrictEqual(
            parseJson('{"example":"a\\/b"}'),
            {"example": "a/b"}
        );

    });
    it('check if repetion is correct with dict and array', function () {

        assert.deepStrictEqual(parseJson('{"a": ["1","2" ]}'), {"a": [
            "1",
            "2"
        ]});

        assert.deepStrictEqual(parseJson("[1,2,3{'asd':1},[asdm,s]]"), [
            1,
            2,
            3,
            {'asd': 1},
            [
                "asdm",
                "s"
            ]
        ]);

        assert.deepStrictEqual(parseJson("[1,2,3,{'asd':1}]"), [
            1,
            2,
            3,
            {"asd": 1}
        ]);

        assert.deepStrictEqual(parseJson("[1,2,3,{'asd':1},[asdm,s]]"), [
            1,
            2,
            3,
            {"asd": 1},
            [
                "asdm",
                "s"
            ]
        ]);

    });

    it('check if repetion is correct with html entity', function () {

        assert.deepStrictEqual(parseJson(`{"name":"arrayRepeat","example":"arrayRepeat(&quot;s&quot;\\,2 )=>['s'\\,'s']","comment":"Repeat value in array","return":"Return in string or number.","arguments":[{"comment":"String you want to duplicate","name":"value","type":"any"},{"comment":"how many times you want to repeate","name":"valueRepetion","type":"number"}]}`), {
            "arguments": [
                {"comment": "String you want to duplicate",
                    "name": "value",
                    "type": "any"},
                {"comment": "how many times you want to repeate",
                    "name": "valueRepetion",
                    "type": "number"}
            ],
            "comment": "Repeat value in array",
            "example": "arrayRepeat(\"s\",2 )=>['s','s']",
            "name": "arrayRepeat",
            "return": "Return in string or number."
        });

        assert.deepStrictEqual(parseJson(`{"name":"arrayRepeat","example":"arrayRepeatss(\\"s\\"\\,2)=>\\[sa,s\\]\\}"}`), {"example": 'arrayRepeatss("s",2)=>[sa,s]}',
            "name": 'arrayRepeat'});

        assert.deepStrictEqual(parseJson(`{"name":"arrayRepeat","example":"arrayRepeatss(\\"s\\"\\,2)=>\n\\[sa,s\\\\\\n;]\\}"}`), {"example": 'arrayRepeatss("s",2)=>\n[sa,s\n;]}',
            "name": 'arrayRepeat'});

    });

    it('check if semicolon is present in url format inside qoute', function () {

        assert.deepStrictEqual(parseJson(`{"name":"arrayRepeat","example":"https://sdfsf.com","fddd":"https://sdfsf.com"}`), {
            "example": 'https://sdfsf.com',
            "fddd": 'https://sdfsf.com',
            "name": 'arrayRepeat'
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

    it('check if string argument', function () {

        assert.deepStrictEqual(parseJson("11"), null);

    });

});
