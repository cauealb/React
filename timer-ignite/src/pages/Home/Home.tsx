import { Play } from "phosphor-react";
import { PrincipalStyled, InputsStyled, StyleDurantion, StyledButton, Separator, StyledSpan, TaskInput, MinuteInput } from "./Home.style";
import { useForm } from "react-hook-form";
import  * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const newCycleValidating = zod.object({
    task: zod.string().min(1, 'Informe a tarefa corretamente'),
    minute: zod.number().min(5, 'Valor menor que 5').max(60, 'Valor maior que 60'),
})

type NewFormCycle = zod.infer<typeof newCycleValidating>

interface Cycle {
    id: number,
    taskName: string,
    minute: number
}

export function Home() {

    const [cycles, setCycles] = useState<Cycle[]>([])
    const [isActive, setIsActive] = useState<number | null>(null)
    const [secondsComparesion, setSecondsComparesion] = useState(0)

    const {register, handleSubmit, watch, reset} = useForm<NewFormCycle>({
        resolver: zodResolver(newCycleValidating),
        defaultValues: {
            task: '',
            minute: 0
        }
    })

    const existCycle = cycles.find((idCycle) => idCycle.id === isActive)

    const totalSeconds = existCycle ? existCycle.minute * 60 : 0
    const secondCompare = existCycle ? totalSeconds - secondsComparesion : 0

    const minutesCompare = Math.floor(secondCompare / 60)
    const secondsCompare = secondCompare % 60

    const seconds = String(secondsCompare).padStart(2, '0')    
    const minutes = String(minutesCompare).padStart(2, '0')    

    console.log(existCycle)

    
    function SubmitfromServer(data: NewFormCycle){
        const newCycle: Cycle = {
            id: new Date().getTime(),
            taskName: data.task,
            minute: data.minute
        }
        
        setCycles((state) => [...state, newCycle])
        
        setIsActive(newCycle.id)
        
        reset()
    }
    
    const task = watch('task')
    const AsInvalid = !task
    
    // useEffect(() => {
    //     console.log('alterado!!!!!!!!!!!!')
    // }, [task])

    // useEffect(() => {
    //     console.log('Dados puxados do banco')
    // }, [])

    return (
            <>
                <PrincipalStyled onSubmit={handleSubmit(SubmitfromServer)}>
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
                            {...register('minute', { 
                                valueAsNumber: true
                            })}
                        />

                        <span>minutos.</span>
                    </InputsStyled>

                    <StyleDurantion>
                        <StyledSpan>{minutes[0]}</StyledSpan>
                        <StyledSpan>{minutes[1]}</StyledSpan>
                        <Separator>:</Separator>
                        <StyledSpan>{seconds[0]}</StyledSpan>
                        <StyledSpan>{seconds[1]}</StyledSpan>
                    </StyleDurantion>

                    <StyledButton type="submit" disabled={AsInvalid}>
                        <Play size={24}/>
                        Começar
                    </StyledButton>
                </PrincipalStyled>
            </>
    ) 
}