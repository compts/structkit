
import {pickData} from "../../dist/esm/node.esm.mjs";
import assert from 'assert';
import {expectType} from 'tsd';

const one =1;


describe('TS: pickData method', function () {

        it('check pickData array', function () {
    
            assert.deepStrictEqual(pickData("Asd", [{"Asd": one}]), [one]);
    
        });
    
        it('check if value exist', function () {
    
            assert.deepStrictEqual(
                pickData("b:asd", {"a": 1,
                    "b": {"asd": {"aa": "bb"}}}),
                {"asd": {"aa": "bb"}}
            );
    
        });
    
        it('check if value exist in array', function () {
    
            assert.deepStrictEqual(
                pickData("b:asd", [
                    {"a": 1,
                        "b": {"asd": {"aa": "bb"}}},
                    {"b": {"asd": {"aa": "cc"}}}
                ]),
                [
                    {"aa": "bb"},
                    {"aa": "cc"}
                ]
            );
    
        });
    
        it('check if value exist in array if key is not found', function () {
    
    
            assert.deepStrictEqual(
                pickData("b:asds", [
                    {"a": 1,
                        "b": {"asd": {"aa": "bb"}}}
                ]),
                []
            );
    
        });
    it('check expected type', function () {
       
        expectType<any[number]>(pickData("Asd", [{"Asd": one}]));
  
      });
});
