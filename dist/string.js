"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function vString(value) {
    let isMatch = true;
    if (typeof value !== "string")
        isMatch = false;
    let v = value;
    let operations = {
        email: () => {
            let email = new RegExp(/[a-zA-Z\d]+\.?[a-zA-Z\d]+\@[a-zA-Z]+\.{1}[a-zA-Z]+/gm);
            if (!email.test(v))
                isMatch = false;
            return operations;
        },
        iban: () => {
            let iban = new RegExp(/^(?:(?:IT|SM)\d{2}[A-Z]\d{22}|CY\d{2}[A-Z]\d{23}|NL\d{2}[A-Z]{4}\d{10}|LV\d{2}[A-Z]{4}\d{13}|(?:BG|BH|GB|IE)\d{2}[A-Z]{4}\d{14}|GI\d{2}[A-Z]{4}\d{15}|RO\d{2}[A-Z]{4}\d{16}|KW\d{2}[A-Z]{4}\d{22}|MT\d{2}[A-Z]{4}\d{23}|NO\d{13}|(?:DK|FI|GL|FO)\d{16}|MK\d{17}|(?:AT|EE|KZ|LU|XK)\d{18}|(?:BA|HR|LI|CH|CR)\d{19}|(?:GE|DE|LT|ME|RS)\d{20}|IL\d{21}|(?:AD|CZ|ES|MD|SA)\d{22}|PT\d{23}|(?:BE|IS)\d{24}|(?:FR|MR|MC)\d{25}|(?:AL|DO|LB|PL)\d{26}|(?:AZ|HU)\d{27}|(?:GR|MU)\d{28})$/i);
            if (!iban.test(v))
                isMatch = false;
            return operations;
        },
        min: (n) => {
            if (typeof value !== "string")
                return operations;
            if (v.length < n)
                isMatch = false;
            return operations;
        },
        max: (n) => {
            if (typeof value !== "string")
                return operations;
            if (v.length > n)
                isMatch = false;
            return operations;
        },
        final: () => {
            return isMatch;
        },
    };
    return operations;
}
exports.default = vString;
