import {toString} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const ten=10;
const one=1;

describe('ESM: toString method', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(toString(ten), '10');
        assert.deepStrictEqual(toString([
            ten,
            one
        ]), '10,1');

    });
    it('check if value empty', function () {

        assert.deepStrictEqual(toString(null), '');
        assert.deepStrictEqual(toString(), '');

    });

    it('check expected type', async function () {
       
        expectType<string>(toString([ten]));
  
    });
});
