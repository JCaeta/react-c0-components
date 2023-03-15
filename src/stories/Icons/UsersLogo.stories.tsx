import React from 'react';
import { UsersLogo } from '../../index';

export default
{
    title: 'Icons/UsersLogo',
    component: UsersLogo,
}

const Template = (args: any) => <UsersLogo {...args} />;

export const Primary = Template.bind({});
Primary.args = 
{
    color: "black",
    colorHover: "grey",
    colorClick: "green"
}