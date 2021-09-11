"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function vArray(value) {
    let isMatch = true;
    if (!Array.isArray(value))
        isMatch = false;
    let v = value;
    let operations = {
        min: (n) => {
            if (!Array.isArray(v))
                return operations;
            if (v.length < n)
                isMatch = false;
            return operations;
        },
        max: (n) => {
            if (!Array.isArray(v))
                return operations;
            if (v.length > n)
                isMatch = false;
            return operations;
        },
        noDuplicates: () => {
            if (!Array.isArray(v))
                return operations;
            let filteredArray = [...new Set(v)];
            if (v.length !== filteredArray.length)
                isMatch = false;
            return operations;
        },
        final: () => {
            return isMatch;
        },
    };
    return operations;
}
exports.default = vArray;
