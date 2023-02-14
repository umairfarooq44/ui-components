// .storybook/preview.js

import React from 'react';

import { ThemeProvider } from 'styled-components';
import { Theme as defaultTheme, Reset, Fonts } from '../../styles';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';
import '!style-loader!css-loader!../../css/fonts.css';

export const decorators = [
  Story => (
    <>
      <Reset />
      <Fonts>
        <Story />
      </Fonts>
    </>
  )
];

addDecorator(withThemes(ThemeProvider, [defaultTheme]));
