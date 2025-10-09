
import {like} from "../../dist/esm/node.esm";
import assert from 'assert';


const one=1;

describe('ESM: like method', function () {

    it('check if value exist', function () {


        assert.deepStrictEqual(
            like(one, {"s1": one,
                "s2": "as"}),
            {"s1": one,
                "s2": "as"}
        );

        assert.deepStrictEqual(
            like(one, [
                {"s1": one,
                    "s2": "as"}
            ]),
            [
                {"s1": one,
                    "s2": "as"}
            ]
        );

        assert.deepStrictEqual(
            like({"s2": /(as)/g}, [
                {"s1": one,
                    "s2": "as"}
            ]),
            [
                {"s1": one,
                    "s2": "as"}
            ]
        );
        assert.deepStrictEqual(
            like({"s2": /(ass)/g}, [
                {"s1": one,
                    "s2": "as"}
            ]),
            []
        );


    });


});
