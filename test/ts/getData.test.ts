import {getData} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: getData method', function () {

    it('check if repetion is correct', function () {

        assert.strictEqual(getData({"a": "1"}, "a"), "1");
        assert.strictEqual(getData({"a": {"b": "b1"}}, "a:b"), "b1");

    });
    it('check if arg is empty', function () {

        assert.strictEqual(getData(), "");

    });
    it('check expected type', function () {
       
        expectType<any>(getData({"a": "1"}, "a"));
  
      });
});
