import React from 'react';
import PropTypes from 'prop-types';
import "./SuperuserLogo.css";

export const SuperuserLogo = (props: any) => 
{
    document.documentElement.style.setProperty('--color_superuser-logo_rctc0comps', props.color);
    document.documentElement.style.setProperty('--color-hover_superuser-logo_rctc0comps', props.colorHover);
    document.documentElement.style.setProperty('--color-click_superuser-logo_rctc0comps', props.colorClick);

    return (<>
        <svg version="1.1" id="superuser-logo_rctc0comps" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" width="100%" height="100%" enableBackground="new 0 0 1000 1000">
            <g><path d="M484.8,941.2l-48.5-84.1c-16.9-29.3-6.9-66.7,22.4-83.6l10.7-6.2c-0.7-6.7-1-13.5-1-20.2s0.3-13.4,1-20.2l-10.7-6.1c-14-8.1-24.3-21.6-28.5-37.2c-4.2-15.7-2-32.4,6.1-46.5l48.5-84.1c8.1-14,21.6-24.3,37.2-28.5c5.2-1.4,10.5-2.1,15.9-2.1c10.7,0,21.3,2.8,30.6,8.2l10.8,6.2c11-7.5,22.7-14.1,34.8-19.8v-12.8c0-1,0.6-1.9,0.6-2.9c-32.4-24.6-73-43.7-125.4-53.8v-30.3c72.2-34.5,122.5-107.6,122.5-192.9C611.8,106,515.8,10,397.4,10C279,10,183.1,106,183.1,224.4c0,85.4,50.3,158.5,122.5,192.9v30.3c-244.1,46.8-245,283.2-245,419.9c0,106.7,466.7,103.7,461.5,102.3C506.3,965.6,492.9,955.3,484.8,941.2z"/><path d="M899.1,747.1c0-18-3.2-35-7.8-51.6l48.1-27.7l-48.6-84.1l-47.5,27.4c-24.3-24.7-55.2-42.4-89.9-51.4l0-55.4h-97.1v55.4c-34.6,9-65.6,26.6-89.9,51.4l-47.5-27.4l-48.6,84.1l48.1,27.7c-4.5,16.6-7.8,33.6-7.8,51.6s3.2,35,7.8,51.6l-48.1,27.8l48.6,84.1l47.5-27.4c24.3,24.7,55.3,42.4,90,51.4V990l97.1-0.1v-55.3c34.6-8.9,65.7-26.7,90-51.4l47.5,27.4l48.5-84.1l-48-27.7C896,782.2,899.1,765.2,899.1,747.1z M704.9,840.1c-51.4,0-93-41.6-93-93c0-51.3,41.6-93,93-93s93,41.7,93,93C797.8,798.5,756.2,840.1,704.9,840.1z"/></g>
        </svg>
    </>);
}

SuperuserLogo.defaultProps =
{
    color: "black",
    colorHover: "grey",
    colorClick: "green"
}

SuperuserLogo.propTypes = 
{
    color: PropTypes.string,
    colorHover: PropTypes.string,
    colorClick: PropTypes.string
}