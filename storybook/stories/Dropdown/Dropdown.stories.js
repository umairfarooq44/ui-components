import React from 'react';
import { Dropdown } from '../../../components';

const options = [
  { value: '1', label: 'Pakistan' },
  { value: '2', label: 'Afghanistan' },
  { value: '3', label: 'India' },
  { value: '4', label: 'Germany' },
  { value: '5', label: 'Argentina' },
  { value: '6', label: 'Albania' },
  { value: '7', label: 'Australia' },
  { value: '8', label: 'Austria' },
  { value: '9', label: 'Azerbaijan' },
  { value: '10', label: 'Bahamas' },
  { value: '11', label: 'Bangladesh' },
  { value: '12', label: 'Botswana' },
  { value: '13', label: 'Burkina Faso' },
  { value: '14', label: 'Cambodia' },
  { value: '15', label: 'Central African Republic' }
];

export default {
  title: 'Form/Dropdown',
  component: Dropdown
};

const Template = ({ defaultValue, ...args }) => {
  const [dropdownValue, setDropdownValue] = React.useState(defaultValue);
  const onChange = value => {
    setDropdownValue(value);
  };
  return <Dropdown {...args} onChange={onChange} value={dropdownValue} />;
};

export const SimpleDropdown = Template.bind({});

const commonProps = {
  placeholder: 'Select Country',
  options
};

SimpleDropdown.args = commonProps;

export const SimpleDropdownWithDefaultValue = Template.bind({});

SimpleDropdownWithDefaultValue.args = { ...commonProps, defaultValue: '1' };

export const SimpleDropdownWithError = Template.bind({});

SimpleDropdownWithError.args = {
  ...commonProps,
  error: 'Please select country'
};

export const SearchableDropdown = Template.bind({});

SearchableDropdown.args = {
  ...commonProps,
  isSearchable: true,
  placeholder: 'Search Country'
};
export const SearchableDropdownWithDefaultValue = Template.bind({});

SearchableDropdownWithDefaultValue.args = {
  ...commonProps,
  isSearchable: true,
  placeholder: 'Search Country',
  defaultValue: '1'
};
export const SearchableDropdownWithError = Template.bind({});

SearchableDropdownWithError.args = {
  ...commonProps,
  isSearchable: true,
  placeholder: 'Search Country',
  error: 'Please select country'
};
