import React, {
  ReactElement,
  useState,
  useEffect,
  ChangeEvent,
  forwardRef,
  ForwardedRef,
  ComponentPropsWithoutRef
} from 'react';
import { typedBoolean } from '../../utils/utils';
import ErrorLimit from '../ErrorLimit';
import { StyledInput, Container, IconContainer } from './style';

type InputValue = string | number | undefined;

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  startIcon?: ReactElement | null;
  endIcon?: ReactElement | null;
  value?: InputValue;
  limit?: number;
  error?: string;
}

const Input = (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const [internalValue, setInternalValue] = useState<string | number>('');
  const {
    limit,
    error,
    startIcon,
    endIcon,
    value,
    onChange,
    className,
    disabled,
    ...rest
  } = props;

  useEffect(() => {
    if (value !== undefined && value !== internalValue) {
      setInternalValue(value);
    }
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
    setInternalValue(e.target.value);
  };

  const valueLength = (internalValue ?? '').toString().length;

  return (
    <>
      <Container
        hasError={typedBoolean(error)}
        className={className}
        disabled={disabled}
      >
        {startIcon && (
          <IconContainer position="start">{startIcon}</IconContainer>
        )}
        <StyledInput
          ref={ref}
          value={internalValue}
          onChange={handleChange}
          disabled={disabled}
          {...rest}
        />
        {endIcon && <IconContainer position="end">{endIcon}</IconContainer>}
      </Container>
      <ErrorLimit limit={limit} error={error} valueLength={valueLength} />
    </>
  );
};

export default forwardRef(Input);
