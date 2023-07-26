
import {jsonToArray} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: jsonToArray method', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(
            jsonToArray({"a": 1,
                "b": {"asd": {"aa": "bb"}}}, "b:asd"),
            [{"aa": 'bb'}]
        );

    });
    it('check expected type', function () {
       
        expectType<any>(jsonToArray({"a": 1,
        "b": {"asd": {"aa": "bb"}}}, "b:asd"));
    });

});
