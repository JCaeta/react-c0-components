import React from 'react';
import { DivisoryLine } from '../../index';

export default
{
    title: 'DivisoryLine',
    component: DivisoryLine,
}

const Template = (args: any) => <DivisoryLine {...args} />;

export const Primary = Template.bind({});
Primary.args = 
{
    text: 'Text',
    lineColor: 'black',
    textMargin: 2,
    textColor: 'black',
    fontSize: 13
}