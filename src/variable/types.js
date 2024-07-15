const objectCallType = {"[object Array]": "object",
    "[object Object]": "object",
    "[object String]": "string"};

const listObjArrayType = [
    "[object Object]",
    "[object Array]"
];

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

exports.objectCallType =objectCallType;
exports.objectCallTypeAll =objectCallTypeAll;
exports.listObjArrayType =listObjArrayType;
