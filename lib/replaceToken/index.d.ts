declare type ReplacerValueType = string | number | RecursiveReplacerType;
declare type ChildReplacerType = {
    [key in string]: ReplacerValueType;
};
declare type RecursiveReplacerType = {
    format: string;
    replacer: ChildReplacerType;
};
declare type ReplacerType = {
    [key in string]: ReplacerValueType;
};
declare type UnknownReplacerType = string | number | {
    [key in string]: unknown;
};
/**
 * isRecursiveReplacerType
 * 与えられた値が、RecursiveReplacerTypeのキーを持つobjectかどうかをチェックする
 * @param {ReplacerValueType} value
 * @return {boolean}
 */
export declare const isRecursiveReplacerType: (value: UnknownReplacerType) => value is RecursiveReplacerType;
/**
 * replaceToken
 * テキスト中に出現する{key}を、{ key: value }で定義したvalueに置き換えたテキストを返す
 * @param {string} original
 * @param {ReplacerType} replacers
 */
export declare const replaceToken: (original: string, replacers?: ReplacerType) => string;
export {};
