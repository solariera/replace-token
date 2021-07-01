"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceToken = exports.isRecursiveReplacerType = void 0;
const hasEveryKeys_1 = require("../hasEveryKeys");
const isEmptyObject_1 = require("../isEmptyObject");
/**
 * isRecursiveReplacerType
 * 与えられた値が、RecursiveReplacerTypeのキーを持つobjectかどうかをチェックする
 * @param {ReplacerValueType} value
 * @return {boolean}
 */
const isRecursiveReplacerType = (value) => {
    // objectでなければそもそも対象外なのでfalseを返す
    if (typeof value !== 'object')
        return false;
    /**
     * RecursiveReplacerTypeと判定するために必要なキー
     */
    const targetKeys = ['format', 'replacer'];
    // targetKeysを持っているオブジェクトであればtrueを返す
    if (hasEveryKeys_1.hasEveryKeys(value, ...targetKeys))
        return true;
    // それ以外は全てfalseを返す
    return false;
};
exports.isRecursiveReplacerType = isRecursiveReplacerType;
/**
 * replaceToken
 * テキスト中に出現する{key}を、{ key: value }で定義したvalueに置き換えたテキストを返す
 * @param {string} original
 * @param {ReplacerType} replacers
 */
const replaceToken = (original, replacers = {}) => {
    // 置換するものがなければそのまま返す
    if (isEmptyObject_1.isEmptyObject(replacers))
        return original;
    /**
     * 戻り値用の置き換え文字列
     */
    let replaced = original;
    // replacersの持つkeyを基準に文字列を置き換えていく
    for (const key in replacers) {
        // キーの持つ値がobject(RecursiveReplacerType)であれば、内容をチェックして特別な処理をする
        if (exports.isRecursiveReplacerType(replacers[key])) {
            /**
             * このスコープ内ではreplacers[key]をRecursiveReplacerTypeとして扱う
             */
            const recursiveReplacers = replacers[key];
            /**
             * recursiveReplacersの持つformatとreplacerを取り出す
             */
            const { format, replacer } = recursiveReplacers;
            /**
             * この関数を再帰呼び出しして、recursiveReplacersの内容を処理した文字列を取得する。
             */
            const replacedChild = exports.replaceToken(format, replacer);
            // 処理した文字列はこのキーに対する置き換え文字列として格納する
            replacers = { ...replacers, [key]: replacedChild };
        }
        /**
         * 対象テキストのマッチする{key}で区切った配列
         */
        const splits = replaced.split(`{${key}}`);
        // 対象が存在する場合（splitsが2つ以上に分割された場合）は置き換え文字で結合する
        if (splits.length > 1)
            replaced = splits.join(replacers[key].toString());
    }
    return replaced;
};
exports.replaceToken = replaceToken;
