
import {indexOf} from "../../dist/esm/node.esm";
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

    it('check if value exist in JSON object', function () {

        assert.deepStrictEqual(indexOf([
            {"s1": "sd"},
            {"s1": "32"},
            {"s1": "32"}
        ], {"s1": "32"}), one);

    });


});
