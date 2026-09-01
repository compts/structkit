export const objectCallType: {
    "[object Array]": string;
    "[object Object]": string;
    "[object String]": string;
};
export const objectCallTypeAll: {
    "[object Arguments]": string;
    "[object Array]": string;
    "[object BigInt]": string;
    "[object Boolean]": string;
    "[object Date]": string;
    "[object Error]": string;
    "[object Function]": string;
    "[object Map]": string;
    "[object Null]": string;
    "[object Number]": string;
    "[object Object]": string;
    "[object Promise]": string;
    "[object RegExp]": string;
    "[object Set]": string;
    "[object String]": string;
    "[object Uint16Array]": string;
    "[object Uint32Array]": string;
    "[object Uint8Array]": string;
    "[object Undefined]": string;
};
export namespace validTypeJson {
    namespace array {
        let end: string;
        let isKey: boolean;
        let start: string;
    }
    namespace json {
        let end_1: string;
        export { end_1 as end };
        let isKey_1: boolean;
        export { isKey_1 as isKey };
        let start_1: string;
        export { start_1 as start };
    }
    namespace map {
        let end_2: string;
        export { end_2 as end };
        let isKey_2: boolean;
        export { isKey_2 as isKey };
        let start_2: string;
        export { start_2 as start };
    }
    namespace object {
        let end_3: string;
        export { end_3 as end };
        let isKey_3: boolean;
        export { isKey_3 as isKey };
        let start_3: string;
        export { start_3 as start };
    }
    namespace set {
        let end_4: string;
        export { end_4 as end };
        let isKey_4: boolean;
        export { isKey_4 as isKey };
        let start_4: string;
        export { start_4 as start };
    }
}
