(function(global){global._stk={};var __p = "@argument/place";

__=__p



_stk.__=__;
var negOne = -1;var zero = 0;var one = 1;
var two = 2;
var three = 3;
var ten = 10;
var oneHundred = 100;


function _has (value, key) {

    if (typeof key === "undefined") {

        return value !== null && typeof value !== "undefined";

    }

    if ([
        "[object Set]",
        "[object Map]"
    ].indexOf(Object.prototype.toString.call(value)) >=zero) {

        return value.has(key);

    }

    return Object.prototype.hasOwnProperty.call(value, key);

}


function curryArg (fn, args, NoDefaultArgs) {

    var RefNoDefaultArgs = NoDefaultArgs || zero;
    var placholderCounter = zero;

    if (RefNoDefaultArgs > args.length - argumentUndefinedCounter(args)) {

        for (var kk=zero; kk<RefNoDefaultArgs;) {

            if (_has(args, kk)) {

                if (args[kk] === __) {

                    placholderCounter += one;

                }
                if (typeof args[kk] === "undefined") {

                    placholderCounter += one;

                }

            }
            kk += one;

        }

    } else {

        for (var arg in args) {

            if (_has(args, arg)) {

                if (args[arg] === __) {

                    placholderCounter +=one;

                }

            }

        }

    }

    if (placholderCounter === zero) {

        return fn.apply(this, args);

    }

    return function fnCall () {

    var argSub=arguments;

        var funcReturnType = false;

        if (NoDefaultArgs-(argSub.length- argumentUndefinedCounter(argSub, false)) > args.length - argumentUndefinedCounter(argSub)) {

            return fnCall;

        }

        var rawArgument = [];
        var holderCounter = zero;

        for (var arg in args) {

            if (_has(args, arg)) {

                if (args[arg] === __) {

                    rawArgument.push(argSub[holderCounter]);
                    holderCounter+=one;

                } else if (typeof args[arg] === "function") {

                    if (rawArgument.length === zero) {

                        rawArgument.push(args[arg]);

                    } else {

                        var getApply = args[arg].apply(this, argSub);

                        rawArgument.push(getApply);
                        if (typeof getApply === "function") {

                            if (getApply.name === fnCall.name && funcReturnType === false) {

                                funcReturnType = true;

                            }

                        }

                    }

                } else if (typeof args[arg] === "undefined") {

                    if (typeof argSub[holderCounter] !== "undefined") {

                        rawArgument.push(argSub[holderCounter]);
                        holderCounter+=one;

                    }

                } else {

                    rawArgument.push(args[arg]);

                }

            }

        }

        for (var arg in argSub) {

            if (_has(argSub, arg) && _has(argSub, holderCounter)) {

                if (argSub[holderCounter] === __) {

                    funcReturnType = true;

                }
                rawArgument.push(argSub[holderCounter]);
                holderCounter+=one;

            }

        }

        if (funcReturnType) {

            return fnCall;

        }

        return fn.apply(this, rawArgument);

    };

}


function argumentUndefinedCounter (args, isPlaceHolder) {

    var counter = zero;
    var isAllowPlachoder = isPlaceHolder || true;

    for (var arg in args) {

        if (_has(args, arg)) {

            var value = args[arg];

            if (typeof value === "undefined") {

                counter += one;

            } else {

                if (value === __ && isAllowPlachoder) {

                    counter += one;

                }

            }

        }

    }

    return counter;

}


function add (value1, value2) {

    return curryArg(function (aa, bb) {

        return Number(aa) + Number(bb);

    }, [
        value1,
        value2
    ], two);

}

_stk.add=add;
function has () {

    var args=arguments;    return curryArg(function (aa, bb) {

        return _has(aa, bb);

    }, args);

}

var objectCallType = {"[object Array]": "object",
    "[object Object]": "object",
    "[object String]": "string"};

var objectCallTypeAll = {"[object Arguments]": "arguments",
    "[object Array]": "array",
    "[object BigInt]": "bigInt",
    "[object Boolean]": "boolean",
    "[object Date]": "date",
    "[object Error]": "error",
    "[object Function]": "function",
    "[object Map]": "map",
    "[object Null]": "null",
    "[object Number]": "number",
    "[object Object]": "object",
    "[object Promise]": "promise",
    "[object RegExp]": "regexp",
    "[object Set]": "set",
    "[object String]": "string",
    "[object Uint16Array]": "uint16Array",
    "[object Uint32Array]": "uint32Array",
    "[object Uint8Array]": "uint8Array",
    "[object Undefined]": "undefined"};

var validTypeJson = {
    "array": {
        "end": "]",
        "isKey": false,
        "start": "["
    },
    "json": {
        "end": "}",
        "isKey": true,
        "start": "{"
    },
    "map": {
        "end": "}",
        "isKey": true,
        "start": "{"
    },
    "object": {
        "end": "}",
        "isKey": true,
        "start": "{"
    },
    "set": {
        "end": "]",
        "isKey": false,
        "start": "["
    }
};


function isJson (value, valueType) {

    var getValueType = Object.prototype.toString.call(value);

    if (has(objectCallType, getValueType) === false) {

        return false;

    }

    var getValueTypeRef = objectCallType[getValueType];

    if (has(valueType)) {

        getValueTypeRef = valueType;

    }

    if (getValueTypeRef === "string") {

        if (!(value.includes('[') || value.includes('{'))) {

            return false;

        }

        var stripValue=value.replace(/(&quot;)/gi, '"', value).replace(/(&nbsp;)/gi, ' ', value);

        return (/^[\],:{}\s]*$/).test(stripValue.replace(/\\(?:["\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
            .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/g, ']')
            .replace(/(?:^|:|,)(?:\s*\[)+/g, ''));

    }

    var isValid =true;

    try {

        return checkIfFunctionNotExistObject(value);

    } catch (err) {

        isValid = false;

    } finally {

        isValid = false;

    }

    return isValid;

}


function checkIfFunctionNotExistObject (obj) {

    var getValueType = Object.prototype.toString.call(obj);

    if (getValueType === "[object Function]") {

        throw new Error("Function must not exist");

    }

    var isValid = false;

    if (getValueType === "[object Object]") {

        isValid = true;

    }

    if (getValueType === "[object Array]") {

        if (obj.length === zero) {

            return true;

        }

        isValid = true;

    }
    if (isValid) {

        for (var key in obj) {

            if (has(obj, key)) {

                checkIfFunctionNotExistObject(obj[key]);

            }

        }

    }

    return true;

}


function getTypeofInternal (objectValue) {

    var objectType = Object.prototype.toString.call(objectValue);

    if (objectType === "[object Object]") {

        return isJson(objectValue, "object")
            ?"json"
            :"object";

    }

    if (has(objectCallTypeAll, objectType)) {

        return objectCallTypeAll[objectType];

    }

    return typeof objectValue;

}


function count (objectValue, json_is_empty_check) {

    var cnt=zero;
    var json_is_empty_check_default=json_is_empty_check||false;
    var get_json=getTypeofInternal(objectValue);

    if (has(objectValue) === false) {

        return zero;

    }

    if (get_json === "array") {

        return objectValue.length;

    } else if (get_json === "object" && has(objectValue, "style")&&has(objectValue, "nodeType")&&has(objectValue, "ownerDocument")) {

        for (var inc in objectValue) {

            if (!isNaN(inc)) {

                cnt += one;

            }

        }

    } else {

        var rawObjectValue = objectValue;

        if (get_json === "string") {

            rawObjectValue = rawObjectValue.split("");

        }

        each(rawObjectValue, function () {

            cnt += one;

        });

    }

    if (get_json === "json"&&json_is_empty_check_default === true) {

        var jsn_parse=objectValue;
        var cnts=zero;

        each(jsn_parse, function () {

            cnts += one;

        });

        return cnts;

    }

    return cnt;

}


function equal (value1, value2) {

    return curryArg(function (aa, bb) {

        if (getTypeofInternal(aa) !== getTypeofInternal(bb)) {

            return false;

        }

        if (getTypeofInternal(aa) === "json" && getTypeofInternal(bb) === "json") {

            return searchValueInJson(aa, bb);

        }

        if (getTypeofInternal(aa) === "array" && getTypeofInternal(bb) === "array") {

            return searchValueInJson(aa, bb);

        }

        return aa === bb;

    }, [
        value1,
        value2
    ], two);

}


function searchValueInJson (objectValue, searchValue) {

    var counter = zero;

    each(objectValue, function (value, key) {

        if (has(searchValue, key)) {

            if (getTypeofInternal(searchValue[key]) === "json" || getTypeofInternal(searchValue[key]) === "array") {

                if (searchValueInJson(searchValue[key], value)) {

                    counter += one;

                }

            } else {

                if (searchValue[key] === value) {

                    counter += one;

                }

            }

        }

    });

    return count(objectValue) === counter;

}


function getIndexOf (objectValue, value, start, end, isGetLast) {

    var referenceValue = negOne;

    if (getTypeofInternal(objectValue) === "array") {

        for (var inc=start; inc<end;) {

            var isValidMatch = false;

            if (getTypeofInternal(value) === "json") {

                isValidMatch = equal(objectValue[inc], value);

            } else if (getTypeofInternal(value) === "array") {

                isValidMatch = equal(objectValue[inc], value);

            } else if (getTypeofInternal(value) === "function") {

                isValidMatch = value(objectValue[inc]);

            } else {

                if (objectValue[inc] === value) {

                    isValidMatch = true;

                }

            }

            if (isValidMatch) {

                if (isGetLast === false) {

                    return inc;

                }
                referenceValue = inc;

            }

            inc += one;

        }

    }

    return isGetLast === false
        ?negOne
        :referenceValue;

}


function indexOf (value, objectValue) {

    return curryArg(function (rawValue, rawObjectValue) {

        var start = 0;

        var indexValue = getIndexOf(rawObjectValue, rawValue, start, count(rawObjectValue), false);

        return indexValue;

    }, [
        value,
        objectValue
    ], two);

}


function indexOfExist (value, arrayObject) {

    return curryArg(function (rawValue, rawObjectValue) {

        return indexOf(rawValue, rawObjectValue) >= zero;

    }, [
        value,
        arrayObject
    ], two);

}


function convertValue (value) {

    if (getTypeofInternal(value) === "string") {

        if ((/^\d+$/).test(value)) {

            return parseInt(value, 10);

        }

        if ((/^\d+\.\d+$/).test(value)) {

            return parseFloat(value);

        }

        return value;

    }

    return value;

}


function each (objectValue, func) {

    var re_loop=[];

    var typeofs=getTypeofInternal(objectValue);

    var localGlobal = new GlobalEach();

    if (indexOfExist(typeofs, [
        "json",
        "array",
        "object",
        "arguments"
    ])) {

        for (var ins in objectValue) {

            if (has(objectValue, ins)) {

                if (localGlobal.continue === false) {

                    break;

                }

                callbackEach(convertValue(ins), objectValue, localGlobal, re_loop, func, true);

            }

        }

        return re_loop;

    }

    if (indexOfExist(typeofs, ["set"])) {

        var key = zero;

        for (var ins of objectValue) {

            if (has(objectValue, ins)) {

                if (localGlobal.continue === false) {

                    break;

                }
                callbackEach(key, ins, localGlobal, re_loop, func, false);
                key += one;

            }

        }

        return re_loop;

    }
    if (indexOfExist(typeofs, ["map"])) {

        objectValue.forEach(function (value, key) {

            if (localGlobal.continue) {

                callbackEach(convertValue(key), value, localGlobal, re_loop, func, false);

            }

        });

        return re_loop;

    }

    return null;

}


function callbackEach (ins, objectValue, localGlobal, re_loop, func, notSetMap) {

    var bool_func = true;

    if (getTypeofInternal(notSetMap
        ? objectValue[ins]
        : objectValue) === "function") {

        if ((/\b_/g).test(ins)) {

            bool_func= false;

        }

    }
    if (bool_func) {

        try {

            if (has(func)) {

                if (notSetMap) {

                    func(objectValue[ins], ins, localGlobal);

                } else {

                    func(objectValue, ins, localGlobal);

                }

            } else {

                if (notSetMap) {

                    re_loop[ins]=objectValue[ins];

                } else {

                    re_loop[ins]=objectValue;

                }

            }

        } catch (error) {

            console.log(error);

        }

    } else {

        re_loop=null;

    }

}


function GlobalEach () {

    this.external_execution_from = null;
    this.continue = true;
    this.action = null;
    this.pass_value = null;
    this.is_true = true;

}


GlobalEach.prototype.isContinue = function (value) {

    this.continue = value;

};


function baseReduce (func, defaultValue, listData) {

    var that = this;

    each(listData, function (av, ak, localGlobal) {

        defaultValue = func.apply(that, [
            defaultValue,
            av,
            ak,
            localGlobal
        ]);

    });

    return defaultValue;

}


function empty (value) {

    if (getTypeofInternal(value) === "json") {

        return {};

    }

    if (getTypeofInternal(value) === "array" || getTypeofInternal(value) === "arguments") {

        return [];

    }

    if (getTypeofInternal(value) === "string") {

        return '';

    }
    if (getTypeofInternal(value) === "number") {

        return zero;

    }
    if (getTypeofInternal(value) === "uint16Array") {

        return Uint16Array.from([]);

    }
    if (getTypeofInternal(value) === "uint8Array") {

        return Uint8Array.from([]);

    }
    if (getTypeofInternal(value) === "set") {

        return new Set();

    }
    if (getTypeofInternal(value) === "map") {

        return new Map();

    }

    return value;

}


function baseAppend (objectValue, val, key) {

    var typeofs=getTypeofInternal(objectValue);

    if (typeofs === "json") {

        objectValue[key]=val;

    }
    if (typeofs === "array") {

        objectValue.push(val);

    }

    if (typeofs === "set") {

        objectValue.add(val);

    }

    if (typeofs === "map") {

        objectValue.set(key, val);

    }

    return objectValue;

}


function baseMap (func, objectValue) {

    var value_arry=empty(objectValue);
    var cnt=zero;

    var that = this;

    each(objectValue, function (value, key, localGlobal) {

        localGlobal.action = "map";

        if (has(func)) {

            var dataFunc = func.apply(
                that,
                [
                    value,
                    key,
                    cnt,
                    localGlobal
                ]
            );

            value_arry = baseAppend(value_arry, dataFunc, key);
            cnt += one;

        }

    });

    return value_arry;

}


function map (func, objectValue) {

    return curryArg(function (rawFunc, rawObjectValue) {

        return baseMap(rawFunc, rawObjectValue);

    }, [
        func,
        objectValue
    ], two);

}


function getKeyVal (jsn, typ) {

    var ky=[],
        vl=[];
    var list_raw = [];

    each(jsn, function (vv, kk) {

        ky.push(kk);
        vl.push(vv);
        list_raw.push({
            "key": kk,
            "value": vv
        });

    });
    if (indexOfExist(typ, [
        "key",
        "value"
    ])) {

        var ars=typ === "key"
            ?ky
            :vl;

        return count(ars) === one

            ?ars[zero]
            :ars;

    }
    if (typ === "first_index") {

        return count(list_raw)>zero
            ?list_raw[zero]
            :{"value": ''};

    }
    if (typ === "last_index") {

        return count(list_raw)>zero
            ?list_raw[count(list_raw)-one]
            :{"value": ''};

    }

    return null;

}


function first (objectValue) {

    return getKeyVal(objectValue, "first_index").value;

}


function getTypeof () {

    var args=arguments;

    var getTypes = map(function (value) {

        return getTypeofInternal(value);

    }, args);

    return count(getTypes) === one
        ?first(getTypes)
        :getTypes;

}


function toArray (value) {

    var return_val = value;

    if (getTypeof(return_val) !== "array") {

        return_val = [value];

    }

    return return_val;

}


function baseCountValidList (objectValue) {

    return baseReduce(function (total, value) {

        var values = toArray(value);

        total +=baseReduce(function (subtotal, subvalue) {

            if (subvalue && getTypeofInternal(subvalue) === "boolean") {

                return subtotal +one;

            }

            return subtotal;

        }, zero, values);

        return total;

    }, zero, objectValue);

}


function allValid () {

    var arg=arguments;

    var mapCount = baseReduce(function (total, value) {

        total+= count(toArray(value));

        return total;

    }, zero, arg);

    return curryArg(function () {

    var rawValue=arguments;

        return baseCountValidList(rawValue);

    }, arg) === mapCount;

}

_stk.allValid=allValid;
function append (objectValue, val, key) {

    return curryArg(function (rawObjectValue, rawVal, rawKey) {

        return baseAppend(rawObjectValue, rawVal, rawKey);    }, [
        objectValue,
        val,
        key
    ], two);

}

_stk.append=append;
function arraySlice (objectValue, min, max) {

    var ran_var=[];    var defaultValueZero=0;
    var defaultValueNegativeOne=-1;
    var ran_min=has(min)
        ?min
        :defaultValueZero;
    var ran_max=has(max)
        ?max
        :count(objectValue);

    if (has(min)) {

        if (defaultValueZero > min) {

            ran_min = defaultValueZero;
            ran_max = count(objectValue) + (defaultValueNegativeOne+ min);

        }

    }

    if (has(max)) {

        if (defaultValueZero > max) {

            var raw_ran_min = defaultValueZero > min
                ?count(objectValue) + (defaultValueNegativeOne+ min)
                :min;
            var raw_ran_max =count(objectValue) + max;

            if (raw_ran_min < raw_ran_max) {

                ran_min = raw_ran_min;
                ran_max = raw_ran_max;

            } else {

                ran_min = raw_ran_min;
                ran_max = raw_ran_min;

            }

        }

    }

    each(objectValue, function (value, key) {

        if (ran_min <= parseInt(key) && ran_max >= parseInt(key)) {

            ran_var.push(value);

        }

    });

    return ran_var;

}


function arrayConcat () {

    var arg=arguments;

    return curryArg(function () {

    var argsub=arguments;

        if (argsub.length < one) {

            return [];

        }

        var return_val=toArray(first(argsub));
        var arrayValue = toArray(arraySlice(argsub, one));

        each(arrayValue, function (value) {

            return_val = return_val.concat(toArray(value));

        });

        return return_val;

    }, arg);

}

_stk.arrayConcat=arrayConcat;
function range (maxValue, minValue, step) {

    var incrementValue=has(step)
        ?Number(step)
        :one;    var minValueRef=has(minValue)
        ?Number(minValue)
        :one;
    var maxValueRef=has(maxValue)
        ?Number(maxValue)
        :ten;
    var output=[];

    for (var inc=minValueRef; inc <= maxValueRef;) {

        if (getTypeof(incrementValue) === "string") {

            output.push(inc);

            var render = new Function('inc', "return "+inc+incrementValue);

            inc = render.call(inc);

        }
        if (getTypeof(incrementValue) === "number") {

            output.push(inc);
            if (incrementValue<zero) {

                inc -= incrementValue;

            } else {

                inc += incrementValue;

            }

        }

    }

    return output;

}


function arrayRepeat (value, valueRepetion) {

    return curryArg(function (rawValue, rawValueRepetion) {

        var nm_rpt=rawValueRepetion||zero;

        return map(function () {

            return rawValue;

        }, range(nm_rpt));

    }, [
        value,
        valueRepetion
    ], one);

}

_stk.arrayRepeat=arrayRepeat;
_stk.arraySlice=arraySlice;function isEmpty (value) {

    var typeofvalue = getTypeofInternal(value);    var invalidList = [
        'null',
        'undefined'
    ];

    if (typeofvalue === "json" || typeofvalue === "array") {

        return count(value, typeofvalue === "json") === zero;

    }
    if (typeofvalue === "number") {

        return value === zero;

    }

    if (indexOfExist(typeofvalue, invalidList)) {

        return true;

    }

    if (indexOfExist(typeofvalue, [
        "uint16Array",
        "uint8Array"
    ])) {

        return value.length ===zero;

    }
    if (indexOfExist(typeofvalue, [
        "set",
        "map"
    ])) {

        return value.size ===zero;

    }

    return (/^\s*$/gmi).test(value);

}


function dataNumberFormat (regexp, defaultVariable, nullReplacement) {

    var regp=regexp;
    var intr=defaultVariable;

    if (regp.test(nullReplacement.toString())) {

        intr=nullReplacement;

    }

    if (!has(nullReplacement) || nullReplacement.toString() === "NaN") {

        intr=defaultVariable;

    }
    if (getTypeof(intr) === "string") {

        intr = intr.replace(/[^\d.]/g, "");

    }

    return intr;

}


function getKey (objectValue) {

    return getKeyVal(objectValue, "key");

}


function indexOfNotExist (value, arrayObject) {

    return curryArg(function (rawValue, rawObjectValue) {

        return indexOf(rawValue, rawObjectValue) === negOne;

    }, [
        value,
        arrayObject
    ], two);

}


function toString (value) {

    var notInList = [
        "object",
        "json",
        "promise"
    ];

    var gettypeof = getTypeof(value);

    if (has(value) && indexOfNotExist(gettypeof, notInList)) {

        return value.toString();

    }

    return '';

}


function strLower (value) {

    return toString(value).toLowerCase();

}


function varExtend (objectValue, objectValueReplace) {

    return curryArg(function (rawObjectValue, rawObjectValueReplace) {

        var jsn_bool={
            "false": false,
            "true": true
        };

        var listValid = [
            "json",
            "object"
        ];

        if (indexOfExist(getTypeof(rawObjectValue), listValid) && indexOfExist(getTypeof(rawObjectValueReplace), listValid)) {

            var jsn_s={};

            for (var key in rawObjectValue) {

                if (has(rawObjectValue, key)) {

                    if (indexOfExist(strLower(rawObjectValue[key]), getKey(jsn_bool))) {

                        jsn_s[key]=jsn_bool[strLower(rawObjectValue[key])];

                    } else {

                        jsn_s[key]=rawObjectValue[key];

                    }

                }

            }

            for (var key in rawObjectValueReplace) {

                if (has(jsn_s, key)) {

                    if (getTypeof(jsn_s[key]) === "json") {

                        jsn_s[key]=replaceValue(jsn_s[key], rawObjectValueReplace[key]);

                    } else {

                        jsn_s[key]=rawObjectValueReplace[key];

                    }

                }

            }

            return jsn_s;

        }

        return objectValue;

    }, [
        objectValue,
        objectValueReplace
    ]);

}


function replaceValue (objectValue, objectValueReplace) {

    for (var key in objectValueReplace) {

        if (getTypeof(objectValue[key]) === "json") {

            objectValue[key] =replaceValue(objectValue[key], objectValueReplace[key]);

        } else {

            objectValue[key] = objectValueReplace[key];

        }

    }

    return objectValue;

}


function toDouble (value, config) {

    var zero = 0.00;

    var defaultConfig = varExtend({"decSeparator": "."}, config);

    if (defaultConfig.decSeparator !== ".") {

        var sepRegexp = new RegExp("("+defaultConfig.decSeparator+")", "g");

        value = value.replace(sepRegexp, ".");

    }

    return parseFloat(dataNumberFormat(/(\d[.]{0,})/g, zero, value === null
        ?zero
        :value));

}


function roundDecimal (value, precision) {

    var jsn=toDouble(value);

    var multiplier = ten**precision;

    return Math.trunc(jsn * multiplier) / multiplier;

}


function arraySum (arrayObject, precision) {

    var arrayObjects=arrayObject||[];
    var precisions=precision||zero;

    var sum = baseReduce(add, zero, arrayObjects);

    return isEmpty(precisions)
        ? parseInt(sum)
        :roundDecimal(sum, precisions);

}

_stk.arraySum=arraySum;
function asyncReplace (value, search, toReplace) {

    return curryArg(function (rawValue, rawSearch, rawToReplace) {

        try {

            if (getTypeof(rawToReplace) === "function") {

                var values = [];                String.prototype.replace.call(rawValue, rawSearch, function () {

    var arg=arguments;

                    values.push(rawToReplace(...arg));

                    return "";

                });

                return Promise.all(values).then(function (resolvedValues) {

                    return String.prototype.replace.call(rawValue, rawSearch, function () {

                        return resolvedValues.shift();

                    });

                });

            }

            return Promise.resolve(String.prototype.replace.call(rawValue, rawSearch, rawToReplace));

        } catch (error) {

            return Promise.reject(error);

        }

    }, [
        value,
        search,
        toReplace
    ]);

}

_stk.asyncReplace=asyncReplace;
function divide (value1, value2) {

    return curryArg(function (aa, bb) {

        return Number(aa) / Number(bb);    }, [
        value1,
        value2
    ], two);

}


function multiply (value1, value2) {

    return curryArg(function (aa, bb) {

        return Number(aa) * Number(bb);

    }, [
        value1,
        value2
    ], two);

}


function subtract (value1, value2) {

    return curryArg(function (aa, bb) {

        return Number(aa) - Number(bb);

    }, [
        value1,
        value2
    ], two);

}


function clone (objectValue) {

    if (indexOfExist(getTypeofInternal(objectValue), [
        "json",
        "array",
        "object",
        "arguments",
        "set",
        "map"
    ])) {

        var variable=empty(objectValue);

        each(objectValue, function (value, key) {

            variable = append(variable, value, key);

        });

        return variable;

    }

    switch (getTypeofInternal(objectValue)) {

    case 'date':
        return new Date(objectValue.valueOf());
    case 'uint16Array':
    case 'uint8Array':
        return objectValue.slice();
    default: return objectValue;

    }

}


function flatten (arg) {

    return curryArg(function (rawValue) {

        return baseReduce(function (total, value) {

            if (getTypeofInternal(value) === "array") {

                each(value, function (valEach) {

                    total.push(valEach);

                });

            } else {

                total.push(value);

            }

            return total;

        }, [], rawValue);

    }, [arg]);

}

var operationType = [
    [
        "^",
        "**"
    ],
    [
        "x",
        "*",
        "/"
    ],
    [
        "+",
        "-"
    ]
];


function calculate (formula, args) {

    return curryArg(function (rawFormula, rawArgs) {

        rawFormula = algbraicExpr(rawFormula);

        if (getTypeof(rawArgs) === "json") {

            var argsKey = new RegExp("\\b("+toArray(getKey(rawArgs)).join("|")+")\\b", "g");

            rawFormula = rawFormula.replace(argsKey, function (mm, m1) {

                return rawArgs[m1];

            });

        }

        var strFormula = rawFormula.replace(/\((.*?)\)/g, function (mm, m1) {

            return init_group(m1);

        });

        return Number(init_group(strFormula));

    }, [
        formula,
        args
    ]);

}


function init_group (formula) {

    var regexpNumber = /([\d]+!|[\d.%]+|[//*]{2}|[//*\-+\x^]|\|[\d]+\|)/g;
    var matches = formula.match(regexpNumber);

    if (matches[zero] === "-") {

        matches.splice(zero, two, "-"+matches[one]);

    }

    var flattenOps = flatten(operationType);

    for (var ii = one; ii< matches.length; ii +=one) {

        if (has(matches, ii+one)) {

            if (indexOfExist(matches[ii], flattenOps)) {

                if (matches[ii+one] === "-") {

                    matches.splice(ii+one, two, "-"+matches[ii+two]);

                }

            }

        }

    }

    if (count(matches) === one) {

        return convert(matches[zero]);

    }

    if (count(matches) < three) {

        throw new Error("Invalid formula");

    }

    return compute(matches, zero);

}

/**
 * Build computational format
 *
 * @since 1.4.9
 * @category Math
 * @param {string[]} formula The second number in an addition.
 * @param {number} priority The priority sequence
 * @returns {number} Returns the total.
 * @example
 *
 * compute("1+1")
 *=> 2
 */
function compute (formula, priority) {

    var counter = one;
    var counterOne = zero;

    var result = zero;
    var execPriority = operationType[priority];
    var formulaLen = Math.ceil(count(formula)/three);
    var cloneFormula = clone(formula);

    for (var ii = zero; ii< formulaLen; ii +=one) {

        if (has(cloneFormula, counter+one) ===false) {

            throw new Error("Invalid formula");

        }

        if (indexOfExist(cloneFormula[counter], execPriority)) {

            result = process(convert(cloneFormula[counter-one]), cloneFormula[counter], convert(cloneFormula[counter+one]));

            cloneFormula.splice(counterOne*two, three, result);

        } else {

            counter += two;
            counterOne +=one;

        }

    }

    if (cloneFormula.length === one) {

        return cloneFormula[zero];

    }

    return operationType.length-one === priority
        ? zero
        : compute(cloneFormula, priority+one);

}


function process (a1, operator, b1) {

    switch (operator) {

    case '+':
        return add(Number(a1), Number(b1));
    case '-':
        return subtract(Number(a1), Number(b1));
    case 'x':
    case '*':
        return multiply(Number(a1), Number(b1));
    case '/':
        return divide(Number(a1), Number(b1));
    case '%':
        return Number(a1) % Number(b1);
    case '^':
    case '**':
        return Number(a1) ** Number(b1);
    default:
        break;

    }
    throw new Error("Invalid operator");

}


function convert (b1) {

    if ((/^(-\d{1,})$/).test(b1)) {

        return Number(b1);

    }

    if ((/^(\d{1,}|\d{1,}\.\d{1,})%$/).test(b1)) {

        return Number(b1.replace(/%/g, "")/ oneHundred);

    }

    if ((/^(\d{1,})!$/).test(b1)) {

        var value = Number(b1.replace(/!/g, ""));

        var inc = one;

        for (var vv = one; vv <= value;) {

            inc *= vv;
            vv+=one;

        }

        return inc;

    }

    if ((/^|(\d{1,})|$/).test(b1)) {

        return Math.abs(b1);

    }

    return b1;

}


function algbraicExpr (formula) {

    // Handle formula like this 3√s2
    formula = formula.replace(/(\d{0,})\u221A([a-zA-Z0-9_-]{1,})/gu, function (mm, m1, m2) {

        var power = two;

        if (m1 !== "") {

            power = m1;

        }

        // eslint-disable-next-line no-mixed-operators, no-extra-parens
        return "("+m2+"**"+(one/power)+")";

    });

    // Handle formula like this 3x
    formula = formula.replace(/\b([0-9]+[.]{0,1}[0-9]{0,})([a-zA-Z]{1,}[0-9]{0,})\b/g, "($1 * $2)");

    // Handle formula like this (1)(2)
    formula = formula.replace(/\b(\)\s*\()\b/g, ") * (");

    // Handle formula like this 100-10%

    formula = formula.replace(/([a-zA-Z0-9]+)\s*([*\-+x])\s*([a-zA-Z0-9]+)%/g, "($1$2($1*($3/$1)))");

    return formula;

}

_stk.calculate=calculate;
_stk.clone=clone;_stk.count=count;function curry (fun, num) {

    // eslint-disable-next-line no-undefined
    var argDummy = arrayRepeat(undefined, num || fun.length);    return curryArg(fun, argDummy, count(argDummy));

}

_stk.curry=curry;
function dec (value, default_value) {

    var return_val = value;    var inc_n = getTypeof(default_value) === "number"
        ? default_value
        : one;

    if (getTypeof(return_val) === "number") {

        return_val -= inc_n;

        return return_val;

    }

    return zero;

}

_stk.dec=dec;
function defaultTo (defaultValue, value2) {

    return curryArg(function (aa, bb) {

        if (isNaN(bb) && getTypeofInternal(bb) === "number") {

            return aa;        }
        if (_has(bb) === false) {

            return aa;

        }

        return bb;

    }, [
        defaultValue,
        value2
    ], two);

}

_stk.defaultTo=defaultTo;
_stk.divide=divide;_stk.each=each;_stk.equal=equal;_stk.empty=empty;function filter (func, objectValue) {

    return curryArg(function (rawFunc, rawObjectValue) {

        var jsn_var=empty(rawObjectValue);        var jsn_type=getTypeof(rawObjectValue);

        if (!(/(json|array)/g).test(jsn_type)) {

            return [];

        }
        each(rawObjectValue, function (value, key, localGlobal) {

            if (has(rawFunc)) {

                localGlobal.action = "filter";
                localGlobal.pass_value = rawFunc(value, key, localGlobal) === localGlobal.is_true;

                if (localGlobal.pass_value) {

                    append(jsn_var, value, key);

                }

            }

        });

        return jsn_var;

    }, [
        func,
        objectValue
    ], two);

}

_stk.filter=filter;
_stk.first=first;_stk.flatten=flatten;function inc (value, default_value) {

    var return_val = value;    var inc_n = getTypeof(default_value) === "number"
        ? default_value
        : one;

    if (getTypeof(return_val) === "number") {

        return_val += inc_n;

        return return_val;

    }

    return zero;

}


function schemaSplitData (data) {

    if (getTypeofInternal(data) === "array") {

        return data;

    }

    var splitSign = "($^&^$)";
    var split_strReplace= toString(data).replace(/(\\?[.:])/g, function (mm, mm1) {

        if (mm1.trim() === "\\.") {

            return ".";

        }

        if (mm1.trim() === "\\:") {

            return ":";

        }

        return splitSign;

    });

    var spl_len= split_strReplace.split(splitSign);
    var spl=[];

    each(spl_len, function (value) {

        spl.push(value);

    });

    return spl;

}


function getData (split_str, objectValue, isStrict) {

    var refIsStrict = isStrict || false;

    if (getTypeofInternal(split_str) === "undefined") {

        return split_str;

    }

    return curryArg(function (rawSplit_str, rawObjectValue) {

        if (!has(rawObjectValue) || isEmpty(rawObjectValue)) {

            return empty(rawObjectValue);

        }

        var spl= schemaSplitData(rawSplit_str);

        var jsn_total={};
        var counter = zero;

        each(spl, function (value) {

            if (has(rawObjectValue, value)) {

                if ((/^\s+$/).test(rawObjectValue[value]) === false) {

                    jsn_total=rawObjectValue[value];
                    counter=inc(counter);

                }

            } else {

                if (has(jsn_total, value)) {

                    jsn_total=jsn_total[value];
                    counter=inc(counter);

                }

            }

        });

        if (refIsStrict && spl.length !== counter) {

            return spl.length === counter
                ?jsn_total
                :null;

        }

        return jsn_total;

    }, [
        split_str,
        objectValue
    ], two);

}


function isExact (whereValue, objectValue1, isExist) {

    return curryArg(function (rawWhereValue, rawObjectValue1, rawIsExist) {

        if (rawObjectValue1 === null) {

            return false;

        }

        var local_is_exist=has(rawIsExist)&&getTypeofInternal(rawIsExist) === "boolean"
            ?rawIsExist
            :true;
        var val_s=(/(json|array|object)/g).test(getTypeofInternal(rawWhereValue))
            ?rawWhereValue
            :[rawWhereValue];
        var key_s=(/(json|array|object)/g).test(getTypeofInternal(rawObjectValue1))
            ?rawObjectValue1
            :[rawObjectValue1];
        var cnt=zero;
        var incrementDefaultValue=one;

        each(key_s, function (kv, kk) {

            if (indexOfExist(getTypeofInternal(rawWhereValue), [
                "json",
                "object"
            ])) {

                if (has(val_s, kk)) {

                    var local_is_valid = localValidation(val_s[kk], kv, local_is_exist);

                    if (local_is_valid) {

                        cnt += incrementDefaultValue;

                    }

                }

            }

            if (getTypeofInternal(rawWhereValue) === "array") {

                var local_is_valid = local_is_exist
                    ?indexOfExist(kv, val_s)
                    :indexOfNotExist(kv, val_s);

                if (local_is_valid) {

                    cnt += incrementDefaultValue;

                }

            }

        });

        if (isEmpty(cnt)) {

            each(val_s, function (kv, kk) {

                if (indexOfExist(getTypeofInternal(rawWhereValue), [
                    "json",
                    "object"
                ])) {

                    var gdata = getData(kk, key_s);

                    if (!isEmpty(gdata)) {

                        var local_is_valid = localValidation(gdata, kv, local_is_exist);

                        if (local_is_valid) {

                            cnt += incrementDefaultValue;

                        }

                    }

                }

            });

        }

        return cnt === count(rawWhereValue);

    }, [
        whereValue,
        objectValue1,
        isExist
    ], two);

}


function localValidation (keys, vals, isExist) {

    if (isExist) {

        if (getTypeofInternal(vals) === "function") {

            return vals(keys);

        }

        return keys === vals;

    }

    if (getTypeofInternal(vals) === "function") {

        return vals(keys) === false;

    }

    return keys !== vals;

}


function isExactbyRegExp (whereValue, objectValue1) {

    return curryArg(function (rawWhereValue, rawObjectValue1) {

        if (rawObjectValue1 === null) {

            return false;

        }

        if (getTypeof(rawWhereValue) !== "json" && getTypeof(rawWhereValue) !== "string" && getTypeof(rawWhereValue) !== "regexp" && getTypeof(rawWhereValue) !== "number") {

            return false;

        }

        var key_s=(/(json|array)/g).test(getTypeof(rawObjectValue1))
            ?rawObjectValue1
            :[rawObjectValue1];
        var cnt=zero;
        var local_is_valid = null;

        each(key_s, function (kv, kk) {

            if (getTypeof(rawWhereValue) === "json") {

                if (has(rawWhereValue[kk])) {

                    if (getTypeof(rawWhereValue[kk]) === "regexp") {

                        local_is_valid = rawWhereValue[kk];

                    } else {

                        local_is_valid = new RegExp(rawWhereValue[kk]);

                    }
                    if (local_is_valid.test(kv)) {

                        cnt += one;

                    }

                }

            } else {

                if (getTypeof(rawWhereValue) === "regexp") {

                    local_is_valid = rawWhereValue;

                } else {

                    local_is_valid = new RegExp(rawWhereValue);

                }
                if (local_is_valid.test(kv)) {

                    cnt += one;

                }

            }

        });

        return cnt >zero;

    }, [
        whereValue,
        objectValue1
    ]);

}


function whereLoopExecution (whr, jsn, isExist, types) {

    var json_convertion = getTypeof(jsn) === "array"
        ? jsn
        : [jsn];
    var jsn_s= count(jsn, true) === zero
        ? json_convertion
        : jsn;

    var variable=empty(jsn);
    var filterData = {};

    each(jsn_s, function (jv, jk, localGlobal) {

        localGlobal.action = "lookup_execution";
        if (getTypeof(jsn) === "array") {

            filterData = jv;

        }
        if (getTypeof(jsn) === "json") {

            filterData[jk]=jv;

        }

        var whr_s=getTypeof(whr) === "function"
            ?whr(jv, jk, localGlobal)
            :whr||{};

        var validReturn = false;

        if (types === "where") {

            validReturn = isExact(whr_s, filterData);

            if (localGlobal.external_execution_from === 'not') {

                validReturn = isExact(whr_s, filterData) === localGlobal.is_true;

            }

        }

        if (types === "like") {

            validReturn = isExactbyRegExp(whr_s, filterData);

            if (localGlobal.external_execution_from === 'not') {

                validReturn = isExactbyRegExp(whr_s, filterData) === localGlobal.is_true;

            }

        }

        if (getTypeof(whr) === "function") {

            if (localGlobal.external_execution_from === '') {

                localGlobal.pass_value = validReturn && isEmpty(variable);

            } else {

                localGlobal.pass_value = validReturn;

            }

        } else {

            localGlobal.pass_value = validReturn;

        }
        if (localGlobal.pass_value) {

            append(variable, jv, jk);

        }

    });

    return variable;

}


function where (objectValueWhere, objectValue) {

    return curryArg(function (rawObjectValueWhere, rawObjectValue) {

        return whereLoopExecution(rawObjectValueWhere, rawObjectValue, true, 'where');

    }, [
        objectValueWhere,
        objectValue
    ], two);

}


function remove (objectValue, value, value2) {

    var type_js=getTypeof(objectValue);
    var reslt =null;

    var isValueAFunction = getTypeof(value) === "function";

    if (type_js === "array") {

        var lastRow = has(value2)
            ?value2
            :count(objectValue);

        reslt=[];
        each(objectValue, function (av, ak) {

            if (isValueAFunction) {

                if (value(av, ak)) {

                    reslt.push(av);

                }

            } else if (has(value2) === false) {

                if (parseInt(ak) !== value) {

                    reslt.push(av);

                }

            } else {

                if (value === lastRow) {

                    if (parseInt(ak) !== value) {

                        reslt.push(av);

                    }

                } else {

                    if (parseInt(ak) > value && parseInt(ak) <= lastRow) {

                        reslt.push(av);

                    }

                }

            }

        });

        return reslt;

    }

    if (type_js === "json") {

        reslt={};
        var jsn_vw=[];

        if (getTypeof(value) === "json") {

            var whereData = where(value, objectValue);

            each(whereData, function (jk) {

                jsn_vw.push(jk);

            });

        }

        each(objectValue, function (av, ak) {

            if (isValueAFunction) {

                if (value(av, ak)) {

                    reslt[ak]=av;

                }

            } else if (getTypeof(value) === "string") {

                if (ak !== value) {

                    reslt[ak]=av;

                }

            } else {

                if (indexOfExist(av, jsn_vw) === false) {

                    reslt[ak]=av;

                }

            }

        });

        return reslt;

    }

    return [];

}


function fromPairs (value, deepLimit) {

    var defineDeepLimit = defaultTo(two);

    if (getTypeofInternal(value) !== "array") {

        throw new Error("Value must be an array");

    }

    return baseReduce(function (total, subBalue) {

        if (getTypeofInternal(subBalue) === "array") {

            if (subBalue.length > one) {

                var depthValue = getDepthValue(remove(subBalue, zero, defineDeepLimit(deepLimit || null)));

                append(total, depthValue, subBalue[zero]);

            }

        }

        return total;

    }, {}, value);

}


function getDepthValue (value) {

    var getRmoveValue = remove(value, zero);

    if (isEmpty(getRmoveValue)) {

        return first(value);

    }

    var dataObj = {};

    dataObj[first(value)] = getDepthValue(getRmoveValue);

    return dataObj;

}

_stk.fromPairs=fromPairs;
_stk.getData=getData;_stk.getTypeof=getTypeof;function getUniq (option) {

    var optionValue = option||"default";    if (optionValue === "default") {

        var defaultRandomValue=2;
        var defaultSubstrValue=36;
        var str_rand1=Math
            .random()
            .toString(defaultSubstrValue)
            .substring(defaultRandomValue)+Math.random()
            .toString(defaultSubstrValue)
            .substring(defaultRandomValue);

        return str_rand1;

    }

    return "";

}

_stk.getUniq=getUniq;
function getValue (objectValue) {

    return getKeyVal(objectValue, "value");}

_stk.getValue=getValue;
_stk.getKey=getKey;function groupBy (func, objectValue) {

    return curryArg(function (rawFunc, rawObjectValue) {

        var value_arry=clone(empty(rawObjectValue));        var groupData = {};

        each(rawObjectValue, function (value, key) {

            if (has(rawFunc)) {

                var dataFunc = rawFunc(value, key);

                if (!has(groupData, dataFunc)) {

                    groupData[dataFunc] = value_arry;

                }
                groupData[dataFunc] = append(clone(groupData[dataFunc]), value, key);

            }

        });

        return groupData;

    }, [
        func,
        objectValue
    ]);

}

_stk.groupBy=groupBy;
function gt (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa > bb;    }, [
        value1,
        value2
    ], two);

}

_stk.gt=gt;
function gte (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa >= bb;    }, [
        value1,
        value2
    ], two);

}

_stk.gte=gte;
_stk.has=has;function reduce (func, defaultValue, listData) {

    return curryArg(function (rawFunc, rawDefaultValue, rawListData) {

        return baseReduce.apply(this, [
            rawFunc,
            rawDefaultValue,
            rawListData
        ]);    }, [
        func,
        defaultValue,
        listData
    ], three);

}


function ifElse (cond, ifFunc, elseFunc) {

    var argumentCounter = 0;

    var reduceFunc = reduce(function (total, value) {

        if (value === __) {

            total +=one;

        }

        if (getTypeofInternal(value) === "function") {

            if (total < value.length) {

                total +=value.length - total;

            }

        }

        return total;

    }, zero, [
        cond,
        ifFunc,
        elseFunc
    ]);

    argumentCounter = reduceFunc;

    return curryArg(function () {

    var rawArgs=arguments;

        var varCond = false;
        var arrayValue = toArray(arraySlice(rawArgs, three));
        var rawCond = rawArgs[zero];
        var rawIfFunc = rawArgs[one];
        var rawElseFunc = rawArgs[two];

        if (getTypeofInternal(rawCond) === "function" && arrayValue.length>zero) {

            varCond = rawCond(...arrayValue);

        } else {

            varCond = rawCond;

        }
        if (varCond) {

            if (getTypeofInternal(rawIfFunc) === "function" && arrayValue.length>zero) {

                return rawIfFunc(...arrayValue);

            }

            return rawIfFunc;

        }

        if (getTypeofInternal(rawElseFunc) === "function" && arrayValue.length>zero) {

            return rawElseFunc(...arrayValue);

        }

        return rawElseFunc;

    }, [
        cond,
        ifFunc,
        elseFunc
    ], three+argumentCounter);

}

_stk.ifElse=ifElse;
_stk.inc=inc;_stk.indexOf=indexOf;_stk.indexOfExist=indexOfExist;_stk.indexOfNotExist=indexOfNotExist;_stk.isEmpty=isEmpty;function insert (objectValue, value) {

    if (has(objectValue)) {

        var jsn_type=getTypeof(value);        if (jsn_type === "json") {

            each(value, function (_value, key) {

                objectValue[key]=_value;

            });

        }

        if (jsn_type === "array") {

            objectValue.push(value);

        }

    }

}

_stk.insert=insert;
_stk.isExact=isExact;_stk.isExactbyRegExp=isExactbyRegExp;_stk.isJson=isJson;function last (objectValue) {

    return getKeyVal(objectValue, "last_index").value;}

_stk.last=last;
function lastIndexOf (value, objectValue) {

    return curryArg(function (rawValue, rawObjectValue) {

        var indexValue = getIndexOf(rawObjectValue, rawValue, zero, count(rawObjectValue), true);        return indexValue;

    }, [
        value,
        objectValue
    ], two);

}

_stk.lastIndexOf=lastIndexOf;
function like (objectValueWhere, objectValue) {

    return curryArg(function (rawObjectValueWhere, rawObjectValue) {

        return whereLoopExecution(rawObjectValueWhere, rawObjectValue, true, 'like');    }, [
        objectValueWhere,
        objectValue
    ], two);

}

_stk.like=like;
function limit (objectValue, minValue, maxValue, func) {

    var cnt=0;    var glo_jsn={};
    var glo_indtfd = null;
    var minValueReserve=has(minValue)
        ?minValue
        :zero;
    var maxValueReserve=has(maxValue)
        ?maxValue
        :count(objectValue);

    each(objectValue, function (meth, key) {

        if (cnt >= minValueReserve && cnt <= maxValueReserve) {

            if (has(func)) {

                glo_indtfd=func(meth, key);

                if (has(glo_indtfd)) {

                    glo_jsn[key]=glo_indtfd;

                }

            } else {

                glo_jsn[key]=meth;

            }

        }

        cnt += one;

    });

    return glo_jsn;

}

_stk.limit=limit;
function lte (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa <= bb;    }, [
        value1,
        value2
    ], two);

}

_stk.lte=lte;
function mapGetData (valueFormat, objectValue, isStrict) {

    return curryArg(function (rawValueFormat, rawObjectValue, rawIsStrict) {

        var refIsStrict = getTypeofInternal(rawIsStrict) === "undefind"
            ? true
            :rawIsStrict;        var typeObjectValue = getTypeofInternal(rawObjectValue);

        return reduce(function (total, value, key) {

            var rawbj = {};

            if (typeObjectValue === "json") {

                rawbj[key] = value;

            }

            var validData = getData(rawValueFormat, typeObjectValue === "json"
                ?rawbj
                :value, refIsStrict);

            if (isEmpty(validData) === false) {

                total = append(total, validData);

            }

            return total;

        }, [], objectValue);

    }, [
        valueFormat,
        objectValue,
        isStrict
    ], two);

}

_stk.mapGetData=mapGetData;
_stk.map=map;function mergeWithKey (objectValue, mergeValue) {

    return curryArg(function (rawObjectValue, rawMergeValue) {

        if (indexOfExist(getTypeofInternal(rawObjectValue), [
            "array",
            "string",
            "number"
        ])|| indexOfExist(getTypeofInternal(rawMergeValue), [
            "array",
            "string",
            "number"
        ])) {

            throw new Error("Invalid , both value must be json");        }

        each(rawMergeValue, function (sVal, sKey) {

            rawObjectValue = baseAppend(rawObjectValue, sVal, sKey);

        });

        return rawObjectValue;

    }, [
        objectValue,
        mergeValue
    ], two);

}


function selectInData (whereValue, objectValue) {

    return curryArg(function (rawWhereValue, rawObjectValue) {

        return baseMap(function (value) {

            var rawDataToArray = baseMap(function (value2) {

                var rawData = getData(value, value2);

                return isEmpty(rawData)
                    ?value
                    :rawData;

            }, toArray(rawObjectValue));

            return getTypeof(rawObjectValue)==="json"
                ?first(rawDataToArray)
                :rawDataToArray;

        }, rawWhereValue);

    }, [
        whereValue,
        objectValue
    ], two);

}


function mergeInWhere (whereValue, objectValue, mergeValue) {

    return curryArg(function (rawWhereValue, rawObjectValue, rawMergeValue) {

        var rawObjectType = getTypeofInternal(rawObjectValue);

        if (getTypeofInternal(rawMergeValue) !== rawObjectType) {

            throw new Error("Invalid , both value must be "+rawObjectType);

        }

        return baseMap(function (value) {

            each(mergeValue, function (subValue) {

                var joinValue = {
                    "$1": value,
                    "$2": subValue
                };
                var selectData = selectInData(rawWhereValue, joinValue);
                var whereData = where(selectData, subValue);

                if (isEmpty(whereData) === false) {

                    value = mergeWithKey(value, subValue);

                }

            });

            return value;

        }, rawObjectValue);

    }, [
        whereValue,
        objectValue,
        mergeValue
    ], three);

}

_stk.mergeInWhere=mergeInWhere;
function lt (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa < bb;    }, [
        value1,
        value2
    ], two);

}

_stk.lt=lt;
_stk.mergeWithKey=mergeWithKey;_stk.multiply=multiply;function toBoolean (value) {

    if (getTypeof(value) === "string") {

        return indexOfExist(strLower(value), [
            'true',
            't',
            'yes',
            'y',
            'on',
            '1'
        ]);    }

    if (getTypeof(value) === "number") {

        return indexOfExist(value, [one]);

    }

    if (getTypeof(value) === "boolean") {

        return value;

    }

    return false;

}


function not (func) {

    var reserve = null;

    if (indexOfNotExist(getTypeof(func), [
        "json",
        "function",
        "object"
    ])) {

        return toBoolean(func) === false;

    }

    return curryArg(function (rawFunc) {

        return function () {

    var arg=arguments;

            var argValue = arg[arg.length-one];

            if (getTypeof(argValue) === "json") {

                if (has(argValue, 'continue') && has(argValue, 'pass_value') && has(argValue, 'action')) {

                    argValue.external_execution_from ='not';
                    argValue.is_true= false;

                    if (argValue.action === "lookup_execution") {

                        return rawFunc;

                    }

                    if (argValue.action === "filter") {

                        reserve = rawFunc.apply(this, arg);

                    }

                }

            }

            return reserve;

        };

    }, [func], two);

}

_stk.not=not;
var defaultOptionDelay = {

    "autoStart": true
};function onDelay (func, wait, option) {

    var extend = varExtend(defaultOptionDelay, option);

    var sequence = new ClassDelay(extend, wait, func);

    if (extend.autoStart) {

        sequence.start();

    }

    return sequence;

}


function ClassDelay (extend, wait, func) {

    this.extend = extend;

    this.wait = wait;

    this.func = func;

    this.timeout = null;

    this.returned = null;

}

ClassDelay.prototype.cancel = function () {

    clearTimeout(this.timeout);

};

ClassDelay.prototype.start = function () {

    this.extend = varExtend(defaultOptionDelay, this.extend);
    var valueWaited = this.wait || zero;

    // eslint-disable-next-line consistent-this
    var main = this;

    this.timeout = setTimeout(function () {

        main.returned = main.func();

    }, valueWaited);

};

_stk.onDelay=onDelay;
function noteq (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa !== bb;    }, [
        value1,
        value2
    ], two);

}

_stk.noteq=noteq;
var defaultOption = {

    "autoStart": true,
    "limitCounterClear": zero
};function onSequence (func, wait, option) {

    var extend = varExtend(defaultOption, option);

    var sequence = new ClassSequence(extend, wait, func);

    if (extend.autoStart) {

        sequence.start();

    }

    return sequence;

}


function ClassSequence (extend, wait, func) {

    this.interval = null;

    this.extend = extend;

    this.wait = wait;

    this.func = func;

    this.returned = null;

}

ClassSequence.prototype.cancel = function () {

    clearInterval(this.interval);

};

ClassSequence.prototype.start = function () {

    this.extend = varExtend(defaultOption, this.extend);
    var valueWaited = this.wait || zero;
    var counter = zero;
    // eslint-disable-next-line consistent-this
    var main = this;

    main.interval = setInterval(function () {

        main.returned = main.func();

        counter += one;
        if (main.extend.limitCounterClear >zero && counter >= main.extend.limitCounterClear) {

            clearInterval(main.interval);

        }

    }, valueWaited);

};

_stk.onSequence=onSequence;
var getWindow = function () {

    if (typeof window !== 'undefined') {

        return window;    }

    return {};

};


function onWait (func, wait) {

    var browserWindow = getWindow();
    var timerId = null;

    var useReqeustAdnimation = null;

    if (browserWindow) {

        // Check if requestAnimationFrame is available
        useReqeustAdnimation = typeof browserWindow.requestAnimationFrame === "function";

    }


    function startTimer (pendingFunc, waiting) {

        if (useReqeustAdnimation) {

            clearTimer();

            return browserWindow.requestAnimationFrame(pendingFunc);

        }

        return onDelay(pendingFunc, waiting);

    }


    function clearTimer () {

        if (useReqeustAdnimation) {

            browserWindow.cancelAnimationFrame(timerId);

        }
        if (timerId !== null && typeof timerId.cancel === "function") {

            timerId.cancel();

        }

    }


    function bootLoader () {

        timerId = startTimer(func, wait);

        return {};

    }

    return bootLoader();

}

_stk.onWait=onWait;
function once (func) {

    var reserve = null;    return curryArg(function (rawFunc) {

        return function () {

    var arg=arguments;

            if (getTypeof(arg[arg.length-one]) === "array") {

                return rawFunc;

            }

            if (getTypeof(rawFunc) !== "function") {

                reserve = validateCallbackEach(arg, rawFunc, reserve);

                return rawFunc;

            }
            reserve = validateCallbackEach(arg, rawFunc, reserve);

            if (has(rawFunc, '__called__') === false) {

                rawFunc.__called__ = true;

                reserve = rawFunc.apply(this, arg);

            }

            return reserve;

        };

    }, [func], two);

}


function validateCallbackEach (arg, rawFunc, reserve) {

    var argValue = arg[arg.length-one];

    if (getTypeof(argValue) === "json") {

        if (has(argValue, 'continue') && has(argValue, 'pass_value') && has(argValue, 'action')) {

            argValue.external_execution_from ='once';
            if (indexOfExist(argValue.action, ["lookup_execution"])) {

                if (argValue.pass_value) {

                    argValue.continue =false;

                }

            } else if (indexOfExist(argValue.action, ["filter"])) {

                var reserveRef = rawFunc.apply(this, arg);

                if (reserveRef) {

                    argValue.continue =false;
                    reserve = reserveRef;
                    rawFunc.__called__ = true;

                }

            } else if (indexOfExist(argValue.action, ["map"])) {

                argValue.continue =false;

            } else {

                rawFunc.__called__ = true;

                argValue.continue =false;

            }

        }

    }

    return reserve;

}

_stk.once=once;
var entity = [
    {
        "decimal": "&#160;",
        "entity": "&nbsp;",
        "html": " ",
        "hex": "&#xA0;"
    },
    {
        "decimal": "&#92;",
        "entity": "&bsol;",
        "html": "\\",
        "hex": "&#x5c;",
        "title": "backslash"
    },
    {"decimal": "&#34;",
        "entity": "&quot;",
        "hex": "&#x22;",
        "html": '"',
        "title": "quotation mark = double quote"},
    {"decimal": "&#39;",
        "entity": "&apos;",
        "hex": "&#x27;",
        "html": "'",
        "title": "quotation mark = single quote"},
    {"decimal": "&#38;",
        "entity": "&amp;",
        "hex": "&#x26;",
        "html": "&",
        "title": "ampersand"},
    {"decimal": "&#60;",
        "entity": "&lt;",
        "hex": "&#x3C;",
        "html": "<",
        "title": "less-than sign"},
    {"decimal": "&#62;",
        "entity": "&gt;",
        "hex": "&#x3E;",
        "html": ">",
        "title": "greater-than sign"},
    {"decimal": "&#710;",
        "entity": "&circ;",
        "hex": "&#x2C6;",
        "html": "^",
        "title": "modifier letter circumflex accent"},
    {"decimal": "&#123;",
        "entity": "&lbrace;",
        "hex": "&#x7B;",
        "html": "{",
        "title": "Left curly bracket"},
    {"decimal": "&#125;",
        "entity": "&rbrace;",
        "hex": "&#x7D;",
        "html": "}",
        "title": "Right curly bracket"},
    {
        "decimal": "&#161;",
        "entity": "&iexcl;",
        "html": "¡",
        "hex": "&#xA1;"
    },
    {
        "decimal": "&#162;",
        "entity": "&cent;",
        "html": "¢",
        "hex": "&#xA2;"
    },
    {
        "decimal": "&#163;",
        "entity": "&pound;",
        "html": "£",
        "hex": "&#xA3;"
    },
    {
        "decimal": "&#164;",
        "entity": "&curren;",
        "html": "¤",
        "hex": "&#xA4;"
    },
    {
        "decimal": "&#165;",
        "entity": "&yen;",
        "html": "¥",
        "hex": "&#xA5;"
    },
    {
        "decimal": "&#166;",
        "entity": "&brvbar;",
        "html": "¦",
        "hex": "&#xA6;"
    },
    {
        "decimal": "&#167;",
        "entity": "&sect;",
        "html": "§",
        "hex": "&#xA7;"
    },
    {
        "decimal": "&#168;",
        "entity": "&uml;",
        "html": "¨",
        "hex": "&#xA8;"
    },
    {
        "decimal": "&#169;",
        "entity": "&copy;",
        "html": "©",
        "hex": "&#xA9;"
    },
    {
        "decimal": "&#170;",
        "entity": "&ordf;",
        "html": "ª",
        "hex": "&#xAA;"
    },
    {
        "decimal": "&#171;",
        "entity": "&laquo;",
        "html": "«",
        "hex": "&#xAB;"
    },
    {
        "decimal": "&#172;",
        "entity": "&not;",
        "html": "¬",
        "hex": "&#xAC;"
    },
    {
        "decimal": "&#173;",
        "entity": "&shy;",
        "html": "­",
        "hex": "&#xAD;"
    },
    {
        "decimal": "&#174;",
        "entity": "&reg;",
        "html": "®",
        "hex": "&#xAE;"
    },
    {
        "decimal": "&#175;",
        "entity": "&macr;",
        "html": "¯",
        "hex": "&#xAF;"
    },
    {
        "decimal": "&#176;",
        "entity": "&deg;",
        "html": "°",
        "hex": "&#xB0;"
    },
    {
        "decimal": "&#177;",
        "entity": "&plusmn;",
        "html": "±",
        "hex": "&#xB1;"
    },
    {
        "decimal": "&#178;",
        "entity": "&sup2;",
        "html": "²",
        "hex": "&#xB2;"
    },
    {
        "decimal": "&#179;",
        "entity": "&sup3;",
        "html": "³",
        "hex": "&#xB3;"
    },
    {
        "decimal": "&#180;",
        "entity": "&acute;",
        "html": "´",
        "hex": "&#xB4;"
    },
    {
        "decimal": "&#181;",
        "entity": "&micro;",
        "html": "µ",
        "hex": "&#xB5;"
    },
    {
        "decimal": "&#182;",
        "entity": "&para;",
        "html": "¶",
        "hex": "&#xB6;"
    },
    {
        "decimal": "&#184;",
        "entity": "&cedil;",
        "html": "¸",
        "hex": "&#xB8;"
    },
    {
        "decimal": "&#185;",
        "entity": "&sup1;",
        "html": "¹",
        "hex": "&#xB9;"
    },
    {
        "decimal": "&#186;",
        "entity": "&ordm;",
        "html": "º",
        "hex": "&#xBA;"
    },
    {
        "decimal": "&#187;",
        "entity": "&raquo;",
        "html": "»",
        "hex": "&#xBB;"
    },
    {
        "decimal": "&#188;",
        "entity": "&frac14;",
        "html": "¼",
        "hex": "&#xBC;"
    },
    {
        "decimal": "&#189;",
        "entity": "&frac12;",
        "html": "½",
        "hex": "&#xBD;"
    },
    {
        "decimal": "&#190;",
        "entity": "&frac34;",
        "html": "¾",
        "hex": "&#xBE;"
    },
    {
        "decimal": "&#191;",
        "entity": "&iquest;",
        "html": "¿",
        "hex": "&#xBF;"
    },
    {
        "decimal": "&#215;",
        "entity": "&times;",
        "html": "×",
        "hex": "&#xD7;"
    },
    {
        "decimal": "&#247;",
        "entity": "&divide;",
        "html": "÷",
        "hex": "&#xF7;"
    },
    {
        "decimal": "&#8704;",
        "entity": "&forall;",
        "html": "∀",
        "hex": "&#x2200;"
    },
    {
        "decimal": "&#8706;",
        "entity": "&part;",
        "html": "∂",
        "hex": "&#x2202;"
    },
    {
        "decimal": "&#8707;",
        "entity": "&exist;",
        "html": "∃",
        "hex": "&#x2203;"
    },
    {
        "decimal": "&#8709;",
        "entity": "&empty;",
        "html": "∅",
        "hex": "&#x2205;"
    },
    {
        "decimal": "&#8711;",
        "entity": "&nabla;",
        "html": "∇",
        "hex": "&#x2207;"
    },
    {
        "decimal": "&#8712;",
        "entity": "&isin;",
        "html": "∈",
        "hex": "&#x2208;"
    },
    {
        "decimal": "&#8713;",
        "entity": "&notin;",
        "html": "∉",
        "hex": "&#x2209;"
    },
    {
        "decimal": "&#8715;",
        "entity": "&ni;",
        "html": "∋",
        "hex": "&#x220B;"
    },
    {
        "decimal": "&#8719;",
        "entity": "&prod;",
        "html": "∏",
        "hex": "&#x220F;"
    },
    {
        "decimal": "&#8721;",
        "entity": "&sum;",
        "html": "∑",
        "hex": "&#x2211;"
    },
    {
        "decimal": "&#8722;",
        "entity": "&minus;",
        "html": "−",
        "hex": "&#x2212;"
    },
    {
        "decimal": "&#8727;",
        "entity": "&lowast;",
        "html": "∗",
        "hex": "&#x2217;"
    },
    {
        "decimal": "&#8730;",
        "entity": "&radic;",
        "html": "√",
        "hex": "&#x221A;"
    },
    {
        "decimal": "&#8733;",
        "entity": "&prop;",
        "html": "∝",
        "hex": "&#x221D;"
    },
    {
        "decimal": "&#8734;",
        "entity": "&infin;",
        "html": "∞",
        "hex": "&#x221E;"
    },
    {
        "decimal": "&#8736;",
        "entity": "&ang;",
        "html": "∠",
        "hex": "&#x2220;"
    },
    {
        "decimal": "&#8743;",
        "entity": "&and;",
        "html": "∧",
        "hex": "&#x2227;"
    },
    {
        "decimal": "&#8744;",
        "entity": "&or;",
        "html": "∨",
        "hex": "&#x2228;"
    },
    {
        "decimal": "&#8745;",
        "entity": "&cap;",
        "html": "∩",
        "hex": "&#x2229;"
    },
    {
        "decimal": "&#8746;",
        "entity": "&cup;",
        "html": "∪",
        "hex": "&#x222A;"
    },
    {
        "decimal": "&#8747;",
        "entity": "&int;",
        "html": "∫",
        "hex": "&#x222B;"
    },
    {
        "decimal": "&#8756;",
        "entity": "&there4;",
        "html": "∴",
        "hex": "&#x2234;"
    },
    {
        "decimal": "&#8764;",
        "entity": "&sim;",
        "html": "∼",
        "hex": "&#x223C;"
    },
    {
        "decimal": "&#8773;",
        "entity": "&cong;",
        "html": "≅",
        "hex": "&#x2245;"
    },
    {
        "decimal": "&#8776;",
        "entity": "&asymp;",
        "html": "≈",
        "hex": "&#x2248;"
    },
    {
        "decimal": "&#8800;",
        "entity": "&ne;",
        "html": "≠",
        "hex": "&#x2260;"
    },
    {
        "decimal": "&#8801;",
        "entity": "&equiv;",
        "html": "≡",
        "hex": "&#x2261;"
    },
    {
        "decimal": "&#8804;",
        "entity": "&le;",
        "html": "≤",
        "hex": "&#x2264;"
    },
    {
        "decimal": "&#8805;",
        "entity": "&ge;",
        "html": "≥",
        "hex": "&#x2265;"
    },
    {
        "decimal": "&#8834;",
        "entity": "&sub;",
        "html": "⊂",
        "hex": "&#x2282;"
    },
    {
        "decimal": "&#8835;",
        "entity": "&sup;",
        "html": "⊃",
        "hex": "&#x2283;"
    },
    {
        "decimal": "&#8836;",
        "entity": "&nsub;",
        "html": "⊄",
        "hex": "&#x2284;"
    },
    {
        "decimal": "&#8838;",
        "entity": "&sube;",
        "html": "⊆",
        "hex": "&#x2286;"
    },
    {
        "decimal": "&#8839;",
        "entity": "&supe;",
        "html": "⊇",
        "hex": "&#x2287;"
    },
    {
        "decimal": "&#8853;",
        "entity": "&oplus;",
        "html": "⊕",
        "hex": "&#x2295;"
    },
    {
        "decimal": "&#8855;",
        "entity": "&otimes;",
        "html": "⊗",
        "hex": "&#x2297;"
    },
    {
        "decimal": "&#8869;",
        "entity": "&perp;",
        "html": "⊥",
        "hex": "&#x22A5;"
    },
    {
        "decimal": "&#8901;",
        "entity": "&sdot;",
        "html": "⋅",
        "hex": "&#x22C5;"
    },
    {
        "decimal": "&#913;",
        "entity": "&Alpha;",
        "html": "Α",
        "hex": "&#x391;"
    },
    {
        "decimal": "&#914;",
        "entity": "&Beta;",
        "html": "Β",
        "hex": "&#x392;"
    },
    {
        "decimal": "&#915;",
        "entity": "&Gamma;",
        "html": "Γ",
        "hex": "&#x393;"
    },
    {
        "decimal": "&#916;",
        "entity": "&Delta;",
        "html": "Δ",
        "hex": "&#x394;"
    },
    {
        "decimal": "&#917;",
        "entity": "&Epsilon;",
        "html": "Ε",
        "hex": "&#x395;"
    },
    {
        "decimal": "&#918;",
        "entity": "&Zeta;",
        "html": "Ζ",
        "hex": "&#x396;"
    },
    {
        "decimal": "&#919;",
        "entity": "&Eta;",
        "html": "Η",
        "hex": "&#x397;"
    },
    {
        "decimal": "&#920;",
        "entity": "&Theta;",
        "html": "Θ",
        "hex": "&#x398;"
    },
    {
        "decimal": "&#921;",
        "entity": "&Iota;",
        "html": "Ι",
        "hex": "&#x399;"
    },
    {
        "decimal": "&#922;",
        "entity": "&Kappa;",
        "html": "Κ",
        "hex": "&#x39A;"
    },
    {
        "decimal": "&#923;",
        "entity": "&Lambda;",
        "html": "Λ",
        "hex": "&#x39B;"
    },
    {
        "decimal": "&#924;",
        "entity": "&Mu;",
        "html": "Μ",
        "hex": "&#x39C;"
    },
    {
        "decimal": "&#925;",
        "entity": "&Nu;",
        "html": "Ν",
        "hex": "&#x39D;"
    },
    {
        "decimal": "&#926;",
        "entity": "&Xi;",
        "html": "Ξ",
        "hex": "&#x39E;"
    },
    {
        "decimal": "&#927;",
        "entity": "&Omicron;",
        "html": "Ο",
        "hex": "&#x39F;"
    },
    {
        "decimal": "&#928;",
        "entity": "&Pi;",
        "html": "Π",
        "hex": "&#x3A0;"
    },
    {
        "decimal": "&#929;",
        "entity": "&Rho;",
        "html": "Ρ",
        "hex": "&#x3A1;"
    },
    {
        "decimal": "&#931;",
        "entity": "&Sigma;",
        "html": "Σ",
        "hex": "&#x3A3;"
    },
    {
        "decimal": "&#932;",
        "entity": "&Tau;",
        "html": "Τ",
        "hex": "&#x3A4;"
    },
    {
        "decimal": "&#933;",
        "entity": "&Upsilon;",
        "html": "Υ",
        "hex": "&#x3A5;"
    },
    {
        "decimal": "&#934;",
        "entity": "&Phi;",
        "html": "Φ",
        "hex": "&#x3A6;"
    },
    {
        "decimal": "&#935;",
        "entity": "&Chi;",
        "html": "Χ",
        "hex": "&#x3A7;"
    },
    {
        "decimal": "&#936;",
        "entity": "&Psi;",
        "html": "Ψ",
        "hex": "&#x3A8;"
    },
    {
        "decimal": "&#937;",
        "entity": "&Omega;",
        "html": "Ω",
        "hex": "&#x3A9;"
    },
    {
        "decimal": "&#945;",
        "entity": "&alpha;",
        "html": "α",
        "hex": "&#x3B1;"
    },
    {
        "decimal": "&#946;",
        "entity": "&beta;",
        "html": "β",
        "hex": "&#x3B2;"
    },
    {
        "decimal": "&#947;",
        "entity": "&gamma;",
        "html": "γ",
        "hex": "&#x3B3;"
    },
    {
        "decimal": "&#948;",
        "entity": "&delta;",
        "html": "δ",
        "hex": "&#x3B4;"
    },
    {
        "decimal": "&#949;",
        "entity": "&epsilon;",
        "html": "ε",
        "hex": "&#x3B5;"
    },
    {
        "decimal": "&#950;",
        "entity": "&zeta;",
        "html": "ζ",
        "hex": "&#x3B6;"
    },
    {
        "decimal": "&#951;",
        "entity": "&eta;",
        "html": "η",
        "hex": "&#x3B7;"
    },
    {
        "decimal": "&#952;",
        "entity": "&theta;",
        "html": "θ",
        "hex": "&#x3B8;"
    },
    {
        "decimal": "&#953;",
        "entity": "&iota;",
        "html": "ι",
        "hex": "&#x3B9;"
    },
    {
        "decimal": "&#954;",
        "entity": "&kappa;",
        "html": "κ",
        "hex": "&#x3BA;"
    },
    {
        "decimal": "&#955;",
        "entity": "&lambda;",
        "html": "λ",
        "hex": "&#x3BB;"
    },
    {
        "decimal": "&#956;",
        "entity": "&mu;",
        "html": "μ",
        "hex": "&#x3BC;"
    },
    {
        "decimal": "&#957;",
        "entity": "&nu;",
        "html": "ν",
        "hex": "&#x3BD;"
    },
    {
        "decimal": "&#958;",
        "entity": "&xi;",
        "html": "ξ",
        "hex": "&#x3BE;"
    },
    {
        "decimal": "&#959;",
        "entity": "&omicron;",
        "html": "ο",
        "hex": "&#x3BF;"
    },
    {
        "decimal": "&#960;",
        "entity": "&pi;",
        "html": "π",
        "hex": "&#x3C0;"
    },
    {
        "decimal": "&#961;",
        "entity": "&rho;",
        "html": "ρ",
        "hex": "&#x3C1;"
    },
    {
        "decimal": "&#962;",
        "entity": "&sigmaf;",
        "html": "ς",
        "hex": "&#x3C2;"
    },
    {
        "decimal": "&#963;",
        "entity": "&sigma;",
        "html": "σ",
        "hex": "&#x3C3;"
    },
    {
        "decimal": "&#964;",
        "entity": "&tau;",
        "html": "τ",
        "hex": "&#x3C4;"
    },
    {
        "decimal": "&#965;",
        "entity": "&upsilon;",
        "html": "υ",
        "hex": "&#x3C5;"
    },
    {
        "decimal": "&#966;",
        "entity": "&phi;",
        "html": "φ",
        "hex": "&#x3C6;"
    },
    {
        "decimal": "&#967;",
        "entity": "&chi;",
        "html": "χ",
        "hex": "&#x3C7;"
    },
    {
        "decimal": "&#968;",
        "entity": "&psi;",
        "html": "ψ",
        "hex": "&#x3C8;"
    },
    {
        "decimal": "&#969;",
        "entity": "&omega;",
        "html": "ω",
        "hex": "&#x3C9;"
    },
    {
        "decimal": "&#977;",
        "entity": "&thetasym;",
        "html": "ϑ",
        "hex": "&#x3D1;"
    },
    {
        "decimal": "&#978;",
        "entity": "&upsih;",
        "html": "ϒ",
        "hex": "&#x3D2;"
    },
    {
        "decimal": "&#982;",
        "entity": "&piv;",
        "html": "ϖ",
        "hex": "&#x3D6;"
    },
    {
        "decimal": "&#338;",
        "entity": "&OElig;",
        "html": "Œ",
        "hex": "&#x152;"
    },
    {
        "decimal": "&#339;",
        "entity": "&oelig;",
        "html": "œ",
        "hex": "&#x153;"
    },
    {
        "decimal": "&#352;",
        "entity": "&Scaron;",
        "html": "Š",
        "hex": "&#x160;"
    },
    {
        "decimal": "&#353;",
        "entity": "&scaron;",
        "html": "š",
        "hex": "&#x161;"
    },
    {
        "decimal": "&#376;",
        "entity": "&Yuml;",
        "html": "Ÿ",
        "hex": "&#x178;"
    },
    {
        "decimal": "&#402;",
        "entity": "&fnof;",
        "html": "ƒ",
        "hex": "&#x192;"
    },
    {
        "decimal": "&#710;",
        "entity": "&circ;",
        "html": "ˆ",
        "hex": "&#x2C6;"
    },
    {
        "decimal": "&#732;",
        "entity": "&tilde;",
        "html": "˜",
        "hex": "&#x2DC;"
    },
    {
        "decimal": "&#8194;",
        "entity": "&ensp;",
        "html": " ",
        "hex": "&#x2002;"
    },
    {
        "decimal": "&#8195;",
        "entity": "&emsp;",
        "html": " ",
        "hex": "&#x2003;"
    },
    {
        "decimal": "&#8201;",
        "entity": "&thinsp;",
        "html": " ",
        "hex": "&#x2009;"
    },
    {
        "decimal": "&#8204;",
        "entity": "&zwnj;",
        "html": "‌",
        "hex": "&#x200C;"
    },
    {
        "decimal": "&#8205;",
        "entity": "&zwj;",
        "html": "‍",
        "hex": "&#x200D;"
    },
    {
        "decimal": "&#8206;",
        "entity": "&lrm;",
        "html": "‎",
        "hex": "&#x200E;"
    },
    {
        "decimal": "&#8207;",
        "entity": "&rlm;",
        "html": "‏",
        "hex": "&#x200F;"
    },
    {
        "decimal": "&#8211;",
        "entity": "&ndash;",
        "html": "–",
        "hex": "&#x2013;"
    },
    {
        "decimal": "&#8212;",
        "entity": "&mdash;",
        "html": "—",
        "hex": "&#x2014;"
    },
    {
        "decimal": "&#8216;",
        "entity": "&lsquo;",
        "html": "‘",
        "hex": "&#x2018;"
    },
    {
        "decimal": "&#8217;",
        "entity": "&rsquo;",
        "html": "’",
        "hex": "&#x2019;"
    },
    {
        "decimal": "&#8218;",
        "entity": "&sbquo;",
        "html": "‚",
        "hex": "&#x201A;"
    },
    {
        "decimal": "&#8220;",
        "entity": "&ldquo;",
        "html": "“",
        "hex": "&#x201C;"
    },
    {
        "decimal": "&#8221;",
        "entity": "&rdquo;",
        "html": "”",
        "hex": "&#x201D;"
    },
    {
        "decimal": "&#8222;",
        "entity": "&bdquo;",
        "html": "„",
        "hex": "&#x201E;"
    },
    {
        "decimal": "&#8224;",
        "entity": "&dagger;",
        "html": "†",
        "hex": "&#x2020;"
    },
    {
        "decimal": "&#8225;",
        "entity": "&Dagger;",
        "html": "‡",
        "hex": "&#x2021;"
    },
    {
        "decimal": "&#8226;",
        "entity": "&bull;",
        "html": "•",
        "hex": "&#x2022;"
    },
    {
        "decimal": "&#8230;",
        "entity": "&hellip;",
        "html": "…",
        "hex": "&#x2026;"
    },
    {
        "decimal": "&#8240;",
        "entity": "&permil;",
        "html": "‰",
        "hex": "&#x2030;"
    },
    {
        "decimal": "&#8242;",
        "entity": "&prime;",
        "html": "′",
        "hex": "&#x2032;"
    },
    {
        "decimal": "&#8243;",
        "entity": "&Prime;",
        "html": "″",
        "hex": "&#x2033;"
    },
    {
        "decimal": "&#8249;",
        "entity": "&lsaquo;",
        "html": "‹",
        "hex": "&#x2039;"
    },
    {
        "decimal": "&#8250;",
        "entity": "&rsaquo;",
        "html": "›",
        "hex": "&#x203A;"
    },
    {
        "decimal": "&#8254;",
        "entity": "&oline;",
        "html": "‾",
        "hex": "&#x203E;"
    },
    {
        "decimal": "&#8364;",
        "entity": "&euro;",
        "html": "€",
        "hex": "&#x20AC;"
    },
    {
        "decimal": "&#8482;",
        "entity": "&trade;",
        "html": "™",
        "hex": "&#x2122;"
    },
    {
        "decimal": "&#8592;",
        "entity": "&larr;",
        "html": "←",
        "hex": "&#x2190;"
    },
    {
        "decimal": "&#8593;",
        "entity": "&uarr;",
        "html": "↑",
        "hex": "&#x2191;"
    },
    {
        "decimal": "&#8594;",
        "entity": "&rarr;",
        "html": "→",
        "hex": "&#x2192;"
    },
    {
        "decimal": "&#8595;",
        "entity": "&darr;",
        "html": "↓",
        "hex": "&#x2193;"
    },
    {
        "decimal": "&#8596;",
        "entity": "&harr;",
        "html": "↔",
        "hex": "&#x2194;"
    },
    {
        "decimal": "&#8629;",
        "entity": "&crarr;",
        "html": "↵",
        "hex": "&#x21B5;"
    },
    {
        "decimal": "&#8968;",
        "entity": "&lceil;",
        "html": "⌈",
        "hex": "&#x2308;"
    },
    {
        "decimal": "&#8969;",
        "entity": "&rceil;",
        "html": "⌉",
        "hex": "&#x2309;"
    },
    {
        "decimal": "&#8970;",
        "entity": "&lfloor;",
        "html": "⌊",
        "hex": "&#x230A;"
    },
    {
        "decimal": "&#8971;",
        "entity": "&rfloor;",
        "html": "⌋",
        "hex": "&#x230B;"
    },
    {
        "decimal": "&#9674;",
        "entity": "&loz;",
        "html": "◊",
        "hex": "&#x25CA;"
    },
    {
        "decimal": "&#9824;",
        "entity": "&spades;",
        "html": "♠",
        "hex": "&#x2660;"
    },
    {
        "decimal": "&#9827;",
        "entity": "&clubs;",
        "html": "♣",
        "hex": "&#x2663;"
    },
    {
        "decimal": "&#9829;",
        "entity": "&hearts;",
        "html": "♥",
        "hex": "&#x2665;"
    },
    {
        "decimal": "&#9830;",
        "entity": "&diams;",
        "html": "♦",
        "hex": "&#x2666;"
    }

];var listType = [
    'decimal',
    'entity',
    'hex'
];

var whitespace = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003' +
         '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
         '\u2029\uFEFF';


function strUnEscape (value, type) {

    var typeVal = type || "entity";

    if (indexOfNotExist(typeVal, listType)) {

        return "";

    }

    var regexReplace = toString(value).replace(/(&[#]{0,1}[a-zA-Z-0-9]{1,};)/g, function (str1) {

        var search = {};

        search[typeVal] =str1;

        var whr = where(once(search), entity);

        return isEmpty(whr)
            ? str1
            : first(whr).html;

    });

    return regexReplace;

}


function strSubs (value, minValue, maxValue) {

    if (has(maxValue)) {

        return toString(value).substring(minValue, maxValue);

    }

    return toString(value).substring(minValue);

}

var ObjOpen = {
    "[": {
        "close": "]",
        "type": "array"
    },
    "{": {
        "close": "}",
        "type": "json"
    }
};


function parseJson (value, config) {

    var defaultConfig = varExtend({"disableCorrection": false,
        "invalidDefaultValue": null,
        "throwError": false}, config);

    if (getTypeof(value) !== "string") {

        if (defaultConfig.throwError) {

            throw new Error("Allow only string to parse to json");

        }

        return defaultConfig.invalidDefaultValue;

    }

    try {

        if (defaultConfig.disableCorrection) {

            return JSON.parse(value);

        }

        var stripValue = constrJson(strUnEscape(value));

        return JSON.parse(stripValue, function (__, revValue) {

            return revValue;

        });

    } catch (err) {

        if (defaultConfig.throwError) {

            throw err;

        }

        return defaultConfig.invalidDefaultValue;

    }

}


function escapeQuotesJson (str) {

    str = str.replace(/&quot;/g, "&bsol;&quot;");

    str= str.replace(/&apos;/g, "&bsol;&quot;");
    var str_split = str.trim().split("");

    each(str_split, function (value, key) {

        if (key>zero && key<str_split.length) {

            if (str_split[key] === '"') {

                str_split[key] = '\\"';

            }

        }

    });

    return str_split.join("");

}


function validationLastStr (validValidation, firstFindAction, last_str) {

    if (validValidation) {

        var newLineSecCode = "##"+getUniq()+"##";

        last_str = last_str.toString()
            .replace(/\n/g, newLineSecCode)
            .replace(/\\n/g, newLineSecCode)
            .replace(/\s/g, " ")
            .replace(/\t/g, "   ")
            .replace(/\\s/g, " ")
            .replace(/\\/g, "");
        last_str = last_str.toString().replaceAll(newLineSecCode.toString(), "\\n");
        if (firstFindAction === "char_obj") {

            last_str = '"'+last_str.trim().replace(/['`"]$/g, '')+'"';

        } else if (firstFindAction === "qoute") {

            last_str = escapeQuotesJson(last_str.trim().replace(/['`"]$/g, ''))+'"';

        } else if (firstFindAction === "number") {

            last_str = last_str.trim();

        } else {

            last_str = escapeQuotesJson(last_str.trim());

        }

    }

    return last_str;

}


function validateBacklastHasChar (last_str, firstFindAction, lastAction, currentAction) {

    var slashValue = (/[^\\]$/g).test(last_str.trim());

    if (slashValue && firstFindAction === "qoute") {

        slashValue = false;

        if (firstFindAction === lastAction) {

            slashValue = true;

        }
        if (slashValue) {

            if ([
                "separator",
                "close_obj",
                "open_obj"
            ].indexOf(currentAction) >= zero) {

                slashValue = false;
                var last_str_split = last_str.trim().split("");

                if (last_str_split.length > zero) {

                    slashValue = last_str_split[zero] === last_str_split[last_str_split.length-one] && strSubs(last_str.trim(), last_str_split.length-two) !=='\\"';

                }

            }

        }

    }

    return slashValue;

}


function getStructVal (ob_str, ob_type) {

    var ass = ob_str.split("");
    var appen_str = "";
    var last_str = "";
    var firstFindAction = "none";
    var lastAction = "none";
    var keyValType = ob_type==="json"
        ? "key"
        :"value";
    var isOpen = false;
    var count = 0;
    var rawCount = 0;
    var continue_vali = true;

    while (count< ass.length) {

        var valChar = ass[count];
        var currentAction = charType(valChar);

        if (isOpen) {

            var slashValue = validateBacklastHasChar(last_str, firstFindAction, lastAction, currentAction);

            var str_append_last = "";

            if (currentAction !== firstFindAction && slashValue) {

                if (firstFindAction==="number" && currentAction==="char_obj" && valChar !==",") {

                    firstFindAction = "char_obj";

                }

            }

            if (currentAction !=="none") {

                lastAction = currentAction;

            }

            if (currentAction === "open_obj" && slashValue) {

                continue_vali = true;
                count = ass.length+one;

            }
            var validValidation = false;

            if (keyValType === "key" && continue_vali === false) {

                if (valChar===":" && slashValue) {

                    last_str = last_str.replace(/\\/g, "");
                    if (firstFindAction === "qoute") {

                        last_str = last_str.trim().replace(/['`]$/g, '"')+'';

                    } else {

                        last_str = '"'+last_str.trim().replace(/['`]$/g, '')+'"';

                    }
                    rawCount +=one;

                    str_append_last=":";
                    continue_vali = true;
                    keyValType = "value";
                    validValidation = false;

                }

            }
            if (keyValType === "value" && continue_vali === false) {

                if (currentAction === "close_obj" && slashValue) {

                    keyValType = ob_type==="json"
                        ? "key"
                        :"value";
                    validValidation = true;
                    continue_vali = true;
                    isOpen = true;

                }
                if (currentAction === "separator" && slashValue) {

                    rawCount +=one;
                    str_append_last=",";
                    continue_vali = true;
                    validValidation = true;
                    keyValType = ob_type==="json"
                        ? "key"
                        :"value";

                }

            }
            last_str = validationLastStr(validValidation, firstFindAction, last_str);

            if (continue_vali) {

                isOpen = false;
                appen_str+=last_str.replace(/^[`']/, '"')+str_append_last;
                last_str = "";

            } else {

                last_str+=valChar;
                rawCount +=one;

            }

        } else {

            if ([
                "open_obj",
                "close_obj"
            ].indexOf(currentAction) >=zero) {

                count = ass.length+one;
                firstFindAction = currentAction;

            } else if (currentAction === "qoute") {

                continue_vali = false;
                rawCount +=one;
                isOpen = true;
                last_str = valChar;
                firstFindAction = currentAction;
                lastAction = "none";

            } else {

                rawCount +=one;
                if (currentAction !== "none") {

                    isOpen = true;
                    last_str = valChar;
                    continue_vali = false;
                    firstFindAction = currentAction;
                    lastAction = "none";

                }

            }

        }

        count+=one;

    }

    if ((/[,]{1,}[\s\t\n]{0,}$/g).test(appen_str)) {

        rawCount -=one;

    }

    return {
        "count": rawCount-one,
        "word": appen_str.replace(/[,]{1,}[\s\t\n]{0,}$/g, "")
    };

}


function constrJson (ob_str) {

    var ass = ob_str
        .split("");
    var count = 0;
    var rawCounter = 1;
    var op_c = 0;
    var structCount = 0;
    var type_c = "";

    var append_str = "";
    var firstExpectedClose = "";

    while (count< ass.length) {

        var vales = ass[count];

        if (op_c >zero) {

            if (type_c !== "") {

                var cntntStr = strSubs(ob_str, count);
                var valStruct = getStructVal(cntntStr, type_c);

                append_str += valStruct.word;
                rawCounter += valStruct.count;
                structCount = rawCounter;

                if (rawCounter<=zero) {

                    structCount = zero;
                    rawCounter =one;

                }

                type_c = "";

            }

        }

        if (indexOfExist(vales, [
            "[",
            "{"
        ])) {

            type_c = ObjOpen[vales].type;
            if (op_c ===zero) {

                firstExpectedClose = ObjOpen[vales].close;

            }

            if (structCount > zero && (/[^:][\s\t\n]{0,}$/g).test(append_str)) {

                append_str += ",";

            }
            op_c +=one;
            append_str += vales;

        }

        if (indexOfExist(vales, [
            "]",
            "}"
        ])) {

            op_c -=one;

            if (op_c >=zero) {

                append_str += vales;

            }

        }

        count +=rawCounter;
        rawCounter = one;

    }

    if (op_c ===one && firstExpectedClose !== "") {

        op_c -=one;
        append_str+=firstExpectedClose;

    }

    if (op_c >zero) {

        throw new Error("Invalid JSON string");

    }

    return append_str;

}


function charType (valChar) {

    var currentAction = "none";

    if ([
        "[",
        '{'
    ].indexOf(valChar) >=zero) {

        currentAction = "open_obj";

    } else if ([
        "]",
        '}'
    ].indexOf(valChar) >=zero) {

        currentAction = "close_obj";

    } else if ([","].indexOf(valChar) >=zero) {

        currentAction = "separator";

    } else if ([
        "'",
        '"',
        '`'
    ].indexOf(valChar) >=zero) {

        currentAction = "qoute";

    } else if ((/[0-9]/g).test(valChar)) {

        currentAction = "number";

    } else if ([
        "'",
        '"',
        '`'
    ].indexOf(valChar) === negOne && (/[\s\t\t]/g).test(valChar) ===false) {

        currentAction = "char_obj";

    } else {

        currentAction = "none";

    }

    return currentAction;

}

_stk.parseJson=parseJson;
function pipe () {

    var arg=arguments;    var pipeConst = first(arg);
    var varLimit = limit(arg, one);
    var that = this;

    return curryArg(function () {

    var rawValue=arguments;

        return baseReduce(function (total, value) {

            if (getTypeofInternal(value) === "function") {

                total = value.call(that, total);

            }

            return total;

        }, pipeConst.apply(that, rawValue), varLimit);

    // eslint-disable-next-line padded-blocks
    // eslint-disable-next-line no-undefined
    }, arrayRepeat(undefined, pipeConst.length), pipeConst.length);

}

_stk.pipe=pipe;
function random (valueArray, minValue, maxValue) {

    var ran_min=has(minValue)
        ?minValue
        :zero;    var ran_max=has(maxValue)
        ?maxValue+ran_min
        :count(valueArray);
    var math_random = Math.round(Math.random()*ran_max);

    if (math_random< count(valueArray) && math_random >=zero) {

        return toArray(valueArray[math_random]);

    }

    return toArray(valueArray[math_random % count(valueArray)]);

}

_stk.random=random;
_stk.range=range;function parseString (value, config) {

    var defaultConfig = varExtend({"ignoreFunction": true,
        "isJson": false,
        "throwError": false,
        "unscapeEntity": false}, config);    if (indexOfNotExist(getTypeof(value), getKey(validTypeJson))) {

        if (defaultConfig.throwError) {

            throw new Error("Allow only " +toArray(getKey(validTypeJson)).join(","));

        }

        return '';

    }

    var data = parseStringCore(zero, defaultConfig, value);

    if (defaultConfig.unscapeEntity) {

        data = strUnEscape(data);

    }

    return data.toString();

}


function escapeQuotesStr (str) {

    return str.replace(/'/g, "&apos;").replace(/"/g, '&quot;');

}


function parseStringCore (rawCount, rawConfig, rawValue) {

    return curryArg(function (refCount, refConfig, value) {

        var prepStr = "";

        if (has(rawCount === zero
            ?validTypeJson
            :remove(validTypeJson, "object"), getTypeof(value))) {

            var getTypeDetails = validTypeJson[getTypeof(value)];

            var inc=zero;

            each(value, function (ev, ek) {

                var delimeter=inc<count(value)-one
                    ?","
                    :"";

                if (getTypeDetails.isKey) {

                    prepStr += parseStringCore(rawCount+one, rawConfig, ek)+":"+parseStringCore(one, rawConfig, ev)+delimeter;

                } else {

                    prepStr += parseStringCore(rawCount+one, rawConfig, ev)+delimeter;

                }

                inc += one;

            });

            return getTypeDetails.start+prepStr+getTypeDetails.end;

        }

        var parseValue = convertValue(value);

        if (getTypeof(parseValue) === "string") {

            return '"'+escapeQuotesStr(parseValue)+'"';

        }
        if (getTypeof(parseValue) === "undefined") {

            return '"undefined"';

        }
        if (getTypeof(parseValue) === "date") {

            return '"'+toString(parseValue)+'"';

        }
        if (getTypeof(parseValue) === "regexp") {

            return '"new RegExp(' + value.source +','+ value.flags+')"';

        }

        if (getTypeof(parseValue) === "number") {

            if (isNaN(parseValue)) {

                return '"NaN"';

            }

            if (Infinity === parseValue) {

                return '"Infinity"';

            }

            return value;

        }

        if (getTypeof(value) === "object") {

            return '"'+value+'"';

        }

        if (getTypeof(parseValue) === "function") {

            if (refConfig.ignoreFunction) {

                return null;

            }

            return '"'+parseValue+'"';

        }

        return parseValue;

    }, [
        rawCount,
        rawConfig,
        rawValue
    ], two);

}

_stk.parseString=parseString;
_stk.reduce=reduce;function regexCountGroup (value) {

    return new RegExp(toString(value) + '|').exec('').length - one;}

_stk.regexCountGroup=regexCountGroup;
_stk.remove=remove;function repeat (value, valueRepetion) {

    return curryArg(function (rawValue, rawValueRepetion) {

        var nm_rpt=rawValueRepetion||zero;        var nm_str=rawValue||"";

        return arrayRepeat(nm_str, nm_rpt).join("");

    }, [
        value,
        valueRepetion
    ]);

}

_stk.repeat=repeat;
function reverse (value) {

    return curryArg(function (rawValue) {

        var typeOf = getTypeof(rawValue);        var refRawList = typeOf=== "string"
            ?rawValue.split("")
            :rawValue;

        var cloneMap = map(function (__, key) {

            return refRawList[count(refRawList) - one - key];

        }, refRawList);

        return typeOf === "string"
            ?cloneMap.join("")
            :cloneMap;

    }, [value], one);

}

_stk.reverse=reverse;
_stk.roundDecimal=roundDecimal;_stk.selectInData=selectInData;function setData (split_str, objectValue, updateValue) {

    if (!has(objectValue)) {

        return {};    }

    return curryArg(function (rawSplit_str, rawObjectValue, rawUpdateValue) {

        if (isEmpty(rawSplit_str)) {

            return empty(rawObjectValue);

        }

        var spl= schemaSplitData(rawSplit_str);

        return baseReduce(function (total, value) {

            if (getTypeofInternal(total) === "json") {

                valueToUpdate(total, value, rawUpdateValue);

            }
            if (getTypeofInternal(total) === "array") {

                var rawTotal = first(total);

                valueToUpdate(rawTotal, value, rawUpdateValue);
                total = [rawTotal];

            }

            return total;

        }, rawObjectValue, [spl]);

    }, [
        split_str,
        objectValue,
        updateValue
    ]);

}


function valueToUpdate (objectValue, whereStr, updateValue) {

    var getRmoveValue = remove(whereStr, zero);

    if (isEmpty(getRmoveValue)) {

        objectValue[first(whereStr)] = updateValue;

    } else {

        if (has(objectValue, first(whereStr)) === false) {

            objectValue[first(whereStr)] = {};

        }
        valueToUpdate(objectValue[first(whereStr)], getRmoveValue, updateValue);

    }

}

_stk.setData=setData;
function shuffle (objectValue) {

    var output=[];    var rawObjectValue = clone(objectValue);
    var valueType=[
        "array",
        "json"
    ];

    if (indexOf(getTypeof(objectValue), valueType)>-one) {

        var counts=count(objectValue)-one;

        for (var currentIndex=counts; currentIndex>=zero;) {

            var rowValue = random(rawObjectValue);

            rawObjectValue = clone(remove(rawObjectValue, indexOf(first(rowValue), rawObjectValue)));
            output.push(first(rowValue));
            currentIndex -= one;

        }

    }

    return output;

}

_stk.shuffle=shuffle;
function someValid () {

    var arg=arguments;    return curryArg(function () {

    var rawValue=arguments;

        return baseCountValidList(rawValue);

    }, arg) >= one;

}

_stk.someValid=someValid;
function baseSort (objectValue, func) {

    var jsonn=objectValue;    var js_m=getTypeofInternal(jsonn) === "json"
        ?each(jsonn)
        :jsonn;

    var finalResponse=js_m.sort(function (orderA, orderB) {

        if (has(func) && getTypeofInternal(func) === 'function') {

            return func(orderA, orderB);

        }

        return orderA- orderB;

    });

    return finalResponse;

}


function sortBy (func, objectValue) {

    return curryArg(function (rawFunc, rawObjectValue) {

        var finalResponse=baseSort(rawObjectValue, function (orderA, orderB) {

            if (has(func) && getTypeof(func) === 'function') {

                return rawFunc(orderA, orderB);

            }

            return orderA - orderB;

        });

        return finalResponse;

    }, [
        func,
        objectValue
    ]);

}

_stk.sortBy=sortBy;
function stringSplit (value) {

    return value.trim()
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
        .replace(/([-_.\s]+)/g, ' ')
        .toLowerCase();}


function strCamel (value) {

    return stringSplit(toString(value))
        .replace(/(\s[a-z])/g, function (ss1) {

            return ss1.toUpperCase();

        })
        .split(" ")
        .join("");

}

_stk.strCamel=strCamel;
function strCapitalize (value, option) {

    if (option === "all") {

        return toString(value).replace(/(\s[a-z]|\b[a-z])/g, function (ss1) {

            return ss1.toUpperCase();        });

    }

    return toString(value).replace(/([a-z]{1})/, function (ss1) {

        return ss1.toUpperCase();

    });

}

_stk.strCapitalize=strCapitalize;
function strEscape (value, type) {

    var typeVal = type || "entity";    if (indexOfNotExist(typeVal, listType)) {

        return "";

    }

    var regexReplace = toString(value).replace(/([\s<>"'^&{}])/g, function (str1) {

        var search = {"html": str1};

        var whr = where(once(search), entity);

        return isEmpty(whr)
            ? str1
            : first(whr)[typeVal];

    });

    return regexReplace;

}

_stk.strEscape=strEscape;
function strKebab (value) {

    return stringSplit(toString(value))
        .split(" ")
        .join("-");}

_stk.strKebab=strKebab;
_stk.strLower=strLower;function strSnake (value) {

    return stringSplit(toString(value))
        .split(" ")
        .join("_");}

_stk.strSnake=strSnake;
_stk.strSubs=strSubs;_stk.strUnEscape=strUnEscape;function strUpper (value) {

    return toString(value).toUpperCase();}

_stk.strUpper=strUpper;
_stk.subtract=subtract;function swap (firstValue, secondValue, listValue) {

    return curryArg(function (rawFirstValue, rawSecondValue, rawListValue) {

        var cloneRawListValueReturn = rawListValue;        var isSplit = false;

        if (getTypeof(cloneRawListValueReturn) !== "array") {

            cloneRawListValueReturn = toString(cloneRawListValueReturn).split("");
            isSplit = true;

        }

        var cloneRawListValue = clone(cloneRawListValueReturn);

        cloneRawListValueReturn[rawFirstValue] = cloneRawListValue[rawSecondValue];
        cloneRawListValueReturn[rawSecondValue] = cloneRawListValue[rawFirstValue];

        if (isSplit) {

            cloneRawListValueReturn = toArray(cloneRawListValueReturn).join("");

        }

        return cloneRawListValueReturn;

    }, [
        firstValue,
        secondValue,
        listValue
    ]);

}

_stk.swap=swap;
function baseTake (rawList, startIndex, lastIndex) {

    var refRawList = getTypeofInternal(rawList) === "string"
        ?rawList.split("")
        :rawList;    var varLimit = limit(refRawList, startIndex, lastIndex);

    var rawGetValue = getValue(varLimit);

    return getTypeofInternal(rawList) === "string"
        ?toArray(rawGetValue).join("")
        :rawGetValue;

}


function take (value, valueList) {

    return curryArg(function (rawValue, rawList) {

        return baseTake(rawList, zero, rawValue-one);

    }, [
        value,
        valueList
    ], two);

}

_stk.take=take;
function templates (templateString, data, option) {

    return curryArg(function (rawTemplateString, rawData, rawOption) {

        var default_option = varExtend({
            "close_tag": "!>",
            "open_tag": "<!",
            "throwError": false
        }, rawOption);        var temp = syntaxCleanup(rawTemplateString, default_option);

        var tag_replace={
            "evaluate": default_option.open_tag+"[^=\\#]([\\s\\S]+?)"+default_option.close_tag,
            "interpolate": default_option.open_tag+"=([\\s\\S]+?)"+default_option.close_tag
        };

        var regexp = new RegExp([
            tag_replace.evaluate,
            tag_replace.interpolate
        ].join("|")+"|$", "g");

        var source = "__p += '";
        var index = 0;

        var escapes = {
            '\n': 'n',
            '\r': 'r',
            "'": "'",
            '\\': '\\',
            '\u2028': 'u2028',
            '\u2029': 'u2029'
        };

        var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

        var escapeChar = function (match) {

            return '\\' + escapes[match];

        };

        temp.replace(regexp, function (match, evaluate, interpolate, offset) {

            source += temp.slice(index, offset).replace(escaper, escapeChar);

            index = offset+match.length;

            if (evaluate) {

                source += "';\n"+evaluate+"\n__p += '";

            }

            if (interpolate) {

                source += "'+\n((__t=("+interpolate+")) == null?'':__t)+\n'";

            }

            return match;

        });

        var sourceData = reduce(function (total, vv, kk) {

            // eslint-disable-next-line no-nested-ternary
            return total+"var "+toString(kk)+" = "+(isJson(vv)
                ?parseString(vv)
                :getTypeof(vv) === "string"
                    ?'"'+vv+'"'
                    :vv)+";\n";

        }, "", rawData);

        source += "';\n";

        source = "var __t,__p='';" + sourceData+source + " return __p;\n";

        try {

            var render = new Function('obj', source);

            return render.call(this, rawData, templates);

        } catch (error) {

            if (default_option.throwError) {

                throw new Error(error);

            }

            return "";

        }

    }, [
        templateString,
        data,
        option
    ], two);

}


function syntaxCleanup (data, option) {

    var str_split = data.split("");
    var openSplit = option.open_tag.split("");

    var closeSplit = option.close_tag.split("");

    var commentCounter = 0;

    var errorMessage = "";

    if (option.open_tag.length <= one) {

        errorMessage = "Open tag must greater or equal to two";

        return data;

    }

    if (option.close_tag.length <= one) {

        errorMessage = "Close tag must greater or equal to two";

        return data;

    }

    if (option.throwError && errorMessage !=="") {

        throw new Error(errorMessage);

    }

    return reduce(function (total, vv, kk) {

        if (kk>one) {

            if (str_split[kk-two]===openSplit[zero] && str_split[kk-one] === openSplit[one]) {

                if (commentCounter>zero) {

                    commentCounter += one;

                }
                if (vv === "=") {

                    if (commentCounter===zero) {

                        return total+vv+" ";

                    }

                }
                if (vv === "#") {

                    commentCounter += one;
                    if (commentCounter>zero) {

                        return total.replace(new RegExp(option.open_tag+"$", "g"), "");

                    }

                }
                if (vv !== " ") {

                    if (commentCounter===zero) {

                        return total+" "+vv;

                    }

                }

            }

            if (str_split[kk-two]===closeSplit[zero] && str_split[kk-one] === closeSplit[one] && commentCounter>zero) {

                commentCounter -= one;

            }

            if (commentCounter>zero) {

                return total;

            }

        }

        return total+vv;

    }, "", str_split);

}

_stk.templates=templates;
_stk.toArray=toArray;_stk.toBoolean=toBoolean;_stk.toDouble=toDouble;function toInteger (value) {

    return parseInt(dataNumberFormat(/(\d)/g, zero, value === null
        ?zero
        :value), 10);}

_stk.toInteger=toInteger;
function toPairs (value) {

    if (getTypeofInternal(value) !== "json") {

        throw new Error("Value must be an json");    }

    return baseReduce(function (total, subValue, subKey) {

        var subArray = [];

        subArray.push(subKey);
        setDepthValue(subArray, subValue);
        total.push(subArray);

        return total;

    }, [], value);

}


function setDepthValue (arryData, value) {

    if (getTypeofInternal(value) === "json") {

        arryData.push(getKey(value));
        setDepthValue(arryData, getValue(value));

    } else {

        arryData.push(value);

    }

}

_stk.toPairs=toPairs;
_stk.toString=toString;function trimStart (value, remove_value) {

    var rx = new RegExp('^[' + whitespace + ']*');    var rawValue = toString(value).replace(rx, "");

    if (indexOfExist(getTypeof(remove_value), ["string"])) {

        var regData = new RegExp("^("+remove_value+")", "g");

        rawValue = rawValue.replace(regData, "");

    }

    return rawValue;

}


function trimEnd (value, remove_value) {

    var rx = new RegExp('[' + whitespace + ']*$');

    var rawValue= toString(value).replace(rx, "");

    if (indexOfExist(getTypeof(remove_value), ["string"])) {

        var regData = new RegExp("("+remove_value+")$", "g");

        rawValue = rawValue.replace(regData, "");

    }

    return rawValue;

}


function trim (value, remove_value) {

    var rawValue = toString(value);

    rawValue = trimStart(rawValue);
    rawValue = trimEnd(rawValue);

    rawValue = rawValue.trim();

    if (indexOfExist(getTypeof(remove_value), [
        "string",
        "regexp"
    ])) {

        rawValue = rawValue.replace(remove_value, "");

    }

    return rawValue;

}

_stk.trim=trim;
_stk.trimEnd=trimEnd;_stk.trimStart=trimStart;function union () {

    var arg=arguments;    return curryArg(function () {

    var rawValue=arguments;

        return baseReduce(function (total, value) {

            if (getTypeofInternal(value) === "array") {

                each(value, function (valEach) {

                    if (indexOfNotExist(valEach, total)) {

                        total.push(valEach);

                    }

                });

            }

            return total;

        }, [], rawValue);

    }, arg);

}

_stk.union=union;
function unique (value) {

    if (getTypeof(value) === "array") {

        var uniqArrData = [];        each(value, function (val) {

            if (indexOfNotExist(val, uniqArrData)) {

                uniqArrData.push(val);

            }

        });

        return uniqArrData;

    }

    return [];

}

_stk.unique=unique;
_stk.varExtend=varExtend;_stk.where=where;function isArguments (value) {

    return getTypeof(value) === "arguments";

}



function isArray (value) {

    return getTypeof(value) === "array";

}



function isBigInt (value) {

    return getTypeof(value) === "bigInt";

}



function isBoolean (value) {

    return getTypeof(value) === "boolean";

}



function isDate (value) {

    return getTypeof(value) === "date";

}



function isError (value) {

    return getTypeof(value) === "error";

}



function isFunction (value) {

    return getTypeof(value) === "function";

}



function isMap (value) {

    return getTypeof(value) === "map";

}



function isNull (value) {

    return getTypeof(value) === "null";

}



function isNumber (value) {

    return getTypeof(value) === "number";

}



function isObject (value) {

    return getTypeof(value) === "object";

}



function isPromise (value) {

    return getTypeof(value) === "promise";

}



function isRegexp (value) {

    return getTypeof(value) === "regexp";

}



function isSet (value) {

    return getTypeof(value) === "set";

}



function isString (value) {

    return getTypeof(value) === "string";

}



function isUint16Array (value) {

    return getTypeof(value) === "uint16Array";

}



function isUint32Array (value) {

    return getTypeof(value) === "uint32Array";

}



function isUint8Array (value) {

    return getTypeof(value) === "uint8Array";

}



function isUndefined (value) {

    return getTypeof(value) === "undefined";

}


_stk.isArguments=isArguments;
_stk.isArray=isArray;
_stk.isBigInt=isBigInt;
_stk.isBoolean=isBoolean;
_stk.isDate=isDate;
_stk.isError=isError;
_stk.isFunction=isFunction;
_stk.isMap=isMap;
_stk.isNull=isNull;
_stk.isNumber=isNumber;
_stk.isObject=isObject;
_stk.isPromise=isPromise;
_stk.isRegexp=isRegexp;
_stk.isSet=isSet;
_stk.isString=isString;
_stk.isUint16Array=isUint16Array;
_stk.isUint32Array=isUint32Array;
_stk.isUint8Array=isUint8Array;
_stk.isUndefined=isUndefined;function zip () {

    var arg=arguments;    return curryArg(function () {

    var rawValue=arguments;

        var varLimit = limit(rawValue, one);

        return baseReduce(function (total, value, key) {

            total.push(baseReduce(function (totalSub, valueSub) {

                totalSub.push(valueSub[key]);

                return totalSub;

            }, [value], varLimit));

            return total;

        }, [], first(rawValue));

    }, arg);

}

_stk.zip=zip;


 })(typeof window !== "undefined" ? window : this);function sort (objectValue, order, type) {

    return curryArg(function (rawObjectValue, rawOrder, rawType) {

        var asc=true;        var types='any';

        if (has(rawOrder) && getTypeof(rawOrder) === 'boolean') {

            asc= rawOrder;

        }

        if (has(rawType) && getTypeof(rawType) === 'string') {

            types= rawType;

        }

        var finalResponse=baseSort(rawObjectValue, function (orderA, orderB) {

            var sortOrderA = orderA;
            var sortOrderB = orderB;

            if (getTypeof(orderA) === "string" && getTypeof(orderB) === "string") {

                if (isEmpty(types) === false) {

                    if (types === 'any') {

                        sortOrderA =orderA.charCodeAt();
                        sortOrderB= orderB.charCodeAt();

                    }
                    if (types === 'lowercase') {

                        sortOrderA =orderA.toLowerCase().charCodeAt();
                        sortOrderB= orderB.toLowerCase().charCodeAt();

                    }

                    if (types === 'uppercase') {

                        sortOrderA =orderA.toUpperCase().charCodeAt();
                        sortOrderB= orderB.toUpperCase().charCodeAt();

                    }

                }

            }

            if (asc) {

                return sortOrderA - sortOrderB;

            }

            return sortOrderB - sortOrderA;

        });

        return finalResponse;

    }, [
        objectValue,
        order,
        type
    ], one);

}

_stk.sort=sort;
