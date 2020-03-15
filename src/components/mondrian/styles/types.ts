import { StyledComponent } from '@emotion/styled';

type Color = string;

export type ColorList = Color[];

export type BlockProps = {
  color?: Color;
  width?: string;
};

export type MondrianProps = any;

export type MondrianStyledElements = {
  Mondrian: StyledComponent<MondrianProps, any, any>;
  Block: StyledComponent<BlockProps, any, any>;
};
