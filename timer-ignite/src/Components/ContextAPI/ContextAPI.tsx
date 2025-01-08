import { createContext, ReactNode, useState } from "react";

interface NewTaskCreate {
    task: string
    minute: number
}

interface Cycle {
    id: number,
    taskName: string,
    minute: number,
    start: Date,
    stopDate?: Date,
    finishDate?: Date
}

interface CyclesContext {
    cycles: Cycle[]
    existCycle: Cycle | undefined
    isActive: number | null
    secondsComparesion: number
    markCycleFinished: () => void
    setChangingSeconds: (seconds: number) => void,
    StopCycle: () => void,
    SubmitfromServer: (data: NewTaskCreate) => void
}

export const CycleContext = createContext({} as CyclesContext)

interface ContextAPIProviderProps {
    children: ReactNode;
}

export function ContextAPIProvider({children}: ContextAPIProviderProps) {
    const [cycles, setCycles] = useState<Cycle[]>([])
    const [isActive, setIsActive] = useState<number | null>(null)
    const [secondsComparesion, setSecondsComparesion] = useState(0)

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

    function setChangingSeconds(seconds: number) {
        setSecondsComparesion(seconds) 
    }

    function SubmitfromServer(data: NewTaskCreate){
        const newCycle: Cycle = {
            id: new Date().getTime(),
            taskName: data.task,
            minute: data.minute,
            start: new Date()
        }
        
        setCycles((state) => [...state, newCycle])
        setIsActive(newCycle.id)
        setChangingSeconds(0)
        
        // reset()
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

    return (
        <CycleContext.Provider 
            value={{
                cycles,
                existCycle, 
                isActive, 
                secondsComparesion, 
                markCycleFinished, 
                setChangingSeconds,
                StopCycle,
                SubmitfromServer
            }}>

            {children}
        </CycleContext.Provider>
    )
}