import { hasEveryKeys } from '../hasEveryKeys';
import { isEmptyObject } from '../isEmptyObject';

type ReplacerValueType = string | number | RecursiveReplacerType;
type ChildReplacerType = { [key in string]: ReplacerValueType };
type RecursiveReplacerType = { format: string; replacer: ChildReplacerType };
type ReplacerType = { [key in string]: ReplacerValueType };
type UnknownReplacerType = string | number | { [key in string]: unknown };

/**
 * isRecursiveReplacerType
 * 与えられた値が、RecursiveReplacerTypeのキーを持つobjectかどうかをチェックする
 * @param {ReplacerValueType} value
 * @return {boolean}
 */
export const isRecursiveReplacerType = (value: UnknownReplacerType): value is RecursiveReplacerType => {
  // objectでなければそもそも対象外なのでfalseを返す
  if (typeof value !== 'object') return false;

  /**
   * RecursiveReplacerTypeと判定するために必要なキー
   */
  const targetKeys = ['format', 'replacer'];

  // targetKeysを持っているオブジェクトであればtrueを返す
  if (hasEveryKeys(value, ...targetKeys)) return true;

  // それ以外は全てfalseを返す
  return false;
};

/**
 * replaceToken
 * テキスト中に出現する{key}を、{ key: value }で定義したvalueに置き換えたテキストを返す
 * @param {string} original
 * @param {ReplacerType} replacers
 */
export const replaceToken = (original: string, replacers: ReplacerType = {}): string => {
  // 置換するものがなければそのまま返す
  if (isEmptyObject(replacers)) return original;

  /**
   * 戻り値用の置き換え文字列
   */
  let replaced = original;

  // replacersの持つkeyを基準に文字列を置き換えていく
  for (const key in replacers) {
    // キーの持つ値がobject(RecursiveReplacerType)であれば、内容をチェックして特別な処理をする
    if (isRecursiveReplacerType(replacers[key])) {
      /**
       * このスコープ内ではreplacers[key]をRecursiveReplacerTypeとして扱う
       */
      const recursiveReplacers = replacers[key] as RecursiveReplacerType;

      /**
       * recursiveReplacersの持つformatとreplacerを取り出す
       */
      const { format, replacer } = recursiveReplacers;

      /**
       * この関数を再帰呼び出しして、recursiveReplacersの内容を処理した文字列を取得する。
       */
      const replacedChild = replaceToken(format, replacer);

      // 処理した文字列はこのキーに対する置き換え文字列として格納する
      replacers = { ...replacers, [key]: replacedChild };
    }

    /**
     * 対象テキストのマッチする{key}で区切った配列
     */
    const splits = replaced.split(`{${key}}`);

    // 対象が存在する場合（splitsが2つ以上に分割された場合）は置き換え文字で結合する
    if (splits.length > 1) replaced = splits.join(replacers[key].toString());
  }

  return replaced;
};
