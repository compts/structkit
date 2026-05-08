import {strUpper} from "../../dist/esm/node.esm.js";
import assert from 'assert';

describe('ESM: strUpper method', function () {

    it('LowerCase first words', function () {

        assert.strictEqual(strUpper('The fish is goad   with Goat-1ss'), 'THE FISH IS GOAD   WITH GOAT-1SS');

    });

});
