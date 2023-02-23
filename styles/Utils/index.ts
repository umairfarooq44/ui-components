import { css } from 'styled-components';
import Theme, { TextSizeNames } from '../Theme';

type PropsWithTheme = { theme: typeof Theme } & Record<string, any>;

type ThemeGetter<T extends keyof typeof Theme> = (
  arg: keyof typeof Theme[T]
) => (props: PropsWithTheme) => typeof Theme[T][typeof arg];

// iterate through the sizes and create a media template
type BreakpointNames = keyof typeof Theme['breakpoints'];
const breakpoints = Object.keys(Theme.breakpoints) as BreakpointNames[];

export const media = breakpoints.reduce((accumulator, label) => {
  const emSize = Theme.breakpoints[label] / 16;
  accumulator[label] = (...params: Parameters<typeof css>) => css`
    @media (min-width: ${emSize}em) {
      ${css(...params)};
    }
  `;
  return accumulator;
}, {} as Record<BreakpointNames, any>);

export const FONT_STRINGS = {
  Orleans: `Orleans, 'Open Sans', Arial, sans-serif`,
  Inter: `Inter, 'Open Sans', Arial, sans-serif`
} as const;

export const font =
  (font: keyof typeof FONT_STRINGS = 'Inter') =>
  () => {
    return css`
      font-family: ${FONT_STRINGS[font]};
    `;
  };

export const color: ThemeGetter<'color'> =
  (color = 'primaryText') =>
  props =>
    props.theme.color[color];

export const fontSize =
  (size: TextSizeNames) =>
  ({ theme }: PropsWithTheme) =>
    css`
      font-size: ${theme.textSizes[size].fontSize[0]};
      line-height: ${theme.textSizes[size].lineHeight[0]};
    `;
