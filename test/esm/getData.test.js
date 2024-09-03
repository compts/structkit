import {getData} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: getData method', function () {

    it('check if repetion is correct', function () {

        assert.strictEqual(getData({"a": "1"}, "a"), "1");
        assert.strictEqual(getData({"a": {"b": "b1"}}, "a:b"), "b1");

    });

    it('check if arg is empty', function () {

        assert.strictEqual(getData(), "");

    });

});
