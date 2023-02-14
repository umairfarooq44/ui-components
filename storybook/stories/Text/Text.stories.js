import React from 'react';
import { Text } from '../../../components';

export default {
  title: 'Typography/Text',
  component: Text
};

const Template = args => <Text {...args} />;

export const Heading = Template.bind({});

const commonProps = {
  size: 'h2',
  children: 'Text'
};

Heading.args = commonProps;
