import {filter} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: filter method', function () {

    const one =1;

    it('check array if filter', function () {

        assert.deepStrictEqual(filter( function (value:any) {

            return value.s1 === one;

        }, [
            {"s1": 1},
            {"s1": 2},
            {"s1": 1}
        ]), [
            {"s1": 1},
            {"s1": 1}
        ]);

    });

    it('check array if filter arg is invalid json or array', function () {

        assert.deepStrictEqual(filter(function (value:any) {

            return value.s1 === one;

        }, one), []);

    });

    it('check expected type', function () {

        expectType<any>(filter(function (value:any) {

            return value.s1 === one;

        }, [
            {"s1": 1},
            {"s1": 2},
            {"s1": 1}
        ]));
  
      });
      
});
