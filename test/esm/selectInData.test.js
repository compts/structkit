import {selectInData} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: selectInData method', function () {

    it('check if repetion is correct', function () {

        assert.deepStrictEqual(selectInData({"s": 2}, {"ss": "s"}), {
            'ss': 2
        });

    });

});
