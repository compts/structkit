import {stringSnakeCase} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: stringSnakeCase method', function () {

    it('check Value', function () {

        assert.strictEqual(stringSnakeCase('the fish is goad   with goat-1ss'), 'the_fish_is_goad_with_goat_1ss');

    });


});
