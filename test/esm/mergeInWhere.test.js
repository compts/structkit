
import {mergeInWhere} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: mergeInWhere method', function () {

    it('check if repetion is correct', function () {

        assert.deepStrictEqual(mergeInWhere([
            {
                "id": 1,
                "s": 23
            }
        ], [
            {
                "id": 1,
                "title": "test only"
            }
        ], {
            "$1.id": "$2.id",
            "$2.title": "test only"
        }), [
            {
                "id": 1,
                "s": 23,
                "title": "test only"
            }
        ]);

    });

});
