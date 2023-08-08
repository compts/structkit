import {stringSubs} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const two=2;
const one=1;

describe('TS: stringSubs method', function () {

    it('get substr from 1', function () {

        assert.deepStrictEqual(stringSubs("fish", one), 'ish');

    });

    it('get substr from 1 to 2', function () {

        assert.deepStrictEqual(stringSubs("fish", one, two), 'i');

    });

    it('check expected type', async function () {
       
        expectType<string>(stringSubs("fish", one));
  
    });
});

