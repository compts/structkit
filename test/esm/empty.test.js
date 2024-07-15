import {empty} from "../../dist/esm/node.esm";
import assert from 'assert';

const three =3;
const two =2;
const one =1;

describe('ESM: empty method', function () {


    it('return empty array', function () {

        assert.deepStrictEqual(
            empty([
                one,
                two,
                three
            ]),
            []
        );

    });

    it('return empty json', function () {

        assert.deepStrictEqual(
            empty({"ones": one}),
            {}
        );

    });

});


