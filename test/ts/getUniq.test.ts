import {getUniq, getTypeof} from "../../dist/esm/node.esm";
import assert from 'assert';

// JavaScript


describe('getUniq', function () {

    it('should return a string', function () {

        const result = getUniq();

        assert.deepStrictEqual(getTypeof(result), 'string');

    });


    it('should return an empty string for non-default option', function () {

        const result = getUniq("custom");

        assert.deepStrictEqual(result, '');

    });

});

describe('TS: fromPairs method', function () {
    
    it('check expected type', function () {
        
        const result = getUniq();

        assert.deepStrictEqual(getTypeof(result), 'string');

    });

});
