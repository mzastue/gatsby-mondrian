import React from 'react';
import { ComponentProps } from './types';
import S from './styles';

const Mondrian: React.FC<ComponentProps> = ({
  colors = ['red', 'blue', 'black', 'yellow', 'green'],
}) => {
  return (
    <S.Mondrian>
      <S.Block>asdasds</S.Block>
      <S.Block>asdasds</S.Block>
    </S.Mondrian>
  );
};

export default Mondrian;
