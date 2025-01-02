import { StyleDurantion, StyledSpan, Separator } from "./Countdown.s";

export function Countdown() {
    return (
        <>
            <StyleDurantion>
                <StyledSpan>{minutes[0]}</StyledSpan>
                <StyledSpan>{minutes[1]}</StyledSpan>
                <Separator>:</Separator>
                <StyledSpan>{seconds[0]}</StyledSpan>
                <StyledSpan>{seconds[1]}</StyledSpan>
            </StyleDurantion>
        </>
    )
}