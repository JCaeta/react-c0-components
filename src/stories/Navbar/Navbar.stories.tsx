import React from 'react';
import { Navbar} from '../../index';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { customViewports } from '../storiesVariables';

export default
{
    title: 'Navbar',
    component: Navbar,
    parameters: {
        viewport: {
            viewports: customViewports
        }
    }
}

// This Test0 template don't use HashLinks
const Template0 = (args: any) => <Navbar {...args} />;
export const Test0 = Template0.bind({});
Test0.args = 
{
    homeElement: <h3 style={{color: "white"}}>Title</h3>,
    titleColor: "white",
    linksColor: "white",
    linksBackgroundColorFocused: "grey",
    backgroundColor: "rgb(32,32,32)",
    burgerButtonColor: "white",
    links: [
        {name: "Google", link: "https://google.com"},
        {name: "Youtube", link: "https://youtube.com"},
        {name: "Facebook", link: "https://facebook.com"}
    ]
}

// This Test1 template use HashLink
const Template1 = (args: any) => {
    return (<>
        <Router>
            <Navbar {...args} />
            <section id="sec" style={{height: "500px", top: "900px", backgroundColor: "blue"}}>HashLink section</section>
        </Router>

    </>);
}

export const Test1 = Template1.bind({});
Test1.args = 
{
    homeElement: <h3 style={{color: "white"}}>Title</h3>,
    titleColor: "white",
    linksColor: "white",
    linksBackgroundColorFocused: "grey",
    backgroundColor: "rgb(32,32,32)",
    burgerButtonColor: "white",
    links: [
        {name: "HashLink", link: "/#sec", isHashLink: true},
        {name: "Youtube", link: "https://youtube.com"},
        {name: "Facebook", link: "https://facebook.com"}
    ]
}

// This Test2 template uses a link in the home element
const Template2 = (args: any) => {
    return (<>
        <Router>
            <Navbar {...args} />
        </Router>
    </>);
}

export const Test2 = Template2.bind({});
Test2.args = 
{
    homeElement: <h3 style={{color: "white"}}>Title</h3>,
    homeLink: {link: "https://youtube.com", isHashLink: false},
    titleColor: "white",
    linksColor: "white",
    linksBackgroundColorFocused: "grey",
    backgroundColor: "rgb(32,32,32)",
    burgerButtonColor: "white",
    links: [
        {name: "HashLink", link: "/#sec", isHashLink: true},
        {name: "Youtube", link: "https://youtube.com"},
        {name: "Facebook", link: "https://facebook.com"}
    ]
}

// This Test3 template uses HashLink in the home element
const Template3 = (args: any) => {
    return (<>
        <Router>
            <Navbar {...args} />
            <section id="sec" style={{height: "500px", top: "900px", backgroundColor: "blue"}}>HashLink section</section>
        </Router>
    </>);
}

export const Test3 = Template3.bind({});
Test3.args = 
{
    homeElement: <h3 style={{color: "white"}}>Title</h3>,
    homeLink: {link: "/#sec", isHashLink: true},
    titleColor: "white",
    linksColor: "white",
    linksBackgroundColorFocused: "grey",
    backgroundColor: "rgb(32,32,32)",
    burgerButtonColor: "white",
    links: [
        {name: "HashLink", link: "/#sec", isHashLink: true},
        {name: "Youtube", link: "https://youtube.com"},
        {name: "Facebook", link: "https://facebook.com"}
    ]
}