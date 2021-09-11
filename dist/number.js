"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function vNumber(value) {
    let isMatch = true;
    if (typeof value !== "number")
        isMatch = false;
    let v = value;
    let operations = {
        min: (n) => {
            if (typeof v !== "number")
                return operations;
            if (v < n)
                isMatch = false;
            return operations;
        },
        max: (n) => {
            if (typeof v !== "number")
                return operations;
            if (v > n)
                isMatch = false;
            return operations;
        },
        even: () => {
            if (typeof v !== "number")
                return operations;
            if (v % 2 !== 0)
                isMatch = false;
            return operations;
        },
        odd: () => {
            if (typeof v !== "number")
                return operations;
            if (v % 2 === 0)
                isMatch = false;
            return operations;
        },
        final: () => {
            return isMatch;
        },
    };
    return operations;
}
exports.default = vNumber;
