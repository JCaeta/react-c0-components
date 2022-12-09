import React from 'react';
import {Button} from '../../index'

export default
{
    title: 'Button',
    component: Button,
}

const Template = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = 
{
    text: "Click me",
    borderWidth: 1,
    borderColor: 'rgb(218, 220, 224)',
    hoverBackgroundColor: 'rgb(218, 220, 224)',
    hoverTextColor: "grey",
    clickBackgroundColor: 'rgb(100, 100, 100)',
    clickTextColor: "black",
    backgroundColor: 'white',
    textColor: 'black',
    height: 30,
    fontSize: 15
}