import React from 'react';
import { BurgerButton } from '../../../index';
import "./BurgerButton.css";

export default
{
    title: 'Buttons/BurgerButton',
    component: BurgerButton,
}

const Template = (args: any) => {
    return(
        <div className="container_burguer-button_stories">
            <BurgerButton {...args} />
        </div>
    );
}
export const Primary = Template.bind({});
Primary.args = 
{
    backgroundColor: "rgb(49,49,49)",
    foregroundColor: "yellow"
}