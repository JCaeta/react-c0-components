import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';

const theme = createTheme();

export const AlbumCard = (props: any) => 
{
    const height = (props.heightValue + props.heightUnit).toString();
    const width = (props.widthValue + props.widthUnit).toString();
    const margin = (props.marginValue + props.marginUnit).toString();

    const setImage = () => {
        if (props.imageSource === 'url'){
            return (
                <CardMedia
                component="img"
                sx=
                {{
                    // 16:9
                    pt: '0%',
                }}
                image={props.imagePath}
                alt="random"/>
            )
        }
        else {
            return (
                <CardMedia
                component="img"
                sx=
                {{
                    // 16:9
                    pt: '0%',
                }}
                src={props.imagePath}/>
            )
        }
    };

    const onClick = () => {props.onClick()};

    return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Card sx={{ height: height, width: width, display: 'flex', flexDirection: 'column', margin:margin}}>
            {setImage()}
            <CardContent sx={{ flexGrow: 20 }}>
                <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h2">
                    Heading
                </Typography>
                <Typography>
                    This is a media card. You can use this section to describe the
                    content.
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={onClick}variant="contained" size="medium">Buy it for $5</Button>
            </CardActions>
        </Card>
    </ThemeProvider>);
}

AlbumCard.defaultProps =
{
    heightUnit: '%',
    heightValue: 100,
    widthUnit: '%',
    widthValue: 100,
    marginUnit: '%',
    marginValue: 0,
    imagePath: '',
    imageSource: 'directory',
}

AlbumCard.propTypes = 
{
    heightUnit: PropTypes.oneOf(['%', 'px', 'vw', 'vh']),
    heightValue: PropTypes.number,
    widthUnit: PropTypes.oneOf(['%', 'px', 'vh', 'vh']),
    widthValue: PropTypes.number,
    marginUnit: PropTypes.oneOf(['%', 'px', 'vh', 'vh']),
    marginValue: PropTypes.number,
    imagePath: PropTypes.string,
    imageSource: PropTypes.oneOf(['url', 'directory'])
}

// export default AlbumCard;
