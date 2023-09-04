import type { CharType } from './types';

const padID = (id: number): string => {
  let _id = String(id);
  return _id.length === 1 ? '00' + _id : _id.length === 2 ? '0' + _id : _id;
};

const getTotal = (
  obj: { [dex: string]: Array<CharType> },
  key: string,
): number => {
  return obj[key].reduce(
    (acc: number, dx_char: CharType) => acc + dx_char.base_experience,
    0,
  );
};

export { padID, getTotal };
