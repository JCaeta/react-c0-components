import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./Navbar.css"
import { BurgerButton } from '../Buttons/BurgerButton/BurgerButton';
import { HashLink } from 'react-router-hash-link';
import { DropDownMenu } from './DropDownMenu/DropDownMenu';
import { Menu } from '../Menu/Menu';

export const Navbar = (props: any) => 
{
    document.documentElement.style.setProperty('--background-color_navbar_rctc0comps', props.backgroundColor);
    document.documentElement.style.setProperty('--height_navbar_rctc0comps', props.height + "px");

    const [clicked, setClicked] = useState(false);

    const onClick = () => {
        setClicked(!clicked);
    }

    function createHomeElement() {
        if(props.homeLink.link == ""){
            return props.homeElement
        } else {
            if(props.homeLink.isHashLink) {
                return (
                    <HashLink  
                        smooth 
                        to={props.homeLink.link}
                        style={{
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center"}}>
                        {props.homeElement}
                    </HashLink>
                )
            } else {
                return (
                    <a 
                        href={props.homeLink.link} 
                        style={{
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center"}}>
                        {props.homeElement}
                    </a>
                )
            }
        }
    }

    function createMobile(){
        return (<>
            <div className="container_navbar_rctc0comps">
                <div className="navbar-rctc0comps">
                    {createHomeElement()}
                    <div className="burger-button-rctc0comps" style={{width: props.burgerButtonWidth + "px"}}>
                        <BurgerButton 
                            onClick={onClick}
                            backgroundColor={props.backgroundColor}
                            foregroundColor={props.textColor}/>
                    </div>
                </div>
                <div className={clicked?"dropdown-menu-navbar-rctc0comps":"dropdown-menu-navbar-rctc0comps hidden"}>
                    <DropDownMenu 
                        fontSize={props.fontSize}
                        fontFamily={props.fontFamily}
                        links={props.links} 
                        backgroundColor={props.backgroundColor}
                        textColor={props.textColor}
                        hoverBackgroundColor={props.hoverBackgroundColor}
                        clickBackgroundColor={props.clickBackgroundColor}
                        hoverTextColor={props.hoverTextColor}
                        clickTextColor={props.clickTextColor}/>
                </div>
            </div>
        </>);
    }

    function createDesktop(){
        return (<>
            <div className="navbar-rctc0comps">
                {createHomeElement()}
                <div className="container-menu_navbar_rctc0comps">
                    <Menu 
                        links={props.links} 
                        fontSize={props.fontSize}
                        fontFamily={props.fontFamily}
                        backgroundColor={props.backgroundColor}
                        textColor={props.textColor}
                        hoverBackgroundColor={props.hoverBackgroundColor}
                        clickBackgroundColor={props.clickBackgroundColor}
                        hoverTextColor={props.hoverTextColor}
                        clickTextColor={props.clickTextColor}/>
                </div>
            </div>
        </>);
    }

    return(<>
        {props.styleMobile?createMobile():createDesktop()}
    </>)
}

Navbar.defaultProps =
{
    height: 150,
    homeElement: <h3 style={{color: "white"}}>Title</h3>,
    homeLink: {link: "", isHashLink: false},
    textColor: "white",
    fontFamily: '',
    backgroundColor: "rgb(32,32,32)",
    burgerButtonColor: "white",
    burgerButtonWidth: 150,
    hoverTextColor: "green",
    clickTextColor: "green",
    hoverBackgroundColor: "rgb(120,120,120)",
    clickBackgroundColor: "yellow",
    linksBackgroundColorFocused: "grey",
    fontSize: 50,

    links: [
        {name: "Google", link: "https://google.com", isHashLink: false},
        {name: "Youtube", link: "https://youtube.com", isHashLink: false},
        {name: "Facebook", link: "https://facebook.com", isHashLink: false}
    ],
    styleMobile: false
}

Navbar.propTypes = 
{
    height: PropTypes.number,
    homeElement: PropTypes.element,
    homeLink: PropTypes.object,
    fontFamily: PropTypes.string,
    linksBackgroundColorFocused: PropTypes.string,
    backgroundColor: PropTypes.string,
    burgerButtonColor: PropTypes.string,
    burgerButtonWidth: PropTypes.number,
    links: PropTypes.array,
    styleMobile: PropTypes.bool,
    hoverTextColor: PropTypes.string,
    clickTextColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
    clickBackgroundColor: PropTypes.string
}

