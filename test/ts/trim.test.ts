import {trim} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';


describe('TS: trim method', function () {

    it('trim the string', function () {

        assert.deepStrictEqual(trim(" The fish is goad   with Goat-1ss "), 'The fish is goad   with Goat-1ss');

    });

    it('trim the string and remove specific value in string', function () {
    
            assert.deepStrictEqual(trim(" The fish is goad   with Goat-1ss ", "ss"), 'The fish is goad   with Goat-1');
    
        });
    
        it('trim the string and remove specific value in regexp', function () {
    
            assert.deepStrictEqual(trim(" The fish is goad   with Goat-1ss ", /(ss)/g), 'The fish is goad   with Goat-1');
    
        });

    it('check expected type', function () {

        expectType<string>(trim(" The fish is goad   with Goat-1ss "));

    });

});
