import React, {useState} from 'react';
import { Input0 } from '../../../index';
import './Input0.stories.css';

export default
{
    title: 'Inputs/Input0',
    component: Input0,
    argTypes: {
        size: {
            control: {
                'type': 'select',
                'options': ['small', 'medium', 'large']
            }
        },
        colorBorder: {control: {'type': 'color'}},
        colorText: {control: {'type': 'color'}},
        colorPlaceholder: {control: {'type': 'color'}},
        colorBackground: {control: {'type': 'color'}},
        colorUnderline: {control: {'type': 'color'}},
        opacityPlaceholder: {
            control: {
              type: 'number',
              min: 0,
              max: 1,
              step: 0.01,
            },
        },
    }
}

const Template = (args: any) => {

    function keyPressEvent (text_in: string) {
        setText(text_in);
    }
    const [text, setText] = useState('');

    return(<>
        <Input0 
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
    textPlaceholder: "Username",
    colorText: "black",
    colorBorder: "#6666",
    colorPlaceholder: "black",
    opacityPlaceholder: 0.4,
    colorBackground: "white",
    colorUnderline: "black"
}