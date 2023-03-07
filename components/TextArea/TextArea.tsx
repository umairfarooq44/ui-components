import React, {
  useState,
  useEffect,
  ChangeEvent,
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardedRef
} from 'react';
import { typedBoolean } from '../../utils/utils';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ErrorLimit from '../ErrorLimit';
import { color, fontSize } from '../../styles/Utils';

const StyledTextArea = styled.textarea<{ hasError: boolean }>`
  border: 1px solid ${({ hasError }) =>
    hasError ? color('danger') : color('primaryTextLight')};
  border-radius: 4px;
  padding: 8px;
  padding-bottom: 1.5rem;
  width: 100%;
  &:hover, &:focus-within {
    border 1px solid ${({ hasError }) =>
      hasError ? color('danger') : color('primaryText')};
  }
  ${fontSize('body1')}
  color: var(--color-mono-0);
  &::placeholder {
    color: var(--color-mono-60);
  }
`;

export const ErrorIcon = styled(FontAwesomeIcon)`
  ${fontSize('body1')}
  font-weight: bold;
  margin-right: 4px;
  color: ${color('danger')};
`;
interface TextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
  value?: string;
  limit?: number;
  error?: string;
}

const TextArea = (
  props: TextAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) => {
  const [internalValue, setInternalValue] = useState<string | number>('');
  // Set default limit
  const { limit = 100, error, value, onChange, ...rest } = props;

  useEffect(() => {
    if (value !== undefined && value !== internalValue) {
      setInternalValue(value);
    }
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e);
    }
    setInternalValue(e.target.value);
  };

  const valueLength = (internalValue ?? '').toString().length;

  return (
    <>
      <StyledTextArea
        hasError={typedBoolean(error)}
        value={internalValue}
        onChange={handleChange}
        ref={ref}
        {...rest}
      />
      <ErrorLimit limit={limit} error={error} valueLength={valueLength} />
    </>
  );
};

export default forwardRef(TextArea);
