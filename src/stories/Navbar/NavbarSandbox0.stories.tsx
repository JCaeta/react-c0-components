import React from 'react';
import {Navbar} from '../../index';
import { BrowserRouter as Router } from 'react-router-dom';
import { DropDownMenu } from '../../components/Navbar/DropDownMenu/DropDownMenu';

export default
{
    title: 'Navbar',
    component: Navbar,
}

const TemplateNavbar = (args: any) => {
    return(<>
        <Router>
            <Navbar {...args} />
        </Router>
    </>);
}

export const NavbarTest = TemplateNavbar.bind({});
NavbarTest.args = 
{
    homeElement: <h3 style={{color: "white"}}>Title</h3>,
    homeLink: {link: "/#section", isHashLink: true},
    textColor: "white",
    backgroundColor: "rgb(32,32,32)",
    burgerButtonColor: "white",
    hoverTextColor: "green",
    clickTextColor: "green",
    hoverBackgroundColor: "rgb(120,120,120)",
    clickBackgroundColor: "yellow",
    linksBackgroundColorFocused: "grey",
    fontSize: 50,

    links: [
        {name: "Google", link: "https://google.com", isHashLink: false},
        {name: "HashLink", link: "/#section", isHashLink: true},
        {name: "Facebook", link: "https://facebook.com", isHashLink: false}
    ],
    styleMobile: false
}

// --------------------------------------------------------------------------- Drop down menu
const TemplateDropDownMenu = (args: any) => <DropDownMenu {...args} />;

export const DropDownMenuTest = TemplateDropDownMenu.bind({});
DropDownMenuTest.args = 
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