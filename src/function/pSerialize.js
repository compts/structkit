const curryArg = require("../core/curryArg");
const {one, zero} = require("../variable/defaultValue");
const toArray = require('./toArray');
const count = require('./count');
const getKey = require('./getKey');
const getValue = require('./getValue');
const map = require('./map');
const getTypeof = require('./getTypeof');
const indexOfExist = require('./indexOfExist');
const range = require('./range');


/**
 * Create a serialize data if you are coming to php
 *
 * @since 1.4.874
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

        if (indexOfExist([
            "array",
            "json",
            "object",
            "set",
            "map"
        ], dataType)) {

            const getKeyVal = toArray(getKey(rawValue));
            const getValueVal = toArray(getValue(rawValue));


            const mapData = map(range(count(rawValue) - one, zero), function (mValue, kValue) {

                const refMapKey = getKeyVal[kValue];
                const refMapValue = getValueVal[kValue];

                return parseTypeVal(getTypeof(refMapKey), refMapKey) +""+parseTypeVal(getTypeof(refMapValue), refMapValue);

            });

            return "a:"+count(mapData)+":{"+mapData.join("")+"}";

        }

        return parseTypeVal(dataType, value);

    }, [value], one);

}

/**
 * Convert the value to its type in serialize
 *
 * @since 1.4.874
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

    if (indexOfExist([
        "array",
        "json",
        "object",
        "set",
        "map"
    ], typeValue)) {

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

module.exports=pSerialize;

