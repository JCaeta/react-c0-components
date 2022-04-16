import { Grid } from '@mui/material';
import React from 'react';
import { AlbumCard } from '../../index';
const imageFile = require('../images/K1.jpg');

export default{
    title: 'AlbumCard',
    component: AlbumCard,
}

// @ts-ignore
const Template = args => <AlbumCard {...args} />;
const onClick = () => {console.log("On click!")};

export const SingleUrl = Template.bind({});

// @ts-ignore
SingleUrl.args = {
    heightUnit: '%',
    heightValue: 100,
    widthUnit: '%',
    widthValue: 100,
    imageSource: 'url',
    imagePath: "https://source.unsplash.com/random",
    onClick: onClick
}

export const SingleDirectory = Template.bind({});

// @ts-ignore
SingleDirectory.args = {
    heightUnit: '%',
    heightValue: 100,
    widthUnit: '%',
    widthValue: 100,
    imageSource: 'directory',
    imagePath: imageFile
}

export const MultipleAlbumCard = () => {
    return(
    <Grid container spacing={{xs:2, md:3}} columns={{xs: 4, sm:8, md:12}}>
        {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
                <AlbumCard imageSource = 'url' imagePath="https://source.unsplash.com/random"/>
            </Grid>
        ))}
    </Grid>);
};



