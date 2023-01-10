import React from 'react';
import { Navbar} from '../../index';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

export default
{
    title: 'Navbar',
    component: Navbar,
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