const {parseJson} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: parseJson method', function () {

    it('check if repetion is correct', function () {

        assert.deepStrictEqual(parseJson('{"a": 1}'), {
            "a": 1
        });
        assert.deepStrictEqual(parseJson('{"a": ["1","2" ]}'), {"a": [
            "1",
            "2"
        ]});

    });

    it('check if empty str argument', function () {

        assert.deepStrictEqual(parseJson(''), null);

    });

});
