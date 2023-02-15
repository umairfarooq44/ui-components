import React from 'react';
import styled from 'styled-components';

type FlexProperties = Pick<
  React.CSSProperties,
  | 'justifyContent'
  | 'alignContent'
  | 'alignItems'
  | 'flexFlow'
  | 'flexWrap'
  | 'flexDirection'
  | 'gap'
>;

// https://styled-components.com/docs/advanced#style-objects
const Flexbox = styled.div<FlexProperties>(
  ({
    justifyContent,
    alignContent,
    alignItems,
    flexFlow,
    flexWrap,
    flexDirection,
    gap
  }) => ({
    display: 'flex',
    justifyContent,
    alignContent,
    alignItems,
    flexFlow,
    flexWrap,
    flexDirection,
    gap
  })
);

export default Flexbox;
