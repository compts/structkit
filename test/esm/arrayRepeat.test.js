import {arrayRepeat} from "../../dist/esm/node.esm";
import assert from 'assert';

const two=2;

describe('ESM: arrayRepeat method', function () {

    it('check if repetion is correct', function () {

        assert.deepStrictEqual(arrayRepeat(
            "as",
            two
        ), [
            "as",
            "as"
        ]);

    });

});
