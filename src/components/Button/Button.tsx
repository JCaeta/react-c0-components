import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = (props: any) => 
{
    var border = "solid " + props.borderWidth + "px " + props.borderColor;
    document.documentElement.style.setProperty('--hover-background-color', props.hoverBackgroundColor);
    document.documentElement.style.setProperty('--click-background-color', props.clickBackgroundColor);

    return (<>
        <button 
            className="c0-button"
            onClick={props.onClick}
            style={{
                border: border,
                background: props.backgroundColor,
                color: props.textColor,
                height: props.height + "px",
                borderRadius: props.radius + "px",
                fontSize: props.fontSize + 'px'}}>
            {props.text}
        </button>
    </>);
}

Button.defaultProps =
{
    text: "Click me",
    borderWidth: 1,
    borderColor: 'rgb(218, 220, 224)',
    hoverBackgroundColor: 'rgb(218, 220, 224)',
    clickBackgroundColor: 'rgb(100, 100, 100)',
    backgroundColor: 'white',
    textColor: 'black',
    height: 30,
    fontSize: 15
}

Button.propTypes = 
{
    text: PropTypes.string,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number,
    hoverBackgroundColor: PropTypes.string,
    clickBackgroundColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    height: PropTypes.number,
    fontSize: PropTypes.number
}
