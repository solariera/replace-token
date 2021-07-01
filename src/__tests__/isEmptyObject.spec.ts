import { tests, TestData } from '@solariera/easy-jest/lib';
import { isEmptyObject as fn } from '../isEmptyObject';

const data: TestData<typeof fn>[] = [
  { id: 'empty object', params: [{}], ret: true, mode: 'toBe' },
  { id: 'not empty object', params: [{ key: 'value' }], ret: false, mode: 'toBe' },
];

tests(fn, data);
