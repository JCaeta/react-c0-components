import React from 'react';
// import {LoginBasic} from '../../../dist/index.esm';
import {LoginBasic} from '../../components/LoginBasic/LoginBasic';

export default
{
    title: 'LoginBasic',
    component: LoginBasic,
    argTypes : {
        buttonOrientation: { control: { type: "select", options: ["center", "left", "right"] }},
        helpTextUsernameVisible: {control: 'boolean'},
        helpTextPasswordVisible: {control: 'boolean'},
        usernameType:  { control: { type: "select", options: ["username", "email"] }},
    }
}

const onSubmit = (d: any) => {
    console.log("Username: " + d.username);
    console.log("Password: " + d.password);
}

const Template = (args: any) => 
    <LoginBasic {...args} />

export const Primary = Template.bind({});
Primary.args = 
{
    inputBackgroundColor: 'white',
    inputTextColor: 'black',
    inputBorderColor: 'rgb(218, 220, 224)',
    inputBorderWidth: 1,
    usernameType: 'username',
    helpTextUsernameVisible: true,
    helpTextUsername: 'Enter your username here',
    helpTextUsernameColor: 'red',
    helpTextPasswordVisible: true,
    helpTextPassword: 'Enter your password here',
    helpTextPasswordColor: 'grey',
    textButton: 'Log in',
    placeholderUsername: 'Enter username',
    placeholderPassword: 'Enter password',
    placeholderFontSize: 15,
    placeholderColor: 'grey',
    labelTextColor: 'black',
    labelFontSize: 15,
    buttonBackgroundColor: 'white',
    buttonTextColor: 'black',
    buttonBorderColor: 'rgb(218, 220, 224)',
    buttonBorderWidth: 1,
    buttonOrientation: "center",
    buttonFontSize: 15,
    eyeIconColor: 'black',
    onSubmit: onSubmit
}

