import {strUpper} from "../../dist/esm/node.esm.mjs";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: strUpper method', function () {

    it('LowerCase first words', function () {

        assert.strictEqual(strUpper('The fish is goad   with Goat-1ss'), 'THE FISH IS GOAD   WITH GOAT-1SS');

    });

    it('check expected type', async function () {
       
        expectType<string>(strUpper('The fish is goad   with Goat-1ss'));
  
    });
});
