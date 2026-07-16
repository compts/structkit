import {strCamel} from "../../dist/esm/node.esm.mjs";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: strCamel method', function () {

    it('check Value', function () {

        assert.strictEqual(strCamel("the fish is goad   with goat-1ss"), 'theFishIsGoadWithGoat1ss');

    });
    it('check expected type', async function () {
       

        expectType<string>(strCamel("the fish is goad   with goat-1ss"));
  
      });

});
