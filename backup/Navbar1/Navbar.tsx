import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./Navbar.css"
import { BurgerButton } from './BurguerButton';

export const Navbar = (props: any) => 
{
    const [clicked, setClicked] = useState(false);

    const onClick = () => {
        setClicked(!clicked);
    };

    function createButton (name: string, link: string) {
        return <li><a href={link}>{name}</a></li>
    }

    function displayMobileMenu(){
        return(
            <ul className="links">
                {props.links.map((l: any) => createButton(l.name, l.link))}
                <div 
                    className="burger-button">
                    <BurgerButton onClick={onClick} clicked={clicked}/>
                </div>
            </ul>
        )
    }

    return (<>
        <div className="navbar-content">
            <nav>
                <label className="logo">{props.title}</label>
                {/* <div>
                    {props.links.map((l: any) => createButton(l.name, l.link))}
                    <div 
                        className="burger-button">
                        <BurgerButton onClick={onClick} clicked={clicked}/>
                    </div>
                </div> */}



                <ul className="links">
                    {props.links.map((l: any) => createButton(l.name, l.link))}
                    <div 
                        className="burger-button">
                        <BurgerButton onClick={onClick} clicked={clicked}/>
                    </div>
                </ul>
            </nav>
        </div>
    </>);
}

Navbar.defaultProps =
{
    title: "Title",
    links: [
        {name: "Google", link: "https://google.com"},
        {name: "Youtube", link: "https://youtube.com"}
    ]

}

Navbar.propTypes = 
{
    title: PropTypes.string,
    links: PropTypes.array
    // variable1: PropTypes.number,
    // variable2: PropTypes.oneOf(['var2', 'variable2', 'v2']),
}