import React from 'react';
import { Input1 } from '../../../index';
import { useState } from 'react';

export default
{
    title: 'Inputs/Input1',
    component: Input1,
    argTypes: {
        size: {
            control: {
                'type': 'select',
                'options': ['small', 'medium', 'large']
            }
        },
        colorEyeIcon: {control: {'type': 'color'}},
        colorText: {control: {'type': 'color'}},
        colorBorder: {control: {'type': 'color'}},
        colorPlaceholder: {control: {'type': 'color'}},
        colorBackground: {control: {'type': 'color'}},
        colorUnderline: {control: {'type': 'color'}}
    }
}

const Template = (args: any) => {

    const [text, setText] = useState('');

    function keyPressEvent(text_in: string){
        setText(text_in);
    }

    return(<>
        <Input1 
            {...args} 
            keyPressEvent={keyPressEvent}/>
        
        <span id="span-input-story">
            {text}
        </span>
    </>);
}

export const Primary = Template.bind({});
Primary.args = 
{
    size: "small",
    textPlaceholder: "Password",
    colorEyeIcon: "#5f5f5f",
    colorText: "black",
    colorBorder: "#6666",
    colorPlaceholder: "black",
    opacityPlaceholder: 0.4,
    colorBackground: "white",
    colorUnderline: "black"
}