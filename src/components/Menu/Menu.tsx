import React from 'react';
import PropTypes from 'prop-types';
import "./Menu.css";
import { HashLink } from 'react-router-hash-link';

export const Menu = (props: any) => 
{
    const onClick = () => {};

    document.documentElement.style.setProperty('--text-color_menu_rctc0comps', props.textColor);
    document.documentElement.style.setProperty('--hover-text-color_menu_rctc0comps', props.hoverTextColor);
    document.documentElement.style.setProperty('--click-text-color_menu_rctc0comps', props.clickTextColor);
    document.documentElement.style.setProperty('--background-color_menu_rctc0comps', props.backgroundColor);
    document.documentElement.style.setProperty('--hover-background-color_menu_rctc0comps', props.hoverBackgroundColor);
    document.documentElement.style.setProperty('--click-background-color_menu_rctc0comps', props.clickBackgroundColor);

    function createButton (name: string, link: string, isHashLink: boolean) {
        if(isHashLink){
            return (
                <HashLink 
                    smooth to={link} 
                    style={{textDecoration: "none"}}>
                    <li>
                        <span style={{fontSize: props.fontSize + "px"}}>{name}</span>
                    </li>
                </HashLink>
            );
        } else{
            return <li><a href={link} style={{fontSize: props.fontSize + "px"}}>{name}</a></li>
        }
    }

    return (<>
        <div className="container-menu-rctc0comps">
            {props.links.map((l: any) => createButton(l.name, l.link, l.isHashLink))}
        </div>
    </>);
}

Menu.defaultProps =
{
    links: [
        {name: "Google", link: "https://google.com", isHashLink: false},
        {name: "Youtube", link: "https://youtube.com", isHashLink: false},
        {name: "Facebook", link: "https://facebook.com", isHashLink: false}
    ],
    fontSize: 50,
    backgroundColor: "rgb(49,49,49)",
    textColor: "white",
    hoverTextColor: "black",
    clickTextColor: "green",
    hoverBackgroundColor: "rgb(120,120,120)",
    clickBackgroundColor: "yellow"
}

Menu.propTypes = 
{
    links: PropTypes.array,
    fontSize: PropTypes.number,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    hoverTextColor: PropTypes.string,
    clickTextColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
    clickBackgroundColor: PropTypes.string
}