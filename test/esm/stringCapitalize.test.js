import {stringCapitalize} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: stringCapitalize method', function () {

    it('Capitalize first words', function () {

        assert.strictEqual(stringCapitalize('the fish is goad   with goat-1ss'), 'The fish is goad   with goat-1ss');

    });

    it('Capitalize all words', function () {

        assert.strictEqual(stringCapitalize('the fish is goad   with goat-1ss', 'all'), 'The Fish Is Goad   With Goat-1ss');

    });

});
