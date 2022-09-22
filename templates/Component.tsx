import React from 'react';
import PropTypes from 'prop-types';
import "./Component.css";

export const Component = (props: any) => 
{
    const variable1 = props.variable1;
    const variable2 = props.variable2;

    const onClick = () => {};

    return (<>
        <button onClick={onClick}>Click me</button>
    </>);
}

Component.defaultProps =
{
    variable1: 1,
    variable2: "variable2",
}

Component.propTypes = 
{
    variable1: PropTypes.number,
    variable2: PropTypes.oneOf(['var2', 'variable2', 'v2']),
}