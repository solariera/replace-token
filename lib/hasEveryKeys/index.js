"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasEveryKeys = void 0;
const hasKey_1 = require("../hasKey");
/**
 * hasEveryKeys
 * object(連想配列)に指定されたkeyが全て存在するかどうか
 * @param obj
 * @param keys
 */
const hasEveryKeys = (obj, ...keys) => {
    const results = keys.map((key) => hasKey_1.hasKey(obj, key));
    return results.every((result) => result);
};
exports.hasEveryKeys = hasEveryKeys;
