import React from 'react';
import PropTypes from 'prop-types';
import "./Input0.css";
import { useEffect } from 'react';

var defaultSizes = {
    paddingTopContainer: "13px",
    topLabel: "8px",
    leftLabel: "10px",
    heightInput: "18px",
    topLabelNonEmpty: "0px",
    fontSizeLabelNonEmpty: "11px",
    heightContainer: "70x",
    fontSizeLabelEmpty: "16px",
    fontSizeInput: "16px"
}

export const Input0 = (props: any) => 
{
    var sizes = defaultSizes;
    var inputElement: any = null;
    var label: any = null
    var text = '';

    document.documentElement.style.setProperty('--color-border_input0_rctc0comps', props.colorBorder);
    document.documentElement.style.setProperty('--color-underline_input0_rctc0comps', props.colorUnderline);

    const setSizes = (size: string) =>{
        if (size === "small"){
            sizes = defaultSizes;
        } else if (size === "medium"){
            sizes = {
                paddingTopContainer: "20px",
                topLabel: "10px",
                leftLabel: "20px",
                heightInput: "39px",
                topLabelNonEmpty: "0px",
                fontSizeLabelNonEmpty: "20px",
                heightContainer: "60px",
                fontSizeLabelEmpty: "40px",
                fontSizeInput: "30px"
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
                fontSizeInput: "100px"
            }
        } 

        document.documentElement.style.setProperty('--padding-top_container_input0_rctc0comps', sizes.paddingTopContainer);
        document.documentElement.style.setProperty('--top-label_input0_rctc0comps', sizes.topLabel);
        document.documentElement.style.setProperty('--left-label_input0_rctc0comps', sizes.leftLabel);
        document.documentElement.style.setProperty('--height_input0_rctc0comps', sizes.heightInput);
        document.documentElement.style.setProperty('--top-label-non-empty_input0_rctc0comps', sizes.topLabelNonEmpty);
        document.documentElement.style.setProperty('--font-size-label-non-empty_input0_rctc0comps', sizes.fontSizeLabelNonEmpty);
        document.documentElement.style.setProperty('--height-container_input0_rctc0comps', sizes.heightContainer);
        document.documentElement.style.setProperty('--font-size-label-empty_input0_rctc0comps', sizes.fontSizeLabelEmpty);
        document.documentElement.style.setProperty('--font-size_input0_rctc0comps', sizes.fontSizeInput);
    }

    setSizes(props.size);

    useEffect(() => {
        inputElement = document.getElementById("input0_rctc0comps");
        label = document.getElementById("label_input0_rctc0comps");
        inputElement.addEventListener('input', (event: any) => {
            text = event.target.value;
            if(props.keyPressEvent != null){
                props.keyPressEvent(text);
            }
            if(text != ''){
                label.classList.add("non-empty");
            } else {
                label.classList.remove("non-empty");
            }
        });
    }, []);

    return (<>
        <div 
            className="container_input0_rctc0comps"
            style={{backgroundColor: props.colorBackground}}>
            
            <input 
                id="input0_rctc0comps" 
                type="text"
                style={{color: props.colorText}}
                color={props.colorText}/>

            <label 
                id="label_input0_rctc0comps" 
                htmlFor="input0_rctc0comps"
                style={{
                    color: props.colorPlaceholder,
                    opacity: props.opacityPlaceholder
                }}>
                {props.textPlaceholder}
            </label>
        </div>
    </>);
}

Input0.defaultProps =
{
    size: "small",
    textPlaceholder: "Username",
    colorBorder: "#6666",
    colorText: "black",
    colorPlaceholder: "black",
    opacityPlaceholder: 0.4,
    colorBackground: "white",
    colorUnderline: "black",
}

Input0.propTypes = 
{
    size: PropTypes.oneOf(["small", "medium", "large"]),
    textPlaceholder: PropTypes.string,
    colorBackground: PropTypes.string,
    colorText: PropTypes.string,
    colorPlaceholder: PropTypes.string,
    opacityPlaceholder: PropTypes.number,
    colorBorder: PropTypes.string,
    colorUnderline: PropTypes.string,
    keyPressEvent: PropTypes.func
}