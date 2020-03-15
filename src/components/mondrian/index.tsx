import React from 'react';
import { ComponentProps, COLORS } from './types';
import S from './styles';

const Mondrian: React.FC<ComponentProps> = () => {
  return (
    <S.Mondrian>
      <S.Block>asdasds</S.Block>
      <S.Block color={COLORS.BLACK}>asdasds</S.Block>
    </S.Mondrian>
  );
};

export default Mondrian;
