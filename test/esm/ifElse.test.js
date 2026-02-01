import {ifElse, __} from "../../dist/esm/node.esm";
import assert from 'assert';


const one =1;
const two = 2;

const func1 = ifElse(__, function (params, ss) {

    return ss;

}, function (params, ss, s2) {

    return s2;

});


describe('ESM: ifElse method', function () {

    it('check placeholder condition in true', function () {

        assert.deepStrictEqual(func1(true, one, two), one);

    });

    it('check placeholder condition in false', function () {

        assert.deepStrictEqual(func1(false, one, two), two);

    });

});
