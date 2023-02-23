import styled, { css } from 'styled-components';
import { color, fontSize } from '../../styles/Utils';

export const StyledInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
  ${fontSize('body1')}
  width: 100%;
  &::placeholder,
  &:disabled {
    color: ${color('primaryTextLight')};
  }
  &:focus {
    outline: none;
  }
`;

export const Container = styled.div<{ hasError: boolean; disabled?: boolean }>`
  display:flex;
  align-items: center;
  border: 1px solid ${({ hasError }) =>
    hasError ? color('danger') : color('primaryTextLight')};
  border-radius: 4px;
  width: 100%;
  svg {
    color: ${color('primaryTextLight')};
  }
  &:hover, &:focus-within {
    border 1px solid ${({ hasError }) =>
      hasError ? color('danger') : color('primaryText')};
    svg {
      color: ${color('primaryText')};
    }
  }
  &:focus-within{
    outline: var(--focus-style);
    outline-offset: 2px;
  }
  background-color: ${color('white')};
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${color('primaryBorder')};
      border: 1px solid ${color('primaryTextLight')};
    `}
`;

export const IconContainer = styled.span<{ position: 'start' | 'end' }>`
  padding: 8px;
  ${({ position }) =>
    position === 'start' &&
    css`
      padding-right: 0;
    `}
  ${({ position }) =>
    position === 'end' &&
    css`
      padding-left: 0;
    `}
`;
