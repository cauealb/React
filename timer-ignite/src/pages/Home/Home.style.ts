import styled from "styled-components";


export const PrincipalStyled = styled.form`
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: auto;
    font-weight: bold;
`;

export const InputsStyled = styled.div`
    font-size: 2.8rem;
    font-family: "Roboto";
    display: flex;
    align-self: center;
    gap: 0.75rem;
    color: ${props => props.theme['--gray-100']};

    input {
        border: none;
        background-color: transparent;
        border-bottom: 2px solid ${props => props.theme['--gray-400']};
        width: fit-content;
        font-size: 1rem;
    }
`;

export const StyleDurantion = styled.div`
    display: flex;
    align-self: center;
    width: fit-content;
    gap: 0.75rem;
    font-weight: "Roboto Mono", monospace;
    font-size: 23rem;
    margin: 2rem 0;

    span {
        background-color: ${props => props.theme['--gray-600']};
        border-radius: 8px;
        padding: 1.6rem
    }
`;


export const Separator = styled.span`

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


    &:hover {
        background-color: ${props => props.theme['--green-300']}
    }
`;