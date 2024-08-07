const {like} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one=1;

describe('CJS: like method', function () {

    it('check if value exist', function () {


        assert.deepStrictEqual(
            like({"s1": one,
                "s2": "as"}, one),
            {"s1": one,
                "s2": "as"}
        );

        assert.deepStrictEqual(
            like([
                {"s1": one,
                    "s2": "as"}
            ], one),
            [
                {"s1": one,
                    "s2": "as"}
            ]
        );

        assert.deepStrictEqual(
            like([
                {"s1": one,
                    "s2": "as"}
            ], {"s2": /(as)/g}),
            [
                {"s1": one,
                    "s2": "as"}
            ]
        );
        assert.deepStrictEqual(
            like([
                {"s1": one,
                    "s2": "as"}
            ], {"s2": /(ass)/g}),
            []
        );


    });

});
