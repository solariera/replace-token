/**
 * hasEveryKeys
 * object(連想配列)に指定されたkeyが全て存在するかどうか
 * @param obj
 * @param keys
 */
declare const hasEveryKeys: (obj: {
    [x: string]: unknown;
}, ...keys: string[]) => boolean;
export { hasEveryKeys };
