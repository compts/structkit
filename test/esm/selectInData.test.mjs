import {selectInData} from "../../dist/esm/node.esm.mjs";
import assert from 'assert';

describe('ESM: selectInData method', function () {

    it('check if repetion is correct', function () {

        assert.deepStrictEqual(selectInData({"ss": "s"}, {"s": 2}), {
            'ss': 2
        });

    });

});
