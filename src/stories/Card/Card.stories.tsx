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
    titleColor: "black",
    description: "This is the card's description",
    descriptionColor: "#6a6a6a",
    buttonText: "Button text",
    buttonForeColor: "#2fb4cc",
    buttonBackgroundColor: "#fff",
    backgroundColor: "#fff",
    shadowColorNoFocus: "rgba(0,0,0, 0.2)",
    shadowColorFocus: "rgba(0,0,0, 0.4)",
    link: "https://www.google.com",
    imageSrc: imageFile
}