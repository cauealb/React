import { Play } from "phosphor-react";
import { StyleForm } from "./Home.style";

export function Home() {
    return (
            <>
                <StyleForm>
                    <label htmlFor="taks">Vou trabalhar em</label>
                    <input type="text" id="taks" placeholder="Dê um nome para seu projeto"/>

                    <label htmlFor="duration">Durante</label>
                    <input type="text" id="duration" placeholder="- 00 +" />

                    <span>minutos.</span>

                    <div>
                        <span>0</span>
                        <span>0</span>
                        <span>:</span>
                        <span>0</span>
                        <span>0</span>
                    </div>

                    <button type="submit">
                        <Play />
                        Começar
                    </button>
                </StyleForm>
            </>
    ) 
}