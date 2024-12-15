import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 62.5%;
    }

    :focus {
        outline: 0;
    }

    body {
        background-color: #333;
        background-color: ${props => props.theme['--gray-900']}
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        background-color: ${props => props.theme['--gray-800']};
        color: ${props => props.theme['--gray-300']}
    }
` 