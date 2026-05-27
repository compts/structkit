/* eslint-disable no-process-exit */
/* eslint-disable guard-for-in */
/* eslint-disable no-magic-numbers */
import {globSync, readFileSync} from 'node:fs';
import {createContext, runInContext} from 'node:vm';


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
function main (call_file) {

    const files = globSync('./src/function/*.js');
    const readFuncs = files.map(function (file) {

        const read_func = file.replace('src/function/', '').replace('.js', '');

        return read_func;

    });

    // Read the IIFE file
    const iifeCode = readFileSync(call_file, 'utf8');

    // Create a context to simulate browser environment
    const context = createContext({
        console

    });

    try {

        // Execute the IIFE code in the VM context
        runInContext(iifeCode, context);

        // Validate functions exist in the _stk global namespace
        const globalScope = context;
        let missingCount = 0;

        // Check if _stk namespace exists
        if (!globalScope._stk) {

            console.error("Error: _stk global namespace not found in IIFE build");
            process.exit(1);

        }

        for (const key in readFuncs) {

            const value = readFuncs[key];

            // Check if function exists in the _stk namespace
            if (typeof globalScope._stk[value] !== 'function' && value !== "__") {

                console.log(value, ":error this function is not available in _stk namespace");
                missingCount+=1;

            }

        }

        if (missingCount > 0) {

            console.log(`\n✗ ${missingCount} function(s) missing from IIFE build`);
            process.exit(1);

        }

        console.log("✓ All functions from src/function/ are present and executable in _stk namespace");

    } catch (err) {

        console.error("Error executing IIFE build:", err.message);
        process.exit(1);

    }

}


main('./dist/web/structkit-full.iife.js');
