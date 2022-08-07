import React from 'react';
import PropTypes from 'prop-types';
import './ProgressSpinner.css';
// import {useEffect,useState} from 'react';
// import Backdrop from '@mui/material/Backdrop';

export const ProgressSpinner = (props: any) => 
{
    return (<>
        <div className='backdrop'></div>
        <div className="center">
            <div className="ring"></div>
            <span style={{color: props.textColor}}>{props.text}</span>
        </div>     
    </>)
}

ProgressSpinner.defaultProps =
{
    text: 'LOADING...',
    textColor: 'rgb(50, 50, 50)',
}

ProgressSpinner.propTypes = 
{
    text: PropTypes.string,
    textColor: PropTypes.string,
}