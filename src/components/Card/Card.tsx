import React from 'react';
import PropTypes from 'prop-types';
import "./Card.css";
export const Card = (props: any) => 
{
    return (<>
        <div className="container">
            <div className="card">
                <figure>
                    <img src={props.imageSrc}/>
                </figure>
                <div className="content">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <a href="">{props.buttonText}</a>
                </div>
            </div>

        </div>
    </>);
}

Card.defaultProps =
{
    title: "Title",
    description: "This is the card's description",
    buttonText: "Button text",
    imageSrc: ""
}

Card.propTypes = 
{
    title: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    imageSrc: PropTypes.string
    // onClick: PropTypes.func
}


