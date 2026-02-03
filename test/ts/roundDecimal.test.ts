import {roundDecimal} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: roundDecimal method', function () {

    it('check if roundDecimal n basic format', function () {

        // eslint-disable-next-line no-magic-numbers
        assert.deepStrictEqual(roundDecimal(11.1111111, 2), 11.11);

    });

    it('check expected type', function () {
               
            expectType<number>(roundDecimal(11.1111111, 2));
        });

});
