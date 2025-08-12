const objectCallType = {"[object Array]": "object",
    "[object Object]": "object",
    "[object String]": "string"};


const objectCallTypeAll = {"[object Arguments]": "arguments",
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
    "[object Uint8Array]": "uint8Array",
    "[object Undefined]": "undefined"};

const validTypeJson = {
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

exports.objectCallType =objectCallType;
exports.objectCallTypeAll =objectCallTypeAll;
exports.validTypeJson =validTypeJson;
