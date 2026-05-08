import curryArg from '../core/curryArg.mjs';

import {one, zero} from '../variable/defaultValue.mjs';

import toArray from './toArray.mjs';

import count from './count.mjs';

import getKey from './getKey.mjs';

import getValue from './getValue.mjs';

import map from './map.mjs';

import getTypeof from './getTypeof.mjs';

import indexOfExist from './indexOfExist.mjs';

import range from './range.mjs';

/**
 * Create a serialize data if you are coming to php
 *
 * @since 1.4.9
 * @category Collection
 * @param {any} value Arugment that you want to convert to serialize string
 * @returns {string} Returns number for subtracted value
 * @example
 *
 * pSerialize(["22s"])
 * // => 'a:1:{i:0;s:3:"22s";}'
 */
function pSerialize (value) {

    return curryArg(function (rawValue) {

        const dataType = getTypeof(rawValue);

        if (indexOfExist(dataType, [
            "array",
            "json",
            "object",
            "set",
            "map"
        ])) {

            const getKeyVal = toArray(getKey(rawValue));
            const getValueVal = toArray(getValue(rawValue));

            const mapData = map(function (mValue, kValue) {

                const refMapKey = getKeyVal[kValue];
                const refMapValue = getValueVal[kValue];

                return parseTypeVal(getTypeof(refMapKey), refMapKey) +""+parseTypeVal(getTypeof(refMapValue), refMapValue);

            }, range(count(rawValue) - one, zero));

            return "a:"+count(mapData)+":{"+mapData.join("")+"}";

        }

        return parseTypeVal(dataType, value);

    }, [value], one);

}

/**
 * Convert the value to its type in serialize
 *
 * @since 1.4.9
 * @category Collection
 * @param {any} typeValue Arugment that you want to convert to serialize string
 * @param {any} value Arugment that you want to convert to serialize string
 * @returns {any} Returns number for subtracted value
 * @example
 *
 * parseTypeVal ("string", "value")
 * // => 0
 */
function parseTypeVal (typeValue, value) {

    if (indexOfExist(typeValue, [
        "array",
        "json",
        "object",
        "set",
        "map"
    ])) {

        return pSerialize(value);

    }

    if (typeValue === "string") {

        return "s:"+count(value)+":\""+value+"\";";

    }
    if (typeValue === "function") {

        return "O:"+count(value.name)+":\""+value.name+"\":0:{};";

    }
    if (typeValue === "number") {

        return "i:"+value+";";

    }

    return "N;";

}

export default pSerialize;

