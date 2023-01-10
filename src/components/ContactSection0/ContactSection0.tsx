import React from 'react';
import PropTypes from 'prop-types';
import "./ContactSection0.css";

export const ContactSection0 = (props: any) => 
{
    const variable1 = props.variable1;
    const variable2 = props.variable2;

    const onClick = () => {};

    return (<>
        <button onClick={onClick}>Click me</button>
    </>);
}

ContactSection0.defaultProps =
{
    variable1: 1,
    variable2: "variable2",
}

ContactSection0.propTypes = 
{
    variable1: PropTypes.number,
    variable2: PropTypes.oneOf(['var2', 'variable2', 'v2']),
}