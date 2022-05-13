import {stringCapitalize} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('CJS: stringCapitalize method', function () {

    it('check Value', function () {

        assert.strictEqual(stringCapitalize('the fish is goad   with goat-1ss'), 'The Fish Is Goad   With Goat-1ss');

    });


});
