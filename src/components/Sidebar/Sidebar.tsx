import React from "react";
import PropTypes from "prop-types";
import {MdOutlineArrowBack} from 'react-icons/md';
import {Button} from 'primereact/button';
import './LightASidebar.css';
/**
 * If you want to use another theme copy the LightASidebar.css file and
 * rename each selector to the new theme name.
 * Import it without remove the old one. You will select what theme you want from 
 * "theme" prop.
 */

export const Sidebar = (props: any) => {
    let createButton = (button: any) => {
        return (
            <Button
                style={{height: props.buttonHeight}}
                className={props.theme + "-button-sidebar"} 
                onClick={()=>button.func()}>
                {button.text}
            </Button>
        );
    }
    
    return (<>
        <div style={{width: props.width, height: props.height}} className={props.theme + "-div-sidebar"}>
            {props.buttonGoBack ?
                <Button 
                    style={{height: props.buttonHeight}} 
                    className={props.theme + "-button-sidebar"}
                    onClick={() => props.goBackFunc()}> 
                    <MdOutlineArrowBack className={props.theme + "-icon-button-back"}/>
                </Button> 
            : null}
            {props.buttonList.map((button: any) => createButton(button))}
        </div>
    </>);
};

Sidebar.defaultProps = {
    theme: "lightA",
    width: "200px",
    height: "700px",
    buttonHeight: "50px",
    buttonList: [{text: "Button 1", func: ()=>{console.log("Button 1 clicked")}}],
    buttonGoBack: true,
    goBackFunc: function(){console.log("Click on Go Back button")}
}

Sidebar.propTypes = {
    theme: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    buttonHeight: PropTypes.string,
    buttonList: PropTypes.array,
    goBackButton: PropTypes.bool,
    goBackFunc: PropTypes.func
}


