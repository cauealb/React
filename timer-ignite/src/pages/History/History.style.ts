import styled from "styled-components";

export const Header = styled.h1`
    color: ${props => props.theme['--gray-100']};
    font-size: 3rem;
`;

export const DivTable = styled.div`
    overflow: auto;
    margin-top: 2rem;
`;

export const TableStyle = styled.table`
    font-size: 5rem;
    width: 100%;
    border-collapse: collapse;

    th{
        background-color: ${props => props.theme['--gray-600']};
        font-weight: bold;
        text-align: left;
        padding: 1.6rem;

        &:first-child{
            width: 50%;
            border-top-left-radius: 8px
        }

        &:last-child{
            border-top-right-radius: 8px
        }
    }
`;