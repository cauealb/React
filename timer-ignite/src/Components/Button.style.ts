import styled from "styled-components";

export type colorsButton = 'primary' | 'secound' | 'success' | 'danger';

interface BCProsp {
    variant: colorsButton;
}

export const ButtonComponents = styled.button<BCProsp>`
    width: 100px;
    height: 100px;
    margin-right: 10px;
    border-radius: 8px;
    border: none;
    color: ${props => props.theme.secound}
`

