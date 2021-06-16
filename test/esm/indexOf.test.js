
import {indexOf} from "../../dist/node.es";
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

describe('ESM: IndexOf', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(indexOf([
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
        ], one), zero);


        assert.deepStrictEqual(indexOf([
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
        ], seven), six);

    });


});
