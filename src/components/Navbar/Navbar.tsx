import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./Navbar.css"
import { BurgerButton } from './BurguerButton';
import { HashLink } from 'react-router-hash-link';

export const Navbar = (props: any) => 
{
    document.documentElement.style.setProperty('--links-color', props.linksColor);
    document.documentElement.style.setProperty('--background-color', props.backgroundColor);
    document.documentElement.style.setProperty('--links-background-color-focused', props.linksBackgroundColorFocused);

    const [clicked, setClicked] = useState(false);

    const onClick = () => {
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]
        navbarLinks.classList.toggle('active');
        setClicked(!clicked);
    }

    function createButton (name: string, link: string, isHashLink: boolean) {
        if(isHashLink){
            return (
                <HashLink 
                    id="hash-link" 
                    smooth to={link} 
                    style={{textDecoration: "none"}}>
                    <li>
                        <span >{name}</span>
                    </li>
                </HashLink>
            );
        } else{
            return <li><a href={link}>{name}</a></li>
        }
    }

    return (<>
            <nav className="navbar">
                <div className="home-element">{props.homeElement}</div>
                <div className="burger-button">
                    <BurgerButton 
                        onClick={onClick} 
                        clicked={clicked}
                        color={props.burgerButtonColor}/>
                </div>
                <div className="navbar-links">
                    <ul>
                        {props.links.map((l: any) => createButton(l.name, l.link, l.isHashLink))}
                    </ul>
                </div>
            </nav>
    </>);
}

Navbar.defaultProps =
{
    homeElement: <h3 style={{color: "white"}}>Title</h3>,
    linksColor: "white",
    backgroundColor: "rgb(32,32,32)",
    burgerButtonColor: "white",
    linksBackgroundColorFocused: "grey",
    links: [
        {name: "Google", link: "https://google.com", isHashLink: false},
        {name: "Youtube", link: "https://youtube.com", isHashLink: false},
        {name: "Facebook", link: "https://facebook.com", isHashLink: false}
    ]
}

Navbar.propTypes = 
{
    homeElement: PropTypes.element,
    linksColor: PropTypes.string,
    linksBackgroundColorFocused: PropTypes.string,
    backgroundColor: PropTypes.string,
    burgerButtonColor: PropTypes.string,
    links: PropTypes.array
}

