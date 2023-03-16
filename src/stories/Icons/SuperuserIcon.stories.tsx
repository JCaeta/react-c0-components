import React from 'react';
import { SuperuserIcon } from '../../index';

export default
{
    title: 'Icons/SuperuserIcon',
    component: SuperuserIcon,
}

const Template = (args: any) => <SuperuserIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = 
{
    arg1: 'this is a string',
    arg2: 123
}