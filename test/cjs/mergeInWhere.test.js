const {mergeInWhere} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: mergeInWhere method', function () {

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
