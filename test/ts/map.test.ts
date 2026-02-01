
import {map} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: map method', function () {

    const one =1;
    const two =2;

    it('get array if map', function () {

        assert.deepStrictEqual(map(function (value:any) {

            return value.s1;

        }, [
            {"s1": 1},
            {"s1": 2},
            {"s1": 1}
        ]), [
            one,
            two,
            one
        ]);

    });


    it('get array if map in curry', function () {

        assert.deepStrictEqual(map(function (value:any) {

            return value.s1;

        })([
            {"s1": 1},
            {"s1": 2},
            {"s1": 1}
        ]), [
            one,
            two,
            one
        ]);

    });

    it('check expected type', function () {
       
        expectType<any>(map(function (value:any) {

            return value.s1;

        }, [
            {"s1": 1},
            {"s1": 2},
            {"s1": 1}
        ]));
    });
});
