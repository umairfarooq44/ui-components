import React from 'react';
import { FaTimes, FaDollarSign } from 'react-icons/fa';
import { TextArea } from '../../../components';

export default {
  title: 'Form/TextArea',
  component: TextArea
};

const Template = args => <TextArea {...args} />;

export const SimpleTextArea = Template.bind({});

const commonProps = {
  value: 'Text',
  placeholder: 'Enter text'
};

SimpleTextArea.args = commonProps;

export const TextAreaWithError = Template.bind({});

TextAreaWithError.args = { ...commonProps, error: 'Text is required' };

export const TextAreaWithLimit = Template.bind({});

TextAreaWithLimit.args = {
  ...commonProps,
  limit: 15,
  value: 'Long text whose length is greater than 15'
};
