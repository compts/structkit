
import {clone} from "../../dist/esm/node.esm";
import assert from 'assert';


const one =1;


describe('ESM: clone method', function () {

    it('check clone data', function () {

        assert.deepStrictEqual(clone([{"Asd": one}]), [{"Asd": one}]);

    });

});
