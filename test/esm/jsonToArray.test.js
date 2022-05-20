
import {jsonToArray} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: jsonToArray method', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(
            jsonToArray({"a": 1,
                "b": {"asd": {"aa": "bb"}}}, "b:asd"),
            [{"aa": 'bb'}]
        );

    });


});
