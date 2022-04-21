import styled from "styled-components";
import {Button as PrimeButton} from 'primereact/button';
import * as colors from '../../colors/colors';
import {MdOutlineArrowBack} from 'react-icons/md';

const LightAButton = styled(PrimeButton)`
    position: relative;
    width: 100%;
    background-color: ${colors.colorLightAButton};
    cursor: pointer;
    border: none;
    font-size: 14px;
    color: ${colors.colorLightAText0};
    cursor: pointer;
    &:hover {background-color: ${colors.colorLightAButtonHighlight};}
`;

const LightASidebar = styled.div`
    background-color: ${colors.colorLightABackground0};

`;

const LightAIconGoBack = styled(MdOutlineArrowBack)`
    width: 30px;
    height: 30px;
    `

export const SidebarStyledComponents = (theme: any) => {
    const styles = {
        lightA: {
            Button: LightAButton,
            Sidebar: LightASidebar,
            IconGoBack: LightAIconGoBack,
        }
    }

    return (styles[theme]);
}
