import React from 'react';
import Flexbox from '../Flexbox';
import { faSquareExclamation } from '@fortawesome/pro-solid-svg-icons';
import { HelperText, ErrorText, ErrorIcon, Limit } from './style';

interface ErrorLimittProps {
  limit?: number;
  error?: string;
  valueLength?: number;
}

const ErrorLimit = (props: ErrorLimittProps) => {
  const { limit, error, valueLength } = props;
  if (limit || error) {
    return (
      <HelperText>
        {Boolean(error) && (
          <Flexbox alignItems="center" gap="4px">
            <ErrorIcon icon={faSquareExclamation} />
            <ErrorText>{error}</ErrorText>
          </Flexbox>
        )}
        {limit && (
          <Limit isLimitExceeded={valueLength > limit}>
            {valueLength} / {limit}
          </Limit>
        )}
      </HelperText>
    );
  }
  return null;
};

export default ErrorLimit;
