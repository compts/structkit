import {flatten} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const one =1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const six = 6;

describe('TS: flatten method', function () {

    it('check if flatten n basic format', function () {

        assert.deepStrictEqual(flatten([
            one,
            two,
            three,
            [
                four,
                five
            ],
            [six]
        ]), [
            one,
            two,
            three,
            four,
            five,
            six
        ]);

    });

    it('check if flatten n basic format with type', function () {

        const result = flatten([
            one,
            two,
            three,
            [
                four,
                five
            ],
            [six]
        ]);

        expectType<number[]>(result);

    });

});
