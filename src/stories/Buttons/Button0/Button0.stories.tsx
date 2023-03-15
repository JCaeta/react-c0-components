import React from 'react';
import {Button0} from '../../../index';

export default
{
    title: 'Buttons/Button0',
    component: Button0,
}

const Template = (args: any) => {

    return(<>
        <Button0 {...args} />
    </>);
};


function onClick(){
    console.log("onClick()");
}

export const Primary = Template.bind({});
Primary.args = 
{
    text: "Click me",
    borderWidth: 1,
    borderColor: 'rgb(218, 220, 224)',
    borderRadius: 5,
    hoverBackgroundColor: 'rgb(218, 220, 224)',
    hoverTextColor: "grey",
    clickBackgroundColor: 'rgb(100, 100, 100)',
    clickTextColor: "black",
    backgroundColor: 'white',
    textColor: 'black',
    height: 30,
    fontSize: 15,
    onClick: onClick
}