import React from 'react';
import { Text } from '../../../components';

export default {
  title: 'Typography/Text',
  component: Text
};

const Template = ({ children, ...args }) => {
  console.log(args);
  return <Text {...args}>{children}</Text>;
};

export const Heading = Template.bind({});

const commonProps = {
  size: 'h2',
  children: 'Text'
};

Heading.args = commonProps;

export const Body = Template.bind({});

Body.args = {
  ...commonProps,
  size: 'body1',
  children: 'body Text'
};
