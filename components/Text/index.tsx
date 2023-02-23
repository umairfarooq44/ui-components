import * as React from 'react';
import styled, { CSSProp } from 'styled-components';
import {
  font,
  color,
  media,
  ColorNames,
  TextSizeNames,
  Theme
} from '../../styles';

type Fonts = 'Acta Display' | 'Open Sans' | 'Inter' | 'Orleans';

export const propValueFromTextSize =
  (
    prop: keyof typeof Theme['textSizes'][TextSizeNames] = 'fontSize',
    index: number = 0
  ) =>
  (props: { size: TextSizeNames; theme: typeof Theme }) => {
    const value = props.theme.textSizes[props.size][prop];
    console.log(value, props.size);

    return Array.isArray(value) ? value[index] : value;
  };

type TextProps = {
  css?: CSSProp;
  size: TextSizeNames;
  color?: ColorNames;
  font?: Fonts;
  fontWeight?: keyof typeof Theme['fontWeights'];
  theme: typeof Theme;
  truncate?: boolean;
};

const getTextColor = (props: TextProps): any => props.color || 'primaryText';

const InnerTextComponent = styled.span<TextProps>`
  ${props => font(props.font || propValueFromTextSize('font')(props))};
  font-weight: ${props =>
    (props.fontWeight && props.theme.fontWeights[props.fontWeight]) ||
    propValueFromTextSize('fontWeight', 0)};
  color: ${props => color(getTextColor(props))};
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-size: ${propValueFromTextSize('fontSize', 0)};
  line-height: ${propValueFromTextSize('lineHeight', 0)};
  letter-spacing: 0;
  vertical-align: middle;
  display: block;

  ${props =>
    props.truncate &&
    `
  text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `}

  ${media.large`
    font-size: ${propValueFromTextSize('fontSize', 1)};
    line-height: ${propValueFromTextSize('lineHeight', 1)};
  `}

  ${p => p.css /* Required to pass styled-component "css" prop */}
`;

const tagForSize = {
  h1: 'h1',
  h2: 'h1',
  h3: 'h1',
  h4: 'h2',
  h5: 'h2',
  body1: 'p',
  body2: 'p',
  caption: 'p'
} as { [key in TextSizeNames]: keyof JSX.IntrinsicElements };

export interface ITextProps {
  color?: ColorNames;
  size?: TextSizeNames;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  textAs?: keyof JSX.IntrinsicElements;
  style?: {};
  css?: CSSProp;
  font?: Fonts;
  fontWeight?: keyof typeof Theme['fontWeights'];
  'data-test-id'?: string;
  onClick?: (event: React.SyntheticEvent) => void;
  href?: string;
  target?: string;
  htmlParams?: Record<string, string | number | boolean | null>;
  truncate?: boolean;
}

const Text: React.FC<ITextProps> = props => (
  <InnerTextComponent
    {...props}
    as={
      props.as || props.textAs || (props.size && tagForSize[props.size]) || 'p'
    }
    {...(props.htmlParams || {})}
  />
);

Text.defaultProps = {
  size: 'body1',
  as: undefined,
  color: undefined
};

type InlineTextProps = {
  size?: TextSizeNames;
  color?: ColorNames;
  font?: Fonts;
  fontWeight?: keyof typeof Theme['fontWeights'];
  theme: typeof Theme;
  'data-test-id'?: string;
};

export default Text;
