import React from 'react';
import PropTypes from 'prop-types';
import "./Card.css";
export const Card = (props: any) => 
{
    document.documentElement.style.setProperty('--shadow-color-no-focus', props.shadowColorNoFocus);
    document.documentElement.style.setProperty('--shadow-color-focus', props.shadowColorFocus);
    document.documentElement.style.setProperty('--button-border-color', props.buttonForeColor);

    return (<>
        <div className="c0-card-container">
            <div className="c0-card" style={{background: props.backgroundColor}}>
                <figure>
                    <img src={props.imageSrc}/>
                </figure>
                <div className="c0-card-content">
                    <h3
                        style={{color: props.titleColor, fontSize: props.titleFontSize + "px"}}>
                        {props.title}
                    </h3>
                    <p
                        style={{color: props.descriptionColor}}>
                        {props.description}
                    </p>
                    <a 
                        href={props.link} 
                        style={{
                            color: props.buttonForeColor, 
                            backgroundColor: props.buttonBackgroundColor}}>
                        {props.buttonText}
                    </a>
                </div>
            </div>
        </div>
    </>);
}

Card.defaultProps =
{
    title: "Title",
    titleColor: "black",
    titleFontSize: 15,
    description: "This is the card's description",
    descriptionColor: "#6a6a6a",
    buttonText: "Button text",
    buttonForeColor: "#2fb4cc",
    buttonBackgroundColor: "#fff",
    imageSrc: "",
    backgroundColor: "#fff",
    shadowColorNoFocus: "rgba(0,0,0, 0.2)",
    shadowColorFocus: "rgba(0,0,0, 0.4)",
    link: "https://www.google.com"
}

Card.propTypes = 
{
    title: PropTypes.string,
    titleColor: PropTypes.string,
    titleFontSize: PropTypes.number,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    buttonForeColor: PropTypes.string,
    buttonBackgroundColor: PropTypes.string,
    imageSrc: PropTypes.string,
    backgroundColor: PropTypes.string,
    shadowColorNoFocus: PropTypes.string,
    shadowColorFocus: PropTypes.string,
    link: PropTypes.string
}
