import { tests, TestData } from '@solariera/easy-jest/lib';
import { template as fn } from '.';

const data: TestData<typeof fn>[] = [{ id: '', params: [], ret: true, mode: 'toEqual' }];

tests(fn, data);
