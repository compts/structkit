
import {range} from "../../dist/esm/node.esm";
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
    two =2;

describe('TS: range method', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(range(ten, one), [
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
        ]);

    });

    it('check expected type', function () {
       
        expectType<any[]>(range(ten, one));
    });

});
