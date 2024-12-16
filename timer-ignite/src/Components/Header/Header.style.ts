import styled from "styled-components";


export const LayoutHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 30px
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.8rem;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme['--gray-100']};
        border-bottom: 2px solid transparent;
        border-top: 2px solid transparent;

        &:hover {
            border-bottom: 2px solid ${props => props.theme['--green-500']};
        }

        &:active {
            color: ${props => props.theme['--green-500']}
        }
    }
`;