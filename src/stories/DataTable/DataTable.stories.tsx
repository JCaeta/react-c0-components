import React from 'react';
import { DataTable } from '../../index';
import '../StoryStyles.css';

export default
{
    title: 'DataTable',
    component: DataTable,
}

const Template = (args: any) => {
    return(<>
        <h1 className="h1_stories_rctc0comps">Datatable</h1>
        <DataTable {...args} />
    </>);
}

export const Primary = Template.bind({});
Primary.args = 
{
    headers: [
        {
            name: "username",
            headerText: "Username"
        },
        {
            name: "email",
            headerText: "Email"
        },
        {
            name: "registrationMethod",
            headerText: "Registration method"
        }
    ],
    data: [
        {
            id: 1,
            username: "JohnDoe",
            email: "johndoe@example.com",
            registrationMethod: "Email and password",
        },
        {
            id: 2,
            username: "JaneDoe",
            email: "janedoe@example.com",
            registrationMethod: "Google",
        },
        {
            id: 3,
            username: "JaneDoe",
            email: "janedoe@example.com",
            registrationMethod: "Google",
        },
    ],
}