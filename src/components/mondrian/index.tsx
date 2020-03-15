import React from 'react';
import { ComponentProps, IBlockViewModel } from './types';
import S from './styles';

import {
  createBlocksFactory,
  createRandomColorProvider,
  randomIntegerProvider,
} from './utils';

enum DEFAULT_COLORS {
  RED = '#DF2935',
  YELLOW = '#FDCA40',
  BLUE = '#3772FF',
  WHITE = '#E6E8E6',
  BLACK = '#080708',
}

const Mondrian: React.FC<ComponentProps> = ({
  colors = [
    DEFAULT_COLORS.BLACK,
    DEFAULT_COLORS.BLUE,
    DEFAULT_COLORS.RED,
    DEFAULT_COLORS.YELLOW,
    DEFAULT_COLORS.WHITE,
  ],
  howManyElements = 100,
}) => {
  const colorProvider = createRandomColorProvider(colors);
  const blocksFactory = createBlocksFactory(
    colorProvider,
    randomIntegerProvider,
  );
  const blocks: IBlockViewModel[] = blocksFactory.create(howManyElements);

  const getAvailableColorIndex = () => {
    return randomIntegerProvider.getInteger(0, colors.length - 1);
  };

  return (
    <S.Mondrian>
      {blocks.map(block => (
        <S.Block
          key={block.key}
          color={block.getColor(getAvailableColorIndex())}
          gridRowSpan={block.css.gridRowSpan}
          gridColumnSpan={block.css.gridColumnSpan}
        />
      ))}
    </S.Mondrian>
  );
};

export default Mondrian;
