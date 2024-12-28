import {pipe, add} from "../../dist/esm/node.esm";
import assert from 'assert';
const one =1;
const two = 2;
const eleven = 11;
const total = 122;

describe('ESM: pipe method', function () {

    it('check if pipe function', function () {

        assert.strictEqual(pipe(Math.pow, add(one))(eleven, two), total);

    });

});
