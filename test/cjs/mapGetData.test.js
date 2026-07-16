
const {mapGetData} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");


const one =1;


describe('CJS: mapGetData method', function () {

    it('check mapGetData array', function () {

        assert.deepStrictEqual(mapGetData("Asd", [{"Asd": one}]), [one]);

    });

    it('check if value exist', function () {

        assert.deepStrictEqual(
            mapGetData("b:asd", {"a": 1,
                "b": {"asd": {"aa": "bb"}}}),
            [{"aa": 'bb'}]
        );

    });

});
