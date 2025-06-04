const {setData} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: setData method', function () {

    it('check if repetion is correct', function () {

        assert.deepStrictEqual(setData({"a": "1"}, "a", "23"), {"a": "23"});
        assert.deepStrictEqual(setData({"a": {"b": "b1"}}, "a:b", "b3"), {"a": {"b": "b3"}});

    });
    it('check if repetion is correct with array', function () {

        assert.deepStrictEqual(setData([{"a": "1"}], "a", "2"), [{"a": "2"}]);
        assert.deepStrictEqual(setData([{"a": {"b": "b1"}}], "a:b", "b2"), [{"a": {"b": "b2"}}]);
        assert.deepStrictEqual(setData([{"a": {"b": "b1"}}], "a:b", "b3"), [{"a": {"b": "b3"}}]);

    });

    it('check if arg is empty object', function () {

        assert.deepStrictEqual(setData({}), {});

    });
    it('check if arg is empty string', function () {

        assert.strictEqual(setData("", ""), "");

    });

});
