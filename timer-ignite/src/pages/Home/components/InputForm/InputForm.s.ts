import styled from "styled-components";

const BaseInput = styled.input`
    border: none;
    background-color: transparent;
    border-bottom: 2px solid ${props => props.theme['--gray-400']};
    padding: 0.50rem;
    font-size: 1.6rem;
    margin: 0;

    &:focus {
        border-bottom: 2px solid ${props => props.theme['--green-500']};
    }

    &::placeholder {
        font-weight: bold;
    }
`;

export const InputsStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.6rem;
    font-family: "Roboto" sans-serif;
    text-align: center;
    gap: 0.75rem;
    color: ${props => props.theme['--gray-100']};
`;

export const MinuteInput = styled(BaseInput)`
    width: 5rem;
`; 

export const TaskInput = styled(BaseInput)`
    flex: 1;

    &::-webkit-calendar-picker-indicator{
        display: none !important;
    }
`; 