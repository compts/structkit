(function(global){
global._stk={}

_stk.append=append

_stk.appendIsArrayExist=appendIsArrayExist

_stk.arrayConcat=arrayConcat

_stk.arrayRepeat=arrayRepeat

_stk.arraySlice=arraySlice

_stk.arrayToObjectByDataFormat=arrayToObjectByDataFormat

_stk.clone=clone

_stk.asyncReplace=asyncReplace

_stk.count=count

_stk.arraySum=arraySum

_stk.each=each

_stk.filter=filter

_stk.first=first

_stk.getData=getData

_stk.getEmptyVariable=getEmptyVariable

_stk.getKey=getKey

_stk.getTypeof=getTypeof

_stk.getUniq=getUniq

_stk.getValue=getValue

_stk.groupBy=groupBy

_stk.has=has

_stk.ifUndefined=ifUndefined

_stk.indexOf=indexOf

_stk.indexOfExist=indexOfExist

_stk.indexOfNotExist=indexOfNotExist

_stk.isEmpty=isEmpty

_stk.insert=insert

_stk.isExact=isExact

_stk.isExactbyRegExp=isExactbyRegExp

_stk.isJson=isJson

_stk.jsonToArray=jsonToArray

_stk.last=last

_stk.lastIndexOf=lastIndexOf

_stk.like=like

_stk.limit=limit

_stk.map=map

_stk.numberFormat=numberFormat

_stk.onSequence=onSequence

_stk.onDelay=onDelay

_stk.onWait=onWait

_stk.parseString=parseString

_stk.parseJson=parseJson

_stk.range=range

_stk.random=random

_stk.regexCountGroup=regexCountGroup

_stk.remove=remove

_stk.repeat=repeat

_stk.roundDecimal=roundDecimal

_stk.shuffle=shuffle

_stk.sort=sort

_stk.stringCamelCase=stringCamelCase

_stk.stringCapitalize=stringCapitalize

_stk.stringEscape=stringEscape

_stk.stringKebabCase=stringKebabCase

_stk.stringLowerCase=stringLowerCase

_stk.stringSnakeCase=stringSnakeCase

_stk.stringSubs=stringSubs

_stk.stringUnEscape=stringUnEscape

_stk.stringUpperCase=stringUpperCase

_stk.templateValue=templateValue

_stk.toArray=toArray

_stk.toDouble=toDouble

_stk.toInteger=toInteger

_stk.toString=toString

_stk.unique=unique

_stk.varExtend=varExtend

_stk.where=where


/**
 *  Get the type if arguments
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isArguments()
 *=> true
 */
function isArguments (value) {

    return getTypeof(value) === "arguments";

}


/**
 *  Get the type if array
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isArray([])
 *=> true
 */
function isArray (value) {

    return getTypeof(value) === "array";

}


/**
 *  Get the type if boolean
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isBoolean(true)
 *=> true
 */
function isBoolean (value) {

    return getTypeof(value) === "boolean";

}


/**
 *  Get the type if date
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isDate(new Date())
 *=> true
 */
function isDate (value) {

    return getTypeof(value) === "date";

}


/**
 *  Get the type if error
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isError(new Error())
 *=> true
 */
function isError (value) {

    return getTypeof(value) === "error";

}


/**
 *  Get the type if function
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isFunction()
 *=> true
 */
function isFunction (value) {

    return getTypeof(value) === "function";

}


/**
 *  Get the type if null
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isNull(null)
 *=> true
 */
function isNull (value) {

    return getTypeof(value) === "null";

}


/**
 *  Get the type if number
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isNumber(1)
 *=> true
 */
function isNumber (value) {

    return getTypeof(value) === "number";

}


/**
 *  Get the type if object
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isObject({})
 *=> true
 */
function isObject (value) {

    return getTypeof(value) === "object";

}


/**
 *  Get the type if promise
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isPromise()
 *=> true
 */
function isPromise (value) {

    return getTypeof(value) === "promise";

}


/**
 *  Get the type if regexp
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isRegexp(/(1)/g)
 *=> true
 */
function isRegexp (value) {

    return getTypeof(value) === "regexp";

}


/**
 *  Get the type if string
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isString('string')
 *=> true
 */
function isString (value) {

    return getTypeof(value) === "string";

}


/**
 *  Get the type if undefined
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isUndefined(undefined)
 *=> true
 */
function isUndefined (value) {

    return getTypeof(value) === "undefined";

}


_stk.isArguments=isArguments;
_stk.isArray=isArray;
_stk.isBoolean=isBoolean;
_stk.isDate=isDate;
_stk.isError=isError;
_stk.isFunction=isFunction;
_stk.isNull=isNull;
_stk.isNumber=isNumber;
_stk.isObject=isObject;
_stk.isPromise=isPromise;
_stk.isRegexp=isRegexp;
_stk.isString=isString;
_stk.isUndefined=isUndefined;
_stk.whereNot=whereNot

})(typeof window !== "undefined" ? window : this);