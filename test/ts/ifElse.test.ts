import {ifElse, __, has} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';


const one =1;
const two = 2;

const func1 = ifElse(__, function (params:boolean, ss:number) {

    return ss;

}, function (params:boolean, ss:number, s2:number) {

    return s2;

});


const func2 = ifElse(__, function (params:any, ss:any, s2:any) {

    return ss[s2];

}, function (params:any, ss:any, s2:any) {

    return s2;

});

describe('TS: ifElse method', function () {

    it('check placeholder condition in true', function () {

        assert.deepStrictEqual(func1(true, one, two), one);

    });

    it('check placeholder condition in false', function () {

        assert.deepStrictEqual(func1(false, one, two), two);

    });

    it('check placeholder condition in has is true', function () {

        assert.deepStrictEqual(func2(has, {"2": one}, "2"), one);

    });

    it('check placeholder condition in has is false', function () {

        assert.deepStrictEqual(func2(has, {"23": one}, "2"), "2");

    });

    it('check expected type', function () {
           
        expectType<any>(func1(false, one, two));
      
    });

});
