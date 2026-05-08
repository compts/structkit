import {roundDecimal} from "../../dist/esm/node.esm.js";
import assert from 'assert';

describe('ESM: roundDecimal method', function () {

    it('check if roundDecimal n basic format', function () {

        // eslint-disable-next-line no-magic-numbers
        assert.deepStrictEqual(roundDecimal(11.1111111, 2), 11.11);

    });

});
