
import {arraySum} from "../../dist/esm/node.esm";
import assert from 'assert';


const one =1,
    three=3,
    two =2;


describe('ESM: arraySum method', function () {

    it('check arraySum array sum', function () {

        assert.deepStrictEqual(arraySum([
            one,
            two
        ]), three);

    });

});
