import {remove} from "../../dist/esm/node.esm";
const assert = require("assert");

const three =3;
const two =2;
const one =1;
const zero =0;

describe('ESM: remove method', function () {


    it('check Array list', function () {

        assert.deepStrictEqual(remove(

            [
                one,
                two,
                three
            ],
            zero
        ), [
            two,
            three
        ]);

    });

    it('check Json', function () {

        assert.deepStrictEqual(remove(

            {
                "ones": one,
                "threes": three,
                "twos": two
            },
            {
                "twos": two
            }
        ), {
            "ones": one,
            "threes": three
        });

    });

});


