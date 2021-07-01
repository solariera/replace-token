import { tests, TestData } from '@solariera/easy-jest/lib';
import { isRecursiveReplacerType as fn } from '../replaceToken';

const data: TestData<typeof fn>[] = [
  { id: 'input number', params: [1], ret: false, mode: 'toBe' },
  { id: 'input string', params: ['1'], ret: false, mode: 'toBe' },
  { id: 'input object', params: [{ number: 1, string: '1' }], ret: false, mode: 'toBe' },
];

tests(fn, data);
