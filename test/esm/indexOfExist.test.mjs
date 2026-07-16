
import {indexOfExist} from "../../dist/esm/node.esm.mjs";
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

describe('ESM: indexOfExist', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(indexOfExist(one, [
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


        assert.deepStrictEqual(indexOfExist(seven, [
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

    it('check if value not exist', function () {

        assert.deepStrictEqual(indexOfExist(zero, [
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


});
