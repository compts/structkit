
import {map} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: map method', function () {

    const one =1;
    const two =2;

    it('get array if map', function () {

        assert.deepStrictEqual(map([
            {"s1": 1},
            {"s1": 2},
            {"s1": 1}
        ], function (value) {

            return value.s1;

        }), [
            one,
            two,
            one
        ]);

    });

    it('check expected type', function () {
       
        expectType<any>(map([
            {"s1": 1},
            {"s1": 2},
            {"s1": 1}
        ], function (value) {

            return value.s1;

        }));
    });
});
