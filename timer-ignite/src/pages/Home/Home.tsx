import { Pause, Play } from "phosphor-react";
import { PrincipalStyled, InputsStyled, StyleDurantion, StartStyledButton, StopStyledButton, Separator, StyledSpan, TaskInput, MinuteInput } from "./Home.style";
import { useForm } from "react-hook-form";
import  * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { differenceInSeconds } from 'date-fns'

const newCycleValidating = zod.object({
    task: zod.string().min(1, 'Informe a tarefa corretamente'),
    minute: zod.number().min(5, 'Valor menor que 5').max(60, 'Valor maior que 60'),
})

type NewFormCycle = zod.infer<typeof newCycleValidating>

interface Cycle {
    id: number,
    taskName: string,
    minute: number,
    start: Date,
    stopDate?: Date
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

    useEffect(() => {
        let interval: number

        if (existCycle) {
            interval = setInterval(() => {
                setSecondsComparesion(differenceInSeconds(new Date(), existCycle.start))
            }, 1000)
        }

        return () => {
            clearInterval(interval)        
            setSecondsComparesion(0)
        }
    }, [existCycle])

    const totalSeconds = existCycle ? existCycle.minute * 60 : 0
    const secondCompare = existCycle ? totalSeconds - secondsComparesion : 0

    const minutesCompare = Math.floor(secondCompare / 60)
    const secondsCompare = secondCompare % 60

    const seconds = String(secondsCompare).padStart(2, '0')    
    const minutes = String(minutesCompare).padStart(2, '0')    

    useEffect(() => {
        if (existCycle){
            document.title = `${minutes}:${seconds}`
        }
    }, [seconds, minutes])

    
    function SubmitfromServer(data: NewFormCycle){
        const newCycle: Cycle = {
            id: new Date().getTime(),
            taskName: data.task,
            minute: data.minute,
            start: new Date()
        }
        
        setCycles((state) => [...state, newCycle])
        setIsActive(newCycle.id)
        
        reset()
    }

    function StopCycle() {
        cycles.map((item) => {
            if (item.id === isActive){
                return {...cycles, stopDate: new Date()}
            } else {
                return cycles
            }
        })
        setIsActive(null)
    }
    
    const task = watch('task')
    const AsInvalid = !task

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

                    <StyleDurantion>
                        <StyledSpan>{minutes[0]}</StyledSpan>
                        <StyledSpan>{minutes[1]}</StyledSpan>
                        <Separator>:</Separator>
                        <StyledSpan>{seconds[0]}</StyledSpan>
                        <StyledSpan>{seconds[1]}</StyledSpan>
                    </StyleDurantion>

                    {isActive ? (
                        <StopStyledButton onClick={StopCycle} type="button">
                            <Pause size={24}/>
                            Interromper
                        </StopStyledButton>
                    ) : (
                        <StartStyledButton type="submit" disabled={AsInvalid}>
                            <Play size={24}/>
                            Começar
                        </StartStyledButton>
                    )}
                </PrincipalStyled>
            </>
    ) 
}