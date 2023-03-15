import React from 'react';
import PropTypes from 'prop-types';
import './Button0.css';

export const Button0 = (props: any) => 
{
    var border = "solid " + props.borderWidth + "px " + props.borderColor;
    document.documentElement.style.setProperty('--hover-background-color_button0_rctc0comps', props.hoverBackgroundColor);
    document.documentElement.style.setProperty('--hover-text-color_button0_rctc0comps', props.hoverTextColor);
    document.documentElement.style.setProperty('--click-background-color_button0_rctc0comps', props.clickBackgroundColor);
    document.documentElement.style.setProperty('--click-text-color_button0_rctc0comps', props.clickTextColor);

    return (<>
        <button 
            className="c0-button0"
            onClick={props.onClick}
            style={{
                border: border,
                height: props.height + "px",
                borderRadius: props.borderRadius + "px",
                fontSize: props.fontSize + 'px'}}>
            {props.text}
        </button>
    </>);
}

Button0.defaultProps =
{
    text: "Click me",
    borderWidth: 1,
    borderColor: 'rgb(218, 220, 224)',
    borderRadius: 5,
    hoverBackgroundColor: 'rgb(218, 220, 224)',
    hoverTextColor: "grey",
    clickBackgroundColor: 'rgb(100, 100, 100)',
    clickTextColor: "black",
    backgroundColor: 'white',
    textColor: 'black',
    height: 30,
    fontSize: 15
}

Button0.propTypes = 
{
    text: PropTypes.string,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number,
    borderRadius: PropTypes.number,
    hoverBackgroundColor: PropTypes.string,
    hoverTextColor: PropTypes.string,
    clickBackgroundColor: PropTypes.string,
    clickTextColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    height: PropTypes.number,
    fontSize: PropTypes.number,
    onClick: PropTypes.func
}
