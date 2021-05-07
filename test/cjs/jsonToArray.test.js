const {jsonToArray} = require("../../dist/cjs/node.cjs");

const assert = require("assert");

describe('jsonToArray method', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(
            jsonToArray({"a": 1,
                "b": {"asd": {"aa": "bb"}}}, "b:asd"),
            [{"aa": 'bb'}]
        );

    });


});
