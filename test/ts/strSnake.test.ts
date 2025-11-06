import {strSnake} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: strSnake method', function () {

    it('check Value', function () {

        assert.strictEqual(strSnake('the fish is goad   with goat-1ss'), 'the_fish_is_goad_with_goat_1ss');

    });
    it('check expected type', async function () {
       
        expectType<string>(strSnake('the fish is goad   with goat-1ss'));
  
    });

});
