import React from 'react';
import { Menu } from '../../components/Menu/Menu';
import "./MenuStories.css";

export default
{
    title: 'Menu',
    component: Menu,
}

const Template = args => {
    return(<>
        <div className="container-menu">
            <Menu {...args} />
        </div>
    </>);
};

export const Primary = Template.bind({});
Primary.args = 
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