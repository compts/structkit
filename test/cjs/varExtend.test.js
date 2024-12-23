const {varExtend} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");


describe('CJS: varExtend method', function () {

    it('check if value exist', function () {


        assert.deepStrictEqual(varExtend({"s1": 1}, {"s1": 2}), {"s1": 2});


    });

    it('Add new default value if key in objectValue not exist', function () {

        assert.deepStrictEqual(varExtend({"s1": 1,
            "yahoo": "true"}, {"s1": 2}), {"s1": 2,
            // eslint-disable-next-line indent-legacy
            "yahoo": true});

    });


    it('Add new default value if key in objectValue to replace by value object', function () {

        assert.deepStrictEqual(varExtend(
            {"s1": 1,
                "yahoo": {
                    "s1": 2,
                    "s2": {"s1": 2}
                }},
            {"s1": 2,
                "yahoo": {
                    "s1": 3,
                    "s2": {"s1": 3}
                }}
        ), {"s1": 2,
            "yahoo": {
                "s1": 3,
                "s2": {
                    "s1": 3
                }
            }});

    });

});


