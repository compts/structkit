
import {calculate} from "../../dist/esm/node.esm.mjs";
import assert from 'assert';
import {expectType} from 'tsd';

const zero = 0;
const twoPercent = 0.02;
const one =1;
const two =2;
const three = 3;
const four = 4;
const six = 6;
const eight = 8;
const seventyOne = 71;
const twentOne = 21;
const k38 = 38416;
const ninety = 90;

describe('TS: calculate method', function () {

    it('check calculate formula text', function () {

        assert.deepStrictEqual(calculate("1+1"), two);

    });

    it('check calculate formula text with specific variable', function () {

        assert.deepStrictEqual(calculate("s+s2", {
            "s": one,
            "s2": one
        }), two);

    });

    it('check calculate formula text in open and close parenthesis', function () {

        assert.deepStrictEqual(calculate("(s+s2)*s", {
            "s": one,
            "s2": one
        }), two);

    });

    it('check calculate formula basic algebraic expression', function () {

        assert.deepStrictEqual(calculate("2s2", {
            "s2": two
        }), four);

    });

    it('check expected type', async function () {


        expectType<number>(calculate("1+1"));
  
      });

    it('check calculate formula text in two or more operation', function () {

        assert.deepStrictEqual(calculate("s2-s/s", {
            "s": one,
            "s2": two
        }), one);
    });
    it('check calculate formula 2 algebraic expression', function () {

        assert.deepStrictEqual(calculate("4x1+5y", {
            "x1": 4,
            "y": 11
        }), seventyOne);

    });

    it('check calculate formula text in power', function () {

        assert.deepStrictEqual(calculate("s2^s", {
            "s": two,
            "s2": two
        }), four);

    });

    it('check calculate formula text in root', function () {

        assert.deepStrictEqual(calculate("√s2", {
            "s2": four
        }), two);

    }); 

    it('check calculate formula text in root 3', function () {

        assert.deepStrictEqual(calculate("3√s2", {
            "s2": eight
        }), two);

    });

    it('check calculate formula text in percent', function () {

        assert.deepStrictEqual(calculate("s2%", {
            "s2": two
        }), twoPercent);

    });

    it('check calculate formula text in factorial 3!', function () {

        assert.deepStrictEqual(calculate("s2!", {
            "s2": three
        }), six);

    });

    it('it check calculate formula text in factorial 1!', function () {

        assert.deepStrictEqual(calculate("s!", {
            "s": one
        }), one);

    });

    it('check calculate formula text in factorial', function () {

        assert.deepStrictEqual(calculate("s2!+s!", {
            "s": one,
            "s2": two
        }), three);

    });

    it('check calculate formula if first arg negative', function () {

        assert.deepStrictEqual(calculate("-1+1"), zero);

    });

    it('check calculate formula if first arg negative in passing value w/ space', function () {

        assert.deepStrictEqual(calculate("-s+ s", {
            "s": one
        }), zero);

    });
    it('check calculate formula if first arg negative in passing value', function () {

        assert.deepStrictEqual(calculate("-s2+s", {
            "s": one,
            "s2": one
        }), zero);

    });

    it('check calculate formula if arg negative', function () {

        assert.deepStrictEqual(calculate("-1+-1"), -two);

    });

    it('check calculate formula if arg negative in passing value', function () {

        assert.deepStrictEqual(calculate("-s2-s", {
            "s": one,
            "s2": one
        }), -two);

    });

    it('check calculate formula if first arg percent', function () {

        assert.deepStrictEqual(calculate("1.1%*100").toFixed(two), "1.10");

    });

    it('check calculate formula MDAS', function () {

        assert.deepStrictEqual(calculate("12+2*4+1"), twentOne);

    });

    it('check calculate formula MDAS 2', function () {
    
        assert.deepStrictEqual(calculate("12+2+4+3"), twentOne);
    
    });

    it('check calculate formula MDAS 3', function () {

        assert.deepStrictEqual(calculate("(12+2)^4"), k38);

    });

    it('check calculate formula open/close parenthesis', function () {

        assert.deepStrictEqual(calculate("(2)(2)"), four);

    });


    it('check calculate formula percentage', function () {

        assert.deepStrictEqual(calculate("100-10%"), ninety);

    });
});
