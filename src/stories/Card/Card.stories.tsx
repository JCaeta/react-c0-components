import React from 'react';
import { Card } from '../../index';
const imageFile = require('../images/K1.jpg');

export default
{
    title: 'Card',
    component: Card,
}

const Template = (args: any) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = 
{
    title: "Title",
    description: "This is the card's description",
    buttonText: "Button text",
    imageSrc: imageFile
}