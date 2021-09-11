"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = __importDefault(require("./string"));
const number_1 = __importDefault(require("./number"));
const boolean_1 = __importDefault(require("./boolean"));
const array_1 = __importDefault(require("./array"));
function v(value) {
    let v = value;
    let operations = {
        string: () => {
            return (0, string_1.default)(v);
        },
        number: () => {
            return (0, number_1.default)(v);
        },
        boolean: () => {
            return (0, boolean_1.default)(v);
        },
        array: () => {
            return (0, array_1.default)(v);
        }
    };
    return operations;
}
exports.default = v;
