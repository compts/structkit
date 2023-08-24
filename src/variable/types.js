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
    "[object Number]": "number",
    "[object Object]": "object",
    "[object Promise]": "promise",
    "[object RegExp]": "regexp",
    "[object String]": "string"};

exports.objectCallType =objectCallType;
exports.objectCallTypeAll =objectCallTypeAll;
exports.listObjArrayType =listObjArrayType;
