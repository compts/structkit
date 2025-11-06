import {strCamel} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: strCamel method', function () {

    it('check Value', function () {

        assert.strictEqual(strCamel("the fish is goad   with goat-1ss"), 'theFishIsGoadWithGoat1ss');

    });


});
