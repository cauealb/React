import styled from "styled-components";


export const LayoutDeafult = styled.section`
    background-color: ${props => props.theme['--gray-700']};
    max-width: 118rem;
    margin: 5rem auto;
    height: calc(100vh - 10rem);
    padding: 3rem;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
`;