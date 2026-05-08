import {strSnake} from "../../dist/esm/node.esm.js";
import assert from 'assert';

describe('ESM: strSnake method', function () {

    it('check Value', function () {

        assert.strictEqual(strSnake('the fish is goad   with goat-1ss'), 'the_fish_is_goad_with_goat_1ss');

    });


});
