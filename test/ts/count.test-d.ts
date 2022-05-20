const {count} = require("../../dist/ts/node.esm");
const assert = require("assert");
import {expectType, expectAssignable} from 'tsd';

const one =1;
const zero =0;

//describe('CJS: count method', function () {

//    it('check if value exist', function () {


      //  assert.deepStrictEqual(count({"s1": 1}), one);
      //  assert.deepStrictEqual(count([one]), one);
      expectType<number>(count({"s1": 1}));

//    });

 //   it('check JSON value if empty', function () {

       // assert.deepStrictEqual(count([]), zero);
       // assert.deepStrictEqual(count({}, true), zero);

 //   });

//});


