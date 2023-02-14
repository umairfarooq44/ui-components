import { css } from 'styled-components';
import Theme from '../Theme';

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
  Orleans: `var(--font-serif)`,
  'Acta Display': `'Acta Display', 'Times New Roman', 'Times', serif`,
  Inter: `var(--font-sans)`,
  'Open Sans': `'Open Sans', sans-serif`
} as const;

export const font =
  (font: keyof typeof FONT_STRINGS = 'Inter') =>
  () => {
    return css`
      font-family: ${FONT_STRINGS[font]};
    `;
  };

export const triangle = ({
  trianglePosition,
  borderColor,
  backgroundColor,
  size,
  borderWidth,
  placement
}: {
  trianglePosition: string;
  borderColor: string;
  backgroundColor: string;
  size: number;
  borderWidth: number;
  placement: 'top' | 'right' | 'bottom' | 'left';
}) => css`
  border: ${borderWidth}px solid ${borderColor};
  &:after,
  &:before {
    ${placement}: 100%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    ${
      placement === 'left' || placement === 'right'
        ? `top: ${trianglePosition}`
        : `left: ${trianglePosition}`
    }
  }
  &:after {
    border-color: rgba(255, 255, 255, 0);
    border-${placement}-color: ${backgroundColor};
    border-width: ${size}px;
    margin-${placement}: -${borderWidth}px;
  }
  &:before {
    border-color: rgba(231, 231, 231, 0);
    border-${placement}-color: ${borderColor};
    border-width: ${size}px;
    margin-${placement}: 0px;
  }
`;
export const container = (
  size: undefined | 'small' | 'regular' = 'regular'
) => css`
  width: 100%;
  padding: 2rem 1.5rem;
  margin-right: auto;
  margin-left: auto;

  ${media.xsmall`
    padding: 4rem 0;
    max-width: ${
      size === 'small'
        ? Theme.breakpoints.xsmall * 0.9
        : Theme.breakpoints.xsmall
    }px;
  `};

  ${media.small`
    max-width: ${
      size === 'small' ? Theme.breakpoints.small * 0.9 : Theme.breakpoints.small
    }px;
  `};

  ${media.medium`
    max-width: ${
      size === 'small'
        ? Theme.breakpoints.medium * 0.9
        : Theme.breakpoints.medium
    }px;
  `};

  ${media.large`
    max-width: ${
      size === 'small'
        ? `calc(${Theme.breakpoints.large * 0.9}px - ${Theme.sidebarWidth})`
        : `calc(${Theme.breakpoints.large}px - ${Theme.sidebarWidth})`
    };
  `};

  ${media.xlarge`
    max-width: ${
      size === 'small'
        ? `calc(${Theme.breakpoints.xlarge * 0.9}px - ${Theme.sidebarWidth})`
        : `calc(${Theme.breakpoints.xlarge}px - ${Theme.sidebarWidth})`
    };
  `};
`;

export const color: ThemeGetter<'color'> =
  (color = 'secondaryBrand') =>
  props =>
    props.theme.color[color];

export const colorFromPalette =
  (
    usage: keyof typeof Theme['palettes'][keyof typeof Theme['palettes']] = 'background'
  ) =>
  (props: { color: keyof typeof Theme['palettes']; theme: typeof Theme }) =>
    color(props.theme.palettes[props.color][usage])(props);

export const borderRadius =
  (
    borderRadius: keyof typeof Theme['borderRadius'] = 'regular',
    whichCorners = ['top-left', 'top-right', 'bottom-left', 'bottom-right']
  ) =>
  (props: PropsWithTheme) =>
    `border-top-left-radius: ${
      whichCorners.includes('top-left')
        ? props.theme.borderRadius[borderRadius]
        : 0
    };
  border-top-right-radius: ${
    whichCorners.includes('top-right')
      ? props.theme.borderRadius[borderRadius]
      : 0
  };
  border-bottom-right-radius: ${
    whichCorners.includes('bottom-right')
      ? props.theme.borderRadius[borderRadius]
      : 0
  };
  border-bottom-left-radius: ${
    whichCorners.includes('bottom-left')
      ? props.theme.borderRadius[borderRadius]
      : 0
  };`;

export const fromTheme =
  (
    fieldName: Exclude<
      keyof typeof Theme,
      'breakpoints' | 'color' | 'borderRadius' | 'textSizes' | 'palettes' | 'z'
    >
  ) =>
  (props: PropsWithTheme) =>
    props.theme[fieldName];

export const zIndex: ThemeGetter<'z'> = elementName => props =>
  props.theme.z[elementName];
