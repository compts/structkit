import {selectInData} from "../../dist/esm/node.esm.mjs";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: selectInData method', function () {

    it('check if repetion is correct', function () {

        assert.deepStrictEqual(selectInData({"ss": "s"}, {"s": 2}), {
            'ss': 2
        });

    });

    it('check expected type', function () {
       
        expectType<any>(selectInData({"s": 2}, {"ss": "s"}));
    });

});
