import React from 'react';
import { UsersIcon } from '../../index';

export default
{
    title: 'Icons/UsersIcon',
    component: UsersIcon,
}

const Template = (args: any) => <UsersIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = 
{
    color: "black",
    colorHover: "grey",
    colorClick: "green"
}