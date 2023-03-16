import React from 'react';
import { HomeIcon } from '../../index';

export default
{
    title: 'Icons/HomeIcon',
    HomeIcon: HomeIcon,
    argTypes: {
        color: {control: {type: 'color'}},
        colorFocused: {control: {type: 'color'}}
    }
}

const Template = (args: any) => <HomeIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = 
{
    color: "black",
    colorFocused: "grey"
}


