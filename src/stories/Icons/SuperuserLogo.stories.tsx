import React from 'react';
import { SuperuserLogo } from '../../index';

export default
{
    title: 'Icons/SuperuserLogo',
    component: SuperuserLogo,
}

const Template = (args: any) => <SuperuserLogo {...args} />;

export const Primary = Template.bind({});
Primary.args = 
{
    arg1: 'this is a string',
    arg2: 123
}