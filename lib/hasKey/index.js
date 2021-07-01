"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasKey = void 0;
/**
 * hasKey
 * object(連想配列)に指定されたkeyが存在するかどうか
 * @param obj
 * @param key
 */
const hasKey = (obj, key) => {
    return obj.hasOwnProperty(key);
};
exports.hasKey = hasKey;
