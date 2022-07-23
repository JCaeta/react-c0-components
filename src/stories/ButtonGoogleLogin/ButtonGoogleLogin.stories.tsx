import React from 'react';
import { ButtonGoogleLogin } from '../../index';

export default
{
    title: 'ButtonGoogleLogin',
    component: ButtonGoogleLogin,
}

const onSuccess = (response: any) => {
    console.log('onSuccess');
    console.log(response);
}

const onFailure = (response: any) => {
    console.log('onFailure');
    console.log(response);
}

const TemplateButtonGoogleLogin = (args: any) => <ButtonGoogleLogin {...args} />;

export const Primary = TemplateButtonGoogleLogin.bind({});
Primary.args = 
{
    clientId: "",
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
