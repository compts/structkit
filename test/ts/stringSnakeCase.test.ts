import {stringSnakeCase} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: stringSnakeCase method', function () {

    it('check Value', function () {

        assert.strictEqual(stringSnakeCase('the fish is goad   with goat-1ss'), 'the_fish_is_goad_with_goat_1ss');

    });
    it('check expected type', async function () {
       
        expectType<string>(stringSnakeCase('the fish is goad   with goat-1ss'));
  
    });

});
