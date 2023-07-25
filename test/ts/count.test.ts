//const {count} = require("../../dist/ts/node.esm.d");
//const assert = require("assert");
//import {appendIsArrayExist} from "../../dist/esm/node.esm";
import {count} from "../../dist/ts/node.esm.d";
//import assert from 'assert';
import {expectType, expectAssignable} from 'tsd';

const one:number =1;
const zero:number =0;

describe('TS: count method', function () {

    it('check if value exist', function () {


      //  assert.deepStrictEqual(count({"s1": 1}), one);
      //  assert.deepStrictEqual(count([one]), one);
      //expectType<number>(count({"s1": 1}));
      expectType<number>(count([one, zero]));

    });

    it('check JSON value if empty', function () {

       // assert.deepStrictEqual(count([]), zero);
       // assert.deepStrictEqual(count({}, true), zero);

   });

});

