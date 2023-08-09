import {stringUpperCase} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: stringUpperCase method', function () {

    it('LowerCase first words', function () {

        assert.strictEqual(stringUpperCase('The fish is goad   with Goat-1ss'), 'THE FISH IS GOAD   WITH GOAT-1SS');

    });

    it('check expected type', async function () {
       
        expectType<string>(stringUpperCase('The fish is goad   with Goat-1ss'));
  
    });
});
