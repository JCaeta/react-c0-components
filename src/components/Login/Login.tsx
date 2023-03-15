import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import { Input0 } from '../Inputs/Input0/Input0';
import { Input1 } from '../Inputs/Input1/Input1';
import { ButtonGoogleLogin } from '../Buttons/ButtonGoogleLogin/ButtonGoogleLogin';
import { Button0 } from '../Buttons/Button0/Button0';

export const Login = (props: any) => {
    const setSideButtonLogin = (side: string) => {
        if(side === "left"){
            document.documentElement.style.setProperty('--margin-left_button_login_rctc0comps', '0%');
            document.documentElement.style.setProperty('--margin-right_button_login_rctc0comps', 'auto');
            
        } else if (side === "center"){
            document.documentElement.style.setProperty('--margin-left_button_login_rctc0comps', 'auto');
            document.documentElement.style.setProperty('--margin-right_button_login_rctc0comps', 'auto');

        } else if (side === "right") {
            document.documentElement.style.setProperty('--margin-left_button_login_rctc0comps', 'auto');
            document.documentElement.style.setProperty('--margin-right_button_login_rctc0comps', '0%');
        }
    }
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function onSubmit(event: any) {
        event.preventDefault();
        props.onSubmit({username: username, password: password});
    };

    function onSuccessGoogle(token: any){
        console.log(token);
    }

    function onFailureGoogle(token: any){
        console.log(token);
    }

    function setUsernameText(text: string){
        setUsername(text);
    }

    function setPasswordText(text: string){
        setPassword(text);
    }

    setSideButtonLogin(props.sideButtonLogin)

    return (<>
        <div id="container_login_rctc0comps">
            <form id="form_login_rctc0comps">
                <h1>Login</h1>
                <div className="input_login_rctc0comps" id="input-username_login_rctc0comps">
                    <Input0 
                        textPlaceholder={"Username"} 
                        size="small"
                        keyPressEvent={setUsernameText}/>
                </div>
                
                <div className="input_login_rctc0comps" id="input-password_login_rctc0comps">
                    <Input1 
                    textPlaceholder={"Password"} 
                    size="small"
                    keyPressEvent={setPasswordText}/>
                </div>

                <div id="button_login_rctc0comps">
                    <Button0 
                        text={"Login"} 
                        hoverBackgroundColor={props.colorButtonBackgroundHover}
                        hoverTextColor={props.colorButtonTextHover}
                        onClick={onSubmit}/>
                </div>

                <div id="button-google_login_rctc0comps">
                    <ButtonGoogleLogin 
                        text={"Login with Google"}
                        hoverBackgroundColor={props.colorButtonBackgroundHover}
                        hoverTextColor={props.colorButtonTextHover}
                        clientId={props.googleClientId}
                        onSuccess={onSuccessGoogle}
                        onFailure={onFailureGoogle}/>
                </div>
            </form>
        </div>

    </>);
}

Login.defaultProps =
{
    colorButtonBackgroundHover: 'rgb(217,217,217)',
    colorButtonTextHover: 'rgb(130,142,142)',
    sideButtonLogin: "right",
    googleClientId: "",
    onSubmit: function () {},
    // labelUsername: 'Username',
    // helpTextUsernameVisible: true,
    // helpTextUsername: 'Enter your username here.',
    // helpTextUsernameColor: 'grey',
    // placeholderUsername: 'Enter username',
    // placeholderUsernameColor: 'grey',
    // placeholderFontSize: 15,
    // labelPassword: 'Password',
    // helpTextPasswordVisible: true,
    // helpTextPassword: 'Enter your password here.',
    // helpTextPasswordColor: 'grey',
    // placeholderPasswordVisible: true,
    // placeholderPasswordColor: 'grey',
    // textButton: 'Log in',
    // buttonOrientation: "center",
    // inputBackgroundColor: 'white',
    // inputTextColor: 'black',
    // labelTextColor: 'black',
    // buttonTextColor: 'black',
    // buttonBackgroundColor: 'white',
    // inputBorderColor: 'rgb(218, 220, 224)',
    // inputBorderWidth: 1,
    // buttonBorderColor: 'rgb(218, 220, 224)',
    // buttonFontSize: 15,
    // usernameType: 'username',

    // buttonClickBackgroundColor: 'rgb(100, 100, 100)',

}

Login.propTypes = 
{
    colorButtonBackgroundHover: PropTypes.string,
    colorButtonTextHover: PropTypes.string,
    sideButtonLogin: PropTypes.oneOf(["left", "center", "right"]),
    onSubmit: PropTypes.func,
    googleClientId: PropTypes.string
    // labelUsername: PropTypes.string,
    // helpTextUsername: PropTypes.string,
    // helpTextUsernameVisible: PropTypes.bool,
    // helpTextUsernameColor: PropTypes.string,
    // usernameType: PropTypes.oneOf(['email', 'username']),
    // placeholderUsername: PropTypes.string,
    // placeholderUsernameVisible: PropTypes.bool,
    // placeholderUsernameColor: PropTypes.string,
    // labelPassword: PropTypes.string,
    // helpTextPassword: PropTypes.string,
    // helpTextPasswordVisible: PropTypes.bool,
    // helpTextPasswordColor: PropTypes.string,
    // placeholderPassword: PropTypes.string,
    // placeholderPasswordVisible: PropTypes.bool,
    // placeholderFontSize: PropTypes.number,
    // placeholderPasswordColor: PropTypes.string,
    // textButton: PropTypes.string,

    // buttonOrientation: PropTypes.oneOf(["center", "left", "right"]),
    // inputBackgroundColor: PropTypes.string,
    // inputTextColor: PropTypes.string,
    // labelTextColor: PropTypes.string,
    // labelFontSize: PropTypes.number,
    // buttonTextColor: PropTypes.string,
    // buttonBackgroundColor: PropTypes.string,
    // inputBorderColor: PropTypes.string,
    // inputBorderWidth: PropTypes.number,
    // buttonBorderColor: PropTypes.string,
    // buttonBorderWidth: PropTypes.number,
    // buttonFontSize: PropTypes.number,
    // eyeIconColor: PropTypes.string,
    // colorButtonBackgroundHover: PropTypes.string,
    // buttonClickBackgroundColor: PropTypes.string
}
