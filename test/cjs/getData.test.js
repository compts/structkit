const {getData} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: getData method', function () {

    it('check if repetion is correct', function () {

        assert.strictEqual(getData({"a": "1"}, "a"), "1");
        assert.strictEqual(getData({"a": {"b": "b1"}}, "a:b"), "b1");

    });

});
