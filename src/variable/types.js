const objectCallType = {"[object Array]": "object",
    "[object Object]": "object",
    "[object String]": "string"};

const listObjArrayType = [
    "[object Object]",
    "[object Array]"
];

const objectCallTypeAll = {"[object Array]": "array",
    "[object Object]": "object",
    "[object Promise]": "promise",
    "[object RegExp]": "regexp",
    "[object String]": "string"};

exports.objectCallType =objectCallType;
exports.objectCallTypeAll =objectCallTypeAll;
exports.listObjArrayType =listObjArrayType;
