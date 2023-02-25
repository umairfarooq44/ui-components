import styled from 'styled-components';
import { FaRegTimesCircle } from 'react-icons/fa';
import { color, fontSize } from '../../styles/Utils';

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectButton = styled.button<{
  hasValue: boolean;
  hasError: boolean;
}>`
display: flex;
justify-content: space-between;
align-items: center;

${fontSize('body1')}

border: 1px solid ${({ hasError }) =>
  hasError ? color('danger') : color('primaryTextLight')};
padding: 8px;
width: 100%;
background-color: ${color('white')};
border-radius: 4px;
color: ${({ hasValue }) =>
  hasValue ? color('primaryText') : color('primaryTextLight')};
&:hover, &:focus-within {
  border 1px solid ${({ hasError }) =>
    hasError ? color('danger') : color('primaryText')};
  svg {
    color: ${color('primaryText')};
  }
}
svg {
  color: ${color('primaryTextLight')};
  margin-left: auto;
}
`;

export const List = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  z-index: 2000;
  width: 100%;

  overflow-y: scroll;
  background-color: ${color('white')};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  max-height: 220px;
  padding: 8px 0px;
  transition: display ease-in-out 0.3s;
  > li:not(:last-child) {
    border-bottom: 1px solid ${color('primaryBorder')};
  }
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  &:focus {
    border: 1px solid red;
  }
`;

export const ListItem = styled.li`
  padding: 0.5rem 1rem;
  ${fontSize('body1')}
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${color('primaryBorderLight')};
  }
  &:focus {
    outline: var(--focus-style);
    outline-offset: 2px;
  }
`;

export const ClearIcon = styled(FaRegTimesCircle)`
  font-size: 1rem;
`;
