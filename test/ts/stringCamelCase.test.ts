import {stringCamelCase} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: stringCamelCase method', function () {

    it('check Value', function () {

        assert.strictEqual(stringCamelCase("the fish is goad   with goat-1ss"), 'theFishIsGoadWithGoat1ss');

    });
    it('check expected type', async function () {
       

        expectType<string>(stringCamelCase("the fish is goad   with goat-1ss"));
  
      });

});
