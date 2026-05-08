
import {mapGetData} from "../../dist/esm/node.esm.mjs";
import assert from 'assert';


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
