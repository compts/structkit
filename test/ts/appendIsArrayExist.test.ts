
import {appendIsArrayExist} from "../../dist/esm/node.esm";
import assert from 'assert';


const one =1,
    two =2;


describe('TS: arraySum method', function () {

    it('check arraySum array sum', function () {

        assert.deepStrictEqual(appendIsArrayExist([one], [two]), [
            one,
            two
        ]);

    });

});
