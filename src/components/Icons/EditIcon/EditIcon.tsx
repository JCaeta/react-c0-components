import React from 'react';
import PropTypes from 'prop-types';
import "./EditIcon.css";

export const EditIcon = (props: any) => 
{
    document.documentElement.style.setProperty('--color_edit-icon_rctc0comps', props.color);
    document.documentElement.style.setProperty('--color-border_edit-icon_rctc0comps', props.colorBorder);
    document.documentElement.style.setProperty('--color-hover_edit-icon_rctc0comps', props.colorHover);
    document.documentElement.style.setProperty('--color-border-hover_edit-icon_rctc0comps', props.colorBorderHover);
    document.documentElement.style.setProperty('--color-click_edit-icon_rctc0comps', props.colorClick);
    document.documentElement.style.setProperty('--color-border-click_edit-icon_rctc0comps', props.colorBorderClick);

    return (<>
        <svg id="svg_edit-icon_rctc0comps" width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path id="path0_edit-icon_rctc0comps" opacity="0.15" d="M4 20H8L18 10L14 6L4 16V20Z" fill="#000000"/>
            <path id="path1_edit-icon_rctc0comps" d="M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </>);
}

EditIcon.defaultProps =
{
    color: "rgb(200,224,242)",
    colorHover: "rgb(124,152,182)",
    colorClick: "yellow",
    colorBorder: "rgb(80,119,153)",
    colorBorderHover: "rgb(45,62,80)",
    colorBorderClick: "black"
}

EditIcon.propTypes = 
{
    color: PropTypes.string,
    colorHover: PropTypes.string,
    colorClick: PropTypes.string,
    colorBorder: PropTypes.string,
    colorBorderHover: PropTypes.string,
    colorBorderClick: PropTypes.string
}