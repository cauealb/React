import styled from "styled-components";


export const PrincipalStyled = styled.form`
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: auto;
    font-weight: bold;
`;


export const Separator = styled.span`
    background-color: transparent;
    color: ${props => props.theme['--green-500']};
`;

export const StyledSpan = styled.span`
        background-color: ${props => props.theme['--gray-600']};
        border-radius: 8px;
        padding: 1.6rem;
`;

export const StyleDurantion = styled.div`
    display: flex;
    align-self: center;
    width: fit-content;
    gap: 1.6rem;
    font-weight: "Roboto Mono", monospace;
    font-size: 20rem;
    margin: 3rem 0;
`;

export const BaseStyledButton = styled.button`
    padding: 2rem;
    display: flex;
    gap: 0.50rem;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 8px;
    font-size: 2rem;
    cursor: pointer;
    transition: background-color 0.2s linear;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`;

export const StartStyledButton = styled(BaseStyledButton)`
    background-color: ${props => props.theme['--green-500']};

    &:not(:disabled):hover {
        background-color: ${props => props.theme['--green-300']};
        color: ${props => props.theme['--gray-100']}
    }
`;

export const StopStyledButton = styled(BaseStyledButton)`
    background-color: ${props => props.theme['--red-700']};

    &:hover {
        background-color: ${props => props.theme['--red-500']};
        color: ${props => props.theme['--gray-100']}
    }
`;