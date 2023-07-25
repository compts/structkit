
import {arraySum} from "../../dist/esm/node.esm";
import assert from 'assert';


const one =1,
    three=3.000,
    two =2;


describe('TS: arraySum method', function () {

    it('check arraySum array sum', function () {

        assert.deepStrictEqual(arraySum([
            one,
            two
        ]), three.toFixed(three));

    });

});
