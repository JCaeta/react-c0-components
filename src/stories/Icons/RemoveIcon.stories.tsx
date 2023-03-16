import React from 'react';
import { RemoveIcon } from '../../index';

export default
{
    title: 'Icons/RemoveIcon',
    component: RemoveIcon,
    argTypes: {
        color: {control: {'type': 'color'}},
        colorHover: {control: {'type': 'color'}},
        colorClick: {control: {'type': 'color'}},
    }
}

const Template = (args: any) => <RemoveIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = 
{
    color: "rgb(124,152,182)",
    colorHover: "rgb(84,114,142)",
    colorClick: "rgb(30,30,30)",
}