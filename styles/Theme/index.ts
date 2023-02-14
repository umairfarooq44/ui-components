// breakpoint lower limits
const BREAKPOINT_XXSMALL = 0;
const BREAKPOINT_XSMALL = 401;
const BREAKPOINT_SMALL = 541;
const BREAKPOINT_MEDIUM = 721;
const BREAKPOINT_LARGE = 901;
const BREAKPOINT_XLARGE = 1025;
const BREAKPOINT_XXLARGE = 1281;

const FONT_WEIGHTS = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700
};

const theme = {
  breakpoints: {
    xxsmall: BREAKPOINT_XXSMALL,
    xsmall: BREAKPOINT_XSMALL,
    small: BREAKPOINT_SMALL,
    medium: BREAKPOINT_MEDIUM,
    large: BREAKPOINT_LARGE,
    xlarge: BREAKPOINT_XLARGE,
    xxlarge: BREAKPOINT_XXLARGE
  },
  color: {
    backgroundGrey: '#fcfcfd',
    black: '#000',
    completedStepBackgroundGrey: '#727a85',
    disabledInputBackground: '#fafafa',
    disabledInputBorder: '#dddddd',
    facebook: '#3b5998',
    green: '#0ac57e',
    grey: '#8e949e',
    lightGreen: '#62daad',
    lightGrey: '#d9dbdf',
    lightRed: '#fa7268',
    linkedin: '#0077b5',
    orcid: '#9cc732',
    primaryBrand: '#59d3ce',
    primaryBrandHover: '#29c2b5',
    primaryBrandLight: '#ddfaf8',
    primaryLink: '#065de0',
    primaryLinkHover: '#0047b3',
    purple: '#855daf',
    red: '#ea6060',
    secondaryBrand: '#424d5d',
    sidebarGrey: '#f5f6f7',
    sidebarHover: '#f0f1f2',
    transparent: 'transparent',
    twitter: '#1da1f2',
    warning: 'rgba(252,252,98,0.25)',
    white: '#ffffff',
    yellow: '#ffc107'
  },
  textSizes: {
    h1: {
      fontSize: ['4rem', '4rem'],
      lineHeight: ['4.75rem', '4.75rem'],
      font: 'Acta Display',
      fontWeight: FONT_WEIGHTS.regular
    },
    h2: {
      fontSize: ['2.8125rem', '2.8125rem'],
      lineHeight: ['3.625rem', '3.625rem'],
      font: 'Acta Display',
      fontWeight: FONT_WEIGHTS.regular
    },
    h3: {
      fontSize: ['1.8125rem', '2rem'],
      lineHeight: ['2.25rem', '2.75rem'],
      font: 'Open Sans',
      fontWeight: FONT_WEIGHTS.semiBold
    },
    h4: {
      fontSize: ['1.35rem', '1.4375rem'],
      lineHeight: ['1.6rem', '2rem'],
      font: 'Open Sans',
      fontWeight: FONT_WEIGHTS.regular
    },
    h5: {
      fontSize: ['1rem', '1.1875rem'],
      lineHeight: ['1.5rem', '2rem'],
      font: 'Open Sans',
      fontWeight: FONT_WEIGHTS.regular
    },
    body1: {
      fontSize: ['1rem', '1rem'],
      lineHeight: ['1.5rem', '1.5rem'],
      font: 'Open Sans',
      fontWeight: FONT_WEIGHTS.regular
    },
    body2: {
      fontSize: ['0.875rem', '0.875rem'],
      lineHeight: ['1.5rem', '1.5rem'],
      font: 'Open Sans',
      fontWeight: FONT_WEIGHTS.regular
    },
    body3: {
      fontSize: ['0.8125rem', '0.8125rem'],
      lineHeight: ['1.125rem', '1.125rem'],
      font: 'Open Sans',
      fontWeight: FONT_WEIGHTS.regular
    },
    caption: {
      fontSize: ['0.75rem', '0.75rem'],
      lineHeight: ['1rem', '1rem'],
      font: 'Open Sans',
      fontWeight: FONT_WEIGHTS.regular
    }
  },
  fontWeights: FONT_WEIGHTS
} as const;

export type ColorNames = keyof typeof theme['color'];
export type ColorValues = typeof theme['color'][ColorNames];
export type TextSizeNames = keyof typeof theme['textSizes'];
export type BreakpointNames = keyof typeof theme['breakpoints'];
export type FontWeightNames = keyof typeof theme['fontWeights'];

export default theme;
