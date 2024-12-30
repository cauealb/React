import { Play } from "phosphor-react";
import { PrincipalStyled, InputsStyled, StyleDurantion, StyledButton, Separator, StyledSpan, TaskInput, MinuteInput } from "./Home.style";
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

const configSubmitInputs = zod.object({
    task: zod.string().min(5, 'A tarefa tem quer no mínimo 5 carácteres'),
    minute: zod.number().min(5, 'Tempo menor que 5').max(60, 'Tempo maior que 60')
})

export function Home() {
    
    const {register, handleSubmit, watch} = useForm({
        resolver: zodResolver(configSubmitInputs)
    })

    function handleNewCreteTask(data: any){
        console.log(data)
    }

    const task = watch('task')
    const minute = watch('minute')
    const isSubmitInvalid = !task || !minute

    return (
            <>
                <PrincipalStyled onSubmit={handleSubmit(handleNewCreteTask)}>
                    <InputsStyled>
                        <label htmlFor="taks">Vou trabalhar em</label>
                        <TaskInput  
                            {...register('task')}
                            type="text" 
                            id="taks"  
                            list="DataList"
                            placeholder="Dê um nome para seu projeto" 
                            required
                            autoFocus
                            autoComplete="off"
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
                            // max={60}
                            {...register('minute', { valueAsNumber: true })}
                        />

                        <span>minutos.</span>
                    </InputsStyled>

                    <StyleDurantion>
                        <StyledSpan>0</StyledSpan>
                        <StyledSpan>0</StyledSpan>
                        <Separator>:</Separator>
                        <StyledSpan>0</StyledSpan>
                        <StyledSpan>0</StyledSpan>
                    </StyleDurantion>

                    <StyledButton type="submit" disabled={isSubmitInvalid}>
                        <Play size={24}/>
                        Começar
                    </StyledButton>
                </PrincipalStyled>
            </>
    ) 
}