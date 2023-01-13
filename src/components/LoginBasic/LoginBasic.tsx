// import React, { useState } from 'react';
// import './LoginBasic.css';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import PropTypes from 'prop-types';
// import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';

// export const LoginBasic = (props: any) => {
//     var buttonOrientation: string = "button-login button-orientation-" + props.buttonOrientation;
//     var inputBorder: string = "solid " + props.inputBorderWidth + "px " + props.inputBorderColor;
//     var buttonBorder: string = "solid " + props.buttonBorderWidth + "px " + props.buttonBorderColor;
//     var labelFontSize: string = props.labelFontSize + "px";
//     document.documentElement.style.setProperty('--placeholder-font-size', props.placeholderFontSize + "px");
//     document.documentElement.style.setProperty('--placeholder-color', props.placeholderColor);
//     document.documentElement.style.setProperty('--help-text-username-color', props.helpTextUsernameColor);
//     document.documentElement.style.setProperty('--help-text-password-color', props.helpTextPasswordColor);
//     document.documentElement.style.setProperty('--eye-icon-color', props.eyeIconColor);
//     document.documentElement.style.setProperty('--button-hover-background-color', props.buttonHoverBackgroundColor);
//     document.documentElement.style.setProperty('--button-click-background-color', props.buttonClickBackgroundColor);

//     var usernameType = props.usernameType == 'username' ? 'text': 'email'

//     if(props.placeholderUsernameVisible) {
//         document.documentElement.style.setProperty('--placeholder-color-username', props.placeholderUsernameColor);
//     } else {
//         document.documentElement.style.setProperty('--placeholder-color-username', 'transparent');
//     }

//     if(props.placeholderPasswordVisible) {
//         document.documentElement.style.setProperty('--placeholder-color-password', props.placeholderPasswordColor);
//     } else {
//         document.documentElement.style.setProperty('--placeholder-color-password', 'transparent');
//     }


//     const [state, setstate] = useState(false);

//     const onSubmit = (event: any) => {
//         event.preventDefault();
//         const username = event.target.elements.username.value;
//         const password = event.target.elements.password.value; 
//         props.onSubmit({username: username, password: password});
//     }

//     const setHelpTextUsernameVisible = () => {
//         if(props.helpTextUsernameVisible){
//             return (<>
//                 <small 
//                     id="username-help-text"
//                     className="form-text text-muted">
//                     {props.helpTextUsername}
//                 </small>
//             </>)
//         }
//     }

//     const onClickEyeButton = () => {
//         setstate(prevState => !prevState);
//     }

//     const setHelpTextPasswordVisible = () => {
//         if(props.helpTextPasswordVisible){
//             return (<>
//                 <small 
//                     id="password-help-text" 
//                     className="form-text text-muted">
//                     {props.helpTextPassword}
//                 </small>
//             </>)
//         }
//     }

//     return (<>
//         <form onSubmit={onSubmit}>
//             <div className="form-group">
//                 <label 
//                     style={{
//                         color: props.labelTextColor,
//                         fontSize: labelFontSize}}>
//                     {props.labelUsername}
//                 </label>
//                 <input 
//                     type={usernameType}
//                     className="form-control" 
//                     aria-describedby="usernameHelp"
//                     name="username"
//                     id="input-username"
//                     placeholder={props.placeholderUsername}
//                     style ={{
//                         backgroundColor: props.inputBackgroundColor, 
//                         color: props.inputTextColor,
//                         border: inputBorder
//                     }}/>
//                 {setHelpTextUsernameVisible()}
//             </div>

//             <div className="form-group" id="form-group-password">
//                 <label
//                     style={{
//                         color: props.labelTextColor,
//                         fontSize: labelFontSize}}>
//                         {props.labelPassword}
//                 </label>
//                 <div className="input-element-wrapper">
//                     <input 
//                         type={state ? "text" : "password"} 
//                         className="form-control"
//                         name="password"
//                         id="input-password"
//                         aria-describedby="passwordHelp"
//                         placeholder={props.placeholderPassword}
//                         style ={{
//                             backgroundColor: props.inputBackgroundColor, 
//                             color: props.inputTextColor,
//                             border: inputBorder
//                         }}/>
//                     <button type="button" id="button-eye-icon" onClick={onClickEyeButton}>
//                         {state ? <AiOutlineEye id="eye-icon"/> : <AiOutlineEyeInvisible id="eye-icon"/>}
//                     </button>
//                 </div>
//                 {setHelpTextPasswordVisible()}
//             </div>

//             <button
//                 type="submit" 
//                 className={buttonOrientation}
//                 style={{
//                     color: props.buttonTextColor,
//                     background: props.buttonBackgroundColor,
//                     border: buttonBorder,
//                     fontSize: props.buttonFontSize
//                 }}>
//                 {props.textButton}
//             </button>
//         </form>
//     </>);
// }

// LoginBasic.defaultProps =
// {
//     labelUsername: 'Username',
//     helpTextUsernameVisible: true,
//     helpTextUsername: 'Enter your username here.',
//     helpTextUsernameColor: 'grey',
//     placeholderUsername: 'Enter username',
//     placeholderUsernameColor: 'grey',
//     placeholderFontSize: 15,
//     labelPassword: 'Password',
//     helpTextPasswordVisible: true,
//     helpTextPassword: 'Enter your password here.',
//     helpTextPasswordColor: 'grey',
//     placeholderPasswordVisible: true,
//     placeholderPasswordColor: 'grey',
//     textButton: 'Log in',
//     buttonOrientation: "center",
//     inputBackgroundColor: 'white',
//     inputTextColor: 'black',
//     labelTextColor: 'black',
//     buttonTextColor: 'black',
//     buttonBackgroundColor: 'white',
//     inputBorderColor: 'rgb(218, 220, 224)',
//     inputBorderWidth: 1,
//     buttonBorderColor: 'rgb(218, 220, 224)',
//     buttonFontSize: 15,
//     eyeIconColor: 'black',
//     usernameType: 'username',
//     buttonHoverBackgroundColor: 'rgb(230, 230, 230)',
//     buttonClickBackgroundColor: 'rgb(100, 100, 100)',
//     onSubmit: function () {},
// }

// LoginBasic.propTypes = 
// {
//     labelUsername: PropTypes.string,
//     helpTextUsername: PropTypes.string,
//     helpTextUsernameVisible: PropTypes.bool,
//     helpTextUsernameColor: PropTypes.string,
//     usernameType: PropTypes.oneOf(['email', 'username']),
//     placeholderUsername: PropTypes.string,
//     placeholderUsernameVisible: PropTypes.bool,
//     placeholderUsernameColor: PropTypes.string,
//     labelPassword: PropTypes.string,
//     helpTextPassword: PropTypes.string,
//     helpTextPasswordVisible: PropTypes.bool,
//     helpTextPasswordColor: PropTypes.string,
//     placeholderPassword: PropTypes.string,
//     placeholderPasswordVisible: PropTypes.bool,
//     placeholderFontSize: PropTypes.number,
//     placeholderPasswordColor: PropTypes.string,
//     textButton: PropTypes.string,
//     onSubmit: PropTypes.func,
//     buttonOrientation: PropTypes.oneOf(["center", "left", "right"]),
//     inputBackgroundColor: PropTypes.string,
//     inputTextColor: PropTypes.string,
//     labelTextColor: PropTypes.string,
//     labelFontSize: PropTypes.number,
//     buttonTextColor: PropTypes.string,
//     buttonBackgroundColor: PropTypes.string,
//     inputBorderColor: PropTypes.string,
//     inputBorderWidth: PropTypes.number,
//     buttonBorderColor: PropTypes.string,
//     buttonBorderWidth: PropTypes.number,
//     buttonFontSize: PropTypes.number,
//     eyeIconColor: PropTypes.string,
//     buttonHoverBackgroundColor: PropTypes.string,
//     buttonClickBackgroundColor: PropTypes.string
// }
