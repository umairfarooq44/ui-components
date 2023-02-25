import React from 'react';
import { FaTimes, FaDollarSign } from 'react-icons/fa';
import { Input } from '../../../components';

export default {
  title: 'Form/Input',
  component: Input
};

const Template = args => <Input {...args} />;

export const SimpleInput = Template.bind({});

const commonProps = {
  value: 'Text',
  placeholder: 'Enter text'
};

SimpleInput.args = commonProps;

export const InputWithStartIcon = Template.bind({});

InputWithStartIcon.args = {
  ...commonProps,
  startIcon: <FaDollarSign />,
  placeholder: 'Enter amount',
  value: ''
};

export const InputWithEndIcon = Template.bind({});

InputWithEndIcon.args = { ...commonProps, endIcon: <FaTimes /> };

export const InputWithError = Template.bind({});

InputWithError.args = { ...commonProps, error: 'Email is invalid' };

export const InputWithLimit = Template.bind({});

InputWithLimit.args = {
  ...commonProps,
  limit: 15,
  value: 'Long text whose length is greater than 15'
};
