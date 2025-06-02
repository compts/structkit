const {getData} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: getData method', function () {

    it('check if repetion is correct', function () {

        assert.strictEqual(getData({"a": "1"}, "a"), "1");
        assert.strictEqual(getData({"a": {"b": "b1"}}, "a:b"), "b1");

    });
    it('check if repetion is correct with array', function () {

        assert.strictEqual(getData([{"a": "1"}], "0.a"), "1");
        assert.strictEqual(getData([{"a": {"b": "b1"}}], "0:a:b"), "b1");

    });
    it('check if repetion is correct with empty array', function () {

        assert.deepStrictEqual(getData([], "a"), []);

    });

    it('check if arg is empty', function () {

        // eslint-disable-next-line no-undefined
        assert.strictEqual(getData(), undefined);

    });
    it('check if arg is empty object', function () {

        assert.deepStrictEqual(getData({}), {});

    });
    it('check if arg is empty string', function () {

        assert.strictEqual(getData("", ""), "");

    });

});
