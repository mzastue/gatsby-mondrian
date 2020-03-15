import { styled } from 'styles/provider';
import { MondrianStyledElements, BlockProps } from './types';

const Styled: MondrianStyledElements = <any>{};

Styled.Mondrian = styled('div')`
  width: 100%;
  height: 100%;
`;

Styled.Block = styled(`div`)`
  ${(p: BlockProps) => ({
    background: p.color,
    width: p.width || 'auto',
  })}
  display: inline-block;
`;

export default Styled;
