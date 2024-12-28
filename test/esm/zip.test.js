import {zip} from "../../dist/esm/node.esm";
import assert from 'assert';

const one =1;

describe('ESM: zip method', function () {

    it('check if zip asc number', function () {

        assert.deepStrictEqual(zip([one], [one], [one]), [
            [
                one,
                one,
                one
            ]
        ]);

    });

});
