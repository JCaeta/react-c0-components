import React from 'react';
import PropTypes from 'prop-types';
import "./BurgerButton.css"

export const BurgerButton = (props: any) => 
{
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
}

BurgerButton.propTypes = 
{
    onClick: PropTypes.any,
    clicked: PropTypes.any
}