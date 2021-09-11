"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function vBoolean(value) {
    let isMatch = true;
    if (typeof value !== "boolean")
        isMatch = false;
    let v = value;
    let operations = {
        true: () => {
            if (typeof v !== "boolean")
                return operations;
            if (!v)
                isMatch = false;
            return operations;
        },
        false: () => {
            if (typeof v !== "boolean")
                return operations;
            if (v)
                isMatch = false;
            return operations;
        },
        final: () => {
            return isMatch;
        },
    };
    return operations;
}
exports.default = vBoolean;
