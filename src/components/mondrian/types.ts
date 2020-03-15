import { StyledComponent } from '@emotion/styled';

export type ComponentProps = any;

export enum COLORS {
  YELLOW = 'yellow',
  BLUE = 'blue',
  WHITE = 'white',
  RED = 'red',
  BLACK = 'black',
}

export type BlockProps = {
  color?: COLORS;
  width?: string;
};

export type MondrianStyledElements = {
  Mondrian: any;
  Block: StyledComponent<BlockProps, any, any>;
};

export type Color = string;
