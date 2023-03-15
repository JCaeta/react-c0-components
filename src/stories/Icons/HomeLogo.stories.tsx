import React from 'react';
import { HomeLogo } from '../../index';

export default
{
    title: 'Icons/HomeLogo',
    HomeLogo: HomeLogo,
    argTypes: {
        color: {control: {type: 'color'}},
        colorFocused: {control: {type: 'color'}}
    }
}

const Template = (args: any) => <HomeLogo {...args} />;

export const Primary = Template.bind({});
Primary.args = 
{
    color: "black",
    colorFocused: "grey"
}


