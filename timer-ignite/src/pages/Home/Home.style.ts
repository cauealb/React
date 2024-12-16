import styled from "styled-components";


export const PrincipalStyled = styled.form`
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: auto;
    font-weight: bold;
`;

export const InputsStyled = styled.div`
    font-size: 2.4rem;
    font-family: "Roboto";
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    color: ${props => props.theme['--gray-100']};

    input {
        border: none;
        background-color: transparent;
        border-bottom: 2px solid ${props => props.theme['--gray-400']};
        width: fit-content;
        padding: 0.50rem;
        font-size: 1.4rem;
    }
`;

export const Separator = styled.span`
    background-color: transparent;
    color: ${props => props.theme['--green-500']};
    margin: 0 1rem;
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
    gap: 2rem;
    font-weight: "Roboto Mono", monospace;
    font-size: 23rem;
    margin: 2rem 0;

`;

export const StyledButton = styled.button`
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    background-color: ${props => props.theme['--green-500']};
    border: none;
    border-radius: 8px;
    font-size: 2rem;
    cursor: pointer;
    transition: background-color 0.2s linear;


    &:hover {
        background-color: ${props => props.theme['--green-300']};
        color: ${props => props.theme['--gray-100']}
    }
`;

export const InputTrascription = styled.input`
    background-color: yellow;
`;