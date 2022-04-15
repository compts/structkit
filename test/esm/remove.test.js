import {remove} from "../../dist/esm/node.esm";
const assert = require("assert");

const three =3;
const two =2;
const one =1;

describe('CJS: remove method', function () {


    it('check Array list', function () {

        assert.deepStrictEqual(remove(

            [
                one,
                two,
                three
            ],
            one
        ), [
            two,
            three
        ]);

    });

});


