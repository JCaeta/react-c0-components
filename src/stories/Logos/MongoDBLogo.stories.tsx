import React from 'react';
import {CsharpLogo, MongoDBLogo} from '../../index';

export default
{
    title: 'Logos/MongoDBLogo',
    component: MongoDBLogo,
}

const Template = (args: any) => <MongoDBLogo {...args} />;

export const Primary = Template.bind({});
Primary.args = 
{

}
