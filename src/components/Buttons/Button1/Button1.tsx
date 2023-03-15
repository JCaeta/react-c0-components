import React from 'react';
import PropTypes from 'prop-types';
import './Button1.css';

export const Button1 = (props: any) => 
{
    var border = "solid " + props.borderWidth + "px " + props.borderColor;
    document.documentElement.style.setProperty('--hover-background-color_button1_rctc0comps', props.hoverBackgroundColor);
    document.documentElement.style.setProperty('--hover-text-color_button1_rctc0comps', props.colorTextHover);
    document.documentElement.style.setProperty('--click-background-color_button1_rctc0comps', props.colorBackgroundClick);
    document.documentElement.style.setProperty('--click-text-color_button1_rctc0comps', props.colorTextClick);
    document.documentElement.style.setProperty('--color-background_button1_rctc0comps', props.colorBackground);
    document.documentElement.style.setProperty('--color-text_button1_rctc0comps', props.colorText);

    return (<>
        <button 
            className="c0-button1_rctc0comps"
            onClick={props.onClick}
            style={{
                border: border,
                height: props.height + "px",
                borderRadius: props.borderRadius + "px",
                fontSize: props.fontSize + 'px'}}>
            <i id="button-icon">
                {props.icon}
            </i> 
            <span id="button-text">{props.text}</span>
        </button>
    </>);
}

Button1.defaultProps =
{
    text: "Click me",
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    hoverBackgroundColor: 'rgb(242, 246, 255)',
    colorTextHover: 'rgb(85, 141, 254)',
    colorBackgroundClick: 'white',
    colorTextClick: "black",
    colorBackground: 'white',
    colorText: 'black',
    height: 60,
    fontSize: 30
}

Button1.propTypes = 
{
    text: PropTypes.string,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number,
    borderRadius: PropTypes.number,
    hoverBackgroundColor: PropTypes.string,
    colorTextHover: PropTypes.string,
    colorBackgroundClick: PropTypes.string,
    colorTextClick: PropTypes.string,
    colorBackground: PropTypes.string,
    colorText: PropTypes.string,
    height: PropTypes.number,
    fontSize: PropTypes.number,
    onClick: PropTypes.func,
    icon: PropTypes.element
}