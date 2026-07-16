import {strSubs} from "../../dist/esm/node.esm.mjs";
import assert from 'assert';
import {expectType} from 'tsd';

const two=2;
const one=1;

describe('TS: strSubs method', function () {

    it('get substr from 1', function () {

        assert.deepStrictEqual(strSubs("fish", one), 'ish');

    });

    it('get substr from 1 to 2', function () {

        assert.deepStrictEqual(strSubs("fish", one, two), 'i');

    });

    it('check expected type', async function () {
       
        expectType<string>(strSubs("fish", one));
  
    });
});

