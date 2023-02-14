import styled from 'styled-components';
import { BreakpointNames, Theme } from '../styles';

export const MediaLargerEqual = styled.div<{ breakpoint: BreakpointNames }>`
  display: none;

  @media (min-width: ${p => Theme.breakpoints[p.breakpoint]}px) {
    display: block;
  }
`;

export const MediaMedium = styled.div<{
  startBreakpoint: BreakpointNames;
  endBreakpoint: BreakpointNames;
}>`
  display: none;

  @media (min-width: ${p =>
      Theme.breakpoints[p.startBreakpoint]}px) and (max-width: ${p =>
      Theme.breakpoints[p.endBreakpoint] - 1}px) {
    display: block;
  }
`;

export const MediaSmaller = styled.div<{ breakpoint: BreakpointNames }>`
  display: none;

  @media (max-width: ${p => Theme.breakpoints[p.breakpoint] - 1}px) {
    display: block;
  }
`;
