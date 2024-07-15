import {stringCamelCase} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: stringCamelCase method', function () {

    it('check Value', function () {

        assert.strictEqual(stringCamelCase("the fish is goad   with goat-1ss"), 'theFishIsGoadWithGoat1ss');

    });


});
