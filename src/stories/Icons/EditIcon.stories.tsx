import React from 'react';
import { EditIcon } from '../../index';

export default
{
    title: 'Icons/EditIcon',
    component: EditIcon,
    argTypes: {
        color: {control: {'type': 'color'}},
        colorHover: {control: {'type': 'color'}},
        colorClick: {control: {'type': 'color'}},
        colorBorder: {control: {'type': 'color'}},
        colorBorderHover: {control: {'type': 'color'}},
        colorBorderClick: {control: {'type': 'color'}},
    }
}

const Template = (args: any) => <EditIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = 
{
    color: "rgb(200,224,242)",
    colorHover: "rgb(124,152,182)",
    colorClick: "yellow",
    colorBorder: "rgb(80,119,153)",
    colorBorderHover: "rgb(45,62,80)",
    colorBorderClick: "black"
}