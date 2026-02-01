
import {parseJson} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: parseString method', function () {

    it('check if repetion is correct', function () {


        assert.deepStrictEqual(parseJson("{'a': 1}"), {
            "a": 1
        });


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
            "return": "Return in string or number.",
        });

    });

    it('check if empty str argument', function () {

        assert.deepStrictEqual(parseJson(''), null);

    });


    it('check expected type', function () {

        expectType<any>(parseJson('{"a": ["1","2" ]}'));

    });


});
