import React from 'react';
import PropTypes from 'prop-types';
import './DivisoryLine.css'

export const DivisoryLine = (props: any) => 
{
    return (<>
        <div id='line-container'>
            <div 
                id='line-left' 
                className='line-div'
                style={{
                    backgroundColor: props.lineColor,
                }}>
            </div>

            <span 
                id='line-text'
                style={{
                    paddingLeft: props.textMargin + 'px',
                    paddingRight: props.textMargin + 'px',
                    color: props.textColor,
                    fontSize: props.fontSize + "px"
                }}>
                {props.text}
            </span>

            <div 
                id='line-right' 
                className='line-div'
                style={{
                    backgroundColor: props.lineColor,
                }}>
            </div>
        </div>
    </>);
}

DivisoryLine.defaultProps =
{
    text: 'Text',
    textColor: 'black',
    lineColor: 'black',
    textMargin: 2,
    fontSize: 13
}

DivisoryLine.propTypes = 
{
    text: PropTypes.string,
    textColor: PropTypes.string,
    lineColor: PropTypes.string,
    textMargin: PropTypes.number,
    fontSize: PropTypes.number
}