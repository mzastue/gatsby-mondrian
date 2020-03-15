import { StyledComponent } from '@emotion/styled';

export type Color = string;

export type ColorList = Color[];

export type BlockProps = {
  color?: Color;
  width?: string;
  gridRowSpan?: number;
  gridColumnSpan?: number;
};

export type MondrianProps = any;

export type MondrianStyledElements = {
  Mondrian: StyledComponent<MondrianProps, any, any>;
  Block: StyledComponent<BlockProps, any, any>;
};
