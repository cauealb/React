import styled from "styled-components";
import { DefaultTheme } from "../Theme/default";

export type colorsButton = 'primary' | 'secound' | 'success' | 'danger';

interface BCProsp {
    variant: colorsButton;
}

const colors = {
    primary: 'blue',
    secound: 'black',
    success: 'green',
    danger: 'red'
}

export const ButtonComponents = styled.button<BCProsp>`
    width: 100px;
    height: 100px;
    margin-right: 30px;

    color: ${props => DefaultTheme.secound}
    
`

