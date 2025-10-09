
import {indexOfNotExist} from "../../dist/esm/node.esm";
import assert from 'assert';

const eight=8,
    five=5,
    four=4,
    nine=9,
    one =1,
    seven=7,
    six=6,
    ten=10,
    three=3,
    two =2,
    zero=0;

describe('ESM: indexOfNotExist', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(indexOfNotExist(one, [
            one,
            two,
            three,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten
        ]), false);


        assert.deepStrictEqual(indexOfNotExist(seven, [
            one,
            two,
            three,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten
        ]), false);

    });

    it('check if value not exist', function () {

        assert.deepStrictEqual(indexOfNotExist(zero, [
            one,
            two,
            three,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten
        ]), true);


    });


});
