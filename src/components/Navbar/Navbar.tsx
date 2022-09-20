import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./Navbar.css"
import { BurgerButton } from './BurguerButton';

export const Navbar = (props: any) => 
{
    document.documentElement.style.setProperty('--title-color', props.titleColor);
    document.documentElement.style.setProperty('--links-color', props.linksColor);
    document.documentElement.style.setProperty('--background-color', props.backgroundColor);
    document.documentElement.style.setProperty('--links-background-color-focused', props.linksBackgroundColorFocused);

    const [clicked, setClicked] = useState(false);

    const onClick = () => {
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]
        navbarLinks.classList.toggle('active');
        setClicked(!clicked);
    }

    function createButton (name: string, link: string) {
        return <li><a href={link}>{name}</a></li>
    }

    return (<>
        <nav className="navbar">
            <div className="brand-title">{props.title}</div>
            <div className="burger-button">
                <BurgerButton 
                    onClick={onClick} 
                    clicked={clicked}
                    color={props.burgerButtonColor}/>
            </div>
            <div className="navbar-links">
                <ul>
                    {props.links.map((l: any) => createButton(l.name, l.link))}
                </ul>
            </div>
        </nav>
    </>);
}

Navbar.defaultProps =
{
    title: "Title",
    titleColor: "white",
    linksColor: "white",
    backgroundColor: "rgb(32,32,32)",
    burgerButtonColor: "white",
    linksBackgroundColorFocused: "grey",
    links: [
        {name: "Google", link: "https://google.com"},
        {name: "Youtube", link: "https://youtube.com"},
        {name: "Facebook", link: "https://facebook.com"}
    ]
}

Navbar.propTypes = 
{
    title: PropTypes.string,
    titleColor: PropTypes.string,
    linksColor: PropTypes.string,
    linksBackgroundColorFocused: PropTypes.string,
    backgroundColor: PropTypes.string,
    burgerButtonColor: PropTypes.string,
    links: PropTypes.array
}