import {unique} from "../../dist/esm/node.esm";
import assert from 'assert';

const one =1;
const ten=10;

describe('TS: unique method', function () {

    it('check if unique asc number', function () {

        assert.deepStrictEqual(unique([
            ten,
            ten,
            one
        ]), [
            ten,
            one
        ]);

    });

});
