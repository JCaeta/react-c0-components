import React from 'react';
import { DropDownMenu } from '../../components/Navbar/DropDownMenu/DropDownMenu';

export default
{
    title: 'DropDownMenu',
    component: DropDownMenu,
}

const Template = (args: any) => <DropDownMenu {...args} />;

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