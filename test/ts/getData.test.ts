import {getData, isFunction} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: getData method', function () {

    it('check if repetion is correct', function () {

        assert.strictEqual(getData("a", {"a": "1"}), "1");
        assert.strictEqual(getData("a:b", {"a": {"b": "b1"}}), "b1");

    });
    it('check if repetion is correct with array', function () {

        assert.strictEqual(getData("0.a", [{"a": "1"}]), "1");
        assert.strictEqual(getData("0:a:b", [{"a": {"b": "b1"}}]), "b1");

    });
    it('check if repetion is correct in disable using comment the separator', function () {

        assert.strictEqual(getData("0.a\\.b", [{"a.b": "b1"}]), "b1");
        assert.strictEqual(getData("0:a\\:b", [{"a:b": "b1"}]), "b1");

    });
    it('check if repetion is correct with empty array', function () {

        assert.deepStrictEqual(getData("a", []), []);

    });

    it('check if arg is empty', function () {

        // eslint-disable-next-line no-undefined
        assert.strictEqual(getData(), undefined);

    });
    it('check if arg is empty object', function () {

        assert.deepStrictEqual(isFunction(getData({})), true);

    });
    it('check if arg is empty string', function () {

        assert.strictEqual(getData("", ""), "");

    });

    it('check expected type', function () {
       
        expectType<any>(getData("a", {"a": "1"}));
  
      });
});
