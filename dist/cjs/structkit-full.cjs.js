const _stk = exports;
const __p = "@argument/place";

const __=__p;

/**
 * Placeholder of argument
 *
 * @since 1.4.8
 * @category String
 * @example
 *
 * __
 * // => @argument/place
 */

_stk.__=__;

/**
 * Create a separate `has` inside core folder
 *
 * @since 1.4.8
 * @category Boolean
 * @param {any} value Either JSON or Array
 * @param {any=} key For key or index of data
 * @returns {boolean} Returns true or false.
 * @example
 *
 * _has({'as':1}, 'as')
 * // => true
 */
function _has (value, key) {

    if (typeof key === "undefined") {

        return value !== null && typeof value !== "undefined";

    }

    return Object.prototype.hasOwnProperty.call(value, key);

}

const negOne = -1;
const zero = 0;
const one = 1;
const two = 2;
const three = 3;
const four = 4;
const oneHundred = 100;

/**
 * Reviewing your curry arguments details
 *
 * @since 1.4.8
 * @category String
 * @param {any[]} args Any data you want to check its property
 * @returns {string} Get the property of variable
 * @example
 *
 * curryArgReview([])
 * => {}
 */
function curryArgReview (args) {

    const objs = {};
    const placeList = [];
    const validList = [];
    let argIncter = 0;

    for (const arg in args) {

        if (_has(args, arg)) {

            const value = args[arg];

            if (__ === value) {

                objs[argIncter] = {
                    "index": placeList.length,
                    "type": "place",
                    "val": value
                };
                placeList.push(value);
                argIncter +=one;

            } else {

                objs[argIncter] = {
                    "index": validList.length,
                    "type": "valid",
                    "val": value
                };

                validList.push(value);
                argIncter +=one;

            }

        }

    }

    return {
        "argInc": argIncter,
        "argss": objs,
        "place": placeList,
        "valid": validList

    };

}

/**
 * Create your curry function
 *
 * @since 1.4.8
 * @category Function
 * @param {any} fn Any data you want to check its property
 * @param {any[]} args Any data you want to check its property
 * @param {number=} NoDefaultArgs Any data you want to check its property
 * @returns {string} Get the property of variable
 * @example
 *
 * curryArg(function(){}, [])
 * => array
 */
function curryArg (fn, args, NoDefaultArgs) {

    const RefNoDefaultArgs = NoDefaultArgs || zero;

    if (RefNoDefaultArgs > args.length - argumentUndefinedCounter(args)) {

        for (let kk=0; kk<RefNoDefaultArgs;) {

            if (_has(args, kk)) {

                if (typeof args[kk] === "undefined") {

                    args[kk] = __;

                }

            }
            kk += one;

        }

    }

    const checkValue = curryArgReview(args);

    if (checkValue.place.length > zero) {

        return function (...argSub) {

            const clneCheckValue = [];

            const reviewArgValue = curryArgReview(argSub);

            if (reviewArgValue.place.length > zero) {

                return curryArg(fn, args);

            }
            for (let ii=0; ii<checkValue.argInc;) {

                if (_has(checkValue.argss, ii)) {

                    const argValue = checkValue.argss[ii];

                    if (argValue.type === "place") {

                        if (_has(argSub, argValue.index)) {

                            clneCheckValue.push(argSub[argValue.index]);

                        }

                    } else {

                        clneCheckValue.push(argValue.val);

                    }

                }

                ii += one;

            }

            return fn.apply(this, clneCheckValue);

        };

    }

    return fn.apply(this, args);

}

/**
 * Count undefined in arguments
 *
 * @since 1.4.8
 * @category String
 * @param {any[]} args Any data you want to check its property
 * @param {number=} NoDefaultArgs Any data you want to check its property
 * @returns {string} Get the property of variable
 * @example
 *
 * argumentUndefinedCounter([])
 * => 0
 */
function argumentUndefinedCounter (args) {

    let counter = 0;

    for (const arg in args) {

        if (_has(args, arg)) {

            const value = args[arg];

            if (typeof value === "undefined") {

                counter += one;

            }

        }

    }

    return counter;

}

/**
 * Addition logic in satisfying two argument
 *
 * @since 1.4.8
 * @category Math
 * @param {number} value1 First number
 * @param {number=} value2 Second number
 * @returns {number|any} Returns number for added value
 * @example
 *
 * add(1, 1)
 * // => 2
 */
function add (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa + bb;

    }, [
        value1,
        value2
    ], two);

}

_stk.add=add;


/**
 * Check if object has value or null
 *
 * @since 1.0.1
 * @category Boolean
 * @param {...any?} args Either JSON or Array
 * @returns {boolean} Returns true or false.
 * @example
 *
 * has({'as':1}, 'as')
 * // => true
 */
function has (...args) {

    return curryArg(function (aa, bb) {

        return _has(aa, bb);

    }, args);

}

const objectCallType = {"[object Array]": "object",
    "[object Object]": "object",
    "[object String]": "string"};

const objectCallTypeAll = {"[object Arguments]": "arguments",
    "[object Array]": "array",
    "[object Boolean]": "boolean",
    "[object Date]": "date",
    "[object Error]": "error",
    "[object Function]": "function",
    "[object Null]": "null",
    "[object Number]": "number",
    "[object Object]": "object",
    "[object Promise]": "promise",
    "[object RegExp]": "regexp",
    "[object String]": "string",
    "[object Uint16Array]": "uint16Array",
    "[object Uint8Array]": "uint8Array",
    "[object Undefined]": "undefined"};

/**
 * Is Json valid format
 *
 * @since 1.3.1
 * @category Seq
 * @param {any} value Value you want to check JSON is Valid
 * @param {string=} valueType Get value type
 * @returns {any} Returns true or false if valid json format
 * @example
 *
 * isJson('{}' )
 *=> true
 */
function isJson (value, valueType) {

    const getValueType = Object.prototype.toString.call(value);

    if (has(objectCallType, getValueType) === false) {

        return false;

    }

    let getValueTypeRef = objectCallType[getValueType];

    if (has(valueType)) {

        getValueTypeRef = valueType;

    }

    if (getValueTypeRef === "string") {

        if (!(/\[(.*?)\]/g).test(value) && !(/\{(.*?)\}/g).test(value)) {

            return false;

        }

        const stripValue=value.replace(/(&quot;)/gi, '"', value).replace(/(&nbsp;)/gi, ' ', value);

        return (/^[\],:{}\s]*$/).test(stripValue.replace(/\\(?:["\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
            .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/g, ']')
            .replace(/(?:^|:|,)(?:\s*\[)+/g, ''));

    }

    let isValid =true;

    try {

        return checkIfFunctionNotExistObject(value);

    } catch (err) {

        isValid = false;

    } finally {

        isValid = false;

    }

    return isValid;

}

/**
 * Check if object has no function
 *
 * @since 1.3.1
 * @category Seq
 * @param {array|object} obj String you want to convert to JSON
 * @returns {any} Returns the total.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
function checkIfFunctionNotExistObject (obj) {

    const getValueType = Object.prototype.toString.call(obj);

    if (getValueType === "[object Function]") {

        throw new Error("Function must not exist");

    }

    let isValid = false;

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

        for (const key in obj) {

            if (has(obj, key)) {

                checkIfFunctionNotExistObject(obj[key]);

            }

        }

    }

    return true;

}

/**
 * Get type of the variable
 *
 * @since 1.4.8
 * @category String
 * @param {any} objectValue Any data you want to check its property
 * @returns {string} Get the property of variable
 * @example
 *
 * getTypeofInternal([])
 * => array
 */
function getTypeofInternal (objectValue) {

    const objectType = Object.prototype.toString.call(objectValue);

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

/**
 * Append data for json and array
 *
 * @since 1.4.8
 * @category Any
 * @param {any} objectValue The data either json or array
 * @param {any} val Value for array index and json
 * @param {any=} key Json key
 * @returns {any} Returns the total.
 * @example
 *
 * baseAppend({'as':1}, 'as',2)
 * // => {'as':2}
 */
function baseAppend (objectValue, val, key) {

    const typeofs=getTypeofInternal(objectValue);

    if (typeofs === "json") {

        objectValue[key]=val;

    }
    if (typeofs === "array") {

        objectValue.push(val);

    }

    return objectValue;

}

/**
 * Append data for json or array
 *
 * @since 1.0.1
 * @category Any
 * @param {any} objectValue Value either json or array
 * @param {any} val Value for array index and json
 * @param {any=} key Json key
 * @returns {any} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function append (objectValue, val, key) {

    return curryArg(function (rawObjectValue, rawVal, rawKey) {

        return baseAppend(rawObjectValue, rawVal, rawKey);

    }, [
        objectValue,
        val,
        key
    ], two);

}

_stk.append=append;


/**
 * Each or for loop function you are familiar with
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue Array or json.
 * @param {Function=} func Function to execute the loop with callback key,value
 * @returns {any} Array or json
 * @example
 *
 * each([1,2],(key,value)=>{ })
 *
 */
function each (objectValue, func) {

    let re_loop=[];
    const typeofs=getTypeofInternal(objectValue);

    if (typeofs === "json"||typeofs === "array"||typeofs === "object"||typeofs === "arguments") {

        for (const ins in objectValue) {

            if (has(objectValue, ins)) {

                let bool_func = true;

                if (getTypeofInternal(objectValue[ins]) === "function") {

                    if ((/\b_/g).test(ins)) {

                        bool_func= false;

                    }

                }

                if (bool_func) {

                    try {

                        if (has(func)) {

                            func(ins, objectValue[ins]);

                        } else {

                            re_loop[ins]=objectValue[ins];

                        }

                    } catch (error) {

                        console.log(error);

                    }

                } else {

                    re_loop=null;

                }

            }

        }

        return re_loop;

    }

    return null;

}

/**
 * Base reduce
 *
 * @since 1.4.8
 * @category Core
 * @param {any} defaultValue Array in number
 * @param {any[]} listData decimal point and default value is
 * @param {any} func The data you want to map
 * @returns {number} Returns the total.
 * @example
 *
 * baseReduce(2,[1,2],(total,value)=>total+value)
 * // => 5
 */
function baseReduce (defaultValue, listData, func) {

    const that = this;

    each(listData, function (ak, av) {

        defaultValue = func.apply(that, [
            defaultValue,
            av,
            ak
        ]);

    });

    return defaultValue;

}

/**
 * Counting the true in list of array
 *
 * @since 1.4.8
 * @category Any
 * @param {any[]} objectValue The data is array
 * @returns {any} Returns the total.
 * @example
 *
 * baseCountValidList([true,true])
 * // => 2
 */
function baseCountValidList (objectValue) {

    return baseReduce(zero, objectValue, function (total, value) {

        if (value && getTypeofInternal(value) === "boolean") {

            return total +one;

        }

        return total;

    });

}

/**
 * Counting the lenght in array, json or string
 *
 * @since 1.0.1
 * @category Math
 * @param {any=} objectValue Json or array that you want to cound
 * @param {boolean=} json_is_empty_check If data is json, it will check its map data
 * @returns {number} Returns the total.
 * @example
 *
 * count([1,2])
 * // => 2
 *
 * count({"s" :1, "s2": 2}, true)// Counting the object inside, you must this to true
 * // => 2
 */
function count (objectValue, json_is_empty_check) {

    let cnt=0;
    const incByOne=1;
    const defaultValueForFalse=0;
    const json_is_empty_check_default=json_is_empty_check||false;
    const get_json=getTypeofInternal(objectValue);

    if (has(objectValue) === false) {

        return defaultValueForFalse;

    }

    if (get_json === "array") {

        return objectValue.length;

    } else if (get_json === "object" && has(objectValue, "style")&&has(objectValue, "nodeType")&&has(objectValue, "ownerDocument")) {

        for (const inc in objectValue) {

            if (!isNaN(inc)) {

                cnt += incByOne;

            }

        }

    } else {

        let rawObjectValue = objectValue;

        if (get_json === "string") {

            rawObjectValue = rawObjectValue.split("");

        }

        each(rawObjectValue, function () {

            cnt += incByOne;

        });

    }

    if (get_json === "json"&&json_is_empty_check_default === true) {

        const jsn_parse=objectValue;
        let cnts=0;

        each(jsn_parse, function () {

            cnts += incByOne;

        });

        return cnts;

    }

    return cnt;

}

/**
 * In array, you need to check all value is true
 *
 * @since 1.4.8
 * @category Condition
 * @param {...any?} arg List of value you need to check if true
 * @returns {boolean} Returns true or false.
 * @example
 *
 * allValid(true, false)
 * // => false
 */
function allValid (...arg) {

    return curryArg(function (...rawValue) {

        return baseCountValidList(rawValue);

    }, arg) === count(arg);

}

_stk.allValid=allValid;


/**
 * Index Of array
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue Array
 * @param {number} value key of array
 * @param {number} start The first index in array
 * @param {number} end The last index in array
 * @param {boolean} isGetLast If True first index if False last index
 * @returns {number|object|string} Returns the total.
 * @example
 *
 * indexOf([1,2], 1)
 * // => 0
 */
function getIndexOf (objectValue, value, start, end, isGetLast) {

    const indexOfDefaultValue=-1;
    const incrementDefaultValue=1;

    let referenceValue = -1;

    if (getTypeofInternal(objectValue) === "array") {

        for (let inc=start; inc<end;) {

            let isValidMatch = false;

            if (getTypeofInternal(value) === "json") {

                isValidMatch = searchValueInJson(objectValue[inc], value);

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

            inc += incrementDefaultValue;

        }

    }

    return isGetLast === false
        ?indexOfDefaultValue
        :referenceValue;

}

/**
 * Index Of array
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} objectValue Array
 * @param {number} searchValue key of array
 * @returns {boolean} Returns the total.
 * @example
 *
 * searchValueInJson([1,2], 1)
 * // => 0
 */
function searchValueInJson (objectValue, searchValue) {

    let counter = 0;
    const increment = 1;

    each(objectValue, function (key, value) {

        if (has(searchValue, key)) {

            if (searchValue[key] === value) {

                counter += increment;

            }

        }

    });

    return count(objectValue) === counter;

}

/**
 * Index of array
 *
 * @since 1.0.1
 * @category Math
 * @param {any} objectValue Array
 * @param {any} value Value in array
 * @returns {number} Returns the index.
 * @example
 *
 * indexOf([1,2], 1)
 * // => 0
 */
function indexOf (objectValue, value) {

    const start = 0;

    const indexValue = getIndexOf(objectValue, value, start, count(objectValue), false);

    return indexValue;

}

/**
 * Check index of array Not or exist
 *
 * @since 1.4.1
 * @category Boolean
 * @param {any[]} arrayObject Array
 * @param {any} value Value for array lookup
 * @returns {boolean} Return boolean.
 * @example
 *
 * indexOfNotExist([312], 32)
 * // => true
 */
function indexOfNotExist (arrayObject, value) {

    return indexOf(arrayObject, value) === negOne;

}

/**
 * Ge the empty value of specify argument type
 *
 * @since 1.0.1
 * @category Any
 * @param {any} value Any value type that you want an empty return
 * @returns {any} Returns empty either Json or Array
 * @example
 *
 * empty([])
 * => []
 */
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

    return value;

}

/**
 * To map the value of json or array
 *
 * @since 1.4.8
 * @category Collection
 * @param {any} objectValue The data you want to map
 * @param {any=} func Callback function
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * baseMap([1,2],function(value) { return value+2 } )
 *=> [3, 4]
 */
function baseMap (objectValue, func) {

    let value_arry=empty(objectValue);
    let cnt=zero;

    const that = this;

    each(objectValue, function (key, value) {

        if (has(func)) {

            const dataFunc = func.apply(
                that,
                [
                    value,
                    key,
                    cnt
                ]
            );

            value_arry = baseAppend(value_arry, dataFunc, key);
            cnt += one;

        }

    });

    return value_arry;

}

/**
 * To map the value of json or array
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue The data you want to map
 * @param {any=} func Callback function
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * map([1,2],function(value) { return value+2 } )
 *=> [3, 4]
 */
function map (objectValue, func) {

    return curryArg(function (rawObjectValue, rawFunc) {

        return baseMap(rawObjectValue, rawFunc);

    }, [
        objectValue,
        func
    ]);

}

/**
 * Check index of array is Exist or not
 *
 * @since 1.3.1
 * @category Boolean
 * @param {any[]} arrayObject Array
 * @param {any} value Value for array lookup
 * @returns {boolean} Return boolean.
 * @example
 *
 * indexOfExist([312], 32)
 * // => false
 */
function indexOfExist (arrayObject, value) {

    return indexOf(arrayObject, value) >= zero;

}

/**
 * Get key value
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} jsn Json or Array
 * @param {boolean} typ Types of instruction
 * @returns {array|object} Expected return from instruction
 * @example
 *
 * getKeyVal([1,2],"first_index")
 *=>{"key":1,"value":1}
 */
function getKeyVal (jsn, typ) {

    const ky=[],
        vl=[];
    const list_raw = [];

    each(jsn, function (kk, vv) {

        ky.push(kk);
        vl.push(vv);
        list_raw.push({
            "key": kk,
            "value": vv
        });

    });
    if (indexOfExist([
        "key",
        "value"
    ], typ)) {

        const ars=typ === "key"
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

/**
 * Get the first value of array
 *
 * @since 1.0.1
 * @category Any
 * @param {any} objectValue The data is array
 * @returns {any} Returns first value of `objectValue`.
 * @example
 *
 * first([1,2,3])
 *=> 1
 */
function first (objectValue) {

    return getKeyVal(objectValue, "first_index").value;

}

/**
 * Get type of the variable
 *
 * @since 1.0.1
 * @category String
 * @param {...any} args Any data you want to check its property in multiple arguments
 * @returns {string|string[]} Get the property of variable
 * @example
 *
 * getTypeof([])
 * => array
 * getTypeof([],{})
 * => [array,json]
 */
function getTypeof (...args) {

    const getTypes = map(args, function (value) {

        return getTypeofInternal(value);

    });

    return count(getTypes) === one
        ?first(getTypes)
        :getTypes;

}

/**
 * Append If Array does not Exist
 *
 * @since 1.0.1
 * @category Array
 * @param {any} arrayObject Data is Array
 * @param {any=} value Value for array lookup
 * @returns {any[]} Return array.
 * @example
 *
 * appendIsArrayExist([312], [32])
 * // => [312, 32]
 */
function appendIsArrayExist (arrayObject, value) {

    const ary_type=getTypeof(arrayObject);
    const ary_type1=getTypeof(value);

    if (ary_type === "array" && ary_type1 === "array") {

        each(value, function (key, val) {

            if (indexOfNotExist(arrayObject, val)) {

                arrayObject.push(val);

            }

        });

        return arrayObject;

    }

    return [];

}

_stk.appendIsArrayExist=appendIsArrayExist;


/**
 * To Array
 *
 * @since 1.0.1
 * @category Array
 * @param {any} value Value you want to convert in array
 * @returns {any[]} Return in array.
 * @example
 *
 * toArray(1)
 *=>[1]
 */
function toArray (value) {

    let return_val = value;

    if (getTypeof(return_val) !== "array") {

        return_val = [value];

    }

    return return_val;

}

/**
 * To return the value selected either start or start to end index
 *
 * @since 1.3.1
 * @category Array
 * @param {any} objectValue Array
 * @param {number=} min Minumum of 2
 * @param {number=} max Maximum base on array count
 * @returns {any[]} Returns the total.
 * @example
 *
 * arraySlice([1,2],1)
 * // => [2]
 *
 * arraySlice([1,2,3,4],2,4)
 * // => [3, 4]
 */
function arraySlice (objectValue, min, max) {

    const ran_var=[];
    const defaultValueZero=0;
    const defaultValueNegativeOne=-1;
    let ran_min=has(min)
        ?min
        :defaultValueZero;
    let ran_max=has(max)
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

            const raw_ran_min = defaultValueZero > min
                ?count(objectValue) + (defaultValueNegativeOne+ min)
                :min;
            const raw_ran_max =count(objectValue) + max;

            if (raw_ran_min < raw_ran_max) {

                ran_min = raw_ran_min;
                ran_max = raw_ran_max;

            } else {

                ran_min = raw_ran_min;
                ran_max = raw_ran_min;

            }

        }

    }

    each(objectValue, function (key, value) {

        if (ran_min <= parseInt(key) && ran_max >= parseInt(key)) {

            ran_var.push(value);

        }

    });

    return ran_var;

}

/**
 * Array Concat
 *
 * @since 1.0.1
 * @category Array
 * @param {...any?} arg Multiple arguments of array that you want to concat
 * @returns {any[]} Returns the array.
 * @example
 *
 * arrayConcat([1], 2)
 * // => [1,2]
 */
function arrayConcat (...arg) {

    return curryArg(function (...argsub) {

        if (argsub.length < one) {

            return [];

        }

        let return_val=toArray(first(argsub));
        const arrayValue = toArray(arraySlice(argsub, one));

        each(arrayValue, function (key, value) {

            return_val = return_val.concat(toArray(value));

        });

        return return_val;

    }, arg);

}

_stk.arrayConcat=arrayConcat;


/**
 * Generate array of data from specific limit or where the index to start
 *
 * @since 1.0.1
 * @category Seq
 * @param {number} maxValue Max value you to generate in array, default value 1
 * @param {number=} minValue Min value you to generate in array , default value 10
 * @param {string|number=} step  Specify the logic of increment or decrement
 * @returns {any[]} Return in array.
 * @example
 *
 * range(10)
 *=>[1,2,3,4,5,6,7,8,9,10]
 */
function range (maxValue, minValue, step) {

    const emptyDefaultValue=0;
    const tenDefaultValue=10;

    const incrementDefaultValue=1;

    const incrementValue=has(step)
        ?step
        :incrementDefaultValue;
    const minValueRef=has(minValue)
        ?minValue
        :incrementDefaultValue;
    const maxValueRef=has(maxValue)
        ?maxValue
        :tenDefaultValue;
    const output=[];

    for (let inc=minValueRef; inc <= maxValueRef;) {

        if (getTypeof(incrementValue) === "string") {

            output.push(inc);

            const render = new Function('inc', "return "+inc+incrementValue);

            inc = render.call(inc);

        }
        if (getTypeof(incrementValue) === "number") {

            output.push(inc);
            if (incrementValue<emptyDefaultValue) {

                inc -= incrementValue;

            } else {

                inc += incrementValue;

            }

        }

    }

    return output;

}

/**
 * Repeat value in array
 *
 * @since 1.4.7
 * @category Array
 * @param {any} value String you want to duplicate
 * @param {number} valueRepetion how many times you want to repeate
 * @returns {any[]} Return in string or number.
 * @example
 *
 * arrayRepeat("s",2 )
 *=>['s','s']
 */
function arrayRepeat (value, valueRepetion) {

    const emptyDefaultValue=0;
    const nm_rpt=valueRepetion||emptyDefaultValue;

    return map(range(nm_rpt), function () {

        return value;

    });

}

_stk.arrayRepeat=arrayRepeat;

_stk.arraySlice=arraySlice;


/**
 * Check if data is empty, null and undefined are now considered as empty
 *
 * @since 1.0.1
 * @category Boolean
 * @param {any} value JSON , Array and String
 * @returns {boolean} Returns true or false
 * @example
 *
 * isEmpty('')
 * // => true
 */
function isEmpty (value) {

    const typeofvalue = getTypeofInternal(value);

    const invalidList = [
        'null',
        'undefined'
    ];

    if (typeofvalue === "json" || typeofvalue === "array") {

        return count(value, typeofvalue === "json") === zero;

    }
    if (typeofvalue === "number") {

        return value === zero;

    }

    if (indexOfExist(invalidList, typeofvalue)) {

        return true;

    }

    if (typeofvalue === "uint16Array") {

        return value.length ===zero;

    }
    if (typeofvalue === "uint8Array") {

        return value.length ===zero;

    }

    return (/^\s*$/gmi).test(value);

}

/**
 * Array sum of value
 *
 * @since 1.0.1
 * @category Math
 * @param {number[]} arrayObject Array of number
 * @param {number=} delimeter decimal point and default value is 0
 * @returns {number} Returns the total.
 * @example
 *
 * arraySum([1,2], 2)
 * // => 3.00
 * arraySum([1,2])
 * // => 3
 */
function arraySum (arrayObject, delimeter) {

    const defaultLimitDecimal = 0;
    const arrayObjects=arrayObject||[];
    const delimeters=delimeter||defaultLimitDecimal;

    const sum = baseReduce(zero, arrayObjects, add);

    return isEmpty(delimeters)
        ? parseInt(sum)
        :sum.toFixed(delimeters);

}

_stk.arraySum=arraySum;


/**
 * To String
 *
 * @since 1.4.5
 * @category String
 * @param {any=} value Value you to convert in double
 * @returns {string} Return in double.
 * @example
 *
 * toString(1)
 *=> '1'
 */
function toString (value) {

    const notInList = [
        "object",
        "json",
        "promise"
    ];

    const gettypeof = getTypeof(value);

    if (has(value) && indexOfNotExist(notInList, gettypeof)) {

        return value.toString();

    }

    return '';

}

/**
 * Get Data in array or json using string to search the data either by its key or index
 *
 * @since 1.0.1
 * @category Collection
 * @param {any=} objectValue Either Json or Array data.
 * @param {any=} split_str Search key or index.
 * @returns {any} Returns the total.
 * @example
 *
 * getData({"s":1},"s")
 *=> 1
 * @example
 * getData({"a":{"a":2},"b":{"a":3}},"a:a")
 *=> {a: 2}
 */
function getData (objectValue, split_str) {

    return curryArg(function (rawObjectValue, rawSplit_str) {

        const split_strReplace= toString(rawSplit_str).replace(/([.]{1,})/g, ":");
        const spl_len=split_strReplace.split(":");
        const spl=[];
        let jsn_total={};

        if (!has(rawObjectValue)) {

            return "";

        }

        each(spl_len, function (key, value) {

            spl.push(value);

        });

        each(spl, function (key, value) {

            if (has(rawObjectValue, value)) {

                if ((/^\s+$/).test(rawObjectValue[value]) === false) {

                    jsn_total=rawObjectValue[value];

                }

            } else {

                if (has(jsn_total, value)) {

                    jsn_total=jsn_total[value];

                }

            }

        });

        return jsn_total;

    }, [
        objectValue,
        split_str
    ]);

}

/**
 * Array To Object By DataFormat
 *
 * @since 1.3.1
 * @category Array
 * @param {any[]} objectValue Json in array format
 * @param {string} valueFormat Key look up format
 * @returns {any[]} Return array or object.
 * @example
 *
 * arrayToObjectByDataFormat([{"Asd":1}],"Asd")
 *=>[1]
 */
function arrayToObjectByDataFormat (objectValue, valueFormat) {

    return map(objectValue, function (value) {

        return getData(value, valueFormat);

    });

}

_stk.arrayToObjectByDataFormat=arrayToObjectByDataFormat;


/**
 * Async replace regexp argument
 *
 * @since 1.3.1
 * @category Utility
 * @param {any} value String data
 * @param {any} search Regexp or string to look for match
 * @param {Function|String=} toReplace Replace value.
 * @returns {Promise<string>} String in promise function
 * @example
 *
 * asyncReplace("asd",/s/g,"@")
 * // => Promise{<fulfilled>: 'a@d'}
 */
function asyncReplace (value, search, toReplace) {

    return curryArg(function (rawValue, rawSearch, rawToReplace) {

        try {

            if (getTypeof(rawToReplace) === "function") {

                const values = [];

                String.prototype.replace.call(rawValue, rawSearch, function (...arg) {

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


/**
 * Cloning the data either in JSON or array that be used as different property
 *
 * @since 1.0.1
 * @category Any
 * @param {any} objectValue data you want to clone
 * @returns {any} Returns clone data
 * @example
 *
 * clone([1,2])
 * // => [1,2]
 */
function clone (objectValue) {

    const variable=empty(objectValue);

    each(objectValue, function (key, value) {

        append(variable, value, key);

    });

    return variable;

}

_stk.clone=clone;


/**
 * Get key Array or JSON
 *
 * @since 1.0.1
 * @category String
 * @param {any} objectValue Either JSON or Array type
 * @returns {string} Returns it respective key or index
 * @example
 *
 * getKey({"s":1})
 * => s
 */
function getKey (objectValue) {

    return getKeyVal(objectValue, "key");

}

/**
 * Divide logic in satisfying two argument
 *
 * @since 1.4.8
 * @category Math
 * @param {number} value1 First number
 * @param {number=} value2 Second number
 * @returns {number|any} Returns number for divided value
 * @example
 *
 * divide(1, 1)
 * // => 1
 */
function divide (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa / bb;

    }, [
        value1,
        value2
    ], two);

}

/**
 * Multiply logic in satisfying two argument
 *
 * @since 1.4.8
 * @category Math
 * @param {number} value1 First number
 * @param {number=} value2 Second number
 * @returns {number|any} Returns number for mutiplied value
 * @example
 *
 * multiply(1, 1)
 * // => 1
 */
function multiply (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa * bb;

    }, [
        value1,
        value2
    ], two);

}

/**
 * Subtract logic in satisfying two argument
 *
 * @since 1.4.8
 * @category Math
 * @param {number} value1 First number
 * @param {number=} value2 Second number
 * @returns {number|any} Returns number for subtracted value
 * @example
 *
 * subtract(1, 1)
 * // => 0
 */
function subtract (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa - bb;

    }, [
        value1,
        value2
    ], two);

}

/**
 * Logic in convert string to compute, similar on how the calculator works
 *
 * @since 1.4.8
 * @category Seq
 * @param {string} formula Formula you want to execution, it follows the idea of algebraic expression concept
 * @param {any=} args Object argument that to fill in variable define at algbraic expression
 * @returns {number|any} Returns the total.
 * @example
 *
 * calculate('1+1')
 *=> 2
 * calculate('1+as',{as:1})
 *=> 2
 */
function calculate (formula, args) {

    return curryArg(function (rawFormula, rawArgs) {

        if (getTypeof(rawArgs) === "json") {

            const argsKey = new RegExp("\\b("+toArray(getKey(rawArgs)).join("|")+")\\b", "g");

            rawFormula = rawFormula.replace(argsKey, function (mm, m1) {

                return rawArgs[m1];

            });

        }

        const strFormula = rawFormula.replace(/\((.*?)\)/, function (mm, m1) {

            return compute(m1);

        });

        return parseFloat(compute(strFormula));

    }, [
        formula,
        args
    ]);

}

/**
 * Logic in convert string or number to valid number
 *
 * @since 1.4.8
 * @category Seq
 * @param {string} formula The second number in an addition.
 * @returns {boolean|any} Returns the total.
 * @example
 *
 * calculate(/(\d)/g, 0,1)
 *=> 1
 */
function compute (formula) {

    const regexpNumber = /([\d]+!|[\d.%]+|[//*\-+\x^]|\|[\d]+\|)/g;
    let matches = formula.match(regexpNumber);

    if (count(matches) === one) {

        matches = formula.match(/([\d]+|[%])/g);

        if (count(matches) === one) {

            return convert(matches[zero], zero, "right");

        }

    }
    if (count(matches) === two) {

        if (matches[zero] === "-") {

            return convert(matches.join(""), zero, "right");

        }

    }

    if (count(matches) < three) {

        throw new Error("Invalid formula");

    }

    let counter = zero;
    let result = zero;

    for (let ii = zero; ii<Math.ceil(count(matches)/three); ii +=one) {

        if (ii === zero) {

            result = process(convert(matches[zero], matches[two], "right"), matches[one], convert(matches[zero], matches[two], "left"));

        } else {

            if (count(matches) > counter + four) {

                result = process(convert(result, matches[counter + four], "right"), matches[counter + three], convert(result, matches[counter + four], "left"));
                counter += two;

            }

        }

    }

    return parseFloat(result);

}

/**
 * Logic in convert string or number to valid number
 *
 * @since 1.4.8
 * @category Seq
 * @param {number} a1 The second number in an addition.
 * @param {string} operator The second number in an addition.
 * @param {number} b1 The second number in an addition.
 * @returns {number|any} Returns the total.
 * @example
 *
 * calculate(/(\d)/g, 0,1)
 *=> 1
 */
function process (a1, operator, b1) {

    switch (operator) {

    case '+':
        return add(parseFloat(a1), parseFloat(b1));
    case '-':
        return subtract(parseFloat(a1), parseFloat(b1));
    case 'x':
    case '*':
        return multiply(parseFloat(a1), parseFloat(b1));
    case '/':
        return divide(parseFloat(a1), parseFloat(b1));
    case '%':
        return parseInt(a1) % parseInt(b1);
    case '^':
        return parseFloat(a1) ** parseFloat(b1);
    default:
        break;

    }
    throw new Error("Invalid operator");

}

/**
 * Logic in convert string or number to valid number
 *
 * @since 1.4.8
 * @category Seq
 * @param {number} a1 The second number in an addition.
 * @param {string} b1 The second number in an addition.
 * @param {string} pos The second number in an addition.
 * @returns {number|any} Returns the total.
 * @example
 *
 * calculate(/(\d)/g, 0,1)
 *=> 1
 */
function convert (a1, b1, pos) {

    if ((/^(\d{1,}|\d{1,}\.\d{1,})%$/).test(b1) && (/^(\d{1,}|\d{1,}\.\d{1,})$/).test(a1) && pos ==="left") {

        return parseFloat(a1) * parseFloat(b1.replace(/%/g, "")/ oneHundred);

    }

    if ((/^(\d{1,}|\d{1,}\.\d{1,})%$/).test(b1) && (/^(\d{1,}|\d{1,}\.\d{1,})%$/).test(a1)) {

        if (pos === "right") {

            return parseFloat(a1.replace(/%/g, "")/ oneHundred);

        }

        if (pos === "left") {

            return parseFloat(b1.replace(/%/g, "")/ oneHundred);

        }

    }

    if ((/^(\d{1,})!$/).test(b1) || (/^(\d{1,})!$/).test(a1)) {

        let value = one;

        if (pos === "right") {

            value = parseInt(a1.replace(/!/g, ""));

        }

        if (pos === "left") {

            value = parseInt(b1.replace(/!/g, ""));

        }

        let inc = one;

        for (let vv = one; vv <= value;) {

            inc *= vv;
            vv+=one;

        }

        return inc;

    }

    if ((/^|(\d{1,})|$/).test(b1) || (/^|(\d{1,})|$/).test(a1)) {

        if (pos === "right") {

            return Math.abs(a1);

        }

        if (pos === "left") {

            return Math.abs(b1);

        }

    }

    if (pos === "right") {

        return a1;

    }

    return b1;

}

_stk.calculate=calculate;

_stk.count=count;

_stk.each=each;

_stk.divide=divide;


/**
 * Decrement value
 *
 * @since 1.4.8
 * @category Math
 * @param {any} value Value you want to convert in array
 * @param {any=} default_value Value to want to start counting
 * @returns {number} Return in number.
 * @example
 *
 * dec(1)
 *=>0
 */
function dec (value, default_value) {

    let return_val = value;
    const inc_n = getTypeof(default_value) === "number"
        ? default_value
        : one;

    if (getTypeof(return_val) === "number") {

        return_val -= inc_n;

        return return_val;

    }

    return zero;

}

_stk.dec=dec;


/**
 * To check if the two arguments are equal
 *
 * @since 1.4.8
 * @category Boolean
 * @param {any} value1 Any first value type
 * @param {any=} value2 Any second value type
 * @returns {boolean|any} Returns true or false.
 * @example
 *
 * equal('as', 'as')
 * // => true
 */
function equal (value1, value2) {

    return curryArg(function (aa, bb) {

        if (getTypeofInternal(aa) !== getTypeofInternal(bb)) {

            return false;

        }

        return aa === bb;

    }, [
        value1,
        value2
    ], two);

}

_stk.equal=equal;

_stk.empty=empty;


/**
 * Filter the data in for loop
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue The data either json or array
 * @param {Function=} func The second number in an addition.
 * @returns {any} Returns data either json or array.
 * @example
 *
 * filter([1,2,3,34],function(value, key){ return key%2 === 0 })
 *
 * => [2, 34]
 */
function filter (objectValue, func) {

    const jsn_var=empty(objectValue);
    const jsn_type=getTypeof(objectValue);

    if (!(/(json|array)/g).test(jsn_type)) {

        return [];

    }
    each(objectValue, function (key, value) {

        if (has(func)) {

            if (func(key, value)) {

                append(jsn_var, value, key);

            }

        }

    });

    return jsn_var;

}

_stk.filter=filter;

_stk.getData=getData;

_stk.first=first;

_stk.getKey=getKey;
/**
 * Generate unique value id
 *
 * @since 1.0.1
 * @category String
 * @param {any=} option type unique id
 * @returns {string} Get Unique Key.
 * @example
 *
 * getUniq()
 * => dur82ht126uqgszn62j04a
 */
function getUniq (option) {

    const optionValue = option||"default";

    if (optionValue === "default") {

        const defaultRandomValue=2;
        const defaultSubstrValue=36;
        const str_rand1=Math
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

_stk.getTypeof=getTypeof;


/**
 * Get value of json or array
 *
 * @since 1.0.1
 * @category String
 * @param {any} objectValue Either JSON or Array
 * @returns {string} Returns it respective value
 * @example
 *
 * getValue({"s":1})
 * => 1
 */
function getValue (objectValue) {

    return getKeyVal(objectValue, "value");

}

_stk.getValue=getValue;


/**
 * To group the value of json or array
 *
 * @since 1.4.8
 * @category Collection
 * @param {any} objectValue The data you want to map
 * @param {any=} func Callback function
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * groupBy([1,2,3,4,5,6,7], function (value) { return value % 2})
 *=> {0:[2,4,6], 1:[1,3,5,7]}
 */
function groupBy (objectValue, func) {

    const value_arry=clone(empty(objectValue));

    const groupData = {};

    each(objectValue, function (key, value) {

        if (has(func)) {

            const dataFunc = func(value, key);

            if (!has(groupData, dataFunc)) {

                groupData[dataFunc] = value_arry;

            }
            groupData[dataFunc] = append(clone(groupData[dataFunc]), value, key);

        }

    });

    return groupData;

}

_stk.groupBy=groupBy;


/**
 *  To check if the two arguments are greater than to equal
 *
 * @since 1.4.8
 * @category Boolean
 * @param {any} value1 Any first value type
 * @param {any=} value2 Any second value type
 * @returns {boolean} Returns true or false.
 * @example
 *
 * gte(1, 2)
 * // => false
 */
function gte (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa >= bb;

    }, [
        value1,
        value2
    ], two);

}

_stk.gte=gte;

_stk.has=has;


/**
 * Check if data is undefined
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue Either JSON or array
 * @param {any} value1 Check the key of value
 * @param {any=} value2 if value not exist, this value will be return
 * @returns {any} Returns filled value from its index
 * @example
 *
 * ifUndefined({'as':1}, 'as','as2')
 * // => 1
 */
function ifUndefined (objectValue, value1, value2) {

    if (!has(value2)) {

        if (has(objectValue)) {

            return objectValue;

        }

        return value1;

    }

    if (has(objectValue, value1)) {

        return objectValue[value1];

    }

    return value2;

}

_stk.ifUndefined=ifUndefined;


/**
 * To Increment value
 *
 * @since 1.4.8
 * @category Array
 * @param {any} value Value you want to convert in array
 * @param {any=} default_value Value to want to start counting
 * @returns {number} Return in number.
 * @example
 *
 * inc(1)
 *=>2
 */
function inc (value, default_value) {

    let return_val = value;
    const inc_n = getTypeof(default_value) === "number"
        ? default_value
        : one;

    if (getTypeof(return_val) === "number") {

        return_val += inc_n;

        return return_val;

    }

    return zero;

}

_stk.inc=inc;

_stk.indexOfExist=indexOfExist;

_stk.indexOf=indexOf;

_stk.indexOfNotExist=indexOfNotExist;


/**
 * Insert value in Json object or array
 *
 * @since 1.0.1
 * @category Object
 * @param {any} objectValue Either Json or array
 * @param {any} value Data you want to insert
 * @returns {null} Returns null
 * @example
 * var ss = {"A":1}
 * insert(ss,{'as':1})
 * // => {A: 1, as: 1}
 */
function insert (objectValue, value) {

    if (has(objectValue)) {

        const jsn_type=getTypeof(value);

        if (jsn_type === "json") {

            each(value, function (key, _value) {

                objectValue[key]=_value;

            });

        }

        if (jsn_type === "array") {

            objectValue.push(value);

        }

    }

}

_stk.insert=insert;


/**
 * Looking the data in JSON and Array base on object value
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} whereValue Json or Array
 * @param {any} objectValue1 Json or Array for lookup to objectValue1
 * @param {boolean=} isExist Default value is True
 * @returns {boolean|any} Returns the boolean if the has the value you are looking at.
 * @example
 *
 * isExact({"test": 11,"test2": 11}, {"test2": 11})
 * // => true
 *
 * isExact({"s1":{"s2":2}},{"s1:s2":2})
 * // => true
 */
function isExact (whereValue, objectValue1, isExist) {

    return curryArg(function (rawWhereValue, rawObjectValue1, rawIsExist) {

        if (rawObjectValue1 === null) {

            return false;

        }

        const local_is_exist=has(rawIsExist)&&getTypeofInternal(rawIsExist) === "boolean"
            ?rawIsExist
            :true;
        const val_s=(/(json|array|object)/g).test(getTypeofInternal(rawWhereValue))
            ?rawWhereValue
            :[rawWhereValue];
        const key_s=(/(json|array|object)/g).test(getTypeofInternal(rawObjectValue1))
            ?rawObjectValue1
            :[rawObjectValue1];
        let cnt=0;
        const incrementDefaultValue=1;

        each(key_s, function (kk, kv) {

            if (indexOfExist([
                "json",
                "object"
            ], getTypeofInternal(rawWhereValue))) {

                if (has(val_s, kk)) {

                    const local_is_valid = localValidation(val_s[kk], kv, local_is_exist);

                    if (local_is_valid) {

                        cnt += incrementDefaultValue;

                    }

                }

            }

            if (getTypeofInternal(rawWhereValue) === "array") {

                const local_is_valid = local_is_exist
                    ?indexOfExist(val_s, kv)
                    :indexOfNotExist(val_s, kv);

                if (local_is_valid) {

                    cnt += incrementDefaultValue;

                }

            }

        });

        if (isEmpty(cnt)) {

            each(val_s, function (kk, kv) {

                if (indexOfExist([
                    "json",
                    "object"
                ], getTypeofInternal(rawWhereValue))) {

                    const gdata = getData(key_s, kk);

                    if (!isEmpty(gdata)) {

                        const local_is_valid = localValidation(gdata, kv, local_is_exist);

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

/**
 * Check the value if equal to each value
 *
 * @since 1.4.8.1
 * @category Collection
 * @param {any} keys string or number
 * @param {any} vals string, number or function
 * @param {boolean=} isExist Default value is True
 * @returns {boolean} Returns the boolean if the has the value you are looking at.
 * @example
 *
 * localValidation("as","as",true)
 * // => true
 * localValidation("as","as",false)
 * // => false
 */
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

_stk.isExact=isExact;


/**
 * Looking the data in JSON and Array base on object value with the help regexp
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} whereValue Either Json or array
 * @param {any} objectValue1 use as lookup data in data
 * @returns {boolean} Returns the boolean if the has the value with the help regexp you are looking at.
 * @example
 *
 * isExactbyRegExp({"test": 11,"test2": 11}, {"test2": /\d/g})
 * // => false
 */
function isExactbyRegExp (whereValue, objectValue1) {

    if (objectValue1 === null) {

        return false;

    }

    if (getTypeof(whereValue) !== "json" && getTypeof(whereValue) !== "string" && getTypeof(whereValue) !== "regexp" && getTypeof(whereValue) !== "number") {

        return false;

    }

    const key_s=(/(json|array)/g).test(getTypeof(objectValue1))
        ?objectValue1
        :[objectValue1];
    let cnt=0;
    const incrementDefaultValue=1;
    let local_is_valid = null;

    each(key_s, function (kk, kv) {

        if (getTypeof(whereValue) === "json") {

            if (has(whereValue[kk])) {

                if (getTypeof(whereValue[kk]) === "regexp") {

                    local_is_valid = whereValue[kk];

                } else {

                    local_is_valid = new RegExp(whereValue[kk]);

                }
                if (local_is_valid.test(kv)) {

                    cnt += incrementDefaultValue;

                }

            }

        } else {

            if (getTypeof(whereValue) === "regexp") {

                local_is_valid = whereValue;

            } else {

                local_is_valid = new RegExp(whereValue);

            }
            if (local_is_valid.test(kv)) {

                cnt += incrementDefaultValue;

            }

        }

    });

    return cnt >zero;

}

_stk.isExactbyRegExp=isExactbyRegExp;


/**
 *  To check if the two arguments are greater
 *
 * @since 1.4.8
 * @category Boolean
 * @param {any} value1 Any first value type
 * @param {any=} value2 Any second value type
 * @returns {boolean} Returns true or false.
 * @example
 *
 * gt(1, 2)
 * // => false
 */
function gt (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa > bb;

    }, [
        value1,
        value2
    ], two);

}

_stk.gt=gt;


/**
 * Convert Json To Array base on search value you provide
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue Json
 * @param {string} value Search key or index.
 * @returns {boolean} Returns Array
 * @example
 *
 * jsonToArray({"a":{"a":2},"b":{"a":3}},"a")
 * => [2, 3]
 */
function jsonToArray (objectValue, value) {

    const arry=[];

    each(objectValue, function (_key, _value) {

        if (has(value)) {

            const valueData = getData(_value, value);

            if (isEmpty(valueData) === false) {

                arry.push(valueData);

            }

        } else {

            arry.push(_value);

        }

    });

    return arry;

}

_stk.jsonToArray=jsonToArray;

_stk.isJson=isJson;


/**
 * Get the last value of array or JSON
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue The data is array
 * @returns {any} Returns last value of `objectValue`.
 * @example
 *
 * last([1,2] )
 *=>2
 */
function last (objectValue) {

    return getKeyVal(objectValue, "last_index").value;

}

_stk.last=last;


/**
 * Get the last index Of array
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue Array
 * @param {any} value Value you are searching for
 * @returns {any} Return get the index or array
 * @example
 *
 * lastIndexOf([1,2], 1)
 * // => 0
 */
function lastIndexOf (objectValue, value) {

    const start = 0;

    const indexValue = getIndexOf(objectValue, value, start, count(objectValue), true);

    return indexValue;

}

_stk.lastIndexOf=lastIndexOf;


/**
 * Where Loop Execution
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} jsn The second number in an addition.
 * @param {object} whr The second number in an addition.
 * @param {function} func The second number in an addition.
 * @param {boolean} isExist The second number in an addition.
 * @param {string} types The second number in an addition.
 * @returns {array|object} Returns the total.
 * @example
 *
 * whereLoopExecution({"s1":1,"s2":1},{"s1":1})
 *=>{"s1":1,"s2":1}
 */
function whereLoopExecution (jsn, whr, func, isExist, types) {

    const json_convertion = getTypeof(jsn) === "array"
        ? jsn
        : [jsn];
    const jsn_s= count(jsn, true) === zero
        ? json_convertion
        : jsn;
    const whr_s=whr||{};
    const variable=empty(jsn);
    let filterData = {};

    each(jsn_s, function (jk, jv) {

        if (getTypeof(jsn) === "array") {

            filterData = jv;

        }
        if (getTypeof(jsn) === "json") {

            filterData[jk]=jv;

        }

        if (types === "where") {

            if (isExact(whr_s, filterData, isExist)) {

                append(variable, jv, jk);
                if (has(func)) {

                    func(jv, jk);

                }

            }

        }
        if (types === "like") {

            if (isExactbyRegExp(whr_s, filterData)) {

                append(variable, jv, jk);
                if (has(func)) {

                    func(jv, jk);

                }

            }

        }

    });

    return variable;

}

/**
 * Searching the data either in array or json object to get similar value of data
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue Json to Array
 * @param {any} objectValueWhere Data you want to search that is identical to key of object or array
 * @param {any=} func Function
 * @returns {any} Return either Json to Array.
 * @example
 *
 * like({"s1":1,"s2":1},{"s1":1})
 *=>{s1: 1, s2: 1}
 */
function like (objectValue, objectValueWhere, func) {

    return whereLoopExecution(objectValue, objectValueWhere, func, true, 'like');

}

_stk.like=like;


/**
 * Specify the limit, similar in splice bt the return was object to ensure the order are not shuffle and key is number format
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} objectValue Data must be array
 * @param {number} minValue Minimum value
 * @param {number=} maxValue Maximum value
 * @param {Function=} func Callback function
 * @returns {any} Returns the object.
 * @example
 *
 * limit([1,2],1,2 )
 *=>{'1':2}
 */
function limit (objectValue, minValue, maxValue, func) {

    let cnt=0;
    const glo_jsn={};
    let glo_indtfd = null;
    const emptyDefaultValue=0;
    const minValueReserve=has(minValue)
        ?minValue
        :emptyDefaultValue;
    const maxValueReserve=has(maxValue)
        ?maxValue
        :count(objectValue);
    const incrementDefaultValue=1;

    each(objectValue, function (key, meth) {

        if (cnt >= minValueReserve && cnt <= maxValueReserve) {

            if (has(func)) {

                glo_indtfd=func(key, meth);

                if (has(glo_indtfd)) {

                    glo_jsn[key]=glo_indtfd;

                }

            } else {

                glo_jsn[key]=meth;

            }

        }

        cnt += incrementDefaultValue;

    });

    return glo_jsn;

}

_stk.limit=limit;


/**
 * To check if the two arguments are less
 *
 * @since 1.4.8
 * @category Boolean
 * @param {any} value1 Any first value type
 * @param {any=} value2 Any second value type
 * @returns {boolean|any} Returns true or false.
 * @example
 *
 * lt(1, 2)
 * // => true
 */
function lt (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa < bb;

    }, [
        value1,
        value2
    ], two);

}

_stk.lt=lt;

_stk.isEmpty=isEmpty;


/**
 * To check if the two arguments are less than to equal
 *
 * @since 1.4.8
 * @category Boolean
 * @param {any} value1 Any first value type
 * @param {any=} value2 Any second value type
 * @returns {boolean|any} Returns true or false.
 * @example
 *
 * lte(1, 2)
 * // => true
 */
function lte (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa <= bb;

    }, [
        value1,
        value2
    ], two);

}

_stk.lte=lte;

_stk.map=map;


/**
 * Get the value in array the value in json given the search value was in json
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue Json to Array
 * @param {any} objectValueWhere Data you want to search in key
 * @param {Function=} func Function
 * @returns {any} Return either Json to Array.
 * @example
 *
 * where({"s1":1,"s2":1},{"s1":1})
 *=>{"s1":1,"s2":1}
 * where([{"s1":{"s2":2}},{"s1":{"s2":3}}],{"s1.s2":2})
 *=>[{"s1":{"s2":2}}]
 */
function where (objectValue, objectValueWhere, func) {

    return whereLoopExecution(objectValue, objectValueWhere, func, true, 'where');

}

/**
 * Merging two json object
 *
 * @since 1.4.8.1
 * @category Collection
 * @param {any} objectValue The data you want to map
 * @param {any} mergeValue data that you want to merge or replace from `objectValue`
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * mergeWithKey({"s":1},{"ss":1})
 *=> {"s":1,"ss":1}
 */
function mergeWithKey (objectValue, mergeValue) {

    return curryArg(function (rawObjectValue, rawMergeValue) {

        if (indexOfExist([
            "array",
            "string",
            "number"
        ], getTypeofInternal(rawObjectValue))|| indexOfExist([
            "array",
            "string",
            "number"
        ], getTypeofInternal(rawMergeValue))) {

            throw new Error("Invalid , both value must be json");

        }

        each(rawMergeValue, function (sKey, sVal) {

            rawObjectValue = baseAppend(rawObjectValue, sVal, sKey);

        });

        return rawObjectValue;

    }, [
        objectValue,
        mergeValue
    ]);

}

/**
 * Selecting multiple search data using `getData` logic in the loop
 *
 * @since 1.4.8.1
 * @category Collection
 * @param {any} objectValue The data you want to map
 * @param {any} whereValue where clause for you to merge the two set of data
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * selectInData({"s":1},{"ss":"s"})
 *=> {"ss":1}
 */
function selectInData (objectValue, whereValue) {

    return curryArg(function (rawObjectValue, rawWhereValue) {

        return baseMap(rawWhereValue, function (value) {

            const rawDataToArray = baseMap(toArray(rawObjectValue), function (value2) {

                const rawData = getData(value2, value);

                return isEmpty(rawData)
                    ?value
                    :rawData;

            });

            return getTypeof(rawObjectValue)==="json"
                ?first(rawDataToArray)
                :rawDataToArray;

        });

    }, [
        objectValue,
        whereValue
    ]);

}

/**
 * Merging two json/array object with the help of where clause
 *
 * @since 1.4.8.1
 * @category Collection
 * @param {any} objectValue The data you want to map
 * @param {any} mergeValue data that you want to merge
 * @param {any} whereValue where clause for you to merge the two set of data, where clause at `$1`  for `objectValue` and `$2`  for `mergeValue`
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * mergeInWhere([{"s":23,"id":1}],[{"id":1,"title":"test only"}],{"$1.id":"$2.id","$2.title":"test only"})
 *=> [{ "id":1, "s":23, "title":"test only"}]
 */
function mergeInWhere (objectValue, mergeValue, whereValue) {

    return curryArg(function (rawObjectValue, rawMergeValue, rawWhereValue) {

        const rawObjectType = getTypeofInternal(rawObjectValue);

        if (getTypeofInternal(rawMergeValue) !== rawObjectType) {

            throw new Error("Invalid , both value must be "+rawObjectType);

        }

        return baseMap(rawObjectValue, function (value) {

            each(mergeValue, function (subKey, subValue) {

                const joinValue = {
                    "$1": value,
                    "$2": subValue
                };
                const selectData = selectInData(joinValue, rawWhereValue);
                const whereData = where(subValue, selectData);

                if (isEmpty(whereData) === false) {

                    value = mergeWithKey(value, subValue);

                }

            });

            return value;

        });

    }, [
        objectValue,
        mergeValue,
        whereValue
    ]);

}

_stk.mergeInWhere=mergeInWhere;

_stk.mergeWithKey=mergeWithKey;

_stk.multiply=multiply;


/**
 * To check if its not equal
 *
 * @since 1.4.8
 * @category Boolean
 * @param {any} value1 Any value type
 * @param {any} value2 Any value type
 * @returns {boolean} Returns true or false.
 * @example
 *
 * noteq('as', 'as')
 * // => false
 */
function noteq (value1, value2) {

    return curryArg(function (aa, bb) {

        return aa !== bb;

    }, [
        value1,
        value2
    ], two);

}

_stk.noteq=noteq;


/**
 * String Lower case case
 *
 * @since 1.4.5
 * @category String
 * @param {string} value String data
 * @returns {string} Returns camel sting data
 * @example
 *
 * stringLowerCase('The fish is goad   with Goat-1ss')
 *=> 'the fish is goad   with goat-1ss
 */
function stringLowerCase (value) {

    return toString(value).toLowerCase();

}

/**
 * Var extend was use in replacing from `objectValueReplace` if not existed at objectValue
 *
 * @since 1.0.1
 * @category Collection
 * @param {object} objectValue Json, Array or Object
 * @param {object} objectValueReplace Json, Array or Object that you want to assign to `objectValue`
 * @returns {array} Return Json or Array or Object.
 * @example
 *
 * varExtend({"s1":1},{"s1":2})
 *=>{"s1":2}
 */
function varExtend (objectValue, objectValueReplace) {

    return curryArg(function (rawObjectValue, rawObjectValueReplace) {

        const jsn_bool={
            "false": false,
            "true": true
        };

        const listValid = [
            "json",
            "object"
        ];

        if (indexOfExist(listValid, getTypeof(rawObjectValue)) && indexOfExist(listValid, getTypeof(rawObjectValueReplace))) {

            const jsn_s={};

            for (const key in rawObjectValue) {

                if (has(rawObjectValue, key)) {

                    if (indexOfExist(getKey(jsn_bool), stringLowerCase(rawObjectValue[key]))) {

                        jsn_s[key]=jsn_bool[stringLowerCase(rawObjectValue[key])];

                    } else {

                        jsn_s[key]=rawObjectValue[key];

                    }

                }

            }

            for (const key in rawObjectValueReplace) {

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

/**
 * Replace Value
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} objectValue Json or Array
 * @param {object} objectValueReplace Json or Array that you want to assign to `objectValue`
 * @returns {array} Return Json or Array.
 * @example
 *
 * replaceValue({"s1":1},{"s1":2})
 *=>{"s1":2}
 */
function replaceValue (objectValue, objectValueReplace) {

    for (const key in objectValueReplace) {

        if (getTypeof(objectValue[key]) === "json") {

            objectValue[key] =replaceValue(objectValue[key], objectValueReplace[key]);

        } else {

            objectValue[key] = objectValueReplace[key];

        }

    }

    return objectValue;

}

/**
 * On delay
 *
 * @since 1.4.1
 * @category Function
 * @param {any} func a Callback function
 * @param {object=} wait timer for delay
 * @param {object=} option option for delay
 * @returns {object} Returns object.
 * @example
 *
 *  onDelay(()=>{})
 *=>'11'
 */
function onDelay (func, wait, option) {

    const zero = 0;
    const extend = varExtend(option, {
        "limitCounterClear": 0
    });

    const valueWaited = wait || zero;

    const timeout = setTimeout(function () {

        func();

    }, valueWaited);

    const sequence = new ClassDelay(timeout, extend);

    return sequence;

}

/**
 * On wait
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} timeout timer for delay
 * @param {object} extend option for delay
 * @returns {object} Returns object.
 * @example
 *
 *  onWait(()=>{})
 *=>'11'
 */
function ClassDelay (timeout, extend) {

    this.timeout = timeout;

    this.extend = extend;

}

ClassDelay.prototype.cancel = function () {

    clearTimeout(this.timeout);

};

_stk.onDelay=onDelay;


/**
 * On sequence
 *
 * @since 1.4.1
 * @category Seq
 * @param {any} func a Callback function
 * @param {object=} wait timer for delay
 * @param {object=} option option for delay
 * @returns {string} Returns object.
 * @example
 *
 *  onSequence(()=>{})
 *=>'11'
 */
function onSequence (func, wait, option) {

    const zero = 0;
    const one = 1;
    const extend = varExtend(option, {
        "limitCounterClear": 0
    });

    const valueWaited = wait || zero;
    let counter = 0;

    const interval = setInterval(function () {

        func();
        if (extend.limitCounterClear >zero) {

            if (counter === extend.limitCounterClear) {

                clearInterval(interval);

            }

        }

        counter += one;

    }, valueWaited);

    const sequence = new ClassSequence(interval, extend);

    return sequence;

}

/**
 * On wait
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} interval timer for delay
 * @param {object} extend The option for delay
 * @returns {any} Returns the object.
 * @example
 *
 *  onWait(()=>{})
 *=>'11'
 */
function ClassSequence (interval, extend) {

    this.interval = interval;

    this.extend = extend;

}

ClassSequence.prototype.cancel = function () {

    clearInterval(this.interval);

};

_stk.onSequence=onSequence;

const getWindow = function () {

    if (typeof window !== 'undefined') {

        return window;

    }

    return {};

};

/**
 * On wait
 *
 * @since 1.4.1
 * @category Function
 * @param {any} func a Callback function
 * @param {object=} wait timer for delay
 * @returns {string} Returns the total.
 * @example
 *
 *  onWait(()=>{})
 *=>'11'
 */
function onWait (func, wait) {

    const browserWindow = getWindow();
    let timerId = null;

    const useReqeustAdnimation = typeof browserWindow.requestAnimationFrame === "function";

    /**
     * On wait
     *
     * @since 1.4.1
     * @category Seq
     * @param {any} pendingFunc The second number in an addition.
     * @param {object} waiting The second number in an addition.
     * @returns {string} Returns the total.
     * @example
     *
     *  onWait(()=>{})
     *=>'11'
     */
    function startTimer (pendingFunc, waiting) {

        if (useReqeustAdnimation) {

            clearTimer();

            return browserWindow.requestAnimationFrame();

        }

        return onDelay(pendingFunc, waiting);

    }

    /**
     * On wait
     * @returns {any} Returns the total.
     *
     */
    function clearTimer () {

        if (useReqeustAdnimation) {

            browserWindow.cancelAnimationFrame(timerId);

        }

        timerId.cancel();

    }

    /**
     * On wait
     * @returns {any} Returns the total.
     *
     */
    function bootLoader () {

        timerId = startTimer(func, wait);

        return {};

    }

    return bootLoader();

}

_stk.onWait=onWait;


const entity = [

    {"decimal": "&#160;",
        "entity": "&nbsp;",
        "hex": "&#xA0;",
        "html": " ",
        "title": "non-breaking space"},
    {"decimal": "&#34;",
        "entity": "&quot;",
        "hex": "&#x22;",
        "html": '"',
        "title": "quotation mark = APL quote"},
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
        "title": "Right curly bracket"}

];

const listType = [
    'decimal',
    'entity',
    'hex'
];

const whitespace = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003' +
         '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
         '\u2029\uFEFF';

/**
 * String Unescape
 *
 * @since 1.3.1
 * @category String
 * @param {string} value String data
 * @param {string=} type Configuration
 * @returns {string} Returns unescape string
 * @example
 *
 * stringUnEscape('yahii&nbsp;&amp;&nbsp;adad&nbsp;&circ;ss')
 *=>"yahii & adad ^ss"
 */
function stringUnEscape (value, type) {

    const typeVal = type || "entity";

    if (indexOfNotExist(listType, typeVal)) {

        return "";

    }

    const regexReplace = toString(value).replace(/(&[#]{0,1}[a-zA-Z-0-9]{1,};)/g, function (str1) {

        const search = {};

        search[typeVal] =str1;

        const whr = where(entity, search);

        return isEmpty(whr)
            ? str1
            : first(whr).html;

    });

    return regexReplace;

}

/**
 * Cleanup unnecessary character
 *
 * @since 1.4.86
 * @category Collection
 * @param {any} value The second number in an addition.
 * @returns {any} Returns the json.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
function cleanValue (value) {

    let refValue = value;

    refValue = refValue.replace(/[\t\n\r\s]+$/g, "");
    refValue = refValue.replace(/^[\t\n\r\s]+/g, "");

    return refValue;

}

/**
 * Parse Json object
 *
 * @since 1.4.86
 * @category Collection
 * @param {any} value The second number in an addition.
 * @returns {any} Returns the json.
 * @example
 *
 * getTagVal('{}' )
 *=>{}
 */
function getTagVal (value) {

    if ((/^\{/gmi).test(value) && (/\}$/).test(value)) {

        return {

            "ret_value": cleanValue(value.replace(/^\{/g, "").replace(/\}$/g, "")),
            "tag_close": "}",
            "tag_open": "{",
            "type": "json"
        };

    }
    if ((/^\[/gmi).test(value) && (/\]$/gmi).test(value)) {

        return {
            "ret_value": cleanValue(value.replace(/^\[/g, "").replace(/\]$/g, "")),
            "tag_close": "]",
            "tag_open": "[",
            "type": "array"
        };

    }

    return {
        "ret_value": "",
        "tag_close": "",
        "tag_open": "",
        "type": "none"
    };

}

/**
 * Parse Json object
 *
 * @since 1.4.86
 * @category Collection
 * @param {any} values The second number in an addition.
 * @returns {any} Returns the json.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
function encodeStripValueQoute (values) {

    let str_call = "";
    let reserv_str = "";
    const arg_call_list = [];

    let str_type = "";

    each(values.split(""), function (key, value) {

        const value_indx=value;

        let row_str_type = "-";

        if (value_indx === '"') {

            row_str_type = "double_qoute";

        }
        if (value_indx === "'") {

            row_str_type = "single_qoute";

        }
        if (str_type === "") {

            // eslint-disable-next-line no-negated-condition
            if (row_str_type !== '-') {

                str_type = row_str_type;
                str_call += "#@"+arg_call_list.length+"@#";

            } else {

                str_call += value_indx;

            }

        } else {

            if (row_str_type ==="-") {

                reserv_str += value_indx;

            }

            if (str_type === row_str_type) {

                arg_call_list.push({
                    "arg": reserv_str,
                    "qoute_type": str_type
                });
                str_type = "";
                reserv_str = "";

            }

        }

    });

    return {
        arg_call_list,
        str_call
    };

}

/**
 * Parse Json object
 *
 * @since 1.4.86
 * @category Collection
 * @param {any} str_call String you want to convert to
 * @param {any} arg_call_list The second number in an addition.
 * @param {boolean} keyOnly The second number in an addition.
 * @returns {any} Returns the json.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
function decodeStripValueQoute (str_call, arg_call_list, keyOnly) {

    let count = 0;

    let repl= str_call.replace(/#@([0-9]{1,})@#/gi, function (__, va1) {

        const getObj = arg_call_list[va1];

        count +=one;

        return '"'+ getObj.arg +'"';

    });

    if (count===zero && keyOnly) {

        repl = '"'+repl+'"';

    }

    return repl;

}

/**
 * Parse Json object
 *
 * @since 1.4.86
 * @category Collection
 * @param {any} glb String you want to convert to
 * @param {any} config The second number in an addition.
 * @returns {any} Returns the json.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
function callbackParse (glb, config) {

    if (glb.type === 'json') {

        const encodeStr = encodeStripValueQoute(glb.ret_value, config);

        const splitKeyValue = encodeStr.str_call.split(":");

        if (splitKeyValue.length <two) {

            throw new Error("No Key found");

        }

        const reviewSubValue = getTagVal(decodeStripValueQoute(cleanValue(splitKeyValue.splice(one).join(": ")), encodeStr.arg_call_list, false));

        if (reviewSubValue.type !== "none") {

            return glb.tag_open+decodeStripValueQoute(cleanValue(splitKeyValue[zero]), encodeStr.arg_call_list, true)+": "+callbackParse(reviewSubValue, config) +glb.tag_close;

        }

        const valueSplit = encodeStr.str_call.split(",");

        const list_obj = [];

        each(valueSplit, function (key, value) {

            const value_split = value.split(":");

            if (value_split.length <two) {

                throw new Error("No Key found");

            }
            const argValueJoin =value_split.splice(one).join(": ");
            const objSubVal = decodeStripValueQoute(cleanValue(argValueJoin), encodeStr.arg_call_list, false);
            const tagVal = getTagVal(objSubVal);

            if (tagVal.type === 'none') {

                list_obj.push(decodeStripValueQoute(cleanValue(value_split[zero]), encodeStr.arg_call_list, true).toString()+ ": "+ objSubVal);

            } else {

                list_obj.push(decodeStripValueQoute(cleanValue(value_split[zero]), encodeStr.arg_call_list, true).toString()+ ": "+ callbackParse(tagVal, config));

            }

        });

        return glb.tag_open+ list_obj.join(", ") +glb.tag_close;

    }

    if (glb.type === 'array') {

        const encodeStr = encodeStripValueQoute(glb.ret_value, config);

        const valueSplit = encodeStr.str_call.split(",");

        const reviewSubValue = getTagVal(glb.ret_value);

        if (reviewSubValue.type !== "none") {

            return glb.tag_open+callbackParse(reviewSubValue, config) +glb.tag_close;

        }

        const list_obj = [];

        each(valueSplit, function (key, value) {

            const objSubVal = decodeStripValueQoute(cleanValue(value), encodeStr.arg_call_list, false);
            const tagVal = getTagVal(objSubVal);

            if (tagVal.type === 'none') {

                list_obj.push(objSubVal);

            } else {

                list_obj.push(callbackParse(tagVal, config));

            }

        });

        return glb.tag_open+ list_obj.join(", ") +glb.tag_close;

    }

    return "";

}

/**
 * Parse from String to JSON object
 *
 * @since 1.4.86
 * @category Collection
 * @param {string} value String you want to convert to json object
 * @param {any=} config Option you want to set in this function.
 * @returns {any} Returns the json object.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
function parseJson (value, config) {

    const defaultConfig = varExtend(config, {});

    const stripValue=cleanValue(stringUnEscape(value));

    const tagVal = getTagVal(stripValue);

    const obgM = callbackParse(tagVal, defaultConfig);

    if (obgM === "") {

        return null;

    }
    const dataObj = JSON.parse(obgM);

    return dataObj;

}

_stk.parseJson=parseJson;


/**
 * Data String from JSON object
 *
 * @since 1.0.1
 * @category Collection
 * @param {string} str Object you want to convert to JSON string
 * @returns {string} Return JSON string
 * @example
 *
 * parseString({} )
 *=>'{}'
 */
function datastring (str) {

    let data_s="";

    if (typeof str === "string") {

        if (str.indexOf("'")) {

            data_s='&quot;'+str+'&quot;';

        } else if (str.indexOf('"')) {

            data_s='&quot;'+str+'&quot;';

        } else {

            data_s=str;

        }

    } else {

        data_s=str;

    }

    return data_s;

}

/**
 * Parse String
 *
 * @since 1.0.1
 * @category Seq
 * @param {number} rawCount The second number in an addition.
 * @param {any} rawConfig The second number in an addition.
 * @param {any} rawValue The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * parseString({} )
 *=>'{}'
 */
function parseStringCore (rawCount, rawConfig, rawValue) {

    return curryArg(function (refCount, refConfig, value) {

        let str="";
        let str_strt="";
        let str_end="";
        let inc=0;
        const incrementDefaultValue=1;
        let inc_main=null;

        if (has(value)) {

            if (getTypeof(value) === "json") {

                str_strt="{";
                str_end="}";

                each(value, function (_key, _value) {

                    inc_main=inc<count(value)-incrementDefaultValue
                        ?","
                        :"";

                    if (typeof _value === "object"&&_value !== null) {

                        str += datastring(_key)+":"+ parseStringCore(refCount+one, refConfig, _value) +""+inc_main;

                    } else {

                        str += datastring(_key)+":"+datastring(_value)+""+inc_main;

                    }

                    inc += incrementDefaultValue;

                });

            }
            if (getTypeof(value) === "array") {

                str_strt="[";
                str_end="]";

                each(value, function (_key, _value) {

                    inc_main=inc<count(value)-incrementDefaultValue
                        ?","
                        :"";

                    if (typeof _value === "object") {

                        str += parseStringCore(refCount+one, refConfig, _value) +""+inc_main;

                    } else {

                        str += datastring(_value)+""+inc_main;

                    }

                    inc += incrementDefaultValue;

                });

            }

        }

        return (str_strt+str+str_end).replace(/[\r\t\n\s]{1,}/g, "&nbsp;").replace(/(&quot;)/gi, '"');

    }, [
        rawCount,
        rawConfig,
        rawValue
    ], two);

}

/**
 * Parse from JSON object to String
 *
 * @since 1.4.86
 * @category
 * @param {any} value The Object that you want to convert to string in json format.
 * @param {any=} config Option you want to set in this function.
 * @returns {string} Returns the string in json format.
 * @example
 *
 * parseString({} )
 *=>'{}'
 */
function parseString (value, config) {

    const defaultConfig = varExtend(config, {});

    const data = parseStringCore(zero, defaultConfig, value);

    return data;

}

_stk.parseString=parseString;


/**
 * Random value from array list
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} valueArray Array
 * @param {number} minValue Minimum value base on index
 * @param {number} maxValue  Max value base on index
 * @returns {string|number} Return string or number in array
 * @example
 *
 * random([10,20,30],0,3 )
 *=>'[20]'
 */
function random (valueArray, minValue, maxValue) {

    const emptyDefaultValue=0;
    const ran_min=has(minValue)
        ?minValue
        :emptyDefaultValue;
    const ran_max=has(maxValue)
        ?maxValue+ran_min
        :count(valueArray);
    const math_random = Math.round(Math.random()*ran_max);

    if (math_random< count(valueArray) && math_random >=emptyDefaultValue) {

        return toArray(valueArray[math_random]);

    }

    return toArray(valueArray[math_random % count(valueArray)]);

}

_stk.random=random;

_stk.range=range;


/**
 * Reduce function
 *
 * @since 1.4.8
 * @category Core
 * @param {any} defaultValue Starting value that you want to use as reference
 * @param {any[]} listData Array value that you want to map
 * @param {any} func Callback function for how to map the data
 * @returns {number} Return redue value
 * @example
 *
 * reduce(2,[1,2],(total,value)=>total+value)
 * // => 5
 */
function reduce (defaultValue, listData, func) {

    const that = this;

    return curryArg(function (rawDefaultValue, rawListData, rawFunc) {

        return baseReduce.apply(that, [
            rawDefaultValue,
            rawListData,
            rawFunc
        ]);

    }, [
        defaultValue,
        listData,
        func
    ], three);

}

_stk.reduce=reduce;


/**
 * Regex Count Group number
 *
 * @since 1.4.7
 * @category String
 * @param {any} value Value you want to convert in array
 * @returns {number} Return in array.
 * @example
 *
 * regexCountGroup('/(abs|scs)@0@@1@/')
 *=>[1]
 */
function regexCountGroup (value) {

    const one =1;

    return new RegExp(toString(value) + '|').exec('').length - one;

}

_stk.regexCountGroup=regexCountGroup;


/**
 * Perform left to right function composition. first arguemnt will be default value
 *
 * @since 1.4.86
 * @category Condition
 * @param {...any?} arg Arguments in function
 * @returns {any} Returns any value.
 * @example
 *
 * pipe(Math.pow,add(1))(11,2)
 * // => 122
 */
function pipe (...arg) {

    const pipeConst = first(arg);
    const varLimit = limit(arg, one);
    const that = this;

    return curryArg(function (...rawValue) {

        return baseReduce(pipeConst.apply(that, rawValue), varLimit, function (total, value) {

            if (getTypeofInternal(value) === "function") {

                total = value.call(that, total);

            }

            return total;

        });

    // eslint-disable-next-line padded-blocks
    // eslint-disable-next-line no-undefined
    }, arrayRepeat(undefined, pipeConst.length), pipeConst.length);

}

_stk.pipe=pipe;


/**
 * Remove data in either JSON or Array using key or woth value, a revise logic
 *
 * @since 1.4.85
 * @category Collection
 * @param {any} objectValue Json or array
 * @param {any} value if objectValue, json is must be object or array index you want to remove
 * @param {number=} value2 Last row in index
 * @returns {any[]} Returns the total.
 * @example
 *
 * remove([1,2,3],0 )
 *=>[2, 3]
 */
function remove (objectValue, value, value2) {

    const type_js=getTypeof(objectValue);
    let reslt =null;

    const isValueAFunction = getTypeof(value) === "function";

    if (type_js === "array") {

        const lastRow = has(value2)
            ?value2
            :count(objectValue);

        reslt=[];
        each(objectValue, function (ak, av) {

            if (isValueAFunction) {

                if (value(ak, av)) {

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
        const jsn_vw=[];

        each(objectValue, function () {

            where(objectValue, value, function (jk) {

                jsn_vw.push(jk);

            });

        });

        each(objectValue, function (ak, av) {

            if (isValueAFunction) {

                if (value(ak, av)) {

                    reslt[ak]=av;

                }

            } else {

                if (indexOfExist(jsn_vw, av) === false) {

                    reslt[ak]=av;

                }

            }

        });

        return reslt;

    }

    return [];

}

_stk.remove=remove;


/**
 * Remove data in either JSON or Array using key or woth value, a revise logic
 *
 * @since 1.4.85
 * @category Collection
 * @param {any} objectValue Json or array
 * @param {any} value if objectValue, json is must be object or array index you want to remove
 * @returns {any[]} Returns the total.
 * @example
 *
 * removeFromKey([1,2,3],0 )
 *=>[2, 3]
 */
function removeFromKey (objectValue, value) {

    const type_js=getTypeof(objectValue);
    let reslt =null;

    if (type_js === "array") {

        reslt=[];
        each(objectValue, function (ak, av) {

            if (parseInt(ak) !== value) {

                reslt.push(av);

            }

        });

        return reslt;

    }

    if (type_js === "json") {

        reslt={};

        each(objectValue, function (ak, av) {

            if (has(objectValue, ak) === false) {

                reslt[ak]=av;

            }

        });

        return reslt;

    }

    return [];

}

_stk.removeFromKey=removeFromKey;


/**
 * Random Decimal
 *
 * @since 1.0.1
 * @category Math
 * @param {number} value Int or Double value type
 * @param {number=} maxValue limit decimal
 * @returns {number} Returns the total.
 * @example
 *
 * roundDecimal(11.1111111,3 )
 *=>11.11
 */
function roundDecimal (value, maxValue) {

    const emptyDefaultValue=0;
    const onceDefaultValue=1;
    const twoDefaultValue=2;
    const tenDefaultValue=10;
    const jsn=value||emptyDefaultValue;
    const str_dec=jsn.toString().split(".");
    const s_dmin=0;
    const s_dmax=maxValue||twoDefaultValue;

    if (count(str_dec) === twoDefaultValue) {

        const p_cnts=count(str_dec[onceDefaultValue].toString().split(""));
        const delmts=p_cnts <= s_dmin
            ?s_dmin
            :s_dmax;
        const dec_s=tenDefaultValue**delmts;

        return Math.round(parseFloat(jsn*dec_s))/dec_s;

    }

    return jsn;

}

_stk.roundDecimal=roundDecimal;


/**
 * Repeat string value
 *
 * @since 1.0.1
 * @category String
 * @param {string=} value String you want to duplicate
 * @param {number=} valueRepetion how many times you want to repeate
 * @returns {string} Return in string or number.
 * @example
 *
 * repeat("s",1 )
 *=>'ss'
 */
function repeat (value, valueRepetion) {

    const emptyDefaultValue=0;
    const nm_rpt=valueRepetion||emptyDefaultValue;
    const nm_str=value||"";

    return arrayRepeat(nm_str, nm_rpt).join("");

}

_stk.repeat=repeat;

_stk.selectInData=selectInData;


/**
 * Shuffle data in array
 *
 * @since 1.0.1
 * @update 1.4.86
 * @category Array
 * @param {any[]} objectValue Array argmuments that you want to shuffle
 * @returns {any[]} Shuffle return value in array
 * @example
 *
 * shuffle([1,2,3])
 *=>[2,3,1]
 */
function shuffle (objectValue) {

    const emptyDefaultValue=0;
    const onceDefaultValue=1;
    const output=[];
    let rawObjectValue = clone(objectValue);
    const valueType=[
        "array",
        "json"
    ];

    if (indexOf(valueType, getTypeof(objectValue))>-onceDefaultValue) {

        const counts=count(objectValue)-onceDefaultValue;

        for (let currentIndex=counts; currentIndex>=emptyDefaultValue;) {

            const rowValue = random(rawObjectValue);

            rawObjectValue = clone(removeFromKey(rawObjectValue, indexOf(rawObjectValue, first(rowValue))));
            output.push(first(rowValue));
            currentIndex -= onceDefaultValue;

        }

    }

    return output;

}

_stk.shuffle=shuffle;


/**
 * In array, you need to check all value atleast one true
 *
 * @since 1.4.8
 * @category Condition
 * @param {...any?} arg List of value you need to check if some are true
 * @returns {boolean} Returns true or false.
 * @example
 *
 * someValid(true, false)
 * // => true
 */
function someValid (...arg) {

    return curryArg(function (...rawValue) {

        return baseCountValidList(rawValue);

    }, arg) >= one;

}

_stk.someValid=someValid;


/**
 * Sort array
 *
 * @since 1.0.1
 * @category Array
 * @param {any[]} objectValue List of array you want to sort
 * @param {boolean=} order True for ascend then false for descend
 * @param {any=} func Callback function or sort type
 * @returns {any[]} Returns the total.
 * @example
 *
 * sort([2,3,1])
 *=>[1,2,3]
 */
function sort (objectValue, order, func) {

    const jsonn=objectValue;
    let asc=true;
    let types='any';

    if (has(order) && getTypeof(order) === 'boolean') {

        asc= order;

    }

    if (has(func) && getTypeof(func) === 'string') {

        types= func;

    }

    const js_m=getTypeof(jsonn) === "json"
        ?each(jsonn)
        :jsonn;

    const finalResponse=js_m.sort(function (orderA, orderB) {

        if (has(func) && getTypeof(func) === 'function') {

            return func(orderA, orderB);

        }

        let sortOrderA = orderA;
        let sortOrderB = orderB;

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

}

_stk.sort=sort;
/**
 * Split string for special cases
 *
 * @since 1.4.8
 * @category Seq
 * @param {string} value String to split
 * @returns {string} Returns the total.
 * @example
 *
 * stringSplit("split-this-string")
 *=>"split this string"
 */
function stringSplit (value) {

    return value.trim()
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([-_.\s]{1,})/g, ' ')
        .toLowerCase();

}

/**
 * String Camel case
 *
 * @since 1.3.1
 * @category String
 * @param {string} value String data
 * @returns {string} Returns camel sting data
 * @example
 *
 * stringCamelCase('the fish is goad   with goat-1ss')
 *=> 'theFishIsGoadWithGoat1ss'
 */
function stringCamelCase (value) {

    return stringSplit(toString(value))
        .replace(/(\s[a-z])/g, function (ss1) {

            return ss1.toUpperCase();

        })
        .split(" ")
        .join("");

}

_stk.stringCamelCase=stringCamelCase;


/**
 * String Capitalize
 *
 * @since 1.3.1
 * @category String
 * @param {string} value String data
 * @param {string=} option Type of captalize optional
 * @returns {string} Returns Capitalize sting data
 * @example
 *
 * stringCapitalize('the fish is goad   with goat-1ss','all')
 *=> 'The Fish Is Goad   With Goat-1ss'
 * stringCapitalize('the fish is goad   with goat-1ss')
 *=> 'The fish is goad   with goat-1ss'
 */
function stringCapitalize (value, option) {

    if (option === "all") {

        return stringLowerCase(value).replace(/(\s[a-z]|\b[a-z])/g, function (ss1) {

            return ss1.toUpperCase();

        });

    }

    return stringLowerCase(value).replace(/([a-z]{1})/, function (ss1) {

        return ss1.toUpperCase();

    });

}

_stk.stringCapitalize=stringCapitalize;


/**
 * String Escape
 *
 * @since 1.3.1
 * @category String
 * @param {string} value String data
 * @param {string=} type Configuration
 * @returns {string} Returns escape string
 * @example
 *
 * stringEscape("yahii & adad ^ss")
 *=> 'yahii&nbsp;&amp;&nbsp;adad&nbsp;&circ;ss'
 */
function stringEscape (value, type) {

    const typeVal = type || "entity";

    if (indexOfNotExist(listType, typeVal)) {

        return "";

    }

    const regexReplace = toString(value).replace(/([\s<>"'^&{}])/g, function (str1) {

        const search = {"html": str1};

        const whr = where(entity, search);

        return isEmpty(whr)
            ? str1
            : first(whr)[typeVal];

    });

    return regexReplace;

}

_stk.stringEscape=stringEscape;


/**
 * String Kebab case
 *
 * @since 1.3.1
 * @category String
 * @param {string} value String data
 * @returns {string} Returns Kebab sting data
 * @example
 *
 * stringKebabCase('the fish is goad   with goat-1ss')
 *=> 'the-fish-is-goad-with-goat-1ss'
 */
function stringKebabCase (value) {

    return stringSplit(toString(value))
        .split(" ")
        .join("-");

}

_stk.stringKebabCase=stringKebabCase;

_stk.stringLowerCase=stringLowerCase;


/**
 * String Snake case
 *
 * @since 1.3.1
 * @category String
 * @param {string} value String data
 * @returns {string} Returns Snake sting data
 * @example
 *
 * stringSnakeCase('the fish is goad   with goat-1ss')
 *=> 'the_fish_is_goad_with_goat_1ss'
 */
function stringSnakeCase (value) {

    return stringSplit(toString(value))
        .split(" ")
        .join("_");

}

_stk.stringSnakeCase=stringSnakeCase;


/**
 * String Substr
 *
 * @since 1.4.5
 * @category String
 * @param {string} value String data
 * @param {number} minValue minimum value
 * @param {number=} maxValue maximum value
 * @returns {string} Returns camel sting data
 * @example
 *
 * stringSubs('The fish is goad   with Goat-1ss')
 *=> 'the fish is goad   with goat-1ss
 */
function stringSubs (value, minValue, maxValue) {

    if (has(maxValue)) {

        return toString(value).substring(minValue, maxValue);

    }

    return toString(value).substring(minValue);

}

_stk.stringSubs=stringSubs;

_stk.stringUnEscape=stringUnEscape;


/**
 * String Upper case case
 *
 * @since 1.4.5
 * @category String
 * @param {string} value String data
 * @returns {string} Returns camel sting data
 * @example
 *
 * stringUpperCase('The fish is goad   with Goat-1ss')
 *=> 'THE FISH IS GOAD   WITH GOAT-1SS'
 */
function stringUpperCase (value) {

    return toString(value).toUpperCase();

}

_stk.stringUpperCase=stringUpperCase;

_stk.subtract=subtract;


/**
 * Swapping the value either string or array in there specific position
 *
 * @since 1.4.86
 * @category Collection
 * @param {number} firstValue The data you want to map
 * @param {number} secondValue data that you want to merge
 * @param {any[]|string} listValue Passing value either array or string
 * @returns {any} Return map either JSON or Array
 * @example
 *
 * swap(0, 2, 'foo')
 *=> off
 */
function swap (firstValue, secondValue, listValue) {

    return curryArg(function (rawFirstValue, rawSecondValue, rawListValue) {

        let cloneRawListValueReturn = rawListValue;
        let isSplit = false;

        if (getTypeof(cloneRawListValueReturn) !== "array") {

            cloneRawListValueReturn = toString(cloneRawListValueReturn).split("");
            isSplit = true;

        }

        const cloneRawListValue = clone(cloneRawListValueReturn);

        cloneRawListValueReturn[rawFirstValue] = cloneRawListValue[rawSecondValue];
        cloneRawListValueReturn[rawSecondValue] = cloneRawListValue[rawFirstValue];

        if (isSplit) {

            cloneRawListValueReturn = cloneRawListValueReturn.join("");

        }

        return cloneRawListValueReturn;

    }, [
        firstValue,
        secondValue,
        listValue
    ]);

}

_stk.swap=swap;


/**
 * Template Value
 *
 * @since 1.0.1
 * @category String
 * @param {string} templateString Template string
 * @param {any} data Parameter to replace
 * @param {any=} option The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 *  templateValue("<!- test !>", {"test": 11})
 *=>'11'
 */
function templateValue (templateString, data, option) {

    const oneDefaultValue=1;

    templateString = templateValueInternal(toString(templateString), data);

    const default_option=varExtend({
        "escape": "<!-([\\s\\S]+?)!>",
        "evaluate": "<![^=-]([\\s\\S]+?)!>",
        "interpolate": "<!=([\\s\\S]+?)!>"
    }, option);

    const valueType=[
        "array",
        "json"
    ];

    const regexp = new RegExp([
        default_option.evaluate,
        default_option.interpolate,
        default_option.escape
    ].join("|")+"|$", "g");

    let source = "__p += '";
    let index = 0;

    const escapes = {
        '\n': 'n',
        '\r': 'r',
        "'": "'",
        '\\': '\\',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
    };

    const escaper = /\\|'|\r|\n|\u2028|\u2029/g;

    const escapeChar = function (match) {

        return '\\' + escapes[match];

    };

    templateString.replace(regexp, function (match, evaluate, interpolate, escape, offset) {

        source += templateString.slice(index, offset).replace(escaper, escapeChar);
        index = offset+match.length;

        if (evaluate) {

            source += "';\n"+evaluate+"\n__p += '";

        }

        if (interpolate) {

            source += "'+\n((__t=("+interpolate+")) == null?'':__t)+\n'";

        }

        if (escape) {

            source += "'+\n((__t=("+interpolate+")) == null?'':__t)+\n'";

        }

        return match;

    });

    source += "';\n";

    source = "var __t,__p='',__j=[].join," +
        "print=function(){__p += __j.call(arguments,'');};\n" +
    source + " return __p;\n";

    try {

        let val_source = "";

        if (getTypeof(data) === "json") {

            for (const key in data) {

                if (has(data, key)) {

                    val_source += 'var '+key+' = '+(indexOf(valueType, getTypeof(data[key]))>-oneDefaultValue
                        ?parseString(data[key])
                        :'"'+data[key]+'"')+';';

                }

            }

        }

        const render = new Function('obj', '_', val_source+source);

        return render.call(this, data, templateValue);

    } catch (error) {

        console.log(error);
        error.source = source;
        throw error;

    }

}

/**
 * Template Value Internal
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} str_raw String from template you need interpolation
 * @param {string} reg Value you want to replace from template
 * @returns {string} Returns template from interpolation
 * @example
 *
 * templateValueInternal("","" )
 *=>'{}'
 */
function templateValueInternal (str_raw, reg) {

    const str=str_raw;
    let strs=str;

    try {

        try {

            const regs=new RegExp("[\\r\\t\\n\\s]{0,}<![-]\\s{0,}(.*?)\\s{0,}!>[\\r\\t\\n\\s]{0,}", "g");

            strs=strs.replace(regs, function (word, mes1) {

                const strs_perd=mes1.replace(".", ":");
                const gtdata=getData(reg, strs_perd);

                return getTypeof(gtdata) === "json"
                    ?""
                    :gtdata;

            });

        } catch (error) {

            console.log(error);

        }

    } catch (error) {

        console.log(error);

    }

    const strs_finl=strs;

    return strs_finl;

}

_stk.templateValue=templateValue;


/**
 * Get the value from index zero until the last value
 *
 * @since 1.4.86
 * @category Math
 * @param {any[]|string} rawList Second number
 * @param {number} startIndex Second number
 * @param {number} lastIndex Second number
 * @returns {number} Returns true or false.
 * @example
 *
 * baseTake(1, 1)
 * // => 1
 */
function baseTake (rawList, startIndex, lastIndex) {

    const refRawList = getTypeofInternal(rawList) === "string"
        ?rawList.split("")
        :rawList;

    const varLimit = limit(refRawList, startIndex, lastIndex);

    const rawGetValue = getValue(varLimit);

    return getTypeofInternal(rawList) === "string"
        ?rawGetValue.join("")
        :rawGetValue;

}

/**
 * Get the value from index zero until the last value
 *
 * @since 1.4.86
 * @category Math
 * @param {number} value First number, our first index will start at zero
 * @param {any[]|string} valueList Second number
 * @returns {number} Returns true or false.
 * @example
 *
 * take(1, [1])
 * // => 1
 */
function take (value, valueList) {

    return curryArg(function (rawValue, rawList) {

        return baseTake(rawList, zero, rawValue-one);

    }, [
        value,
        valueList
    ], two);

}

_stk.take=take;

_stk.toArray=toArray;


/**
 * Logic in convert string or number to valid number
 *
 * @since 1.0.1
 * @category Seq
 * @param {any} regexp The second number in an addition.
 * @param {string|number} defaultVariable The second number in an addition.
 * @param {string|number} nullReplacement The second number in an addition.
 * @returns {any} Returns the total.
 * @example
 *
 * dataNumberFormat(/(\d)/g, 0,1)
 *=> 1
 */
function dataNumberFormat (regexp, defaultVariable, nullReplacement) {

    const regp=regexp;
    let intr=defaultVariable;

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

/**
 * To extract number in string and convert to double
 *
 * @since 1.0.1
 * @category Number
 * @param {any} value Value you to convert in double
 * @returns {number} Return in double.
 * @example
 *
 * toDouble(1)
 *=>1.00
 */
function toDouble (value) {

    const zero = 0.00;

    return parseFloat(dataNumberFormat(/(\d[.]{0,})/g, zero, value === null
        ?zero
        :value));

}

_stk.toDouble=toDouble;


/**
 * To extract number in string and convert to integer
 *
 * @since 1.0.1
 * @category Number
 * @param {any} value Value you to convert in integer
 * @returns {number} Return in integer.
 * @example
 *
 * toInteger(1)
 *=>1
 */
function toInteger (value) {

    const zero = 0;

    return parseInt(dataNumberFormat(/(\d)/g, zero, value === null
        ?zero
        :value));

}

_stk.toInteger=toInteger;

_stk.toString=toString;


/**
 * String trim  at the end only
 *
 * @since 1.4.86
 * @category String
 * @param {string} value String data that you want to trim
 * @returns {string} Returns trim data in start of string
 * @example
 *
 * trimStart(' The fish is goad   with Goat-1ss ')
 *=> 'The fish is goad   with Goat-1ss '
 */
function trimStart (value) {

    const rx = new RegExp('^[' + whitespace + ']*');

    return toString(value).replace(rx, "");

}

/**
 * String trim at the end only
 *
 * @since 1.4.86
 * @category String
 * @param {string} value String data that you want to trim
 * @returns {string} Returns trim data in end of string
 * @example
 *
 * trimEnd(' The fish is goad   with Goat-1ss ')
 *=> ' The fish is goad   with Goat-1ss'
 */
function trimEnd (value) {

    const rx = new RegExp('[' + whitespace + ']*$');

    return toString(value).replace(rx, "");

}

/**
 * String trim
 *
 * @since 1.4.8
 * @category String
 * @param {string} value String data that you want to trim
 * @returns {string} Returns trim data
 * @example
 *
 * trim(' The fish is goad   with Goat-1ss ')
 *=> 'The fish is goad   with Goat-1ss'
 */
function trim (value) {

    let rawValue = toString(value);

    rawValue = trimStart(rawValue);
    rawValue = trimEnd(rawValue);

    return rawValue.trim();

}

_stk.trim=trim;

_stk.trimEnd=trimEnd;

_stk.trimStart=trimStart;


/**
 * Get only the unique data from array
 *
 * @since 1.4.1
 * @category Array
 * @param {any} value Value you want to convert in array
 * @returns {any[]} Return in array.
 * @example
 *
 * unique([1,2,3,2,3])
 *=>[1,2,3]
 */
function unique (value) {

    if (getTypeof(value) === "array") {

        const uniqArrData = [];

        each(value, function (key, val) {

            if (indexOfNotExist(uniqArrData, val)) {

                uniqArrData.push(val);

            }

        });

        return uniqArrData;

    }

    return [];

}

_stk.unique=unique;

_stk.varExtend=varExtend;

_stk.where=where;


/**
 *  Get the value in array the value in json that should not in search value of json
 *
 * @since 1.0.1
 * @category Collection
 * @param {any} objectValue Json to Array
 * @param {any} objectValueWhere Data that you exlude in search
 * @param {Function=} func Function
 * @returns {any} Return either Json to Array.
 * @example
 *
 * whereNot([{"s1":1,"s2":1},{"s1":2,"s2":2}],{"s1":1})
 *=>[{"s1":2,"s2":2}]
 * whereNot([{"s1":{"s2":2}},{"s1":{"s2":3}}],{"s1.s2":2})
 *=>[{"s1":{"s2":3}}]
 */
function whereNot (objectValue, objectValueWhere, func) {

    return whereLoopExecution(objectValue, objectValueWhere, func, false, 'where');

}

_stk.whereNot=whereNot;


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
 *  Get the type if uint16Array
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isUint16Array()
 *=> true
 */
function isUint16Array (value) {

    return getTypeof(value) === "uint16Array";

}


/**
 *  Get the type if uint8Array
 *
 * @since 1.4.7
 * @category Collection
 * @param {any} value Pass any value to check its type
 * @returns {boolean} Return either Json to Array.
 * @example
 *
 * isUint8Array()
 *=> true
 */
function isUint8Array (value) {

    return getTypeof(value) === "uint8Array";

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
_stk.isUint16Array=isUint16Array;
_stk.isUint8Array=isUint8Array;
_stk.isUndefined=isUndefined;

/**
 * Creates a new list out of the two supplied by pairing up equally-positioned items from both lists. The returned list is truncated to the length of the shorter of the two input lists
 *
 * @since 1.4.86
 * @category Condition
 * @param {...any?} arg First number
 * @returns {any} Returns true or false.
 * @example
 *
 * zip([1],[2],[3])
 * // => [[1,2,3]]
 */
function zip (...arg) {

    return curryArg(function (...rawValue) {

        const varLimit = limit(rawValue, one);

        return baseReduce([], first(rawValue), function (total, value, key) {

            total.push(baseReduce([value], varLimit, function (totalSub, valueSub) {

                totalSub.push(valueSub[key]);

                return totalSub;

            }));

            return total;

        });

    }, arg);

}

_stk.zip=zip;


 //end of file