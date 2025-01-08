import { InputsStyled, TaskInput, MinuteInput } from "./InputForm.s";
import { useFormContext } from 'react-hook-form'
import { useContext } from "react";
import { CycleContext } from "../../../../Components/ContextAPI/ContextAPI";


export function InputForm() {
    const { isActive } = useContext(CycleContext)
    const { register } = useFormContext()

    return (
        <>
            <InputsStyled>
                        <label htmlFor="taks">Vou trabalhar em</label>
                        <TaskInput  
                            type="text" 
                            id="taks"  
                            list="DataList"
                            placeholder="Dê um nome para seu projeto" 
                            required
                            autoFocus
                            autoComplete="off"
                            disabled={!!isActive}
                            {...register('task')}
                        />

                        <datalist id="DataList">
                            <option value="Arrumar Quarto" />
                            <option value="Começar curso de node" />
                            <option value="Conversar com a gata" />
                            <option value="Treinar" />
                        </datalist>

                        <label htmlFor="duration">durante</label>
                        <MinuteInput 
                            type="number" 
                            id="duration" 
                            placeholder="00" 
                            required 
                            step={5}
                            min={5}
                            disabled={!!isActive}
                            {...register('minute', {    
                                valueAsNumber: true
                            })}
                        />

                        <span>minutos.</span>
                    </InputsStyled>
        </>
    )
}