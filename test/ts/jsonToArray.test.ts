
import {jsonToArray} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: jsonToArray method', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(
            jsonToArray("b:asd", {"a": 1,
                "b": {"asd": {"aa": "bb"}}}),
            [{"aa": 'bb'}]
        );

    });
    it('check expected type', function () {
       
        expectType<any>(jsonToArray("b:asd", {"a": 1,
        "b": {"asd": {"aa": "bb"}}}));
    });

});
