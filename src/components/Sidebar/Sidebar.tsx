// import React from "react";
// import PropTypes from "prop-types";
// // import {SidebarStyledComponents} from "./SidebarStyle";

// export const Sidebar = (props: any) => {
//     const Styled = SidebarStyledComponents(props.theme);
//     const createButtons = (button: any) => {
//         return (
//             <Styled.Button style={{height: props.buttonHeight}} onClick={() => button.func()}>
//                 {button.text}
//             </Styled.Button>
//         );
//     }

//     return(
//         <Styled.Sidebar style={{width: props.width, height: props.height}}>
//             {props.buttonGoBack ? 
//                 <Styled.Button style={{height: props.buttonHeight}}>
//                     <Styled.IconGoBack></Styled.IconGoBack>
//                 </Styled.Button>
//             : null}
//             {props.buttonList.map((button: any) => createButtons(button))}
//         </Styled.Sidebar>
//     );
// };

// Sidebar.defaultProps = {
//     theme: "lightA",
//     width: "200px",
//     height: "700px",
//     buttonHeight: "50px",
//     buttonList: [{text: "Button 1", func: ()=>{console.log("Button 1 clicked")}}],
//     buttonGoBack: true,
//     goBackFunc: function(){console.log("Click on Go Back button")}
// }

// Sidebar.propTypes = {
//     theme: PropTypes.string,
//     width: PropTypes.string,
//     height: PropTypes.string,
//     buttonHeight: PropTypes.string,
//     buttonList: PropTypes.array,
//     goBackButton: PropTypes.bool,
//     goBackFunc: PropTypes.func
// }


