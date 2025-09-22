import curryArg from '../core/curryArg.js';

import {zero, one, two} from '../variable/defaultValue.js';

import each from './each.js';

import range from './range.js';

import getValue from './getValue.js';

import toArray from './toArray.js';

import first from './first.js';

import arraySlice from './arraySlice.js';

import convertValue from '../core/convertValue.js';

/**
 * Create a serialize data if you are coming to php
 *
 * @since 1.4.874
 * @category Collection
 * @param {any} value Arugment that you want to convert to serialize string
 * @returns {any} Returns number for subtracted value
 * @example
 *
 * pUnSerialize('s:6:"Violet";')
 * // => 'Violet'
 */
function pUnSerialize (value) {

    return curryArg(function (rawValue) {

        return parseTypeValObj(rawValue);

    }, [value], one);

}

/**
 * Convert the value to its type in serialize
 *
 * @since 1.4.874
 * @category Collection
 * @param {any} value Arugment that you want to convert to serialize string
 * @returns {any} Returns number for subtracted value
 * @example
 *
 * parseTypeValObj ( 'a:1:{i:0;s:3:"22s";};')
 * // => ["22s"]
 */
function getObjectValue (value) {

    const splitOpen = value.split("{");
    const splitClose = arraySlice(splitOpen, one).join("{")
        .replace(/\}[;]{1,}$/g, "");

    return splitClose;

}

/**
 * Convert the value to its type in serialize
 *
 * @since 1.4.874
 * @category Collection
 * @param {any} value Arugment that you want to convert to serialize string
 * @returns {any} Returns number for subtracted value
 * @example
 *
 * getObjectType ( 'a:1:{i:0;s:3:"22s";};')
 * // => ["22s"]
 */
function getObjectType (value) {

    const getMatch = value.match(/\b([a-z]){1}:([0-9]+)\b/g);

    if (getMatch !== null) {

        return {
            "is_valid": true,
            "matches": getMatch
        };

    }

    return {
        "is_valid": false,
        "matches": []
    };

}

/**
 * Convert the value to its type in serialize
 *
 * @since 1.4.874
 * @category Collection
 * @param {any} value Arugment that you want to convert to serialize string
 * @returns {any} Returns number for subtracted value
 * @example
 *
 * parseTypeValObj ( 'a:1:{i:0;s:3:"22s";};')
 * // => ["22s"]
 */
function parseTypeValObj (value) {

    if (value === "N;") {

        return null;

    }

    const getMatch = getObjectType(value);

    if (getMatch.is_valid) {

        const splitValue = getMatch.matches[zero].split(":");

        if (splitValue[zero] === "s") {

            const stringSplit = value.split(";");
            const slitGetStr = first(stringSplit).split(":");

            return slitGetStr[two].replace(/^"/g, "").replace(/"$/g, "");

        }

        if (splitValue[zero] === "O") {

            const stringSplit = value.split(";");
            const slitGetStr = first(stringSplit).split(":");

            return slitGetStr[two].replace(/^"/g, "").replace(/"$/g, "");

        }

        if (splitValue[zero] === "i") {

            return convertValue(splitValue[one]);

        }

        if (splitValue[zero] === "a") {

            /*
             *  Const splitOpen = value.split("{");
             *  Const splitClose = splitOpen[one].replace(/\};$/g, "");
             */

            let objValue = getObjectValue(value).split(";");
            const argVal = {};
            // This will help as check if the deep type was in array or json
            let isArrayValue = true;
            let counterArrayValue =zero;

            each(range(convertValue(splitValue[one]) - one, zero), function () {

                const refobjKey = parseTypeValObj(objValue[zero]+";");

                if (isArrayValue && refobjKey !== counterArrayValue) {

                    isArrayValue = false;

                }
                const refobjVal = parseTypeValObj(arraySlice(objValue, one).join(";")+";");

                argVal[refobjKey] = refobjVal;

                objValue = arraySlice(objValue, two);
                counterArrayValue += one;

            });

            return isArrayValue
                ?toArray(getValue(argVal))
                :argVal;

        }

    }

    return null;

}

export default pUnSerialize;

