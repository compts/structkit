const {getUniq, getTypeof} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

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
