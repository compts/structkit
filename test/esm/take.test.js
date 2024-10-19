import {take} from "../../dist/esm/node.esm";
import assert from 'assert';

const one =1;
const three =3;

describe('ESM: take method', function () {

    it('check if one', function () {

        assert.deepStrictEqual(take(one, [
            one,
            three
        ]), one);

    });

});
