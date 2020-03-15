import { ColorList, Color } from './styles/types';

export type ComponentProps = {
  colors?: ColorList;
  howManyElements?: number;
};

type CSS = {
  gridRowSpan: number;
  gridColumnSpan: number;
};

export interface IBlockViewModel {
  getColor: (index: number) => Color;
  key: string;
  css: CSS;
}

export type BlocksFactory = {
  create: (howMany: number) => IBlockViewModel[];
};

export type RandomIntegerProvider = {
  getInteger: (min: number, max: number) => number;
};

export type RandomColorProvider = {
  getColor: (index: number) => Color;
};
