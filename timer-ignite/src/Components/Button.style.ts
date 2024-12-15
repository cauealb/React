import styled from "styled-components";

export type colorsButton = 'primary' | 'secound' | 'success' | 'danger';

interface BCProsp {
    bc: colorsButton;
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
    margin-right: 30px

    ${props => {
        return `background-color: ${colors[props.bc]}`
    }}
`

