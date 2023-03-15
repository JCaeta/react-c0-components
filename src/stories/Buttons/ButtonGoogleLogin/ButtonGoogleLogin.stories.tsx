import React from 'react';
import { ButtonGoogleLogin } from '../../../index';

export default
{
    title: 'Buttons/ButtonGoogleLogin',
    component: ButtonGoogleLogin,
    parameters: {
        previewTabs: {
            'storybook/docs/panel': { hidden: true }
        },
    }
}

const onSuccess = (response: any) => {
    console.log('onSuccess');
    console.log(response);
}

const onFailure = (response: any) => {
    console.log('onFailure');
    console.log(response);
}

const TemplateButtonGoogleLogin = (args: any) =>{
    return(<>
        <h1>ButtonGoogleLogin</h1>
        <p>To use this component you need to allow all cookies in your browser and provide a google client id</p>
        <ButtonGoogleLogin {...args} />

        <p>You can see the output in the console log</p>

    </>)
}

export const Primary = TemplateButtonGoogleLogin.bind({});
Primary.args = 
{
    clientId: '',
    text: 'Sign up with Google',
    backgroundColor: 'white',
    textColor: 'black',
    hoverBackgroundColor: 'rgb(230, 230, 230)',
    borderColor: 'rgb(218, 220, 224)',
    borderWidth: 1,
    hoverTextColor: 'rgb(230, 230, 230)',
    clickTextColor: 'rgb(230, 230, 230)',
    clickBackgroundColor: 'rgb(200, 200, 200)',
    fontSize: 15,
    onSuccess: onSuccess,
    onFailure: onFailure
}
