"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyObject = void 0;
/**
 * isEmptyObject
 * オブジェクトが空かどうか
 * @param {object} obj
 * @returns
 */
const isEmptyObject = (obj) => {
    return !Object.keys(obj).length;
};
exports.isEmptyObject = isEmptyObject;
