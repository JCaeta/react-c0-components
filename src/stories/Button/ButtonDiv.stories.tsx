import React from 'react';
import { Button } from '../../components/Button/Button';
import './ButtonDiv.css'

export default
{
    title: 'ButtonDiv',
    component: Button,
}

const Template = (args: any) => {
    return(<>
        <div className="div-container">
            <div className="div-button">
                <Button {...args} />
            </div>
        </div>
    </>)

} 

export const Primary = Template.bind({});
Primary.args = 
{

}