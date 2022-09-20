import React from 'react';
import PropTypes from 'prop-types';
import "./BurgerButton.css"

export const BurgerButton = (props: any) => 
{    
    document.documentElement.style.setProperty('--color', props.color);
    
    return (<>
        <div 
            className={`icon nav-icon-6 ${props.clicked ? 'open': ''}`}
            onClick={props.onClick}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </>);
}

BurgerButton.defaultProps =
{
    color: "white"
}

BurgerButton.propTypes = 
{
    onClick: PropTypes.any,
    clicked: PropTypes.any,
    color: PropTypes.string
}