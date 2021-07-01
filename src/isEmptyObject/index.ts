/**
 * isEmptyObject
 * オブジェクトが空かどうか
 * @param {object} obj
 * @returns
 */
export const isEmptyObject = (obj: { [key in string]: unknown }): boolean => {
  return !Object.keys(obj).length;
};
