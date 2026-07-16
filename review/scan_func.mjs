/* eslint-disable no-process-exit */
/* eslint-disable guard-for-in */
/* eslint-disable no-magic-numbers */
import {globSync, readFile} from 'node:fs';

import {objectCallTypeAll} from '../dist/esm/src/variable/types.mjs';
import {strCapitalize} from '../dist/esm/node.esm.mjs';


/**
 * Create a separate `has` inside core folder
 *
 * @since 1.4.8
 * @category Boolean
 * @param {any} call_file Either JSON or Array
 * @param {any=} type For key or index of data
 * @returns {null} Returns true or false.
 * @example
 *
 * _has({'as':1}, 'as')
 * // => true
 */
function main (call_file, type="cjs") {


    const files = globSync('./src/function/*.js');
    const readFuncs = files.map(function (file) {

        const read_func = file.replace('src/function/', '').replace('.js', '');


        return read_func;

    });

    readFile(call_file, 'utf8', (err, data) => {

        if (!err) {

            // Console.log(objectCallTypeAll,":data");
            for (const key in objectCallTypeAll) {

                if (type==="cjs") {

                    const value = objectCallTypeAll[key];

                    const nameStr = 'is'+strCapitalize(value);
                    const functNameStr = "_stk."+nameStr+"="+nameStr+";";


                    // Console.log(value,functNameStr, ":value",new RegExp(functNameStr,"g").test(data));
                    if (new RegExp(functNameStr, "g").test(data) === false) {

                        console.log(value, ":error this function is not exported", type);
                        process.exit(1);


                    }

                }

                if (type==="mjs") {

                    const value = objectCallTypeAll[key];

                    const nameStr = 'is'+strCapitalize(value);
                    const functNameStr = "export const "+nameStr;


                    // Console.log(value,functNameStr, ":value",new RegExp(functNameStr,"g").test(data));
                    if (new RegExp(functNameStr, "g").test(data) === false) {

                        console.log(value, ":error this function is not exported", type, functNameStr);
                        process.exit(1);


                    }

                }


            }

            // ----

            for (const key in readFuncs) {

                if (type==="cjs") {

                    const value = readFuncs[key];

                    const functNameStr = "_stk."+value+"="+value+";";


                    // Console.log(value,functNameStr, ":value",new RegExp(functNameStr,"g").test(data));
                    if (new RegExp(functNameStr, "g").test(data) === false) {

                        console.log(value, ":error this function is not exported");
                        process.exit(1);

                    }

                }

                if (type==="mjs") {

                    const value = readFuncs[key];

                    const functNameStr = "export const "+value;


                    // Console.log(value,functNameStr, ":value",new RegExp(functNameStr,"g").test(data));
                    if (new RegExp(functNameStr, "g").test(data) === false) {

                        console.log(value, ":error this function is not exported", type, functNameStr);
                        process.exit(1);

                    }

                }


            }

        }

    });


}


main('./dist/cjs/structkit-full.cjs.js');
main('./dist/web/structkit-full.iife.js');
main('./dist/esm/node.esm.mjs', "mjs");
