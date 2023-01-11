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

    function createHomeElement() {
        if(props.homeLink.link == ""){
            return <div className="home-element">{props.homeElement}</div>
        } else {
            if(props.homeLink.isHashLink) {
                return (
                    <HashLink  
                        smooth 
                        to={props.homeLink.link}
                        style={{textDecoration: "none"}}>
                        {props.homeElement}
                    </HashLink>
                )
            } else {
                return (
                    <a 
                        href={props.homeLink.link} 
                        className="home-element"
                        style={{textDecoration: "none"}}>
                        {props.homeElement}
                    </a>
                )
            }
        }
    }

    return (<>
        <nav className="navbar">
            {createHomeElement()}
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
    homeLink: {link: "", isHashLink: false},
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
    homeLink: PropTypes.object,
    linksColor: PropTypes.string,
    linksBackgroundColorFocused: PropTypes.string,
    backgroundColor: PropTypes.string,
    burgerButtonColor: PropTypes.string,
    links: PropTypes.array
}

