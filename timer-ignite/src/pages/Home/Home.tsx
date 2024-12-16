import { Play } from "phosphor-react";
import { PrincipalStyled, InputsStyled, StyleDurantion, StyledButton } from "./Home.style";

export function Home() {
    return (
            <>
                <PrincipalStyled>
                    <InputsStyled>
                        <label htmlFor="taks">Vou trabalhar em</label>
                        <input type="text" id="taks" placeholder="Dê um nome para seu projeto"/>

                        <label htmlFor="duration">durante</label>
                        <input type="text" id="duration" placeholder="- 00 +" />

                        <span>minutos.</span>
                    </InputsStyled>

                    <StyleDurantion>
                        <span>0</span>
                        <span>0</span>
                        <span>:</span>
                        <span>0</span>
                        <span>0</span>
                    </StyleDurantion>

                    <StyledButton type="submit">
                        <Play />
                        Começar
                    </StyledButton>
                </PrincipalStyled>
            </>
    ) 
}