import React from 'react';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export default
{
    title: 'Sidebar',
    component: Sidebar,
}

//@ts-ignore
export const Template = args => <Sidebar {...args}/>
Template.args = 
{
    buttonList:[
        {text: "Button 1", func: ()=>{console.log("Button 1 clicked")}},
        {text: "Button 2", func: ()=>{console.log("Button 2 clicked")}},
        {text: "Button 3", func: ()=>{console.log("Button 3 clicked")}},
    ]
}
