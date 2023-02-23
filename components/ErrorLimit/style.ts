import styled from 'styled-components';
import Text from '../Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { color, fontSize } from '../../styles/Utils';

export const HelperText = styled.div`
  margin-top: 8px;
  display: flex;
`;

export const Limit = styled.span<{ isLimitExceeded: boolean }>`
  ${fontSize('body1')}
  color: ${({ isLimitExceeded }) =>
    isLimitExceeded ? color('danger') : color('primaryTextLight')};
  margin-left: auto;
`;

export const ErrorText = styled(Text).attrs({
  size: 'body1',
  textAs: 'span'
})`
  display: inline;
  color: ${color('danger')};
`;

export const ErrorIcon = styled(FontAwesomeIcon)`
  font-size: var(--fontSizes-normal);
  color: ${color('danger')};
`;
