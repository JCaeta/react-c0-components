import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import './ButtonGoogleLogin.css'
import LogoGoogle from './LogoGoogle';

export const ButtonGoogleLogin = (props: any) => 
{
    var border = 'solid ' + props.borderWidth + 'px ' + props.borderColor
    document.documentElement.style.setProperty('--hover-background-color', props.hoverBackgroundColor);
    document.documentElement.style.setProperty('--hover-text-color', props.hoverTextColor);
    document.documentElement.style.setProperty('--click-text-color', props.clickTextColor);
    document.documentElement.style.setProperty('--click-background-color', props.clickBackgroundColor);

    const[clientId, setClientId] = useState("");

    useEffect(() => {
        setClientId(props.clientId)
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: 'email',
            });
        }
        gapi.load('client:auth2', start);
    }, []);

    const createButton = () => {
        if(props.clientId.length > 0){
            return createClientIdButton();
        } else {
            return createNonClientIdButton();
        }
    }

    const createNonClientIdButton = () =>{
        return(
            <button
                className='button-google-signup'
                style={{
                    background: props.backgroundColor,
                    color: props.textColor,
                    border: border,
                    fontSize: props.fontSize
                }}>
                <LogoGoogle/>
                {props.text}
            </button>
        )
    }

    const createClientIdButton = () => {
        return(<>
            <GoogleLogin
                clientId={props.clientId}
                onSuccess={props.onSuccess}
                onFailure={props.onFailure}
                render={renderProps => (
                    <button
                        className='button-google-signup'
                        onClick={renderProps.onClick}
                        style={{
                            background: props.backgroundColor,
                            color: props.textColor,
                            border: border,
                            fontSize: props.fontSize
                        }}>
                    <LogoGoogle/>
                    {props.text}
                    </button>
                )}
            />
        </>);
    }
    
    return (<>
        {createButton()}
    </>);
}

ButtonGoogleLogin.defaultProps =
{
    clientId: "",
    text: "Google",
    onSuccess: function(){},
    onFailure: function(){},
    backgroundColor: 'white',
    textColor: 'black',
    hoverTextColor: 'rgb(230, 230, 230)',
    borderColor: 'rgb(218, 220, 224)',
    hoverBackgroundColor: 'rgb(230, 230, 230)',
    borderWidth: 1,
    fontSize: 15,
}

ButtonGoogleLogin.propTypes = 
{
    clientId: PropTypes.string,
    text: PropTypes.string,
    onSuccess: PropTypes.func,
    onFailure: PropTypes.func,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
    clickBackgroundColor: PropTypes.string,
    hoverTextColor: PropTypes.string,
    clickTextColor: PropTypes.string,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number,
    fontSize: PropTypes.number,
}
