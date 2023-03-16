import React from 'react';
import {Login} from '../../components/Login/Login';
import {customViewports} from '../storiesVariables';
import { useState} from 'react';
import '../StoryStyles.css';

export default
{
    title: 'Login',
    component: Login,
    argTypes : {
        colorButtonBackgroundHover: {control: {'type': 'color'}},
        colorButtonTextHover: {control: {'type': 'color'}},
        sideButtonLogin: {
            control: {
                'type': 'select',
                options : ["center", "left", "right"]
            }
        }
        // buttonOrientation: { options: ["center", "left", "right"] },
        // helpTextUsernameVisible: {control: 'boolean'},
        // helpTextPasswordVisible: {control: 'boolean'},
        // usernameType: {options: ["username", "email"] },
        // placeholderPasswordVisible: {control: 'boolean'},
        // placeholderUsernameVisible: {control: 'boolean'},
    },
    parameters: {
        viewport: {viewports: customViewports},
        previewTabs: {
            'storybook/docs/panel': { hidden: true }
        },
    }
}

const Template = (args: any) => {
    const [usernameText, setUsernameText] = useState("");
    const [passwordText, setPasswordText] = useState("");
  
    function onSubmit(data: any) {
        setUsernameText(data.username);
        setPasswordText(data.password);
    }

    return(<>
        <h1 className="h1_stories_rctc0comps"
            style={{
                fontSize: "60px"
            }}>
            Login
        </h1>
        <Login {...args} onSubmit={onSubmit} />
        <h2>onSubmit(data)</h2>
        <p>{"data: {username: '" + usernameText + "', password: '" + passwordText +"'}"}</p>

        <h2>onSuccessGoogle(data)</h2>
        <p>You can see the data on the console log</p>

        <h2>onFailureGoogle(data)</h2>
        <p>You can see the data on the console log</p>
    </>);
}

export const Primary = Template.bind({});
Primary.args = 
{
    colorButtonBackgroundHover: 'rgb(217,217,217)',
    colorButtonTextHover: 'rgb(130,142,142)',
    sideButtonLogin: "right",
    googleClientId: ""
    // onSubmit: onSubmit

    // inputBackgroundColor: 'white',
    // inputTextColor: 'black',
    // inputBorderColor: 'rgb(218, 220, 224)',
    // inputBorderWidth: 1,
    // usernameType: 'username',
    // helpTextUsernameVisible: true,
    // helpTextUsername: 'Enter your username here',
    // helpTextUsernameColor: 'grey',
    // helpTextPasswordVisible: true,
    // helpTextPassword: 'Enter your password here',
    // helpTextPasswordColor: 'grey',
    // textButton: 'Log in',
    // placeholderUsername: 'Enter username',
    // placeholderUsernameVisible: true,
    // placeholderPassword: 'Enter password',
    // placeholderPasswordVisible: true,
    // placeholderFontSize: 15,
    // placeholderPasswordColor: 'grey',
    // placeholderUsernameColor: 'grey',
    // labelTextColor: 'black',
    // labelFontSize: 15,
    // buttonBackgroundColor: 'white',
    // buttonTextColor: 'black',
    // buttonBorderColor: 'rgb(218, 220, 224)',
    // buttonBorderWidth: 1,
    // buttonOrientation: "center",
    // buttonFontSize: 15,
    // eyeIconColor: 'black',
    // buttonHoverBackgroundColor: 'rgb(230, 230, 230)',
    // buttonClickBackgroundColor: 'rgb(100, 100, 100)',

}
