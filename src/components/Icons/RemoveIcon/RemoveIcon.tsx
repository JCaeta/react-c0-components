import React from 'react';
import PropTypes from 'prop-types';
import "./RemoveIcon.css";

export const RemoveIcon = (props: any) => 
{
    document.documentElement.style.setProperty('--color_remove-icon_rctc0comps', props.color);
    document.documentElement.style.setProperty('--color-hover_remove-icon_rctc0comps', props.colorHover);
    document.documentElement.style.setProperty('--color-click_remove-icon_rctc0comps', props.colorClick);

    return (<>
        <svg id="svg_remove-icon_rctc0comps" width="100%" height="100%" viewBox="0 0 52 52" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,8H38V2a2,2,0,0,0-2-2H16a2,2,0,0,0-2,2V8H2a2,2,0,0,0,0,4H9V50a2,2,0,0,0,2,2H41a2,2,0,0,0,2-2V12h7a2,2,0,0,0,0-4ZM18,4H34V8H18ZM39,48H13V12H39Z"/><path d="M26,14.45a2,2,0,0,0-2,2V44.89a2,2,0,0,0,4,0V16.45A2,2,0,0,0,26,14.45Z"/><path d="M33.56,14.45a2,2,0,0,0-2,2V44.89a2,2,0,1,0,4,0V16.45A2,2,0,0,0,33.56,14.45Z"/><path d="M18.44,14.45a2,2,0,0,0-2,2V44.89a2,2,0,0,0,4,0V16.45A2,2,0,0,0,18.44,14.45Z"/>
        </svg>
    </>);
}

RemoveIcon.defaultProps =
{
    color: "rgb(124,152,182)",
    colorHover: "rgb(84,114,142)",
    colorClick: "rgb(30,30,30)",
}

RemoveIcon.propTypes = 
{
    color: PropTypes.string,
    colorHover: PropTypes.string,
    colorClick: PropTypes.string,
}
