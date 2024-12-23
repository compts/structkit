import {unique} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';
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

    it('check if unique empty', function () {

        assert.deepStrictEqual(unique({}), []);

    });

    it('check expected type', async function () {
       
        expectType<number[]>(unique([
            ten,
            ten,
            one
        ]));
  
    });
});
