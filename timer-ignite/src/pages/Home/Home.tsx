import { Play } from "phosphor-react";
import { PrincipalStyled, InputsStyled, StyleDurantion, StyledButton, Separator, StyledSpan } from "./Home.style";

export function Home() {
    return (
            <>
                <PrincipalStyled>
                    <InputsStyled>
                        <label htmlFor="taks">Vou trabalhar em</label>
                        <input type="text" id="taks" placeholder="Dê um nome para seu projeto" required/>

                        <label htmlFor="duration">durante</label>
                        <input type="text" id="duration" placeholder="- 00 +" required/>

                        <span>minutos.</span>
                    </InputsStyled>

                    <StyleDurantion>
                        <StyledSpan>0</StyledSpan>
                        <StyledSpan>0</StyledSpan>
                        <Separator>:</Separator>
                        <StyledSpan>0</StyledSpan>
                        <StyledSpan>0</StyledSpan>
                    </StyleDurantion>

                    <StyledButton type="submit">
                        <Play size={24}/>
                        Começar
                    </StyledButton>
                </PrincipalStyled>
            </>
    ) 
}