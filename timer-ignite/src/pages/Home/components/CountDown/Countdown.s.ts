import styled from "styled-components";

export const StyleDurantion = styled.div`
    display: flex;
    align-self: center;
    width: fit-content;
    gap: 1.6rem;
    font-weight: "Roboto Mono", monospace;
    font-size: 20rem;
    margin: 3rem 0;
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