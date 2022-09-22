import React from 'react';
import { Component } from '../../index';

export default
{
    title: 'Component',
    component: Component,
}

const Template = (args: any) => <Component {...args} />;

export const Primary = Template.bind({});
Primary.args = 
{
    arg1: 'this is a string',
    arg2: 123
}