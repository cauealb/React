import styled from "styled-components";


export const LayoutDeafult = styled.section`
    background-color: ${props => props.theme['--gray-700']};
    max-width: 22rem;
    margin: 2rem auto;
    height: calc(100vh - 4rem);
    padding: 0.80rem 0.60rem;
    border-radius: 1px;

    display: flex;
    flex-direction: column;
`;