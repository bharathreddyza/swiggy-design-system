import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // primary: true,
  label1: 'Button',
  label2:"have an account?",
  type:'primary',
  size:"text-base"
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  // primary: true,
  label1: 'Button',
  label2:"have an account?",
  type:'primary-l',
  size:"text-base"
};

export const White = Template.bind({});
White.args = {
  label1: 'Login',
  label2:"have an account?",
  size:"text-base",
  type:"white"
};

export const Black = Template.bind({});
Black.args = {
  size: 'text-lg',
  label1: 'signup',
  label2:"have an account?",
  type:"black"
};

export const Green = Template.bind({});
Green.args = {
  size: 'text-lg',
  label1: 'signup',
  label2:"have an account?",
  type:"green"
};

export const GreenLight = Template.bind({});
GreenLight.args = {
  size: 'text-lg',
  label1: 'signup',
  label2:"have an account?",
  type:"green-l"
};


