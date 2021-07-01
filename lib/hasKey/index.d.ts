/**
 * hasKey
 * object(連想配列)に指定されたkeyが存在するかどうか
 * @param obj
 * @param key
 */
declare const hasKey: (obj: {
    [x: string]: unknown;
}, key: string) => boolean;
export { hasKey };
