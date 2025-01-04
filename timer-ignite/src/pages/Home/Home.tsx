import { Pause, Play } from "phosphor-react";
import { PrincipalStyled, StartStyledButton, StopStyledButton } from "./Home.style";
import { useForm } from "react-hook-form";
import  * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, createContext } from "react";
import { differenceInSeconds } from 'date-fns'
import { Countdown } from "./components/CountDown/Countdown";
import { InputForm } from "./components/InputForm/InputForm";


interface CyclesContext {
    existCycle: Cycle | undefined,
    markCycleFinished: () => void
}

export const CyclesContextAPI = createContext({} as CyclesContext)

const newCycleValidating = zod.object({
    task: zod.string().min(1, 'Informe a tarefa corretamente'),
    minute: zod.number().min(1, 'Valor menor que 5').max(60, 'Valor maior que 60'),
})

type NewFormCycle = zod.infer<typeof newCycleValidating>

interface Cycle {
    id: number,
    taskName: string,
    minute: number,
    start: Date,
    stopDate?: Date,
    finishDate?: Date
}

export function Home() {

    const [cycles, setCycles] = useState<Cycle[]>([])
    const [isActive, setIsActive] = useState<number | null>(null)

    const {register, handleSubmit, watch, reset} = useForm<NewFormCycle>({
        resolver: zodResolver(newCycleValidating),
        defaultValues: {
            task: '',
            minute: 0
        }
    })
    
    const existCycle = cycles.find((idCycle) => idCycle.id === isActive)

    function markCycleFinished() {
        setCycles(
            cycles.map((item) => {
            if (item.id === isActive){
                return {...item, finishDate: new Date()}
            } else {
                return item
            }
        }))
    }

    
    function SubmitfromServer(data: NewFormCycle){
        const newCycle: Cycle = {
            id: new Date().getTime(),
            taskName: data.task,
            minute: data.minute,
            start: new Date()
        }
        
        setCycles((state) => [...state, newCycle])
        setIsActive(newCycle.id)
        setSecondsComparesion(0)
        
        reset()
    }

    function StopCycle() {
        cycles.map((item) => {
            if (item.id === isActive){
                return {...item, stopDate: new Date()}
            } else {
                return item
            }
        })
        setIsActive(null)
    }
    
    const task = watch('task')
    const AsInvalid = !task

    return (
            <>
                <CyclesContextAPI.Provider value={{existCycle, markCycleFinished}}>
                    <PrincipalStyled onSubmit={handleSubmit(SubmitfromServer)}>

                        <InputForm />
                        <Countdown />

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
                </CyclesContextAPI.Provider>
            </>
    ) 
}