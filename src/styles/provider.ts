import emotionStyled from '@emotion/styled';

export { css } from '@emotion/core';
export const styled = emotionStyled;

export const loadGlobalCss = () => {
  require('./reset.css');
};
