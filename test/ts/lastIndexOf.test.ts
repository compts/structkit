
import {lastIndexOf} from "../../dist/esm/node.esm";
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

describe('TS: LastIndexOf', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(lastIndexOf([
            one,
            one,
            one,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten
        ], one), two);


        assert.deepStrictEqual(lastIndexOf([
            one,
            one,
            two,
            two,
            five,
            six,
            seven,
            eight,
            nine,
            ten
        ], two), three);

    });

    it('check if value exist in JSON object', function () {

        assert.deepStrictEqual(lastIndexOf([
            {"s1": "sd"},
            {"s1": "32"},
            {"s1": "32"}
        ], {"s1": "32"}), two);

    });

    it('check expected type', function () {
       
        expectType<any>(lastIndexOf([
            one,
            one,
            two,
            two,
            five,
            six,
            seven,
            eight,
            nine,
            ten
        ], two));
    });

});
