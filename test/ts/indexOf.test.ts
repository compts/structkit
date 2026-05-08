
import {indexOf, isExact} from "../../dist/esm/node.esm.mjs";
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

describe('TS: IndexOf', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(indexOf(one, [
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
        ]), zero);


        assert.deepStrictEqual(indexOf(seven, [
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
        ]), six);

    });

    it('check expected type', function () {
       
        expectType<number>(indexOf(seven, [
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
        ]));
  
    });

    it('check if value exist in JSON object', function () {

        assert.deepStrictEqual(indexOf({"s1": "32"}, [
            {"s1": "sd"},
            {"s1": "32"},
            {"s1": "32"}
        ]), one);

    });

    it('check if value exist in JSON object in array value', function () {

        assert.deepStrictEqual(indexOf({"s1": [
            "32",
            "23"
        ]}, [
            {"s1": ["sd"]},
            {"s1": ["32"]},
            {"s1": ["322"]}
        ]), -one);

        assert.deepStrictEqual(indexOf({"s1": ["32"]}, [
            {"s1": ["sd"]},
            {"s1": ["32"]},
            {"s1": ["322"]}
        ]), one);

    });

    it('check if value exist in array object in array value', function () {

        assert.deepStrictEqual(indexOf(["2"], [
            ["1"],
            ["2"],
            ["3"]
        ]), one);

        assert.deepStrictEqual(indexOf(["22"], [
            ["1"],
            ["2"],
            ["3"]
        ]), -one);


    });


    it('check if value exist in curry to validate object in array value', function () {

        assert.deepStrictEqual(indexOf(isExact({"a\\:c": "b1"}), [
            {"a:b1": "b1"},
            {"a:b": "b1"},
            {"a:c": "b1"}
        ]), two);

        assert.deepStrictEqual(indexOf(isExact({"a\\:c": "b11"}), [
            {"a:b1": "b1"},
            {"a:b": "b1"},
            {"a:c": "b1"}
        ]), -one);

    });

});
