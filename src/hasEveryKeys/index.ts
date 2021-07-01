import { hasKey } from '../hasKey';

/**
 * hasEveryKeys
 * object(連想配列)に指定されたkeyが全て存在するかどうか
 * @param obj
 * @param keys
 */
const hasEveryKeys = (obj: { [key in string]: unknown }, ...keys: string[]): boolean => {
  const results = keys.map((key) => hasKey(obj, key));
  return results.every((result) => result);
};

export { hasEveryKeys };
