# Replace Token

[![npm](https://img.shields.io/npm/v/@solariera/replace-token)](https://www.npmjs.com/package/@solariera/replace-token)
[![npm](https://img.shields.io/npm/dw/@solariera/replace-token)](https://www.npmjs.com/package/@solariera/replace-token)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@solariera/replace-token)](https://bundlephobia.com/result?p=@solariera/replace-token)

Replace the token in the text

## 1. Usage

### 1-1. Installation

```console
# npm
npm install @solariera/replace-token
```

```console
# yarn
yarn add @solariera/replace-token
```

### 1-2. Basic Usage

```typescript
import { replaceToken } from '@solariera/replace-token';

/** B A S I C   R E P L A C E */
const original = 'I am a {parson}';
const replacer = { parson: 'pen' };
const replacerText = replaceToken(original, replacer);
console.log(replacerText); // I am a pen

/** R E C U R S I V E   R E P L A C E */
const original = 'I live in {address}';
const replacer = { address: { format: '{city}, {country}', replacer: { city: 'Tokyo', country: 'Japan' } } };
const replacerText = replaceToken(original, replacer);
console.log(replacerText); // I live in Tokyo, Japan
```

## 2. Specifications

### 2-1. Syntax & Parameters

#### replaceToken(`original` [, `replacer`])

| No. | Name       | Type   | Required | Description                       |
| --- | ---------- | ------ | :------: | --------------------------------- |
| 1   | `original` | string |   Yes    | The original text to be converted |
| 2   | `replacer` | object |          | Replacer object                   |

### 2-2. Replacer Object

#### { `key`: `value` }

| No. | Name    | Type                                   | Description                          |
| --- | ------- | -------------------------------------- | ------------------------------------ |
| 1   | `key`   | string                                 | Characters in the token (e.g. {key}) |
| 2   | `value` | string \| number \| Recursive Replacer | The string to be replaced            |

### 2-3. Recursive Replacer

#### { format: `original`, replacer: `replacer` }

```typescript
{
  greeting: {
    format: 'I am {first} {last}', replacer: { first: 'pika', last: 'chu' };
  }
}
```
