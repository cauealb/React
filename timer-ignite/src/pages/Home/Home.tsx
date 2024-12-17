import { Play } from "phosphor-react";
import { PrincipalStyled, InputsStyled, StyleDurantion, StyledButton, Separator, StyledSpan, TaskInput, MinuteInput } from "./Home.style";

export function Home() {
    return (
            <>
                <PrincipalStyled>
                    <InputsStyled>
                        <label htmlFor="taks">Vou trabalhar em</label>
                        <TaskInput type="text" id="taks" placeholder="Dê um nome para seu projeto" required/>

                        <label htmlFor="duration">durante</label>
                        <MinuteInput type="number" id="duration" placeholder="00" required />

                        <span>minutos.</span>
                    </InputsStyled>

                    <StyleDurantion>
                        <StyledSpan>0</StyledSpan>
                        <StyledSpan>0</StyledSpan>
                        <Separator>:</Separator>
                        <StyledSpan>0</StyledSpan>
                        <StyledSpan>0</StyledSpan>
                    </StyleDurantion>

                    <StyledButton type="submit" disabled>
                        <Play size={24}/>
                        Começar
                    </StyledButton>
                </PrincipalStyled>
            </>
    ) 
}