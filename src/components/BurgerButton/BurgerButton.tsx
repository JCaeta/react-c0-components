import React from 'react';
import PropTypes from 'prop-types';
import "./BurgerButton.css"
import { useState } from 'react';

export const BurgerButton = (props: any) => 
{
    document.documentElement.style.setProperty('--background-color', props.backgroundColor);
    document.documentElement.style.setProperty('--foreground-color', props.foregroundColor);

    const [parentClass, setParentClass] = useState("container-burger-button-rctc0comps")
    function onClick(){
        if(parentClass == "container-burger-button-rctc0comps clicked"){
            setParentClass("container-burger-button-rctc0comps")
        } else {
            setParentClass("container-burger-button-rctc0comps clicked");
        }
        props.onClick();
    }

    return (<>
        <button onClick={onClick} className={parentClass}>
            <div></div>
            <div></div>
            <div></div>
        </button>
    </>);
}

BurgerButton.defaultProps =
{
    onClick: function(){},
    backgroundColor: "rgb(49,49,49)",
    foregroundColor: "yellow"
}

BurgerButton.propTypes = 
{
    onClick: PropTypes.func,
    backgroundColor: PropTypes.string,
    foregroundColor: PropTypes.string
}
