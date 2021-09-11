"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function v(value) {
    let v = value;
    let isMatch = true;
    let operations = {
        string: () => {
            if (typeof v !== "string")
                isMatch = false;
            return operations;
        },
        number: () => {
            if (typeof v !== "number")
                isMatch = false;
            return operations;
        },
        boolean: () => {
            if (typeof v !== "boolean")
                isMatch = false;
            return operations;
        },
        final: () => {
            return isMatch;
        }
    };
    return operations;
}
exports.default = v;
