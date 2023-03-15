import React from 'react';
import PropTypes from 'prop-types';
import "./Input1.css";
import { useEffect, useState } from 'react';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';

var defaultSizes = {
    paddingTopContainer: "13px",
    topLabel: "8px",
    leftLabel: "10px",
    heightInput: "18px",
    topLabelNonEmpty: "0px",
    fontSizeLabelNonEmpty: "11px",
    heightContainer: "70x",
    fontSizeLabelEmpty: "16px",
    fontSizeInput: "16px",
    eyeIconWidth: "20px",
    eyeIconHeight: "25px",
    eyeIconButtonWidth: "40px",
    eyeIconButtonHeight: "25px",
    eyeIconButtonLeft: "calc(100% - 40px)",
    eyeIconButtonTop: "2px"
}

export const Input1 = (props: any) => 
{
    var sizes = defaultSizes;
    var inputElement: any = null;
    var label: any = null
    var text = '';

    document.documentElement.style.setProperty('--color-border_input1_rctc0comps', props.colorBorder);
    document.documentElement.style.setProperty('--color-underline_input1_rctc0comps', props.colorUnderline);

    const [eyeIconState, setEyeIconState] = useState(false); // false = closed | true = opened

    useEffect(() => {
        inputElement = document.getElementById("input1_rctc0comps");
        label = document.getElementById("label_input1_rctc0comps");
        inputElement.addEventListener('input', (event: any) => {
            text = event.target.value;
            if(props.keyPressEvent != null){
                props.keyPressEvent(text);
            }
            
            if(text.length > 0){
                label.classList.add("non-empty");
            } else {
                label.classList.remove("non-empty");
            }
        });
    }, []);

    const onClickEyeButton = () => {
        setEyeIconState(prevState => !prevState);
    }

    const setSizes = (size: string) =>{
        if (size === "small"){
            sizes = defaultSizes;
        } else if (size === "medium"){
            sizes = {
                paddingTopContainer: "20px",
                topLabel: "6px",
                leftLabel: "20px",
                heightInput: "39px",
                topLabelNonEmpty: "0px",
                fontSizeLabelNonEmpty: "20px",
                heightContainer: "60px",
                fontSizeLabelEmpty: "40px",
                fontSizeInput: "30px",
                eyeIconWidth: "40px",
                eyeIconHeight: "30px",
                eyeIconButtonWidth: "60px",
                eyeIconButtonHeight: "55px",
                eyeIconButtonLeft: "calc(100% - 60px)",
                eyeIconButtonTop: "2px"

            }
        } else if (size == "large"){
            sizes = {
                paddingTopContainer: "40px",
                topLabel: "20px",
                leftLabel: "40px",
                heightInput: "110px",
                topLabelNonEmpty: "0px",
                fontSizeLabelNonEmpty: "40px",
                heightContainer: "150px",
                fontSizeLabelEmpty: "100px",
                fontSizeInput: "100px",
                eyeIconWidth: "20px",
                eyeIconHeight: "25px",
                eyeIconButtonWidth: "40px",
                eyeIconButtonHeight: "25px",
                eyeIconButtonLeft: "calc(100% - 40px)",
                eyeIconButtonTop: "2px"
            }
        } 

        document.documentElement.style.setProperty('--padding-top_container_input1_rctc0comps', sizes.paddingTopContainer);
        document.documentElement.style.setProperty('--top-label_input1_rctc0comps', sizes.topLabel);
        document.documentElement.style.setProperty('--left-label_input1_rctc0comps', sizes.leftLabel);
        document.documentElement.style.setProperty('--height_input1_rctc0comps', sizes.heightInput);
        document.documentElement.style.setProperty('--top-label-non-empty_input1_rctc0comps', sizes.topLabelNonEmpty);
        document.documentElement.style.setProperty('--font-size-label-non-empty_input1_rctc0comps', sizes.fontSizeLabelNonEmpty);
        document.documentElement.style.setProperty('--height-container_input1_rctc0comps', sizes.heightContainer);
        document.documentElement.style.setProperty('--font-size-label-empty_input1_rctc0comps', sizes.fontSizeLabelEmpty);
        document.documentElement.style.setProperty('--font-size_input1_rctc0comps', sizes.fontSizeInput);
        document.documentElement.style.setProperty('--eye-icon-width_input1_rctc0comps', sizes.eyeIconWidth);
        document.documentElement.style.setProperty('--eye-icon-height_input1_rctc0comps', sizes.eyeIconHeight);
    }

    setSizes(props.size);

    return (<>
        <div 
            className="container_input1_rctc0comps"
            style={{backgroundColor: props.colorBackground}}>
            
            <input 
                id="input1_rctc0comps" 
                type={eyeIconState?'text':'password'}
                style={{color: props.colorText}}
                color={props.colorText}/>

            <label 
                id="label_input1_rctc0comps" 
                htmlFor="input1_rctc0comps"
                style={{
                    color: props.colorPlaceholder,
                    opacity: props.opacityPlaceholder
                }}>
                {props.textPlaceholder}
            </label>

            <button 
                type="button" 
                id="button-eye-icon" 
                onClick={onClickEyeButton}
                style={{
                    width: sizes.eyeIconButtonWidth,
                    height: sizes.eyeIconButtonHeight,
                    top: sizes.eyeIconButtonTop,
                    left: sizes.eyeIconButtonLeft
                }}>
                {eyeIconState ? 
                    <AiOutlineEye 
                        id="eye-icon" 
                        color={props.colorEyeIcon}/> 
                : 
                    <AiOutlineEyeInvisible 
                        id="eye-icon" 
                        color={props.colorEyeIcon}/>}
            </button>
        </div>
    </>);
}

Input1.defaultProps =
{
    size: "small",
    textPlaceholder: "Password",
    colorEyeIcon: "#5f5f5f",
    colorBorder: "#6666",
    colorText: "black",
    colorPlaceholder: "black",
    opacityPlaceholder: 0.4,
    colorBackground: "white",
    colorUnderline: "black",
}

Input1.propTypes = 
{
    size: PropTypes.oneOf(["small", "medium", "large"]),
    textPlaceholder: PropTypes.string,
    colorEyeIcon: PropTypes.string,
    colorBackground: PropTypes.string,
    colorText: PropTypes.string,
    colorPlaceholder: PropTypes.string,
    opacityPlaceholder: PropTypes.number,
    colorBorder: PropTypes.string,
    colorUnderline: PropTypes.string,
    keyPressEvent: PropTypes.func
}