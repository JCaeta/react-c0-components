import React from 'react';
import { Button1 } from '../../../index';
import { SuperuserLogo } from '../../../index';

export default
{
    title: 'Buttons/Button1',
    component: Button1,
}

const Template = (args: any) => <Button1 {...args} />;

export const Primary = Template.bind({});
Primary.args = 
{
    text: "Click me",
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    hoverBackgroundColor: 'rgb(242, 246, 255)',
    colorTextHover: 'rgb(85, 141, 254)',
    colorBackgroundClick: 'white',
    colorTextClick: "black",
    colorBackground: 'white',
    colorText: 'rgb(82, 89, 95)',
    height: 60,
    fontSize: 30,
    icon: <SuperuserLogo color='rgb(82, 89, 95)' colorHover={'rgb(85, 141, 254)'}/>
}