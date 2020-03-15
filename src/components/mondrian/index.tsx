import React from 'react';
import { ComponentProps } from './types';
import S from './styles';
import { ColorList } from './styles/types';
import { Color } from 'csstype';

const getRandomInteger = (min: number = 0, max: number = 1): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createColorProvider = (colors: ColorList) => {
  const len = colors.length;

  return {
    getColor: (index: number): Color => {
      return index <= len || index >= 0 ? colors[index] : '';
    },
  };
};

const Mondrian: React.FC<ComponentProps> = ({
  colors = ['red', 'blue', 'black', 'yellow', 'green', 'white'],
}) => {
  const elementsCount = getRandomInteger(40, 40);
  const iterable = [...Array(elementsCount)];
  const colorProvider = createColorProvider(colors);
  const getRandomColor = () =>
    colorProvider.getColor(getRandomInteger(0, colors.length - 1));

  return (
    <S.Mondrian>
      {iterable.map((_, index) => (
        <S.Block
          key={`block-${index}`}
          color={getRandomColor()}
          // width={`${getRandomInteger(100, 400)}px`}
          gridRowSpan={getRandomInteger(1, 4)}
          gridColumnSpan={getRandomInteger(1, 2)}
        />
      ))}
    </S.Mondrian>
  );
};

export default Mondrian;
