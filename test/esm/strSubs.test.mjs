import {strSubs} from "../../dist/esm/node.esm.js";
import assert from 'assert';

const two=2;
const one=1;

describe('ESM: strSubs method', function () {

    it('get substr from 1', function () {

        assert.deepStrictEqual(strSubs("fish", one), 'ish');

    });

    it('get substr from 1 to 2', function () {

        assert.deepStrictEqual(strSubs("fish", one, two), 'i');

    });


});

