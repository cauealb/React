import styled from "styled-components";

export const Header = styled.h1`
    color: ${props => props.theme['--gray-100']};
    font-size: 2.3rem;
    margin: 3rem 2rem 0 0;
`;

export const DivTable = styled.div`
    overflow: auto;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
`;

export const TableStyle = styled.table`
    font-size: 5rem;
    width: 100%;
    border-collapse: collapse;

    th{
        background-color: ${props => props.theme['--gray-600']};
        font-weight: bold;
        text-align: left;
        padding: 1.2rem;

        &:first-child{
            width: 50%;
            padding: 0 2%;
            border-top-left-radius: 8px;
        }

        &:last-child{
            border-top-right-radius: 8px;
        }
    }

    td {
        background-color: ${props => props.theme['--gray-600']};
        font-size: 1.2rem;
        padding: 1.6rem;
        border-top: 4px solid ${props => props.theme['--gray-700']}
    }
`;