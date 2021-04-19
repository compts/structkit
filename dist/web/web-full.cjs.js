!(function(window){ 
window._stk={};


/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category Seq
 * @param {number|Object|string} objectValue The first number in an addition.
 * @param {number|Object|string} val The second number in an addition.
 * @param {number|Object|string} key The second number in an addition.
 * @returns {Array|Object} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function append (objectValue, val, key) {
var typeofs=getTypeof(objectValue);

    if (typeofs === "json") {

        objectValue[key]=val;

    }
    if (typeofs === "array") {

        objectValue.push(val);

    }

    return objectValue;

}






/**
 * Append Is Array Exist
 *
 * @since 1.0.1
 * @category Seq
 * @param {number|Object|string} arrayObject The second number in an addition.
 * @param {number|Object|string} value The second number in an addition.
 * @returns {Array} Returns the total.
 * @example
 *
 * appendIsArrayExist([1], 2)
 * // => [1,2]
 */
function appendIsArrayExist (arrayObject, value) {
var ary_type=getTypeof(arrayObject);
var ary_type1=getTypeof(value);
var notExist=-1;

    if (ary_type ==="array" && ary_type1 ==="array") {

        each(value, function (key, val) {

            if (indexOf(arrayObject, val)===notExist) {

                arrayObject.push(val);

            }

        });

        return arrayObject;

    }

    return [];

}




/**
 * Array Concat
 *
 * @since 1.0.1
 * @category Seq
 * @param {number|Object|string} arrayObject The second number in an addition.
 * @param {number|Object|string} arrayValue The second number in an addition.
 * @returns {Array} Returns the total.
 * @example
 *
 * arrayConcat([1], 2)
 * // => [1,2]
 */
function arrayConcat (arrayObject, arrayValue) {
var return_val=arrayObject;

    if (getTypeof(return_val)==="array") {

        return return_val.concat(arrayValue);

    }

    return [];

}





/**
 * Array Sum
 *
 * @since 1.0.1
 * @category Seq
 * @param {array} arrayObject The second number in an addition.
 * @param {number} delimeter The second number in an addition.
 * @returns {float} Returns the total.
 * @example
 *
 * arraySum([1,2], 2)
 * // => 3.00
 */
function arraySum (arrayObject, delimeter) {
var sum=0;
var defaultLimitDecimal = 3;
var arrayObjects=arrayObject||[];
var delimeters=delimeter||defaultLimitDecimal;

    each(arrayObjects, function (ak, av) {

        if (has(av)) {

            sum+=parseFloat(av);

        }

    });

    return sum.toFixed(delimeters);

}






/**
 * Array Clone
 *
 * @since 1.0.1
 * @category Seq
 * @param {array} objectValue The second number in an addition.
 * @returns {float} Returns the total.
 * @example
 *
 * arraySum([1,2], 2)
 * // => 3.00
 */
function clone (objectValue) {
var variable=getJSONVariable(objectValue);

    each(objectValue, function (key, value) {

        append(variable, value, key);

    });

    return variable;

}






/**
 * Array Count
 *
 * @since 1.0.1
 * @category Seq
 * @param {array} objectValue The second number in an addition.
 * @param {boolean} bol The second number in an addition.
 * @returns {int} Returns the total.
 * @example
 *
 * count([1,2])
 * // => 2
 */
function count (objectValue, bol) {
var cnt=0;
var incByOne=1;
var defaultValueForFalse=0;
var bol_d=bol||false;
var get_json=getTypeof(objectValue);

    if (has(objectValue)===false) {

        return defaultValueForFalse;

    }

    if (get_json==="object" && has(objectValue, "style")&&has(objectValue, "nodeType")&&has(objectValue, "ownerDocument")) {

        for (
var inc in objectValue) {

            if (!isNaN(inc)) {

                cnt+=incByOne;

            }

        }

    } else {

        each(objectValue, function () {

            cnt+=incByOne;

        });

    }

    if (get_json==="json"&&bol_d===true) {
var jsn_parse=objectValue;
var cnts=0;

        each(jsn_parse, function () {

            cnts+=incByOne;

        });

        return cnts;

    }

    return cnt;

}






/**
 * Delimiter
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {integer} min The second number in an addition.
 * @param {integer} max The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * delimiter([1,2])
 * // => 2
 */
function delimiter (objectValue, min, max) {
var ran_var=[];
var defaultValueZero=0;
var ran_min=has(min)
        ?min
        :defaultValueZero;
var ran_max=has(max)
        ?max+ran_min
        :count(objectValue);
var math_random=Math.round(Math.random()*ran_max);

    each(objectValue, function (key, value) {

        if (math_random===key) {

            ran_var=value;

        }

    });

    return ran_var;

}





/**
 * Each
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * each([1,2],(key,value)=>{
 *
 * })
 *
 */
function each (objectValue, func) {
var re_loop=[];
var typeofs=getTypeof(objectValue);

    if (typeofs==="json"||typeofs==="array"||typeofs==="object") {

        for (
var ins in objectValue) {

            if (has(objectValue, ins)) {
var bool_func = true;

                if (getTypeof(objectValue[ins])==="function") {

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
 * Filter
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * filter([1,2],(key,value)=>{
 *
 * })
 *
 */
function filter (objectValue, func) {
var jsn_var=getJSONVariable(objectValue);
var jsn_type=getTypeof(objectValue);

    each(objectValue, function (key, value) {

        if (has(func)) {

            if (func(key, value)===true) {

                if ((/(json|array)/g).test(jsn_type)) {

                    append(jsn_var, value, key);

                } else {

                    jsn_var=value;

                }

            }

        }

    });

    return jsn_var;

}
var getKeyVal =function(jsn,typ){
	
	
	var typ_s=typ,ky=[],vl=[];
	var list_raw = [];
	each(jsn,function(kk,vv){
		ky.push(kk);vl.push(vv);
		list_raw.push({
			"key":kk,
			"value":vv
		});
	});
	if(indexOf(["key","value"],typ )>-1 ){
		var ars=(typ=="key")?ky:vl;
		return (count(ars)==1)?ars[0]:ars;		
	}
	if(typ =="first_index"){
		return count(list_raw)>0?list_raw[0]:null;
	}
	if(typ =="last_index"){
		return count(list_raw)>0?list_raw[ count(list_raw)-1 ]:null;
	}
	
}



/**
 * First
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * first([1,2],(key,value) )
 *=>1
 */
function first (objectValue) {

    return getKeyVal(objectValue, "first_index");

}





/**
 * Get Data
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {function} split_str The second number in an addition.
 * @returns {object} Returns the total.
 * @example
 *
 * getData({"s":1},"s")
 *=>1
 */
function getData (objectValue, split_str) {
var spl_len=split_str.split(":");
var spl=[];
var jsn_total={};

    if (!has(objectValue)) {

        return "";

    }

    each(spl_len, function (key, value) {

        spl.push(value);

    });

    each(spl, function (key, value) {

        try {

            if (has(objectValue, value)) {

                if ((/^\s+$/).test(objectValue[value])===false) {

                    jsn_total=objectValue[value];

                }

            } else {

                if (has(jsn_total, value)) {

                    jsn_total=jsn_total[value];

                }

            }

        } catch (error) {

            console.log(error);

        }

    });

    return jsn_total;

}




/**
 * Get JSON Variable
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} value The second number in an addition.
 * @returns {array|object|string|number} Returns the total.
 * @example
 *
 * getJSONVariable([])
 * => []
 */
function getJSONVariable (value) {

    if (getTypeof(value)==="json") {

        return {};

    }

    if (getTypeof(value)==="array") {

        return [];

    }

    return value;

}




/**
 * Get key
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * getKey({"s":1})
 * => s
 */
function getKey (objectValue) {

    return getKeyVal(objectValue, "key");

}


/**
 * Get JSON Variable
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * getTypeof([])
 * => array
 */
function getTypeof (objectValue) {

    if (Object.prototype.toString.call(objectValue)==="[object Object]") {

        return "json";

    }

    if (Object.prototype.toString.call(objectValue)==="[object Array]") {

        return "array";

    }

    return typeof objectValue;

}


/**
 * Get unique value
 *
 * @since 1.0.1
 * @returns {alphanumeric} Get Unique Key.
 * @example
 *
 * getUniq()
 * => x2sf2
 */
function getUniq () {
var defaultRandomValue=2;
var defaultSubstrValue=36;
var str_rand1=Math
        .random()
        .toString(defaultSubstrValue)
        .substr(defaultRandomValue)+Math.random()
        .toString(defaultSubstrValue)
        .substr(defaultRandomValue);

    return str_rand1;

}




/**
 * Get value
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * getValue({"s":1})
 * => 1
 */
function getValue (objectValue) {

    return getKeyVal(objectValue, "value");

}


/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category Seq
 * @param {number|object|string} value The first number in an addition.
 * @param {number|object|string} key The second number in an addition.
 * @returns {boolean} Returns the total.
 * @example
 *
 * has({'as':1}, 'as')
 * // => true
 */
function has (value, key) {

    if (typeof key==="undefined") {

        return value!==null && typeof value !=="undefined";

    }

    return Object.prototype.hasOwnProperty.call(value, key);

}




/**
 * Check if is undefined
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The first number in an addition.
 * @param {number|object|string} value1 The first number in an addition.
 * @param {number|object|string} value2 The second number in an addition.
 * @returns {number|object|string} Returns the total.
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





/**
 * Index Of array
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The first number in an addition.
 * @param {number|object|string} value The first number in an addition.
 * @returns {number|object|string} Returns the total.
 * @example
 *
 * indexOf([1,2], 1)
 * // => 0
 */
function indexOf (objectValue, value) {
var indexOfDefaultValue=-1;
var incrementDefaultValue=1;

    if (getTypeof(objectValue)==="array") {

        for (
var inc=0; inc<count(objectValue);) {

            if (objectValue[inc]===value) {

                return inc;

            }

            inc+=incrementDefaultValue;

        }

        return indexOfDefaultValue;

    }

    return indexOfDefaultValue;

}






/**
 * Insert Value
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The first number in an addition.
 * @param {number|object|string} value The first number in an addition.
 * @returns {number|object|string} Returns the total.
 * @example
 *
 * ifUndefined({'as':1}, 'as','as2')
 * // => 1
 */
function insert (objectValue, value) {

    if (has(objectValue)) {
var jsn_type=getTypeof(value);

        if (jsn_type==="json") {

            each(value, function (key, _value) {

                objectValue[key]=_value;

            });

        } else {

            objectValue.push(value);

        }

    }

}


/**
 * Is empty
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} value The first number in an addition.
 * @returns {boolean} Returns the total.
 * @example
 *
 * isEmpty('')
 * // => true
 */
function isEmpty (value) {

    return (/^\s*$/gmi).test(value);

}








/**
 * Is Exact
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} objectValue1 The first number in an addition.
 * @param {string} objectValue2 The first number in an addition.
 * @param {boolean} isExist The first number in an addition.
 * @returns {boolean} Returns the total.
 * @example
 *
 * isExact('')
 * // => true
 */
function isExact (objectValue1, objectValue2, isExist) {

    if (objectValue2===null) {

        return false;

    }
var local_is_exist=has(isExist)&&getTypeof(isExist)==="boolean"
        ?isExist
        :true;
var val_s=(/(json|array)/g).test(getTypeof(objectValue2))
        ?objectValue2
        :[objectValue2];
var key_s=(/(json|array)/g).test(getTypeof(objectValue1))
        ?objectValue1
        :[objectValue1];
var cnt=0;
var incrementDefaultValue=1;
var emptyDefaultValue=0;
var notExistArrayDefaultValue=-1;

    each(key_s, function (kk, kv) {

        if (getTypeof(objectValue2)==="json") {

            if (has(val_s[kk])) {
var local_is_valid = local_is_exist
                    ?val_s[kk]===kv
                    :val_s[kk]!==kv;

                if (local_is_valid) {

                    cnt+=incrementDefaultValue;

                }

            }

        }

        if (getTypeof(objectValue2)==="array") {
var local_is_valid = local_is_exist
                ?indexOf(val_s, kv)>notExistArrayDefaultValue
                :indexOf(val_s, kv)===notExistArrayDefaultValue;

            if (local_is_valid) {

                cnt+=incrementDefaultValue;

            }

        }

    });


    if (cnt===emptyDefaultValue) {

        return false;

    }

    return cnt===count(objectValue2);

}





/**
 * Json To Array
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} objectValue The first number in an addition.
 * @param {string} value The first number in an addition.
 * @returns {boolean} Returns the total.
 * @example
 *
 * jsonToArray({})
 * // => true
 */
function jsonToArray (objectValue, value) {
var arry=[];

    each(objectValue, function (_key, _value) {

        if (has(value)) {

            if (has(_value, value)) {

                arry.push(_value[value]);

            }

        } else {

            arry.push(_value);

        }

    });

    return arry;

}




/**
 * Last
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * last([1,2],(key,value) )
 *=>2
 */
function last (objectValue) {

    return getKeyVal(objectValue, "last_index");

}






/**
 * Limit
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {limit} minValue The second number in an addition.
 * @param {integer} maxValue The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * limit([1,2],1,2 )
 *=>[2]
 */
function limit (objectValue, minValue, maxValue, func) {
var cnt=0;
var glo_jsn={};
var glo_indtfd = null;
var emptyDefaultValue=0;
var minValueReserve=has(minValue)
        ?minValue
        :emptyDefaultValue;
var maxValueReserve=has(maxValue)
        ?maxValue
        :count(objectValue);
var incrementDefaultValue=1;

    each(objectValue, function (key, meth) {

        if (cnt>=minValueReserve && cnt<=maxValueReserve) {

            glo_jsn[key]=meth;

            if (has(func)) {

                glo_indtfd=func(key, meth);

                if (has(glo_indtfd)) {

                    glo_jsn[key]=glo_indtfd;

                }

            }

        }

        cnt+=incrementDefaultValue;

    });

    return glo_jsn;

}





/**
 * Map
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * map([1,2],1,2 )
 *=>[2]
 */
function map (objectValue, func) {
var emptyDefaultValue=0;
var incrementDefaultValue=1;
var value_arry=[];
var cnt=emptyDefaultValue;

    each(objectValue, function (key, value) {

        if (has(func)) {

            value_arry.push(func(value, key, cnt));
            cnt+=incrementDefaultValue;

        }

    });

    return value_arry;

}





/**
 * Number format
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {string} value1 The first number in an addition.
 * @param {string} value2 The first number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * numberFormat(1,1,2)
 *=>1.00
 */
function numberFormat (objectValue, value1, value2) {
var incrementDefaultValue=1;
var emptyDefaultValue=0;
var threeDefaultValue=3;
var valueZero=value2||emptyDefaultValue;
var objectValueEvaluate=objectValue.toString();
var splt_dec=objectValueEvaluate.split(".");
var reg_exp=new RegExp("(\\d)(?=(\\d{"+(value1||threeDefaultValue)+"})+(?:\\.\\d+)?$)", "g");
var num_deli=splt_dec[emptyDefaultValue].replace(reg_exp, "$1, ");
var ssd_va=num_deli+count(splt_dec)>incrementDefaultValue
        ?"."+splt_dec[incrementDefaultValue]
        :"";

    if (valueZero>emptyDefaultValue) {
var str_dec=ssd_va.split(".");

        if (count(str_dec)===incrementDefaultValue) {

            ssd_va=ssd_va+"."+repeat("0", valueZero);

        } else {
var dec_num=str_dec[incrementDefaultValue];

            if (dec_num.length>=valueZero) {

                ssd_va=str_dec[emptyDefaultValue]+"."+dec_num.substr(emptyDefaultValue, valueZero);

            } else {

                ssd_va=str_dec[emptyDefaultValue]+"."+dec_num+repeat("0", dec_num.length-valueZero);

            }

        }

    }

    return ssd_va;

}


/**
 * Parse Json
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} value The second number in an addition.
 * @returns {array|object} Returns the total.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
function parseJson (value) {
var emptyDefaultValue=0;
var stripValue=value.replace(/(&quot;)/gi, '"', value).replace(/(&nbsp;)/gi, ' ', value);
var returnValue=null;

    if ((/^[\],:{}\s]*$/).test(stripValue.replace(/\\(?:["\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/g, ']')
        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

        if (stripValue.length>emptyDefaultValue && !(/^\s*$/).test(stripValue)) {

            returnValue = eval('(' + stripValue + ')');

        }

    }

    return returnValue;

}







/**
 * Data String
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} str The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * parseString({} )
 *=>'{}'
 */
function datastring (str) {
var data_s="";

    if (typeof str ==="string") {

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
 * Return loop
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} dstr The second number in an addition.
 * @param {function} func The second number in an addition.
 * @param {string} dl The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * parseString({} )
 *=>'{}'
 */
function returnLoop (dstr, func, dl) {

    return func(dstr)+""+dl;

}

/**
 * Parse String
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} value The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * parseString({} )
 *=>'{}'
 */
function parseString (value) {
var str="";
var str_strt="";
var str_end="";
var inc=0;
var incrementDefaultValue=1;
var inc_main=null;

    if (has(value)) {

        if (getTypeof(value)==="json") {

            str_strt="{";
            str_end="}";

            each(value, function (_key, _value) {

                inc_main=inc<count(value)-incrementDefaultValue
                    ?","
                    :"";

                if (typeof _value==="object"&&_value!==null) {

                    str+=datastring(_key)+":"+returnLoop(_value, parseString, inc_main);

                } else {

                    str+=datastring(_key)+":"+datastring(_value)+""+inc_main;

                }

                inc+=incrementDefaultValue;

            });

        }
        if (getTypeof(value)==="array") {

            str_strt="[";
            str_end="]";

            each(value, function (_key, _value) {

                inc_main=inc<count(value)-incrementDefaultValue
                    ?","
                    :"";

                if (typeof _value==="object") {

                    str+=returnLoop(_value, parseString, inc_main);

                } else {

                    str+=datastring(_value)+""+inc_main;

                }

                inc+=incrementDefaultValue;

            });

        }

    }

    return (str_strt+str+str_end).replace(/[\r\t\n\s]{1,}/g, "&nbsp;").replace(/(&quot;)/gi, '"');

}







/**
 * Random
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} valueArray The second number in an addition.
 * @param {number} minValue The second number in an addition.
 * @param {number} maxValue The second number in an addition.
 * @returns {string|number} Returns the total.
 * @example
 *
 * random([1,2,3],1,2 )
 *=>'{}'
 */
function random (valueArray, minValue, maxValue) {
var ran_var=[];
var emptyDefaultValue=0;
var ran_min=has(minValue)
        ?minValue
        :emptyDefaultValue;
var ran_max=has(maxValue)
        ?maxValue+ran_min
        :count(valueArray);
var math_random = Math.round(Math.random()*ran_max);

    each(valueArray, function (key, value) {

        if (math_random===key) {

            ran_var = value;

        }

    });

    return ran_var;

}




/**
 * Range
 *
 * @since 1.0.1
 * @category Seq
 * @param {number} maxValue The second number in an addition.
 * @param {number} minValue The second number in an addition.
 * @returns {string|number} Returns the total.
 * @example
 *
 * random([1,2,3],1,2 )
 *=>'{}'
 */
function range (maxValue, minValue) {
var emptyDefaultValue=0;
var tenDefaultValue=10;
var incrementDefaultValue=1;
var minValueRef=has(minValue)
        ?minValue
        :emptyDefaultValue;
var maxValueRef=has(maxValue)
        ?maxValue
        :tenDefaultValue;
var output=[];

    for (
var inc=minValueRef; inc<=maxValueRef;) {

        output.push(inc);
        inc+=incrementDefaultValue;

    }

    return output;

}







/**
 * Remove
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {number} value The second number in an addition.
 * @returns {string|number} Returns the total.
 * @example
 *
 * remove([1,2,3],1 )
 *=>'{}'
 */
function remove (objectValue, value) {
var emptyDefaultValue=0;
var type_js=getTypeof(objectValue);
var reslt =null;

    if (type_js==="array") {

        reslt=[];
        each(objectValue, function (ak, av) {

            if (indexOf(objectValue, value)<emptyDefaultValue) {

                reslt.push(av);

            }

        });

    }

    if (type_js==="json") {

        reslt={};
var jsn_vw=[];

        each(objectValue, function () {

            where(objectValue, value, function (jk) {

                jsn_vw.push(jk);

            });

        });

        each(objectValue, function (ak, av) {

            if (indexOf(jsn_vw, ak)<emptyDefaultValue) {

                reslt[ak]=av;

            }

        });

    }

    return reslt;

}


/**
 * Repeat
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} value The second number in an addition.
 * @param {number} valueRepetion The second number in an addition.
 * @returns {string|number} Returns the total.
 * @example
 *
 * repeat("s",1 )
 *=>'ss'
 */
function repeat (value, valueRepetion) {
var emptyDefaultValue=0;
var onceDefaultValue=1;
var nm_rpt=valueRepetion||emptyDefaultValue;
var nm_str=value||"";

    if (nm_rpt>emptyDefaultValue) {

        return new Array(nm_rpt+onceDefaultValue).join(nm_str);

    }

    return "";

}




/**
 * Range
 *
 * @since 1.0.1
 * @category Seq
 * @param {number} value The second number in an addition.
 * @param {number} minValue The second number in an addition.
 * @param {number} maxValue The second number in an addition.
 * @returns {number} Returns the total.
 * @example
 *
 * random([1,2,3],1,2 )
 *=>'{}'
 */
function roundDecimal (value, minValue, maxValue) {
var emptyDefaultValue=0;
var onceDefaultValue=1;
var twoDefaultValue=2;
var tenDefaultValue=10;
var jsn=value||emptyDefaultValue;
var str_dec=jsn.toString().split(".");
var s_dmin=minValue||onceDefaultValue;
var s_dmax=maxValue||twoDefaultValue;

    if (count(str_dec)===twoDefaultValue) {
var p_cnts=count(str_dec[onceDefaultValue].toString().split(""));
var delmts=p_cnts<=s_dmin
            ?s_dmin
            :s_dmax;
var dec_s=tenDefaultValue**delmts;

        return Math.round(parseFloat(jsn*dec_s))/dec_s;

    }

    return jsn;

}






/**
 * Shuffle
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {number} value The second number in an addition.
 * @returns {string|number} Returns the total.
 * @example
 *
 * shuffle([1,2,3])
 *=>[2,3,1]
 */
function shuffle (objectValue) {
var emptyDefaultValue=0;
var onceDefaultValue=1;
var output=objectValue;
var valueType=[
        "array",
        "json"
    ];

    if (indexOf(valueType, getTypeof(objectValue))>-onceDefaultValue) {
var counts=count(objectValue)-onceDefaultValue;
var randomIndex=emptyDefaultValue;
var temporaryValue=null;

        for (
var currentIndex=counts; currentIndex>emptyDefaultValue;) {

            randomIndex = Math.floor(Math.random() * currentIndex);

            if (getTypeof(objectValue)==="array") {

                temporaryValue = output[currentIndex];
                output[currentIndex]=output[randomIndex];
                output[randomIndex] = temporaryValue;

            }

            currentIndex -= onceDefaultValue;

        }

    }

    return output;

}






/**
 * Sort
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {number} index The second number in an addition.
 * @param {boolean} order The second number in an addition.
 * @returns {string|number} Returns the total.
 * @example
 *
 * sort([2,3,1])
 *=>[1,2,3]
 */
function sort (objectValue, index, order) {
var jsonn=objectValue;
var asc=has(order)
        ?order
        :true;
var js_m=getTypeof(jsonn)==="json"
        ?each(jsonn)
        :jsonn;

    jsonn=js_m.sort(function (orderA, orderB) {

        if (asc) {

            return orderA[index] > orderB[index];

        }

        return orderB[index] > orderA[index];

    });

    return jsonn;

}









/**
 * Template Value Internal
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} str_raw The second number in an addition.
 * @param {string} reg The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * templateValueInternal("","" )
 *=>'{}'
 */
function templateValueInternal (str_raw, reg) {
var str=str_raw;
var strs=str;

    try {

        try {
var regs=new RegExp("[\\r\\t\\n\\s]{0,}<![-]\\s{0,}(.*?)\\s{0,}!>[\\r\\t\\n\\s]{0,}", "g");

            strs=strs.replace(regs, function (word, mes1) {
var strs_perd=mes1.replace(".", ":");
var gtdata=getData(reg, strs_perd);

                return getTypeof(gtdata)==="json"
                    ?""
                    :gtdata;

            });

        } catch (error) {

            console.log(error);

        }

    } catch (error) {

        console.log(error);

    }
var strs_finl=strs;

    return strs_finl;

}

/**
 * Template Value
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} templateString The second number in an addition.
 * @param {object} data The second number in an addition.
 * @param {object} option The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * templateValue("","" )
 *=>'{}'
 */
function templateValue (templateString, data, option) {
var oneDefaultValue=1;

    templateString = templateValueInternal(templateString, data);
var default_option=varExtend({
        "escape": "<!-([\\s\\S]+?)!>",
        "evaluate": "<![^=-]([\\s\\S]+?)!>",
        "interpolate": "<!=([\\s\\S]+?)!>"
    }, option);
var valueType=[
        "array",
        "json"
    ];
var regexp = new RegExp([
        default_option.evaluate,
        default_option.interpolate,
        default_option.escape
    ].join("|")+"|$", "g");
var source = "__p+='";
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

    templateString.replace(regexp, function (match, evaluate, interpolate, escape, offset) {

        source+=templateString.slice(index, offset).replace(escaper, escapeChar);
        index = offset+match.length;

        if (evaluate) {

            source+="';\n"+evaluate+"\n__p+='";

        }

        if (interpolate) {

            source+="'+\n((__t=("+interpolate+"))==null?'':__t)+\n'";

        }

        if (escape) {

            source+="'+\n((__t=("+interpolate+"))==null?'':__t)+\n'";

        }

        return match;

    });

    source+="';\n";

    source = "var __t,__p='',__j=[].join," +
        "print=function(){__p+=__j.call(arguments,'');};\n" +
    source + " return __p;\n";

    try {
var val_source = "";

        if (getTypeof(data)==="json") {

            for (
var key in data) {

                if (has(data, key)) {

                    val_source+='var '+key+' = '+(indexOf(valueType, getTypeof(data[key]))>-oneDefaultValue
                        ?parseString(data[key])
                        :'"'+data[key]+'"')+';';

                }

            }

        }
var render = new Function('obj', '_', val_source+source);

        return render.call(this, data, templateValue);

    } catch (error) {

        console.log(error);
        error.source = source;
        throw error;

    }

}




/**
 * To Array
 *
 * @since 1.0.1
 * @category Seq
 * @param {number|string|object} value The second number in an addition.
 * @returns {array} Returns the total.
 * @example
 *
 * toArray(1)
 *=>[1]
 */
function toArray (value) {
var return_val = value;

    if (getTypeof(return_val)!=="array") {

        return_val = [value];

    }

    return return_val;

}






/**
 * Var extend
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} objectValue The second number in an addition.
 * @param {object} objectValueReplace The second number in an addition.
 * @returns {array} Returns the total.
 * @example
 *
 * varExtend({"s1":1},{"s1":2})
 *=>{"s1":2}
 */
function varExtend (objectValue, objectValueReplace) {
var onceDefaultValue=1;

    if (getTypeof(objectValue)==="json"&& getTypeof(objectValueReplace)==="json") {
var jsn_s={};

        for (
var key in objectValue) {

            if (indexOf([
                'true',
                'false'
            ], objectValue[key].toString().toLowerCase())>-onceDefaultValue) {
var jsn_bool={
                    "false": false,
                    "true": true
                };

                jsn_s[key]=jsn_bool[objectValue[key].toString().toLowerCase()];

            } else {

                jsn_s[key]=objectValue[key];

            }

        }

        for (
var key in objectValueReplace) {

            if (has(jsn_s, key)) {

                jsn_s[key]=objectValueReplace[key];

            }

        }

        return jsn_s;

    }

    return objectValue;

}










function whereLoopExecution(jsn,whr,func,is_where){
	
	
	var jsn_val={};
	
	var jsn_s=(count(jsn,true)==0)?((getTypeof(jsn)=="array")?jsn:[jsn]):jsn;
	var whr_s=whr||{};
	var variable=getJSONVariable(jsn);
	
	each(jsn_s,function(jk,jv){
		
		if(getTypeof(jsn)=="array"){
			filter = [jv];
		}else{
			var filter = {};
			filter[jk]=jv;
		}
		
		if(isExact(filter,whr_s,is_where)){
			
			append(variable,jv,jk);
			if(has(func)){
				func(jv,jk);
			}
			
		}
	});
	
	return variable;
	
}



/**
 * Where
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} objectValue The second number in an addition.
 * @param {object} objectValueWhere The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {array|object} Returns the total.
 * @example
 *
 * where({"s1":1},{"s1":2})
 *=>{"s1":2}
 */
function where (objectValue, objectValueWhere, func) {

    return whereLoopExecution(objectValue, objectValueWhere, func, true);

}




/**
 * Where Not
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} objectValue The second number in an addition.
 * @param {object} objectValueWhere The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {array|object} Returns the total.
 * @example
 *
 * whereNot({"s1":1},{"s1":2})
 *=>{"s1":2}
 */
function whereNot (objectValue, objectValueWhere, func) {

    return whereLoopExecution(objectValue, objectValueWhere, func, false);

}





/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category Seq
 * @param {number|Object|string} objectValue The first number in an addition.
 * @param {number|Object|string} val The second number in an addition.
 * @param {number|Object|string} key The second number in an addition.
 * @returns {Array|Object} Returns the total.
 * @example
 *
 * append({'as':1}, 'as',2)
 * // => {'as':2}
 */
function append (objectValue, val, key) {
var typeofs=getTypeof(objectValue);

    if (typeofs === "json") {

        objectValue[key]=val;

    }
    if (typeofs === "array") {

        objectValue.push(val);

    }

    return objectValue;

}






/**
 * Append Is Array Exist
 *
 * @since 1.0.1
 * @category Seq
 * @param {number|Object|string} arrayObject The second number in an addition.
 * @param {number|Object|string} value The second number in an addition.
 * @returns {Array} Returns the total.
 * @example
 *
 * appendIsArrayExist([1], 2)
 * // => [1,2]
 */
function appendIsArrayExist (arrayObject, value) {
var ary_type=getTypeof(arrayObject);
var ary_type1=getTypeof(value);
var notExist=-1;

    if (ary_type ==="array" && ary_type1 ==="array") {

        each(value, function (key, val) {

            if (indexOf(arrayObject, val)===notExist) {

                arrayObject.push(val);

            }

        });

        return arrayObject;

    }

    return [];

}




/**
 * Array Concat
 *
 * @since 1.0.1
 * @category Seq
 * @param {number|Object|string} arrayObject The second number in an addition.
 * @param {number|Object|string} arrayValue The second number in an addition.
 * @returns {Array} Returns the total.
 * @example
 *
 * arrayConcat([1], 2)
 * // => [1,2]
 */
function arrayConcat (arrayObject, arrayValue) {
var return_val=arrayObject;

    if (getTypeof(return_val)==="array") {

        return return_val.concat(arrayValue);

    }

    return [];

}





/**
 * Array Sum
 *
 * @since 1.0.1
 * @category Seq
 * @param {array} arrayObject The second number in an addition.
 * @param {number} delimeter The second number in an addition.
 * @returns {float} Returns the total.
 * @example
 *
 * arraySum([1,2], 2)
 * // => 3.00
 */
function arraySum (arrayObject, delimeter) {
var sum=0;
var defaultLimitDecimal = 3;
var arrayObjects=arrayObject||[];
var delimeters=delimeter||defaultLimitDecimal;

    each(arrayObjects, function (ak, av) {

        if (has(av)) {

            sum+=parseFloat(av);

        }

    });

    return sum.toFixed(delimeters);

}






/**
 * Array Clone
 *
 * @since 1.0.1
 * @category Seq
 * @param {array} objectValue The second number in an addition.
 * @returns {float} Returns the total.
 * @example
 *
 * arraySum([1,2], 2)
 * // => 3.00
 */
function clone (objectValue) {
var variable=getJSONVariable(objectValue);

    each(objectValue, function (key, value) {

        append(variable, value, key);

    });

    return variable;

}






/**
 * Array Count
 *
 * @since 1.0.1
 * @category Seq
 * @param {array} objectValue The second number in an addition.
 * @param {boolean} bol The second number in an addition.
 * @returns {int} Returns the total.
 * @example
 *
 * count([1,2])
 * // => 2
 */
function count (objectValue, bol) {
var cnt=0;
var incByOne=1;
var defaultValueForFalse=0;
var bol_d=bol||false;
var get_json=getTypeof(objectValue);

    if (has(objectValue)===false) {

        return defaultValueForFalse;

    }

    if (get_json==="object" && has(objectValue, "style")&&has(objectValue, "nodeType")&&has(objectValue, "ownerDocument")) {

        for (
var inc in objectValue) {

            if (!isNaN(inc)) {

                cnt+=incByOne;

            }

        }

    } else {

        each(objectValue, function () {

            cnt+=incByOne;

        });

    }

    if (get_json==="json"&&bol_d===true) {
var jsn_parse=objectValue;
var cnts=0;

        each(jsn_parse, function () {

            cnts+=incByOne;

        });

        return cnts;

    }

    return cnt;

}






/**
 * Delimiter
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {integer} min The second number in an addition.
 * @param {integer} max The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * delimiter([1,2])
 * // => 2
 */
function delimiter (objectValue, min, max) {
var ran_var=[];
var defaultValueZero=0;
var ran_min=has(min)
        ?min
        :defaultValueZero;
var ran_max=has(max)
        ?max+ran_min
        :count(objectValue);
var math_random=Math.round(Math.random()*ran_max);

    each(objectValue, function (key, value) {

        if (math_random===key) {

            ran_var=value;

        }

    });

    return ran_var;

}





/**
 * Each
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * each([1,2],(key,value)=>{
 *
 * })
 *
 */
function each (objectValue, func) {
var re_loop=[];
var typeofs=getTypeof(objectValue);

    if (typeofs==="json"||typeofs==="array"||typeofs==="object") {

        for (
var ins in objectValue) {

            if (has(objectValue, ins)) {
var bool_func = true;

                if (getTypeof(objectValue[ins])==="function") {

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
 * Filter
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * filter([1,2],(key,value)=>{
 *
 * })
 *
 */
function filter (objectValue, func) {
var jsn_var=getJSONVariable(objectValue);
var jsn_type=getTypeof(objectValue);

    each(objectValue, function (key, value) {

        if (has(func)) {

            if (func(key, value)===true) {

                if ((/(json|array)/g).test(jsn_type)) {

                    append(jsn_var, value, key);

                } else {

                    jsn_var=value;

                }

            }

        }

    });

    return jsn_var;

}




/**
 * First
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * first([1,2],(key,value) )
 *=>1
 */
function first (objectValue) {

    return getKeyVal(objectValue, "first_index");

}





/**
 * Get Data
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {function} split_str The second number in an addition.
 * @returns {object} Returns the total.
 * @example
 *
 * getData({"s":1},"s")
 *=>1
 */
function getData (objectValue, split_str) {
var spl_len=split_str.split(":");
var spl=[];
var jsn_total={};

    if (!has(objectValue)) {

        return "";

    }

    each(spl_len, function (key, value) {

        spl.push(value);

    });

    each(spl, function (key, value) {

        try {

            if (has(objectValue, value)) {

                if ((/^\s+$/).test(objectValue[value])===false) {

                    jsn_total=objectValue[value];

                }

            } else {

                if (has(jsn_total, value)) {

                    jsn_total=jsn_total[value];

                }

            }

        } catch (error) {

            console.log(error);

        }

    });

    return jsn_total;

}




/**
 * Get JSON Variable
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} value The second number in an addition.
 * @returns {array|object|string|number} Returns the total.
 * @example
 *
 * getJSONVariable([])
 * => []
 */
function getJSONVariable (value) {

    if (getTypeof(value)==="json") {

        return {};

    }

    if (getTypeof(value)==="array") {

        return [];

    }

    return value;

}




/**
 * Get key
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * getKey({"s":1})
 * => s
 */
function getKey (objectValue) {

    return getKeyVal(objectValue, "key");

}


/**
 * Get JSON Variable
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * getTypeof([])
 * => array
 */
function getTypeof (objectValue) {

    if (Object.prototype.toString.call(objectValue)==="[object Object]") {

        return "json";

    }

    if (Object.prototype.toString.call(objectValue)==="[object Array]") {

        return "array";

    }

    return typeof objectValue;

}


/**
 * Get unique value
 *
 * @since 1.0.1
 * @returns {alphanumeric} Get Unique Key.
 * @example
 *
 * getUniq()
 * => x2sf2
 */
function getUniq () {
var defaultRandomValue=2;
var defaultSubstrValue=36;
var str_rand1=Math
        .random()
        .toString(defaultSubstrValue)
        .substr(defaultRandomValue)+Math.random()
        .toString(defaultSubstrValue)
        .substr(defaultRandomValue);

    return str_rand1;

}




/**
 * Get value
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * getValue({"s":1})
 * => 1
 */
function getValue (objectValue) {

    return getKeyVal(objectValue, "value");

}


/**
 * Check if object or value
 *
 * @since 1.0.1
 * @category Seq
 * @param {number|object|string} value The first number in an addition.
 * @param {number|object|string} key The second number in an addition.
 * @returns {boolean} Returns the total.
 * @example
 *
 * has({'as':1}, 'as')
 * // => true
 */
function has (value, key) {

    if (typeof key==="undefined") {

        return value!==null && typeof value !=="undefined";

    }

    return Object.prototype.hasOwnProperty.call(value, key);

}




/**
 * Check if is undefined
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The first number in an addition.
 * @param {number|object|string} value1 The first number in an addition.
 * @param {number|object|string} value2 The second number in an addition.
 * @returns {number|object|string} Returns the total.
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





/**
 * Index Of array
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The first number in an addition.
 * @param {number|object|string} value The first number in an addition.
 * @returns {number|object|string} Returns the total.
 * @example
 *
 * indexOf([1,2], 1)
 * // => 0
 */
function indexOf (objectValue, value) {
var indexOfDefaultValue=-1;
var incrementDefaultValue=1;

    if (getTypeof(objectValue)==="array") {

        for (
var inc=0; inc<count(objectValue);) {

            if (objectValue[inc]===value) {

                return inc;

            }

            inc+=incrementDefaultValue;

        }

        return indexOfDefaultValue;

    }

    return indexOfDefaultValue;

}






/**
 * Insert Value
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The first number in an addition.
 * @param {number|object|string} value The first number in an addition.
 * @returns {number|object|string} Returns the total.
 * @example
 *
 * ifUndefined({'as':1}, 'as','as2')
 * // => 1
 */
function insert (objectValue, value) {

    if (has(objectValue)) {
var jsn_type=getTypeof(value);

        if (jsn_type==="json") {

            each(value, function (key, _value) {

                objectValue[key]=_value;

            });

        } else {

            objectValue.push(value);

        }

    }

}


/**
 * Is empty
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} value The first number in an addition.
 * @returns {boolean} Returns the total.
 * @example
 *
 * isEmpty('')
 * // => true
 */
function isEmpty (value) {

    return (/^\s*$/gmi).test(value);

}





/**
 * Json To Array
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} objectValue The first number in an addition.
 * @param {string} value The first number in an addition.
 * @returns {boolean} Returns the total.
 * @example
 *
 * jsonToArray({})
 * // => true
 */
function jsonToArray (objectValue, value) {
var arry=[];

    each(objectValue, function (_key, _value) {

        if (has(value)) {

            if (has(_value, value)) {

                arry.push(_value[value]);

            }

        } else {

            arry.push(_value);

        }

    });

    return arry;

}








/**
 * Is Exact
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} objectValue1 The first number in an addition.
 * @param {string} objectValue2 The first number in an addition.
 * @param {boolean} isExist The first number in an addition.
 * @returns {boolean} Returns the total.
 * @example
 *
 * isExact('')
 * // => true
 */
function isExact (objectValue1, objectValue2, isExist) {

    if (objectValue2===null) {

        return false;

    }
var local_is_exist=has(isExist)&&getTypeof(isExist)==="boolean"
        ?isExist
        :true;
var val_s=(/(json|array)/g).test(getTypeof(objectValue2))
        ?objectValue2
        :[objectValue2];
var key_s=(/(json|array)/g).test(getTypeof(objectValue1))
        ?objectValue1
        :[objectValue1];
var cnt=0;
var incrementDefaultValue=1;
var emptyDefaultValue=0;
var notExistArrayDefaultValue=-1;

    each(key_s, function (kk, kv) {

        if (getTypeof(objectValue2)==="json") {

            if (has(val_s[kk])) {
var local_is_valid = local_is_exist
                    ?val_s[kk]===kv
                    :val_s[kk]!==kv;

                if (local_is_valid) {

                    cnt+=incrementDefaultValue;

                }

            }

        }

        if (getTypeof(objectValue2)==="array") {
var local_is_valid = local_is_exist
                ?indexOf(val_s, kv)>notExistArrayDefaultValue
                :indexOf(val_s, kv)===notExistArrayDefaultValue;

            if (local_is_valid) {

                cnt+=incrementDefaultValue;

            }

        }

    });


    if (cnt===emptyDefaultValue) {

        return false;

    }

    return cnt===count(objectValue2);

}




/**
 * Last
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * last([1,2],(key,value) )
 *=>2
 */
function last (objectValue) {

    return getKeyVal(objectValue, "last_index");

}






/**
 * Limit
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {limit} minValue The second number in an addition.
 * @param {integer} maxValue The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * limit([1,2],1,2 )
 *=>[2]
 */
function limit (objectValue, minValue, maxValue, func) {
var cnt=0;
var glo_jsn={};
var glo_indtfd = null;
var emptyDefaultValue=0;
var minValueReserve=has(minValue)
        ?minValue
        :emptyDefaultValue;
var maxValueReserve=has(maxValue)
        ?maxValue
        :count(objectValue);
var incrementDefaultValue=1;

    each(objectValue, function (key, meth) {

        if (cnt>=minValueReserve && cnt<=maxValueReserve) {

            glo_jsn[key]=meth;

            if (has(func)) {

                glo_indtfd=func(key, meth);

                if (has(glo_indtfd)) {

                    glo_jsn[key]=glo_indtfd;

                }

            }

        }

        cnt+=incrementDefaultValue;

    });

    return glo_jsn;

}





/**
 * Map
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * map([1,2],1,2 )
 *=>[2]
 */
function map (objectValue, func) {
var emptyDefaultValue=0;
var incrementDefaultValue=1;
var value_arry=[];
var cnt=emptyDefaultValue;

    each(objectValue, function (key, value) {

        if (has(func)) {

            value_arry.push(func(value, key, cnt));
            cnt+=incrementDefaultValue;

        }

    });

    return value_arry;

}


/**
 * Parse Json
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} value The second number in an addition.
 * @returns {array|object} Returns the total.
 * @example
 *
 * parseJson('{}' )
 *=>{}
 */
function parseJson (value) {
var emptyDefaultValue=0;
var stripValue=value.replace(/(&quot;)/gi, '"', value).replace(/(&nbsp;)/gi, ' ', value);
var returnValue=null;

    if ((/^[\],:{}\s]*$/).test(stripValue.replace(/\\(?:["\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/g, ']')
        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

        if (stripValue.length>emptyDefaultValue && !(/^\s*$/).test(stripValue)) {

            returnValue = eval('(' + stripValue + ')');

        }

    }

    return returnValue;

}





/**
 * Number format
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {string} value1 The first number in an addition.
 * @param {string} value2 The first number in an addition.
 * @returns {null} Returns the total.
 * @example
 *
 * numberFormat(1,1,2)
 *=>1.00
 */
function numberFormat (objectValue, value1, value2) {
var incrementDefaultValue=1;
var emptyDefaultValue=0;
var threeDefaultValue=3;
var valueZero=value2||emptyDefaultValue;
var objectValueEvaluate=objectValue.toString();
var splt_dec=objectValueEvaluate.split(".");
var reg_exp=new RegExp("(\\d)(?=(\\d{"+(value1||threeDefaultValue)+"})+(?:\\.\\d+)?$)", "g");
var num_deli=splt_dec[emptyDefaultValue].replace(reg_exp, "$1, ");
var ssd_va=num_deli+count(splt_dec)>incrementDefaultValue
        ?"."+splt_dec[incrementDefaultValue]
        :"";

    if (valueZero>emptyDefaultValue) {
var str_dec=ssd_va.split(".");

        if (count(str_dec)===incrementDefaultValue) {

            ssd_va=ssd_va+"."+repeat("0", valueZero);

        } else {
var dec_num=str_dec[incrementDefaultValue];

            if (dec_num.length>=valueZero) {

                ssd_va=str_dec[emptyDefaultValue]+"."+dec_num.substr(emptyDefaultValue, valueZero);

            } else {

                ssd_va=str_dec[emptyDefaultValue]+"."+dec_num+repeat("0", dec_num.length-valueZero);

            }

        }

    }

    return ssd_va;

}







/**
 * Data String
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} str The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * parseString({} )
 *=>'{}'
 */
function datastring (str) {
var data_s="";

    if (typeof str ==="string") {

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
 * Return loop
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} dstr The second number in an addition.
 * @param {function} func The second number in an addition.
 * @param {string} dl The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * parseString({} )
 *=>'{}'
 */
function returnLoop (dstr, func, dl) {

    return func(dstr)+""+dl;

}

/**
 * Parse String
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} value The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * parseString({} )
 *=>'{}'
 */
function parseString (value) {
var str="";
var str_strt="";
var str_end="";
var inc=0;
var incrementDefaultValue=1;
var inc_main=null;

    if (has(value)) {

        if (getTypeof(value)==="json") {

            str_strt="{";
            str_end="}";

            each(value, function (_key, _value) {

                inc_main=inc<count(value)-incrementDefaultValue
                    ?","
                    :"";

                if (typeof _value==="object"&&_value!==null) {

                    str+=datastring(_key)+":"+returnLoop(_value, parseString, inc_main);

                } else {

                    str+=datastring(_key)+":"+datastring(_value)+""+inc_main;

                }

                inc+=incrementDefaultValue;

            });

        }
        if (getTypeof(value)==="array") {

            str_strt="[";
            str_end="]";

            each(value, function (_key, _value) {

                inc_main=inc<count(value)-incrementDefaultValue
                    ?","
                    :"";

                if (typeof _value==="object") {

                    str+=returnLoop(_value, parseString, inc_main);

                } else {

                    str+=datastring(_value)+""+inc_main;

                }

                inc+=incrementDefaultValue;

            });

        }

    }

    return (str_strt+str+str_end).replace(/[\r\t\n\s]{1,}/g, "&nbsp;").replace(/(&quot;)/gi, '"');

}







/**
 * Random
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} valueArray The second number in an addition.
 * @param {number} minValue The second number in an addition.
 * @param {number} maxValue The second number in an addition.
 * @returns {string|number} Returns the total.
 * @example
 *
 * random([1,2,3],1,2 )
 *=>'{}'
 */
function random (valueArray, minValue, maxValue) {
var ran_var=[];
var emptyDefaultValue=0;
var ran_min=has(minValue)
        ?minValue
        :emptyDefaultValue;
var ran_max=has(maxValue)
        ?maxValue+ran_min
        :count(valueArray);
var math_random = Math.round(Math.random()*ran_max);

    each(valueArray, function (key, value) {

        if (math_random===key) {

            ran_var = value;

        }

    });

    return ran_var;

}




/**
 * Range
 *
 * @since 1.0.1
 * @category Seq
 * @param {number} maxValue The second number in an addition.
 * @param {number} minValue The second number in an addition.
 * @returns {string|number} Returns the total.
 * @example
 *
 * random([1,2,3],1,2 )
 *=>'{}'
 */
function range (maxValue, minValue) {
var emptyDefaultValue=0;
var tenDefaultValue=10;
var incrementDefaultValue=1;
var minValueRef=has(minValue)
        ?minValue
        :emptyDefaultValue;
var maxValueRef=has(maxValue)
        ?maxValue
        :tenDefaultValue;
var output=[];

    for (
var inc=minValueRef; inc<=maxValueRef;) {

        output.push(inc);
        inc+=incrementDefaultValue;

    }

    return output;

}







/**
 * Remove
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {number} value The second number in an addition.
 * @returns {string|number} Returns the total.
 * @example
 *
 * remove([1,2,3],1 )
 *=>'{}'
 */
function remove (objectValue, value) {
var emptyDefaultValue=0;
var type_js=getTypeof(objectValue);
var reslt =null;

    if (type_js==="array") {

        reslt=[];
        each(objectValue, function (ak, av) {

            if (indexOf(objectValue, value)<emptyDefaultValue) {

                reslt.push(av);

            }

        });

    }

    if (type_js==="json") {

        reslt={};
var jsn_vw=[];

        each(objectValue, function () {

            where(objectValue, value, function (jk) {

                jsn_vw.push(jk);

            });

        });

        each(objectValue, function (ak, av) {

            if (indexOf(jsn_vw, ak)<emptyDefaultValue) {

                reslt[ak]=av;

            }

        });

    }

    return reslt;

}




/**
 * Range
 *
 * @since 1.0.1
 * @category Seq
 * @param {number} value The second number in an addition.
 * @param {number} minValue The second number in an addition.
 * @param {number} maxValue The second number in an addition.
 * @returns {number} Returns the total.
 * @example
 *
 * random([1,2,3],1,2 )
 *=>'{}'
 */
function roundDecimal (value, minValue, maxValue) {
var emptyDefaultValue=0;
var onceDefaultValue=1;
var twoDefaultValue=2;
var tenDefaultValue=10;
var jsn=value||emptyDefaultValue;
var str_dec=jsn.toString().split(".");
var s_dmin=minValue||onceDefaultValue;
var s_dmax=maxValue||twoDefaultValue;

    if (count(str_dec)===twoDefaultValue) {
var p_cnts=count(str_dec[onceDefaultValue].toString().split(""));
var delmts=p_cnts<=s_dmin
            ?s_dmin
            :s_dmax;
var dec_s=tenDefaultValue**delmts;

        return Math.round(parseFloat(jsn*dec_s))/dec_s;

    }

    return jsn;

}






/**
 * Shuffle
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {number} value The second number in an addition.
 * @returns {string|number} Returns the total.
 * @example
 *
 * shuffle([1,2,3])
 *=>[2,3,1]
 */
function shuffle (objectValue) {
var emptyDefaultValue=0;
var onceDefaultValue=1;
var output=objectValue;
var valueType=[
        "array",
        "json"
    ];

    if (indexOf(valueType, getTypeof(objectValue))>-onceDefaultValue) {
var counts=count(objectValue)-onceDefaultValue;
var randomIndex=emptyDefaultValue;
var temporaryValue=null;

        for (
var currentIndex=counts; currentIndex>emptyDefaultValue;) {

            randomIndex = Math.floor(Math.random() * currentIndex);

            if (getTypeof(objectValue)==="array") {

                temporaryValue = output[currentIndex];
                output[currentIndex]=output[randomIndex];
                output[randomIndex] = temporaryValue;

            }

            currentIndex -= onceDefaultValue;

        }

    }

    return output;

}


/**
 * Repeat
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} value The second number in an addition.
 * @param {number} valueRepetion The second number in an addition.
 * @returns {string|number} Returns the total.
 * @example
 *
 * repeat("s",1 )
 *=>'ss'
 */
function repeat (value, valueRepetion) {
var emptyDefaultValue=0;
var onceDefaultValue=1;
var nm_rpt=valueRepetion||emptyDefaultValue;
var nm_str=value||"";

    if (nm_rpt>emptyDefaultValue) {

        return new Array(nm_rpt+onceDefaultValue).join(nm_str);

    }

    return "";

}






/**
 * Sort
 *
 * @since 1.0.1
 * @category Seq
 * @param {array|object} objectValue The second number in an addition.
 * @param {number} index The second number in an addition.
 * @param {boolean} order The second number in an addition.
 * @returns {string|number} Returns the total.
 * @example
 *
 * sort([2,3,1])
 *=>[1,2,3]
 */
function sort (objectValue, index, order) {
var jsonn=objectValue;
var asc=has(order)
        ?order
        :true;
var js_m=getTypeof(jsonn)==="json"
        ?each(jsonn)
        :jsonn;

    jsonn=js_m.sort(function (orderA, orderB) {

        if (asc) {

            return orderA[index] > orderB[index];

        }

        return orderB[index] > orderA[index];

    });

    return jsonn;

}




/**
 * To Array
 *
 * @since 1.0.1
 * @category Seq
 * @param {number|string|object} value The second number in an addition.
 * @returns {array} Returns the total.
 * @example
 *
 * toArray(1)
 *=>[1]
 */
function toArray (value) {
var return_val = value;

    if (getTypeof(return_val)!=="array") {

        return_val = [value];

    }

    return return_val;

}









/**
 * Template Value Internal
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} str_raw The second number in an addition.
 * @param {string} reg The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * templateValueInternal("","" )
 *=>'{}'
 */
function templateValueInternal (str_raw, reg) {
var str=str_raw;
var strs=str;

    try {

        try {
var regs=new RegExp("[\\r\\t\\n\\s]{0,}<![-]\\s{0,}(.*?)\\s{0,}!>[\\r\\t\\n\\s]{0,}", "g");

            strs=strs.replace(regs, function (word, mes1) {
var strs_perd=mes1.replace(".", ":");
var gtdata=getData(reg, strs_perd);

                return getTypeof(gtdata)==="json"
                    ?""
                    :gtdata;

            });

        } catch (error) {

            console.log(error);

        }

    } catch (error) {

        console.log(error);

    }
var strs_finl=strs;

    return strs_finl;

}

/**
 * Template Value
 *
 * @since 1.0.1
 * @category Seq
 * @param {string} templateString The second number in an addition.
 * @param {object} data The second number in an addition.
 * @param {object} option The second number in an addition.
 * @returns {string} Returns the total.
 * @example
 *
 * templateValue("","" )
 *=>'{}'
 */
function templateValue (templateString, data, option) {
var oneDefaultValue=1;

    templateString = templateValueInternal(templateString, data);
var default_option=varExtend({
        "escape": "<!-([\\s\\S]+?)!>",
        "evaluate": "<![^=-]([\\s\\S]+?)!>",
        "interpolate": "<!=([\\s\\S]+?)!>"
    }, option);
var valueType=[
        "array",
        "json"
    ];
var regexp = new RegExp([
        default_option.evaluate,
        default_option.interpolate,
        default_option.escape
    ].join("|")+"|$", "g");
var source = "__p+='";
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

    templateString.replace(regexp, function (match, evaluate, interpolate, escape, offset) {

        source+=templateString.slice(index, offset).replace(escaper, escapeChar);
        index = offset+match.length;

        if (evaluate) {

            source+="';\n"+evaluate+"\n__p+='";

        }

        if (interpolate) {

            source+="'+\n((__t=("+interpolate+"))==null?'':__t)+\n'";

        }

        if (escape) {

            source+="'+\n((__t=("+interpolate+"))==null?'':__t)+\n'";

        }

        return match;

    });

    source+="';\n";

    source = "var __t,__p='',__j=[].join," +
        "print=function(){__p+=__j.call(arguments,'');};\n" +
    source + " return __p;\n";

    try {
var val_source = "";

        if (getTypeof(data)==="json") {

            for (
var key in data) {

                if (has(data, key)) {

                    val_source+='var '+key+' = '+(indexOf(valueType, getTypeof(data[key]))>-oneDefaultValue
                        ?parseString(data[key])
                        :'"'+data[key]+'"')+';';

                }

            }

        }
var render = new Function('obj', '_', val_source+source);

        return render.call(this, data, templateValue);

    } catch (error) {

        console.log(error);
        error.source = source;
        throw error;

    }

}






/**
 * Var extend
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} objectValue The second number in an addition.
 * @param {object} objectValueReplace The second number in an addition.
 * @returns {array} Returns the total.
 * @example
 *
 * varExtend({"s1":1},{"s1":2})
 *=>{"s1":2}
 */
function varExtend (objectValue, objectValueReplace) {
var onceDefaultValue=1;

    if (getTypeof(objectValue)==="json"&& getTypeof(objectValueReplace)==="json") {
var jsn_s={};

        for (
var key in objectValue) {

            if (indexOf([
                'true',
                'false'
            ], objectValue[key].toString().toLowerCase())>-onceDefaultValue) {
var jsn_bool={
                    "false": false,
                    "true": true
                };

                jsn_s[key]=jsn_bool[objectValue[key].toString().toLowerCase()];

            } else {

                jsn_s[key]=objectValue[key];

            }

        }

        for (
var key in objectValueReplace) {

            if (has(jsn_s, key)) {

                jsn_s[key]=objectValueReplace[key];

            }

        }

        return jsn_s;

    }

    return objectValue;

}




/**
 * Where
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} objectValue The second number in an addition.
 * @param {object} objectValueWhere The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {array|object} Returns the total.
 * @example
 *
 * where({"s1":1},{"s1":2})
 *=>{"s1":2}
 */
function where (objectValue, objectValueWhere, func) {

    return whereLoopExecution(objectValue, objectValueWhere, func, true);

}




/**
 * Where Not
 *
 * @since 1.0.1
 * @category Seq
 * @param {object} objectValue The second number in an addition.
 * @param {object} objectValueWhere The second number in an addition.
 * @param {function} func The second number in an addition.
 * @returns {array|object} Returns the total.
 * @example
 *
 * whereNot({"s1":1},{"s1":2})
 *=>{"s1":2}
 */
function whereNot (objectValue, objectValueWhere, func) {

    return whereLoopExecution(objectValue, objectValueWhere, func, false);

}



_stk.append=append
_stk.appendIsArrayExist=appendIsArrayExist
_stk.arrayConcat=arrayConcat
_stk.arraySum=arraySum
_stk.clone=clone
_stk.count=count
_stk.delimiter=delimiter
_stk.each=each
_stk.filter=filter
_stk.first=first
_stk.getData=getData
_stk.getJSONVariable=getJSONVariable
_stk.getKey=getKey
_stk.getTypeof=getTypeof
_stk.getUniq=getUniq
_stk.getValue=getValue
_stk.has=has
_stk.ifUndefined=ifUndefined
_stk.indexOf=indexOf
_stk.insert=insert
_stk.isEmpty=isEmpty
_stk.isExact=isExact
_stk.jsonToArray=jsonToArray
_stk.last=last
_stk.limit=limit
_stk.map=map
_stk.numberFormat=numberFormat
_stk.parseJson=parseJson
_stk.parseString=parseString
_stk.random=random
_stk.range=range
_stk.remove=remove
_stk.repeat=repeat
_stk.roundDecimal=roundDecimal
_stk.shuffle=shuffle
_stk.sort=sort
_stk.templateValue=templateValue
_stk.toArray=toArray
_stk.varExtend=varExtend
_stk.where=where
_stk.whereNot=whereNot

})(window)
