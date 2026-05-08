import {setData} from "../../dist/esm/node.esm.js";
import assert from 'assert';

describe('ESM: setData method', function () {

    it('check if repetion is correct', function () {

        assert.deepStrictEqual(setData("a", {"a": "1"}, "23"), {"a": "23"});
        assert.deepStrictEqual(setData("a:b", {"a": {"b": "b1"}}, "b3"), {"a": {"b": "b3"}});

    });
    it('check if repetion is correct with array', function () {

        assert.deepStrictEqual(setData("a", [{"a": "1"}], "2"), [{"a": "2"}]);
        assert.deepStrictEqual(setData("a:b", [{"a": {"b": "b1"}}], "b2"), [{"a": {"b": "b2"}}]);
        assert.deepStrictEqual(setData("a:b", [{"a": {"b": "b1"}}], "b3"), [{"a": {"b": "b3"}}]);

    });

    it('check if arg is empty object', function () {

        assert.deepStrictEqual(setData({}), {});

    });
    it('check if arg is empty string', function () {

        assert.strictEqual(setData("", ""), "");

    });

});
