
import {indexOfNotExist} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

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

describe('TS: indexOfNotExist', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(indexOfNotExist([
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
        ], one), false);


        assert.deepStrictEqual(indexOfNotExist([
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
        ], seven), false);

    });

    it('check if value not exist', function () {

        assert.deepStrictEqual(indexOfNotExist([
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
        ], zero), true);


    });
    it('check expected type', function () {
       
        expectType<boolean>(indexOfNotExist([
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
        ], zero));
  
    });

});
