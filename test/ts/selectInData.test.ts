import {selectInData} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: selectInData method', function () {

    it('check if repetion is correct', function () {

        assert.deepStrictEqual(selectInData({"s": 2}, {"ss": "s"}), {
            'ss': 2
        });

    });

    it('check expected type', function () {
       
        expectType<any>(selectInData({"s": 2}, {"ss": "s"}));
    });

});
