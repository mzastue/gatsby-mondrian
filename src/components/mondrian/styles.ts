import { styled } from 'styles/provider';
import { MondrianStyledElements, COLORS, Color, BlockProps } from './types';

const Styled: MondrianStyledElements = <any>{};

const colorsMap: Map<COLORS, Color> = new Map([
  [COLORS.BLACK, 'black'],
  [COLORS.BLUE, 'blue'],
]);

Styled.Mondrian = styled('div')`
  width: 100%;
  height: 100%;
`;

Styled.Block = styled(`div`)`
  ${(p: BlockProps) => ({
    background: p.color && colorsMap.get(p.color),
    width: p.width || 'auto',
  })}
  display: inline-block;
`;

export default Styled;
