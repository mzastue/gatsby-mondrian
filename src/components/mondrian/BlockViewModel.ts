import {
  IBlockViewModel,
  RandomIntegerProvider,
  RandomColorProvider,
} from './types';

export class BlockViewModel implements IBlockViewModel {
  css: { gridRowSpan: number; gridColumnSpan: number };
  key: string;

  private randomColorProvider: RandomColorProvider;

  constructor(
    index: number,
    randomIntegerProvider: RandomIntegerProvider,
    randomColorProvider: RandomColorProvider,
  ) {
    this.key = `block-${index}`;
    this.css = {
      gridColumnSpan: randomIntegerProvider.getInteger(1, 2),
      gridRowSpan: randomIntegerProvider.getInteger(1, 4),
    };
    this.randomColorProvider = randomColorProvider;
  }

  getColor(index: number) {
    return this.randomColorProvider.getColor(index);
  }
}
