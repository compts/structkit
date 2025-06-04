import {union} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const one =1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const six = 6;

describe('TS: union method', function () {

    it('check if union n merge all group array', function () {

        assert.deepStrictEqual(union(
            [
                one,
                two,
                three
            ],
            [
                four,
                five
            ],
            [six]
        ), [
            one,
            two,
            three,
            four,
            five,
            six
        ]);

    });
    it('check expected type', async function () {

        expectType<any[]>(union(
            [
                one,
                two,
                three
            ],
            [
                four,
                five
            ],
            [six]
        ));

    });

});
