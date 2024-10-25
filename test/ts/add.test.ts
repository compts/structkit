import {add} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const one:number =1;
const two = 2;

describe('TS: add method', function () {

    it('check if add result', function () {

        assert.deepStrictEqual(add(one, one), two);

    });
    it('check if add result using curry', function () {

        assert.deepStrictEqual(add(one)(one), two);

    });

    it('check expected type', function () {

        expectType<number>(add(one, one));

    });
});
