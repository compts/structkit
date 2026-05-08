import {reduce} from "../../dist/esm/node.esm.js";
import assert from 'assert';


const one =1,
    three=3,
    two =2,
    zero =0;


describe('ESM: reduce method', function () {

    it('check reduce array sum', function () {

        assert.deepStrictEqual(reduce(function (total, value) {

            return total+value;

        }, zero, [
            one,
            two
        ]), three);

    });


});
