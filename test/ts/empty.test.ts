import {empty} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';
const three =3;
const two =2;
const one =1;

describe('TS: empty method', function () {


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

    it('return empty string', function () {

        assert.deepStrictEqual(
            empty("Hello world"),
            ""
        );

    });

    it('return empty number', function () {

        const zero = 0;

        assert.deepStrictEqual(
            empty(one),
            zero
        );

    });

    it('return empty Uint16Array', function () {


        assert.deepStrictEqual(
            empty(new Uint16Array([
                one,
                two
            ])),
            new Uint16Array([])
        );

    });

    it('return empty uint8Array', function () {


        assert.deepStrictEqual(
            empty(new Uint8Array([
                one,
                two
            ])),
            new Uint8Array([])
        );

    });

    it('return empty json', function () {

        assert.deepStrictEqual(
            empty({"ones": one}),
            {}
        );

    });

    it('return null if arg is null', function () {

        assert.deepStrictEqual(
            empty(null),
            null
        );
    });    
    it('check expected type', function () {
       
        expectType<any>(empty({"ones": one}));
  
    });

});


