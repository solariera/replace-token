import { tests, TestData } from '@solariera/easy-jest/lib';
import { replaceToken as fn } from '../replaceToken';

const data: TestData<typeof fn>[] = [
  { id: 'empty replacer', params: ['I am a {parson}'], ret: 'I am a {parson}', mode: 'toBe' },
  { id: 'missmatch replacer', params: ['I am a {person}', { parson: 'book' }], ret: 'I am a {person}', mode: 'toBe' },
  { id: 'regular replace', params: ['I am a {parson}', { parson: 'book' }], ret: 'I am a book', mode: 'toBe' },
  {
    id: 'recursive replace',
    params: [
      'I live in {address}',
      { address: { format: '{city}, {country}', replacer: { city: 'Tokyo', country: 'Japan' } } },
    ],
    ret: 'I live in Tokyo, Japan',
    mode: 'toBe',
  },
];

tests(fn, data);
