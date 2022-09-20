import React from 'react';
import { Navbar} from '../../index';

export default
{
    title: 'Navbar',
    component: Navbar,
}

const Template = (args: any) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = 
{
    title: "Title",
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