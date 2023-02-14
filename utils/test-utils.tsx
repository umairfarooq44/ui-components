import React, { FC, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { Theme, Fonts } from '..';

export const Wrapper: FC = props => (
  <>
    <ThemeProvider theme={Theme}>
      <>
        <Reset />
        <Fonts>{props.children}</Fonts>
      </>
    </ThemeProvider>
    <div id="flyout-root" />
  </>
);

export const contextRender = (children: ReactNode) =>
  render(<Wrapper>{children}</Wrapper>);
