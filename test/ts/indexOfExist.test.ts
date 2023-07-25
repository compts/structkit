
import {indexOfExist} from "../../dist/esm/node.esm";
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

describe('TS: indexOfExist', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(indexOfExist([
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
        ], one), true);


        assert.deepStrictEqual(indexOfExist([
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
        ], seven), true);

    });

    it('check if value not exist', function () {

        assert.deepStrictEqual(indexOfExist([
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
        ], zero), false);


    });


});
