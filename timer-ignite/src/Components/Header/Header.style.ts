import styled from "styled-components";


export const LayoutHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        height: 7px
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.45rem;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 0.75rem;
        height: 0.75rem;
        color: ${props => props.theme['--gray-100']};
        border-bottom: 0.5px solid transparent;
        border-top: 0.5px solid transparent;

        &:hover {
            border-bottom: 0.5px solid ${props => props.theme['--green-500']}
        }
    }
`;