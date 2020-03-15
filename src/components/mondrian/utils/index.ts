import { ColorList, Color } from '../styles/types';
import {
  BlocksFactory as BlockFactoryType,
  RandomIntegerProvider,
  RandomColorProvider,
} from '../types';
import { BlockViewModel } from '../BlockViewModel';

export const randomIntegerProvider: RandomIntegerProvider = {
  getInteger: (min: number = 0, max: number = 1): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

export const createRandomColorProvider = (colors: ColorList) => {
  const len = colors.length;

  return {
    getColor: (index: number): Color => {
      return index <= len || index >= 0 ? colors[index] : '';
    },
  };
};

export const createBlocksFactory = (
  colorProvider: RandomColorProvider,
  randomIntegerProvider: RandomIntegerProvider,
): BlockFactoryType => ({
  create: (howMany: number) => {
    const iterable = [...Array(howMany)];
    return iterable.map(
      (_, index) =>
        new BlockViewModel(index, randomIntegerProvider, colorProvider),
    );
  },
});
