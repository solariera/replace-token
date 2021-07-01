/**
 * hasKey
 * object(連想配列)に指定されたkeyが存在するかどうか
 * @param obj
 * @param key
 */
const hasKey = (obj: { [key in string]: unknown }, key: string): boolean => {
  return obj.hasOwnProperty(key);
};

export { hasKey };
