
import {mapGetData} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

const one =1;


describe('TS: mapGetData method', function () {

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
    it('check expected type', function () {
       
        expectType<any[number]>(mapGetData("Asd", [{"Asd": one}]));
  
      });
});
