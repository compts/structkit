const {jsonToArray} = require("../../dist/cjs/structkit-full.cjs");

const assert = require("assert");

describe('CJS: jsonToArray method', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(
            jsonToArray("b:asd", {"a": 1,
                "b": {"asd": {"aa": "bb"}}}),
            [{"aa": 'bb'}]
        );

    });


});
