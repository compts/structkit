const curryArg = require("../core/curryArg");
const {zero, one, two} = require("../core/defaultValue");

/*
 * Const each = require('./each');
 * Const range = require('./range');
 */

const first = require('./first');
const convertValue = require("../core/convertValue");

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

    const getMatch = value.match(/\b([a-z]){1}:([0-9]+)\b/g);

    if (getMatch !== null) {

        const splitValue = getMatch[zero].split(":");

        if (splitValue[zero] === "s") {

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

            /*
             *  Console.log(splitClose, ":+:", convertValue(splitValue[one]));
             *  Const argVal = {};
             */

            //  Each(range(convertValue(splitValue[one]) - one, zero), function(eValue, eKey) {

            //   });


        }

    }

    return null;


}

/**
 * Create a serialize data if you are coming to php
 *
 * @since 1.4.874
 * @category Collection
 * @param {any} value Arugment that you want to convert to serialize string
 * @returns {string} Returns number for subtracted value
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
module.exports=pUnSerialize;

