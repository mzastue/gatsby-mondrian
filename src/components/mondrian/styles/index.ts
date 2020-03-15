import { styled } from 'styles/provider';
import { MondrianStyledElements, BlockProps } from './types';

const Styled: MondrianStyledElements = <any>{};

Styled.Mondrian = styled('div')`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(20, auto);
  grid-template-rows: repeat(10, auto);

  grid-gap: 10px;
  border: 10px solid #080708;
  background: #080708;
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
