import { styled } from 'styles/provider';
import { MondrianStyledElements, BlockProps } from './types';

const Styled: MondrianStyledElements = <any>{};

Styled.Mondrian = styled('div')`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(10, 1fr);

  grid-gap: 10px;
  border: 10px solid black;
  background: black;
  box-sizing: border-box;
`;

Styled.Block = styled(`div`)`
  ${(p: BlockProps) => ({
    background: p.color,
    // width: p.width || 'auto',
    gridRow: p.gridRowSpan ? `span ${p.gridRowSpan}` : '',
    gridColumn: p.gridColumnSpan ? `span ${p.gridColumnSpan}` : '',
  })}
`;

export default Styled;
